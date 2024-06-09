const url = import.meta.env.VITE_API_URL as string;

async function fetchResponse(question: string): Promise<string> {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({ question }),
		});

		if (!response.ok) {
			throw new Error(
				`Failed to fetch response: ${response.status} ${response.statusText}`
			);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error);
		return {
			answer:
				'There was an error while fetching the data. Please try again later...',
		};
	}
}

export default fetchResponse;
