/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from 'react';
import { Flex, Button } from '@/once-ui/components';
import { useTheme } from '../app/ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Flex
            fillWidth
            justifyContent="space-between"
            style={{ position: 'relative', width: '100%' }}
            as="header"
            paddingX="l"
            paddingY="2">
            <Flex gap="12">
                <Button
                    onClick={toggleTheme}
                    prefixIcon={theme === 'dark' ? 'moon' : 'sun'}
                    variant='tertiary'
                    style={{
                        position: 'absolute',
                        top: '0rem',
                        right: '16px',
                        zIndex: 1000,
                    }}>
                </Button>
            </Flex>
        </Flex>
    );
}
