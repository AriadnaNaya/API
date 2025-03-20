import React from 'react'
import { cn } from '@/lib/utils'

export const CardHeader = ({ className, children, ...props }) => {
    return (
        <div className={cn('border-b border-gray-700 p-4', className)} {...props}>
            {children}
        </div>
    )
}
