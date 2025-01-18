"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button, Flex, Heading, LetterFx, Text } from "../once-ui/components";

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
	const scroll = (direction: "left" | "right") => {
		const container = document.querySelector(".campaigns-container");
		if (container) {
			const cardWidth =
				container.querySelector("div")?.getBoundingClientRect().width || 0;
			const scrollAmount =
				direction === "left" ? -cardWidth * 4 : cardWidth * 4;
			container.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<section className="w-full">
			{/* Header Section */}
			<Flex
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				padding="16"
				marginY="8">
				<Heading align="center" wrap="balance" variant="heading-default-xl">
					<span className="font-code text-[42px]">
						<LetterFx trigger="instant">
							Extreme Need Palestinians - Gazans
						</LetterFx>
					</span>
				</Heading>
				{/* Arrow Icons */}
				<div className="flex gap-4">
					<button onClick={() => scroll("left")}>
						<Image
							src="/images/arrow-left-circle.svg"
							alt="Scroll Left"
							width={53}
							height={53}
						/>
					</button>
					<button onClick={() => scroll("right")}>
						<Image
							src="/images/arrow-right-circle.svg"
							alt="Scroll Right"
							width={53}
							height={53}
						/>
					</button>
				</div>
			</Flex>

			{/* Cards Section */}
			<div
				className="campaigns-container w-[95vw] flex gap-4 overflow-x-auto scroll-smooth "
				style={{
					scrollSnapType: "x mandatory",
					overflowX: "auto",
					WebkitOverflowScrolling: "touch",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}>
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
						className="flex-shrink-0"
						style={{
							width: "calc(100% / 4 - 16px)",
							minWidth: "300px",
							scrollSnapAlign: "start",
						}}>
						{/* Card Content */}
						<div className="w-full h-[200px] relative overflow-hidden rounded-[32px]">
							<Image
								src={campaign.picture}
								alt={campaign.name}
								fill
								className="object-cover"
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
						<div className="mt-auto">
							<a
								href={campaign.link}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-[32px] border-[1px] border-[#007A3D] text-[#007A3D] font-bold bg-white py-4 px-6 hover:bg-accent inline-flex items-center justify-center gap-2">
								Read more & Donate
								<Image
									src="/images/arrow-right.svg"
									alt="Arrow Right"
									width={20}
									height={20}
								/>
							</a>
						</div>
					</Flex>
				))}
			</div>
		</section>
	);
};

export default Campaigns;
