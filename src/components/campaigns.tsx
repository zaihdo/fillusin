"use client";
import React from "react";
import Image from "next/image";
import { Flex, Heading, LetterFx } from "../once-ui/components";
import CampaignCard from "./campaignCard";

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
                className="campaigns-container w-[95vw] flex gap-4 overflow-x-auto scroll-smooth"
                style={{
                    scrollSnapType: "x mandatory",
                    overflowX: "auto",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}>
                {campaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
            </div>
        </section>
    );
};

export default Campaigns;