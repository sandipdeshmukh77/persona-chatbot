import React from 'react';

export default function ChatHeader({ selectedPersona, personas, handlePersonaChange, clearChat }) {
    return (
        <div className="bg-white shadow p-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Persona Chatbot</h1>
                <div className="flex items-center space-x-2">
                    <label htmlFor="persona" className="text-sm font-medium">Chatbot Persona:</label>
                    <select
                        id="persona"
                        value={selectedPersona}
                        onChange={handlePersonaChange}
                        className="border rounded p-2 text-sm"
                    >
                        {Object.entries(personas).map(([key, persona]) => (
                            <option key={key} value={key}>
                                {persona.avatar} {persona.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={clearChat}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded text-sm"
                    >
                        Clear Chat
                    </button>
                </div>
            </div>
        </div>
    );
}