import { useState } from 'react';
import ChatWindow from '../components/home/ChatWindow';
import SendMessageForm from '../components/home/SendMessageForm';

const Home = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [message, setMessage] = useState<string>('');

	return (
		<div className="h-screen text-white p-5">
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
