import { useState, useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import PersonaInfo from './PersonaInfo';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { personas } from '../data/personas';
import { generateResponse } from '../utils/responseGenerator';

export default function PersonaChatbot() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPersona, setSelectedPersona] = useState('persona1'); // Default persona
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Scroll to bottom whenever messages change
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') return;

        // Add user message to chat
        const userMessage = { role: 'user', content: inputValue };
        setMessages(prev => [...prev, userMessage]);

        const currentInput = inputValue;
        setInputValue('');
        setIsLoading(true);

        try {
            // In a real implementation, this is where you would make an API call to your LLM service
            // Simulating API call with setTimeout
            setTimeout(() => {
                // Generate response based on the selected persona
                const botResponse = generateResponse({ currentInput, selectedPersona });

                // Add assistant response to chat
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: botResponse,
                    persona: selectedPersona
                }]);

                setIsLoading(false);
            }, 1000);

        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
                persona: selectedPersona
            }]);
            setIsLoading(false);
        }
    };

    const handlePersonaChange = (e) => {
        setSelectedPersona(e.target.value);
        console.log('Selected persona:', e.target.value);


        // Add a system message when changing personas
        setMessages(prev => [
            ...prev,
            {
                role: 'system',
                content: `Switching to ${personas[e.target.value].name} persona.`
            }
        ]);
    };

    const clearChat = () => {
        setMessages([]);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <ChatHeader
                selectedPersona={selectedPersona}
                personas={personas}
                handlePersonaChange={handlePersonaChange}
                clearChat={clearChat}
            />

            <PersonaInfo
                persona={personas[selectedPersona]}
            />

            <MessageList
                messages={messages}
                personas={personas}
                isLoading={isLoading}
                selectedPersona={selectedPersona}
                messagesEndRef={messagesEndRef}
            />

            <ChatInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSendMessage={handleSendMessage}
                isLoading={isLoading}
            />
        </div>
    );
}