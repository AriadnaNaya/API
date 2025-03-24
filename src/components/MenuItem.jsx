import React from 'react';

const MenuItem = ({ nombre, descripcion, precio }) => {
    return (
        <div className="flex justify-between items-start py-4 border-b border-gray-700">
            <div className="max-w-xl pr-4">
                <h3 className="text-lg font-semibold text-white tracking-wide uppercase">
                    {nombre}
                </h3>
                {descripcion && (
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                        {descripcion}
                    </p>
                )}
            </div>
            <div className="text-right min-w-[80px]">
                {typeof precio === 'number' ? (
                    <span className="text-sm font-bold text-white whitespace-nowrap">
                ${precio.toLocaleString('es-AR')}
                    </span>
                ) : (
                    <span className="text-sm text-red-400">Precio no disponible</span>
                )}
            </div>
        </div>
    );
};

export default MenuItem;
