import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MenuSection } from './MenuSection'

export const MobileDrawer = ({ isOpen, onClose, sections }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={onClose}
            >
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="bg-gray-900 w-80 h-full overflow-y-auto p-6 z-50 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="absolute top-4 right-4">
                        <Button
                            variant="ghost"
                            className="text-gray-300 hover:text-white"
                            onClick={onClose}
                        >
                            <XCircle className="w-6 h-6" />
                        </Button>
                    </div>
                    <div className="mt-12 space-y-4">
                        {sections.map((section, index) => (
                            <MenuSection key={index} section={section} isMobile={true} />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
)
