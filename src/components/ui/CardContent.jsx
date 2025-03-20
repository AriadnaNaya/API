import React from 'react'
import { cn } from '@/lib/utils'

export const CardContent = ({ className, children, ...props }) => {
    return (
        <div className={cn('p-4', className)} {...props}>
            {children}
        </div>
    )
}
