import React from "react";
import Image from "next/image";
import {
	Button,
	Flex,
	Grid,
	Heading,
	LetterFx,
	Text,
} from "../once-ui/components";

type Campaign = {
	id: number;
	name: string;
	title: string;
	description: string;
	link: string;
	picture: string;
};

interface CampaignSectionProps {
	campaigns: Campaign[];
}

const Campaigns: React.FC<CampaignSectionProps> = ({ campaigns }) => {
	return (
		<section>
			{/* Header Section */}
			<Flex
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-start"
				gap="l"
				padding="8">
				<Heading
					align="center"
					paddingTop="32"
					marginTop="32"
					wrap="balance"
					variant="heading-default-xl">
					<span className="font-code">
						<LetterFx trigger="instant">
							Extreme Need Palestinians - Gazans
						</LetterFx>
					</span>
				</Heading>
			</Flex>

			{/* Cards Section */}
			<Grid
				columns="repeat(auto-fill, minmax(300px, 1fr))"
				gap="s"
				padding="8"
				style={{ justifyItems: "center" }}>
				{campaigns.map((campaign) => (
					<Flex
						key={campaign.id}
						direction="column"
						gap="s"
						padding="s"
						border="neutral-weak"
						borderStyle="solid-1"
						radius="l"
						background="surface"
						className="h-full">
						{/* Card Content */}
						<div className="w-[300px] h-[200px] relative overflow-hidden rounded-[32px]">
							<Image
								src={campaign.picture}
								alt={campaign.name}
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<Heading
							align="left"
							paddingTop="32"
							marginTop="32"
							wrap="balance"
							variant="heading-default-xl">
							<span className="font-code">{campaign.title}</span>
						</Heading>
						<Text style={{ color: "#007A3D" }}>{campaign.name}</Text>
						<p className="text-lg font-normal">{campaign.description}</p>
						<Button
							label="Read more & Donate"
							variant="custom-primary"
							prefixIcon="/images/arrow-right.svg"
							className="mt-auto rounded-[32px] border-[1px] border-green-500 text-green-500 font-bold bg-white py-4 px-8"></Button>
					</Flex>
				))}
			</Grid>
		</section>
	);
};

export default Campaigns;
