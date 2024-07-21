/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Flex, Text, Icon } from '@/once-ui/components';
import Link from 'next/link';

interface LinkCardProps {
  name: string;
  description: string;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ name, description, link }) => (
  <Link
    style={{ border: '2px solid var(--neutral-border-strong)', borderRadius: 'var(--radius-xl-nest-8)', padding: 'var(--responsive-space-l)', marginBottom: 10 }}
    href={link}>
    <Flex
      fillWidth
      direction="column"
      paddingY="8"
      gap="8">
      <Flex
        fillWidth
        alignItems="center"
        gap="12">
        <Text
          onBackground="neutral-strong"
          variant="body-strong-m">
          {name}
        </Text>
        <Icon
          size="s"
          name="arrowUpRight" />
      </Flex>
      <Text
        onBackground="neutral-weak"
        variant="body-default-s">
        {description}
      </Text>
    </Flex>
  </Link>
);

export default LinkCard;
