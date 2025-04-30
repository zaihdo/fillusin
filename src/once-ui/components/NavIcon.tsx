'use client';

import React, { useState, forwardRef } from 'react';
import styles from './NavIcon.module.scss';
import { Flex } from '.';
import { SmartLink } from '@/once-ui/components';

interface NavIconProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  links: {
    linkUrl: string;
    linkText: string;
  }[];
}

const NavIcon = forwardRef<HTMLDivElement, NavIconProps>(({ className, style, onClick, links }, ref) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Flex
      ref={ref}
      tabIndex={0}
      radius="m"
      position="relative"
      className={`${styles.button} ${className || ''}`}
      style={{ ...style }}
      onClick={handleClick}>
      <div className={`${styles.line} ${isActive ? `${styles.active}` : ''}`} />
      <div className={`${styles.line} ${isActive ? `${styles.active}` : ''}`} />
      {isActive && (
        <Flex direction="column" padding="l" width="64" gap="m">
          {links.map((link, index) => (
            <SmartLink key={index} href={link.linkUrl} style={{ padding: 'xl' }}>
              {link.linkText}
            </SmartLink>
          ))}
        </Flex>
      )}
    </Flex>
  );
});

NavIcon.displayName = 'NavIcon';

export { NavIcon };