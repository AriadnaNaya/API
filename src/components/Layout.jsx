import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col">
            {children}
        </div>
    )
}
