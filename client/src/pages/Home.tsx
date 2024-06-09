import { useState } from 'react';
import ChatWindow from '../components/home/ChatWindow';
import SendMessageForm from '../components/home/SendMessageForm';

const Home = () => {
	const [messages, setMessages] = useState<string[]>([
		'Hello, Welcome to GPT Teaching Assistant. How can I help you today? A quick guide on how you can use me. Just type in any doubt you have regarding dsa questions and I will be more than happy to assist you with it. You can also post the direct link to any leetcode question!',
	]);
	const [message, setMessage] = useState<string>('');

	return (
		<div className="h-[93.6vh] text-white p-5">
			<ChatWindow messages={messages} />
			<SendMessageForm
				setMessages={setMessages}
				setMessage={setMessage}
				message={message}
				messages={messages}
			/>
		</div>
	);
};

export default Home;
