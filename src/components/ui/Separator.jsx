import React from 'react'

export const Separator = ({ className = '', ...props }) => {
    return <hr className={`border-gray-700 ${className}`} {...props} />
}
