import React from 'react';

export default function LoadingIndicator({ persona }) {
    return (
        <div className="flex justify-start mb-4">
            <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg">
                <div className="flex space-x-2 items-center">
                    <div className="text-xl">{persona.avatar}</div>
                    <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}