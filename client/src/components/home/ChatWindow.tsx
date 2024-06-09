import Message from './Message';

type Props = {
	messages: string[];
};

const ChatWindow = (props: Props) => {
	return (
		<div className="h-5/6 overflow-y-scroll">
			{props.messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</div>
	);
};

export default ChatWindow;
