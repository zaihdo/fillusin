"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, LetterFx, Arrow, IconButton} from '@/once-ui/components';
import Link from 'next/link';
import { Header } from '@/once-ui/components/Header';

export default function Home() {
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
			fillWidth paddingTop="xs" paddingX="xs"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={100}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="s" gap="m">
						<Header authenticated={false}/>
					<Flex
						mobileDirection="column"
						fillWidth gap="0">
						<Flex
							position="relative"
							flex={2} gap="24" marginBottom="104"
							justifyContent='center'
							alignItems='center'
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
								align='center'
								paddingTop='32'
								marginTop='32'
								wrap="balance"
								variant="display-default-xl">
								<span className="font-code">
								<LetterFx
									trigger="instant">
									Palestinians in Gaza need 
								</LetterFx>
								</span>
								<br></br>
								<span>
								<LetterFx
									trigger="instant">
										your help
								</LetterFx>
								</span>
							</Heading>
							
							<Heading
								align='center'
								paddingTop='32'
								marginTop='32'
								wrap="balance"
								variant="body-default-xl"
								onBackground='neutral-weak'>
								<span className="font-code">
								We are here to help you to reach the most urgent cases of Palestinians living in Gaza to give them a chance to have some help by your ♥️ donations
								</span>
							</Heading>
							<Heading
								align='center'
								wrap="balance"
								variant="body-strong-xl">
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
								style={{ borderRadius: 32}}>
							</Button>
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
						background="accent-strong"
						>
							<Flex 
								alignItems='center'
								justifyContent='center'
								padding='20'
								style={{flexDirection: 'column'}}
								>
								<img src="/images/final.svg" width={'200'} height={'100'}/>
								<Heading
									align='center'
									wrap="balance"
									variant="body-default-l"
									padding='20'
									>
									<span className="font-code">
									Join us on a mission to bring back the Ansar project
									</span>
								</Heading>
							<Flex gap='8' padding='4'>
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
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/once-ui-system/nextjs-starter"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/invite/5EyAQ4eNdS"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
