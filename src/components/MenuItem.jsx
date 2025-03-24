import React from 'react';

const MenuItem = ({ nombre, descripcion, precio }) => {
    return (
        <div className="menu-item flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-300 w-full">
            <div className="flex-1 pr-4">
                <h3 className="text-lg font-semibold text-white tracking-wide">
                    {nombre}
                </h3>
                {descripcion && (
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                        {descripcion}
                    </p>
                )}
            </div>
            <div className="text-right text-white font-bold min-w-[100px] sm:min-w-[120px] sm:text-lg">
                {typeof precio === 'number' ? (
                    <span>${precio.toLocaleString('es-AR')}</span>
                ) : (
                    <span className="text-red-500">Precio no disponible</span>
                )}
            </div>
        </div>
    );
};

export default MenuItem;
