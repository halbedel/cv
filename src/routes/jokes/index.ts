
export const get = async () => {

	const response = await fetch(
		"https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist,sexist,explicit"
	);

	if (response.status === 200) {
		const jokeJson = await response.json();

		if (jokeJson.type === "single") {
			return {
				status: 200,
				body: `<q>${jokeJson.joke}</q>`
			}
		}

		const joke = `<q>${jokeJson.setup}</q><q>${jokeJson.delivery}</q>`;
		return {
			status: 200,
			body: joke
		}
	}
	return {
		status: 500,
		body: ""
	}
}
