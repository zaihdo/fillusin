import React from "react";
import Image from "next/image";
import { Flex, Heading, Text } from "../once-ui/components";

type Campaign = {
    id: number;
    name: string;
    title: string;
    description: string;
    link: string;
    picture: string;
};

interface CampaignCardProps {
    campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
    return (
        <Flex
            direction="column"
            padding="s"
            gap="s"
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
            <Heading align="left" wrap="balance" variant="heading-default-xl">
                <span className="font-code">{campaign.title}</span>
            </Heading>
            <Text style={{ color: "#007A3D" }}>{campaign.name}</Text>
            <p className="text-lg font-normal">
                {campaign.description.length > 250
                    ? `${campaign.description.substring(0, 250)}...`
                    : campaign.description}
            </p>
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
    );
};

export default CampaignCard;