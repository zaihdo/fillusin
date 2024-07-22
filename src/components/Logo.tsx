import React from 'react';
import Image from 'next/image';
import useScreenSize from '../hooks/useScreenSize';
import logo75 from '/public/images/logo-75.svg';
import logo100 from '/public/images/logo-100.svg';
import logo150 from '/public/images/logo-150.svg';

interface LogoProps {
  size?: 's' | 'm' | 'l';
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  let selectedLogo = logo75;
  let width = 75;
  let height = 75;

  if (size) {
    switch (size) {
      case 'm':
        selectedLogo = logo100;
        width = 100;
        height = 100;
        break;
      case 'l':
        selectedLogo = logo150;
        width = 150;
        height = 150;
        break;
      case 's':
      default:
        selectedLogo = logo75;
        width = 75;
        height = 75;
        break;
    }
  } else {
    if (isMobile) {
        selectedLogo = logo75;
        width = 75;
        height = 75;
    }
    else if (isTablet) {
      selectedLogo = logo100;
      width = 100;
      height = 100;
    } else if (isDesktop) {
      selectedLogo = logo150;
      width = 150;
      height = 150;
    }
  }

  return (
    <Image
      src={logo75}
      alt="Logo"
      width={75}
      height={75}
    />
  );
};

export default Logo;
