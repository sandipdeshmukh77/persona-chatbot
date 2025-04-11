import { GoogleGenAI } from "@google/genai";

import { personas } from "../data/personas";



// Initialize an empty history array outside the function
let history = [];
let chat; // To store the chat instance

export const generateResponse = async ({ currentInput, selectedPersona }) => {
    // console.log("personaData", personas[selectedPersona]["systemPrompt"]);
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const ai = new GoogleGenAI({ apiKey: apiKey });
    try {
        // Create the chat instance only if it doesn't exist yet
        if (!chat) {
            chat = ai.chats.create({
                model: "gemini-2.0-flash",
                history: history,
                config: {
                    systemInstruction: personas[selectedPersona]["systemPrompt"],
                    maxOutputTokens: 500,
                    temperature: 0.3,
                }
            });
        }

        // Add the user's message to the history
        history.push({
            role: "user",
            parts: [{ text: currentInput }],
        });

        // Send the message using the existing chat instance
        const result = await chat.sendMessage({ message: currentInput });
        const responseText = await result.text;

        // Add the model's response to the history
        history.push({
            role: "model",
            parts: [{ text: responseText }],
        });

        return responseText;
    } catch (error) {
        console.error("Error calling OpenAI:", error);
        return "Sorry, I encountered an error. Please try again.";
    }
};
