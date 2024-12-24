import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch(`${process.env.WORKER_URL}/query`);
		if (!response.ok) {
			throw new Error("Failed to fetch campaigns");
		}
		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Error fetching campaigns:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
