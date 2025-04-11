import React from 'react';

export default function ChatHeader({ selectedPersona, personas, handlePersonaChange, clearChat }) {
    return (
        <div className="bg-white shadow p-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold">Persona Chatbot</h1>
                    <a
                        href="https://github.com/sandipdeshmukh77/persona-chatbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
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