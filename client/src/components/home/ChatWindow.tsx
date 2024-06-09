import Message from './Message';

type Props = {
	messages: string[];
};

const ChatWindow = (props: Props) => {
	return (
		<div className="h-5/6 border-2 overflow-auto scrollbar-hide p-5 flex flex-col gap-5">
			{props.messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</div>
	);
};

export default ChatWindow;
