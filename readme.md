# GPT Teaching Assistant for DSA Problems

## Project Overview

This project is a chat application that acts as a teaching assistant for data structures and algorithms (DSA) problems. Users can submit LeetCode problem links and their specific doubts to receive guidance from a GPT-based assistant.

## Setup Instructions

### Frontend

1. Clone the repository: `git clone https://github.com/AbhinavGupta-de/GPT-Teaching-Assistant.git`
2. Navigate to the frontend directory: `cd client`
3. Install dependencies: `npm install`
4. Run the application: `npm run dev`

### Backend

1. Navigate to the backend directory: `cd backend`
2. Build the project: `./mvnw clean install`
3. Run the application: `./mvnw spring-boot:run`

## Architecture Explanation

- **Frontend**: Built with Vite, React, TypeScript, and Tailwind CSS. It provides a user-friendly chat interface. I chose Vite for its fast build times and React for its component-based architecture. TypeScript was used to catch errors early in the development process, and Tailwind CSS was used to style the application.

```
frontend/
├── public/
│   ├── ... (other static assets, such as favicons, manifest files, etc.)
├── src/
│   ├── assets/
│   │   ├── ... (images, icons, and other static assets used throughout the application)
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.tsx  // Main header component of the application
│   │   │   ├── ... (other header-related components, such as navigation, logo, etc.)
│   │   ├── Home/
│   │   │   ├── ChatWindow.tsx  // Component for displaying the chat window
│   │   │   ├── Message.tsx  // Component for individual messages in the chat
│   │   │   ├── SendMessageForm.tsx  // Component for the form to send messages
│   ├── pages/
│   │   ├── About.tsx  // About page of the application
│   │   ├── Contact.tsx  // Contact page of the application
│   │   ├── Home.tsx  // Home page which includes the main chat interface
│   ├── api/
│   │   ├── fetchResponse.ts  // Function to make API calls to the backend
│   ├── App.tsx  // Root component that sets up routes and global context providers
│   ├── main.tsx  // Entry point for rendering the React application
│   ├── index.css  // Global CSS styles for the application
├── index.html  // Main HTML file for the React application
├── vite.config.ts  // Configuration file for Vite
├── tsconfig.json  // TypeScript configuration file
├── package.json  // Project configuration file for managing dependencies
```

- **Backend**: Implemented with Java Spring Boot. It handles communication with the GPT model and manages user queries and responses. Spring Boot was chosen for its ease of use and robustness. It provides a RESTful API for the frontend to interact with. Spring AI is used to interact with the GPT model.

## Usage Guidelines

1. Open the frontend application in your browser.
2. Enter the LeetCode problem URL and your specific doubt.
3. Interact with the GPT-based teaching assistant through the chat interface.

## GPT Integration

The backend uses Spring AI to interact with the GPT model. When a user submits a query, it is sent to the GPT model, which processes the input and generates a response designed to guide the user towards a solution.

## Prompt Design

### Example Prompts

- "Could you please explain what part of the problem is confusing you?"
- "Have you considered how you might approach this problem using a particular data structure?"
- "Think about how you can use a stack to solve this problem. What operations does a stack support that might be useful here?"
- "This problem is similar to finding a needle in a haystack. Can you think of a strategy to efficiently search through the data?"

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.
