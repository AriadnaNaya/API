import React from 'react'
import { Sparkles } from 'lucide-react'

export const MenuItem = ({ item }) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="text-md font-medium text-white">{item.name}</h3>
                <span className="text-gray-300">${item.price.toLocaleString('es-AR')}</span>
            </div>
            {item.description && (
                <p className="text-sm text-gray-400">{item.description}</p>
            )}
            {item.sizes && (
                <div className="flex gap-2 text-xs text-gray-400">
                    {item.sizes.map((size, index) => (
                        <span key={index}>{size}</span>
                    ))}
                </div>
            )}
            {item.variations && (
                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    {item.variations.map((variation, index) => (
                        <span key={index}>{variation}</span>
                    ))}
                </div>
            )}
            {item.base && <p className="text-xs text-gray-400">{item.base}</p>}
            {item.quantity && <p className="text-xs text-gray-400">Cantidad: {item.quantity}</p>}
            {item.soyPaper && (
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
          <Sparkles className="mr-1.5 h-2 w-2" />
          Soy Paper
        </span>
            )}
        </>
    )
}
