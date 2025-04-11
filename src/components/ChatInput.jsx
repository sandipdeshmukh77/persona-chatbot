import React from 'react';

export default function ChatInput({ inputValue, setInputValue, handleSendMessage, isLoading }) {
    return (
        <div className="border-t bg-white p-4">
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message here..."
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || inputValue.trim() === ''}
                        className={`bg-blue-600 text-white px-4 py-2 rounded-lg font-medium ${isLoading || inputValue.trim() === ''
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-blue-700'
                            }`}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}