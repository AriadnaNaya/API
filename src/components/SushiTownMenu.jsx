import React, { useState, useEffect } from 'react'
import { Layout } from './Layout'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { MobileDrawer } from './MobileDrawer'
import { Footer } from './Footer'
import {menuData} from '../data/menuData.js'
import MenuItem from './MenuItem';



export const SushiTownMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768)
        checkIsDesktop()
        window.addEventListener('resize', checkIsDesktop)
        return () => window.removeEventListener('resize', checkIsDesktop)
    }, [])

    return (
        <Layout>
            <Header contact={menuData.contact} onMenuToggle={() => setIsMobileMenuOpen(true)} />
            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                sections={menuData.sections}
            />
            <div className="flex-1 flex flex-col md:flex-row">
                {isDesktop && <Sidebar sections={menuData.sections} />}
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="mb-8 text-sm text-gray-400 border-b border-gray-800 pb-4">
                        Estamos comprometidos con tu bienestar. Si tienes alguna alergia, avísanos ya que no todos los ingredientes están listados. El valor del cubierto es de $2.800 e incluye nuestro servicio de mesa y el agua con y sin gas.
                    </div>
                    {menuData.sections.map(seccion => (
                        <section key={seccion.nombre} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-100 mb-4">{seccion.nombre}</h2>
                            <div className="space-y-4">
                                {seccion.items.map(item => (
                                    <MenuItem
                                        key={item.nombre}
                                        nombre={item.nombre}
                                        descripcion={item.descripcion}
                                        precio={item.precio}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
            </div>
            <Footer />
        </Layout>
    )
}
