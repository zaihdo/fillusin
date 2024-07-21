import React from 'react';
import Image from 'next/image';
import useScreenSize from '../hooks/useScreenSize';
import logo75 from '/public/images/logo-75.svg';
import logo100 from '/public/images/logo-100.svg';
import logo150 from '/public/images/logo-150.svg';

const Logo: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  let selectedLogo;
  let width;
  let height;

  if (isMobile) {
    selectedLogo = logo75;
    width = 75;
    height = 75;
  } else if (isTablet) {
    selectedLogo = logo100;
    width = 100;
    height = 100;
  } else if (isDesktop) {
    selectedLogo = logo150;
    width = 150;
    height = 150;
  }

  return (
    <Image
      src={selectedLogo}
      alt="Logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
