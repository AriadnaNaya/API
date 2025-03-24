import React from 'react';

export const Header = ({ contact }) => {
    return (
        <header className="w-full flex justify-between items-center p-4 border-b border-gray-600">
            <h1 className="text-2xl font-bold text-white">Sushi Town</h1>

            <div className="flex items-center space-x-4 text-white">
                <span>📍 {contact.address}</span>
                <span>📞 {contact.phone}</span>
            </div>
        </header>
    );
};
