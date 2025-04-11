# Persona-based LLM Chatbot

A React application that simulates a language model chatbot with switchable personas. Users can select different chatbot personalities to interact with, each providing responses in a unique style.



## Features

- 🎭 Multiple chatbot personas
- 💬 Interactive chat interface
- ⚡ Real-time persona switching
- 📝 Context-aware responses
- 📱 Responsive design for all devices

## Project Structure

```
src/
├── App.jsx                      # Main application entry point
├── components/
│   ├── PersonaChatbot.jsx       # Main chatbot container component
│   ├── ChatHeader.jsx           # Header with persona selector
│   ├── PersonaInfo.jsx          # Displays current persona information
│   ├── MessageList.jsx          # Renders the conversation
│   ├── LoadingIndicator.jsx     # Typing animation during replies
│   └── ChatInput.jsx            # Message input form
├── data/
│   └── personas.js              # Persona definitions and metadata
└── utils/
    └── responseGenerator.js     # Logic for generating persona-specific responses
```

## Getting Started

### Prerequisites

- Node.js (v14.0 or newer)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sandipdeshmukh77/persona-chatbot.git
cd persona-chatbot
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Customizing Personas

You can add or modify personas by editing the `src/data/personas.js` file:

```javascript
export const personas = {
  myNewPersona: {
    name: "My New Persona",
    description: "Description of this persona.",
    systemPrompt: "System prompt that would be sent to the LLM API.",
    avatar: "🧙‍♂️" // Emoji representing this persona
  },
  // ... other personas
};
```


## Styling Customization

The project uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying class names directly in component files
2. Creating a custom theme in your Tailwind configuration
3. Adding additional CSS in a separate stylesheet

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


