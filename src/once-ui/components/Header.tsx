'use client';

import { Button, Flex, Logo, NavIcon, SmartLink, ToggleButton, UserMenu } from '@/once-ui/components';
import { usePathname } from 'next/navigation';
import React from 'react';

interface HeaderProps {
    authenticated: boolean;
    avatar?: string;
    name?: string;
    subline?: string;
}

const Header: React.FC<HeaderProps> = ({
    authenticated,
    avatar,
    name,
    subline
}) => {
    const pathname = usePathname() ?? '';

    return (
        <Flex
            style={{
                borderBottom: '2px solid var(--neutral-border-medium)'
            }}
            as="header"
            fillWidth paddingX="s" height="56"
            alignItems="center"
            background="neutral-weak">
            <Flex
                hide="s">
                <Logo size="xl" iconSrc='/images/logo-75.svg'wordmark={false}/>
            </Flex>
            <Flex
                show="s"
                gap="4"
                alignItems="center">
                <NavIcon/>
                <Logo wordmark={false}/>
            </Flex>
            {authenticated ? (
                <Flex
                    fillWidth
                    alignItems="center" justifyContent="space-between">
                    <Flex
                        fillWidth>
                        <Flex
                            hide="s"
                            fillWidth gap="4" paddingX="l"
                            alignItems="center">
                            <ToggleButton
                                selected={true}
                                href=""
                                label="Dashboard"/>
                            <ToggleButton
                                selected={pathname === '/apps'}
                                href=""
                                label="Apps"/>
                            <ToggleButton
                                selected={pathname === '/resources'}
                                href=""
                                label="Resources"/>
                        </Flex>
                    </Flex>
                    <Flex as="nav">
                        <Flex
                            hide="s">
                            <UserMenu
                                name={name}
                                subline={subline}
                                avatarProps={{
                                    empty: !avatar,
                                    src: avatar
                                }}
                                dropdownOptions={[
                                    {
                                        label: 'Profile',
                                        value: 'profile'
                                    },
                                    {
                                        label: 'Settings',
                                        value: 'settings'
                                    },
                                    {
                                        label: 'Log out',
                                        value: 'logout'
                                    }
                                ]}
                            />
                        </Flex>
                        <Flex
                            show="s">
                            <UserMenu
                                avatarProps={{
                                    empty: !avatar,
                                    src: avatar
                                }}
                                dropdownOptions={[
                                    {
                                        label: 'Profile',
                                        value: 'profile'
                                    },
                                    {
                                        label: 'Settings',
                                        value: 'settings'
                                    },
                                    {
                                        label: 'Log out',
                                        value: 'logout'
                                    }
                                ]}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            ) : (
                <Flex
                    fillWidth
                    alignItems="center" justifyContent="right">
                    <Flex
                        hide="s"
                        textVariant="label-default-s"
                        fillWidth gap="32" paddingX="xl"
                        alignItems="center">
                        <SmartLink
                            href="">
                            What we do
                        </SmartLink>
                        <SmartLink
                            href="">
                            Cases
                        </SmartLink>
                        <SmartLink
                            href="">
                            Statistics
                        </SmartLink>
                        <SmartLink
                            href="">
                            FAQ
                        </SmartLink>
                    </Flex>
                    <Flex
                        alignItems="center"
                        gap="8">
                        <Button
                            size="s"
                            variant="primary"
                            labelExists={true}
                            label="Donate directly to the beneficiary"
                            href=""/>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};

Header.displayName = 'Header';
export { Header };