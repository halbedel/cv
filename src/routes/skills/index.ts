import api from "./skills.json";

export type Skill = {
	name: string,
	logo: string,
	domain: string
}

export const get = async () => {
	return {
		status: 200,
		body: {
			skills: api
		}
	}
}
