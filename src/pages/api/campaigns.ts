import type { NextApiRequest, NextApiResponse } from "next";

type Campaign = {
	id: number;
	name: string;
	title: string;
	description: string;
	link: string;
	picture: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Campaign[] | { error: string }>
) {
	try {
		const response = await fetch(`${process.env.WORKER_URL}/query`);
		if (!response.ok) {
			console.error(
				`Worker fetch failed: ${response.status} - ${response.statusText}`
			);
			throw new Error("Failed to fetch campaigns");
		}

		const data: Campaign[] = await response.json();
		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching campaigns:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
