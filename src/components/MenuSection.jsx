import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MenuItem from './MenuItem';
import { cn } from '@/lib/utils';

const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const MenuSection = ({ title, items, isMobile }) => {
    const [isOpen, setIsOpen] = useState(!isMobile);

    return (
        <div className="menu-section w-full">
            <Button
                variant="ghost"
                className={cn(
                    'w-full flex items-center justify-between py-3 px-4 text-lg font-semibold text-white hover:text-gray-300',
                    isMobile && 'border-b border-gray-500'
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuItemVariants}
                        className="menu-items w-full px-4"
                    >
                        {items.map((item, index) => (
                            <MenuItem
                                key={index}
                                nombre={item.nombre}
                                descripcion={item.descripcion}
                                precio={item.precio}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MenuSection;
