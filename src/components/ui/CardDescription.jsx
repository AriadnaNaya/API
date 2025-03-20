import React from 'react'

export const CardDescription = ({ children, className = '', ...props }) => {
    return (
        <p className={`text-sm text-gray-400 ${className}`} {...props}>
            {children}
        </p>
    )
}
