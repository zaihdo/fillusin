/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Flex, Button, Heading } from '@/once-ui/components';
import { useTheme } from '../app/ThemeContext';
import Logo from '../components/Logo';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Flex
            fillWidth
            position='relative'
            justifyContent="space-between"
            as="header"
            paddingX='l'
            paddingY="2"
            margin='m'
            borderStyle='solid-2'
            radius='xl-8'
            alignItems='center'
            >
            <Logo></Logo>
            <Heading variant='display-strong-xs' onBackground='neutral-strong'>Campaign to Free Gazans</Heading>
            <Button
                onClick={toggleTheme}
                prefixIcon={theme === 'dark' ? 'moon' : 'sun'}
                variant='tertiary'
                style={{
                    zIndex: 1000,
                }}>
            </Button>
        </Flex>
    );
}
