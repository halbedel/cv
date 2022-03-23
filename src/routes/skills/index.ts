import type { RequestHandler } from "@sveltejs/kit";
import api from "./skills.json";

export type Skill = {
	name: string,
	logo: string,
	domain: string
}

export const get: RequestHandler<Record<string, string>, Skill[]> = async () => {

	return {
		status: 200,
		body: api
	}
}
