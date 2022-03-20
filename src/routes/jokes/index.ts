import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler<Record<string, string>> = async () => {

	const response = await fetch(
		"https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit"
	);
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
