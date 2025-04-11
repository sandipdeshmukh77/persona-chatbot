import React from 'react';

export default function PersonaInfo({ persona }) {
    return (
        <div className="bg-blue-50 border-b border-blue-100 p-3">
            <div className="max-w-4xl mx-auto flex items-center space-x-3">
                <div className="text-3xl">{persona.avatar}</div>
                <div>
                    <h2 className="font-medium">{persona.name}</h2>
                    <p className="text-sm text-gray-600">{persona.description}</p>
                </div>
            </div>
        </div>
    );
}