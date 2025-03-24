import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import MenuItem from './MenuItem';
import { cn } from '@/lib/utils'

const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
}

export const MenuSection = ({ section, isMobile }) => {
    const [isOpen, setIsOpen] = useState(!isMobile)

    return (
        <div className="mb-6">
            <Button
                variant="ghost"
                className={cn(
                    'w-full flex items-center justify-between py-2 px-0 text-lg font-semibold text-gray-200 hover:text-white',
                    isMobile && 'border-b border-gray-700'
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                {section.title}
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </Button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { height: 0, opacity: 0 },
                            visible: {
                                height: 'auto',
                                opacity: 1,
                                transition: {
                                    height: { duration: 0.4, type: 'spring', stiffness: 100 },
                                    opacity: { duration: 0.2 }
                                }
                            },
                            exit: { height: 0, opacity: 0, transition: { duration: 0.3 } }
                        }}
                        className="space-y-4"
                    >
                        {section.items.map((item, index) => (
                            <motion.div key={index} variants={menuItemVariants} className="space-y-1">
                                <MenuItem
                                    nombre={item.nombre}
                                    descripcion={item.descripcion}
                                    precio={item.precio}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
