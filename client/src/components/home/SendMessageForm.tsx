import fetchResponse from '../../api/fetchResponse';

type Props = {
	message: string;
	messages: string[];
	setMessage: (message: string) => void;
	setMessages: (messages: string[]) => void;
};

const SendMessageForm = ({
	message,
	messages,
	setMessage,
	setMessages,
}: Props) => {
	const sendMessage = async () => {
		console.log('sendMessage' + message);
		if (message.trim() === '') return;

		const response = await fetchResponse(message);
		console.log(response.answer);
		setMessage(response.answer);

		setMessages([...messages, response.answer]);
		setMessage('');
	};

	return (
		<div className="flex">
			<input
				className="w-4/5 p-2 rounded-l-lg text-black"
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button
				className="w-1/5 bg-blue-500 text-white rounded-r-lg"
				onClick={sendMessage}
			>
				Send
			</button>
		</div>
	);
};

export default SendMessageForm;
