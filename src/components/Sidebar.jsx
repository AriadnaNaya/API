import React from 'react'
import { MenuSection } from './MenuSection'

export const Sidebar = ({ sections }) => (
    <aside className="w-72 p-6 border-r border-gray-800 overflow-y-auto hidden md:block">
        {sections.map((section, index) => (
            <MenuSection key={index} section={section} isMobile={false} />
        ))}
    </aside>
)
