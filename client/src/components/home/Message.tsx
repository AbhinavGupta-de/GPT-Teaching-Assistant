import ReactMarkdown from 'react-markdown';

type Props = {
	message: string;
};

const Message = (props: Props) => {
	return (
		<div className="p-2">
			<ReactMarkdown>{props.message}</ReactMarkdown>
		</div>
	);
};

export default Message;