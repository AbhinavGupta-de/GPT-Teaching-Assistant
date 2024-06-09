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

```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── org/abhinavgpt/backend/
│   │   │   │   ├── controllers/
│   │   │   │   │   ├── QuestionController.java  // Handles HTTP requests related to DSA questions
│   │   │   │   ├── service/
│   │   │   │   │   ├── IQuestionService.java  // Interface defining the question service methods
│   │   │   │   │   ├── QuestionService.java  // Implements the business logic for handling DSA questions
│   │   │   │   ├── BackendApplication.java  // Main application class for running the Spring Boot application
│   │   ├── resources/
│   │   │   ├── prompts/
│   │   │   │   ├── help_with_doubt.txt  // Text file containing sample prompts for helping with doubts
│   │   │   ├── application.properties  // Configuration properties for the Spring Boot application
├── pom.xml  // Maven configuration file for managing dependencies and build configurations
├── readme.md  // Documentation file explaining the project setup and usage
├── ... (other necessary files)

```

## Usage Guidelines

1. Open the frontend application in your browser.
2. Enter the LeetCode problem URL and your specific doubt. Even if you only add the problem URL, the assistant will give you some intutions and examples to solve the question.
3. Interact with the GPT-based teaching assistant through the chat interface.

## GPT Integration

The backend integrates with the GPT model to assist users with their DSA-related queries. Here's a detailed explanation of the integration process:

1. **Template Loading**: A prompt template is stored in `help_with_doubt.txt` located in the `resources/prompts` directory. This template is injected into the service class using Spring's `@Value` annotation.

2. **Chat Client Initialization**: The QuestionService class uses a ChatClient to communicate with the GPT model. This client is initialized using a builder pattern in the constructor.

3. **Creating a Prompt**: When a user submits a question, the clearDoubts method is invoked. This method uses the PromptTemplate class to create a Prompt object by replacing placeholders in the template with the actual question provided by the user.

4. **Generating a Response**: The generated Prompt is sent to the GPT model using the chatClient. The GPT model processes the prompt and returns a response, which is then relayed back to the user. This response focuses on guiding the user through hints and explanations without directly providing the solution.

## Prompt Design

The GPT Teaching Assistant uses a carefully crafted prompt to help users with Data Structures and Algorithms (DSA) problems. The design focuses on fostering understanding and problem-solving skills without providing direct solutions.

### Key Elements:

1. **User Guidance**: Users are encouraged to seek help with the approach and intuition for solving problems, not direct solutions.
2. **Strict Instructions**: GPT is instructed not to provide solutions under any circumstances and to focus on guiding the user’s thought process.
3. **Consistent Identity**: GPT responds as "GPT Teaching Assistant" and does not disclose other details about its nature.
4. **Handling Irrelevant Questions**: GPT ignores offensive or irrelevant questions to maintain productive interactions.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.
