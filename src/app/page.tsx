import React from "react";
import Image from "next/image";
import {
	Heading,
	Text,
	Flex,
	Button,
	Grid,
	LetterFx,
	IconButton,
	Accordion,
} from "@/once-ui/components";
import Link from "next/link";
import { Header } from "@/once-ui/components/Header";
import Campaigns from "@/components/campaigns";
import "@styles/global.css";
type Campaign = {
	id: number;
	title: string;
	name: string;
	description: string;
	link: string;
	picture: string;
};
async function fetchCampaigns() {
	const res = await fetch(`${process.env.WORKER_URL}/query`);
	if (!res.ok) {
		throw new Error("Failed to fetch campaigns");
	}
	const data = await res.json();
	return data.results; // Accessing the data from the "results" field
}

export default async function Home() {
	let campaigns: Campaign[] = [];
	let isLoading = true;
	try {
		campaigns = await fetchCampaigns();
		isLoading = false;
	} catch (error) {
		console.error("Error fetching campaigns:", error);
		isLoading = false;
	}

	const links = [
		{
			href: "https://once-ui.com/docs/theming",
			title: "Themes",
			description: "Style your app in minutes.",
		},
		{
			href: "https://once-ui.com/docs/flexComponent",
			title: "Layout",
			description: "Build responsive layouts.",
		},
		{
			href: "https://once-ui.com/docs/typography",
			title: "Typography",
			description: "Scale text automatically.",
		},
	];

	return (
		<Flex
			fillWidth
			paddingTop="xs"
			paddingX="xs"
			direction="column"
			alignItems="center"
			flex={1}>
			<Flex
				position="relative"
				as="section"
				overflow="hidden"
				fillWidth
				minHeight="0"
				maxWidth={100}
				direction="column"
				alignItems="center"
				flex={1}>
				<Flex
					as="main"
					direction="column"
					justifyContent="center"
					fillWidth
					fillHeight
					padding="s"
					gap="m">
					<Header authenticated={false} />

					<Flex mobileDirection="column" fillWidth gap="0">
						<Flex
							position="relative"
							flex={2}
							gap="24"
							marginBottom="104"
							justifyContent="center"
							alignItems="center"
							direction="column">
							{/* <InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
							</InlineCode> */}
							<Heading
								align="center"
								paddingTop="32"
								marginTop="32"
								wrap="balance"
								variant="display-default-xl">
								<span className="font-code">
									<LetterFx trigger="instant">
										Palestinians in Gaza need
									</LetterFx>
								</span>
								<br></br>
								<span>
									<LetterFx trigger="instant">your help</LetterFx>
								</span>
							</Heading>

							<Heading
								align="center"
								paddingTop="32"
								marginTop="32"
								wrap="balance"
								variant="body-default-xl"
								onBackground="neutral-weak">
								<span className="font-code">
									We are here to help you to reach the most urgent cases of
									Palestinians living in Gaza to give them a chance to have some
									help by your ♥️ donations
								</span>
							</Heading>
							<Heading align="center" wrap="balance" variant="body-strong-xl">
								<span className="font-code">
									Read their stories . Donate . and Share ...
								</span>
							</Heading>

							<Button
								size="l"
								id="readDocs"
								href="https://once-ui.com/docs"
								variant="custom-primary"
								label="Donate Now"
								style={{ borderRadius: 32 }}></Button>
						</Flex>
					</Flex>

					<Flex
						radius="xl"
						background="accent-strong"
						direction="column"
						gap="24"
						padding="24">
						<Heading align="center" wrap="balance" variant="display-default-s">
							<span className="font-code">
								<LetterFx trigger="instant">
									Donating to the beneficiaries directly
								</LetterFx>
							</span>
						</Heading>
						<Grid
							border="accent-strong"
							borderStyle="solid-1"
							columns="repeat(3, 1fr)"
							gap="24"
							padding="24"
							fillWidth
							radius="xl"
							background="accent-strong">
							<Flex
								alignItems="center"
								justifyContent="center"
								padding="20"
								style={{ flexDirection: "column" }}>
								<Heading
									align="center"
									wrap="balance"
									variant="heading-default-xl"
									padding="20">
									<span className="font-code">Read Stories</span>
								</Heading>
								<Text align="center">
									We provide the links of the beneficiaries, and you can
									directly help them.
								</Text>
							</Flex>
							<Flex
								alignItems="center"
								justifyContent="center"
								padding="20"
								style={{ flexDirection: "column" }}>
								<Heading
									align="center"
									wrap="balance"
									variant="heading-default-xl"
									padding="20">
									<span className="font-code">Give Happiness</span>
								</Heading>
								<Text align="center">
									Giving happiness to others is one of the most fulfilling
									things you dcan do
								</Text>
							</Flex>
							<Flex
								alignItems="center"
								justifyContent="center"
								padding="20"
								style={{ flexDirection: "column" }}>
								<img src="/images/final.svg" width={"200"} height={"100"} />
								<Heading
									align="center"
									wrap="balance"
									variant="heading-default-xl"
									padding="20">
									<span className="font-code">Share, Share, Share</span>
								</Heading>
								<Text align="center">
									Maybe you are not able to help directly, but maybe someone
									else can help!
								</Text>
							</Flex>
						</Grid>
					</Flex>

					<Campaigns campaigns={campaigns} />

					<Flex
						flex={1}
						fillWidth
						padding="s"
						gap="32"
						// justifyContent="space-between"
						mobileDirection="column"
						alignItems="flex-start">
						<Flex flex={1} direction="column" justifyContent="center">
							<Heading align="left" wrap="balance" variant="display-strong-l">
								<span className="font-code">
									<LetterFx trigger="instant">Frequently asked</LetterFx>
								</span>
								<br />
								<span>
									<LetterFx trigger="instant">questions</LetterFx>
								</span>
							</Heading>
						</Flex>

						<Flex flex={1} direction="column" gap="12">
							<Accordion
								title="What's happening in Gaza now?"
								style={{ borderRadius: 25 }}>
								<Text variant="body-default-s" onBackground="neutral-weak">
									In addition to the bombs raining down, the blockade and
									weather are resulting in starvation and inhumane living
									conditions.
								</Text>
							</Accordion>
							<Accordion title="Why do people of Gaza need donations?">
								<Text variant="body-default-s" onBackground="neutral-weak">
									To maintain a standard of living and purchase groceries as
									well as tent equipment at inflated prices. Some Gazans are
									also raising funds to escape into Egypt.
								</Text>
							</Accordion>
							<Accordion title="Do you take an admin fee from any donation?">
								<Text variant="body-default-s" onBackground="neutral-weak">
									Not at all. You donate directly to the beneficiary link and we
									just help you get there.
								</Text>
							</Accordion>
							<Accordion title="How do you choose the cases?">
								<Text variant="body-default-s" onBackground="neutral-weak">
									All recipients of the campaigns are verified and vetted for by
									our moderators who engage in regular conversation and maintain
									relationships with them directly.
								</Text>
							</Accordion>
							<Accordion title="Do you change the cases from time to time?">
								<Text variant="body-default-s" onBackground="neutral-weak">
									Yes, we do. If a campaign reaches its goal, it gets replaced.
									Additionally, if we lose contact with the campaign manager,
									the case will be discontinued.
								</Text>
							</Accordion>
						</Flex>
					</Flex>

					<Grid
						border="accent-strong"
						borderStyle="solid-1"
						columns="repeat(1, 1fr)"
						gap="24"
						padding="24"
						fillWidth
						radius="xl"
						background="accent-strong">
						<Flex
							alignItems="center"
							justifyContent="center"
							padding="20"
							style={{ flexDirection: "column" }}>
							<img src="/images/final.svg" width={"200"} height={"100"} />
							<Heading
								align="center"
								wrap="balance"
								variant="body-default-l"
								padding="20">
								<span className="font-code">
									Join us on a mission to bring back the Ansar project
								</span>
							</Heading>
							<Flex gap="8" padding="4">
								<IconButton
									// onClick={k}
									icon="instagram"
									size="m"
									tooltip="Tooltip"
									tooltipPosition="top"
									variant="primary"
								/>
								<IconButton
									// onClick={k}
									icon="tiktok"
									size="m"
									tooltip="Tooltip"
									tooltipPosition="top"
									variant="primary"
								/>
								<IconButton
									// onClick={k}
									icon="youtube"
									size="m"
									tooltip="Tooltip"
									tooltipPosition="top"
									variant="primary"
								/>
							</Flex>
						</Flex>
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth
				paddingX="l"
				paddingY="m"
				justifyContent="space-between">
				<Text variant="body-default-s" onBackground="neutral-weak">
					© 2024 Once UI,{" "}
					<Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">
						MIT License
					</Link>
				</Text>
				<Flex gap="12">
					<Button
						href="https://github.com/once-ui-system/nextjs-starter"
						prefixIcon="github"
						size="s"
						variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/invite/5EyAQ4eNdS"
						prefixIcon="discord"
						size="s"
						variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
