import React, { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { Header } from './Header';
import { MobileDrawer } from './MobileDrawer';
import { Footer } from './Footer';
import { menuData } from '../data/menuData.js';
import MenuSection from './MenuSection';

export const SushiTownMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout>
            <Header contact={menuData.contact} onMenuToggle={() => setIsMobileMenuOpen(true)} />

            <div className="menu-container">
                {menuData.sections.map((section, index) => (
                    <MenuSection key={index} title={section.title} items={section.items} />
                ))}
            </div>

            <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <Footer />
        </Layout>
    );
};
