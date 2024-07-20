/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Flex, Button, Text } from '@/once-ui/components';
import Link from 'next/link';

export default function Footer() {
    return (
        <Flex
            fillWidth
            justifyContent="space-between"
            style={{ borderTop: '1px solid var(--neutral-border-medium)' }}
            as="footer"
            paddingX="l"
            paddingY="m">
            <Text onBackground="neutral-weak">
                Built with love for the people of Gaza with <Link href="https://www.once-ui.com/">OnceUI</Link>
            </Text>
            <Flex gap="12">
                <Button
                    href="https://www.linkedin.com/in/zaidhimran/"
                    prefixIcon="linkedin"
                    size="s"
                    variant="tertiary"
                    style={{ bottom: '0.3rem' }}>
                </Button>
            </Flex>
        </Flex>
    );
}
