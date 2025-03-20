import React from 'react'
import { cn } from '@/lib/utils'

export const Card = ({ className, children, ...props }) => {
    return (
        <div className={cn('bg-gray-800 border border-gray-700 rounded shadow', className)} {...props}>
            {children}
        </div>
    )
}
