/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Heading, Text, Flex, Button } from '@/once-ui/components';
import Image from 'next/image';
import Link from 'next/link';
import LinkGrid from '../../components/LinkGrid';
import Logo from '../../components/Logo';
import TypewriterEffect from '@/components/TypewriterText';

export default function Home() {
    return (
        <Flex
            style={{ overflow: 'hidden' }}
            fillWidth
            direction="column"
            alignItems="center"
            minHeight={1}
            flex={1}
            as="section"
            maxWidth={64}>
            {/* <Flex
                style={{ zIndex: '1', width: '95%' }}
                position="relative"
                paddingX="24"
                paddingY="8"
                marginBottom="xs"
                alignItems='center'
                justifyContent='center'
                >
                <Heading
                    variant="display-strong-s"
                    onBackground="neutral-strong">
                    Free Gazans
                </Heading>
            </Flex> */}
            <Flex
                fillWidth
                position="relative"
                background="surface"
                border="neutral-strong"
                borderStyle="solid-2"
                radius="xl-8"
                paddingX="24"
                paddingY="16"
                marginBottom="xs">
                <Text
                    variant='body-default-m'
                    onBackground='accent-medium'>
                    <TypewriterEffect text='As conflict intensifies, the people of Gaza urgently seek to evacuate through the Rafah border crossing, 
                    their sole escape route. Although currently closed, the Rafah crossing is expected to reopen with a steep fee of $5000 per person imposed by Egyptian authorities. 
                    FillUsIn is dedicated to providing a centralized platform where you can find verified GoFundMe and other donation links for individuals and families in Gaza. 
                    Each link has been directly sourced from those in need, ensuring your support reaches them promptly.' speed={25}></TypewriterEffect>
                </Text>
            </Flex>
            <Flex
                fillWidth
                fillHeight
                as="main"
                padding="m"
                direction="column"
                gap="s">
                <Flex
                    fillWidth
                    mobileDirection="row"
                    gap="1">
                    <Flex
                        position="relative"
                        fillWidth
                        direction="column"
                        gap="24">
                        <Text
                            variant="display-default-xs"
                            onBackground="neutral-strong">
                            <Text style={{ color: '#01b760' }}>Read their stories.</Text><br /><Text style={{ color: '#d83838' }}>Donate to the cause.</Text><br /><Text color="#fff">Share Share Share.</Text>
                        </Text>
                        <Button
                            style={{ marginBottom: 'var(--static-space-20)' }}
                            suffixIcon="chevronRight"
                            variant="tertiary">
                            <Link href="https://techforpalestine.org/projects/">
                                View more projects here
                            </Link>
                        </Button>
                    </Flex>
                </Flex>
                <LinkGrid />
            </Flex>
        </Flex>
    );
}
