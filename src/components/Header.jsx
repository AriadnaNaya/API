import React from 'react'
import { MapPin, Phone, Menu } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const Header = ({ contact, onMenuToggle }) => {
    return (
        <header className="py-4 px-6 md:px-10 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-white">Sushi Town</span>
                <div className="hidden md:flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-400" />
              {contact.location}
          </span>
                    <span className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-gray-400" />
                        {contact.phone1} / {contact.phone2}
          </span>
                </div>
            </div>
            <div className="md:hidden">
                <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white"
                    onClick={onMenuToggle}
                >
                    <Menu className="w-6 h-6" />
                </Button>
            </div>
        </header>
    )
}
