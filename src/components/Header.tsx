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
            // fillWidth
            // position='relative'
            // as="header"
            // paddingX='m'
            // paddingY="2"
            // marginBottom='m'
            // borderStyle='solid-2'
            // radius='xl-8'
            // justifyContent="space-between"
            // alignItems='center'
            // >
            fillWidth
            justifyContent="space-between"
            alignItems='center'
            style={{ borderBottom: '1px solid var(--neutral-border-medium)' }}
            as="footer"
            paddingX="l"
            paddingY="xs"
            marginBottom='m'>
            <Logo size="s"></Logo>
            <Heading 
            style={{ marginLeft: 'var(--responsive-space-m)', textAlign: 'left' }} 
            variant='body-strong-xl' 
            onBackground='neutral-strong'>Campaign: Free Gazans</Heading>
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
