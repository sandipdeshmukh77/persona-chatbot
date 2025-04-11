import React from 'react';
import LoadingIndicator from './LoadingIndicator';

export default function MessageList({ messages, personas, isLoading, selectedPersona, messagesEndRef }) {
    return (
        <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto">
                {messages.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        <p>Start a conversation with the {personas[selectedPersona].name}!</p>
                    </div>
                ) : (
                    messages.map((message, index) => (
                        <div key={index} className={`mb-4 ${message.role === 'system' ? 'text-center' : ''}`}>
                            {message.role === 'system' ? (
                                <div className="bg-gray-100 inline-block px-3 py-1 rounded-full text-sm text-gray-600">
                                    {message.content}
                                </div>
                            ) : (
                                <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-3xl px-4 py-3 rounded-lg ${message.role === 'user'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white border border-gray-200'
                                            }`}
                                    >
                                        {message.role === 'assistant' && (
                                            <div className="text-sm text-gray-500 mb-1">
                                                {personas[message.persona || selectedPersona].avatar} {personas[message.persona || selectedPersona].name}
                                            </div>
                                        )}
                                        <div className="whitespace-pre-line">{message.content}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
                {isLoading && <LoadingIndicator persona={personas[selectedPersona]} />}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}