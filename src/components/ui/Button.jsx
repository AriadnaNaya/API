import React from 'react'
import { cn } from '@/lib/utils'

export const Button = React.forwardRef(({ variant = 'default', className, children, ...props }, ref) => {
    const baseClasses = 'px-4 py-2 rounded focus:outline-none'
    const variantClasses = {
        ghost: 'bg-transparent hover:bg-gray-700',
        default: 'bg-gray-800 hover:bg-gray-700'
    }

    return (
        <button ref={ref} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
            {children}
        </button>
    )
})
Button.displayName = 'Button'
