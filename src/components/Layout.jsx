import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center">
            <main className="w-full max-w-4xl">{children}</main>
        </div>
    )
}