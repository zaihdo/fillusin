// components/TypewriterEffect.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number; // Speed in milliseconds (default is 100ms)
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeWriter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }
    };

    const interval = setInterval(typeWriter, speed);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [index, text, speed]);

  return <div>{displayedText}</div>;
};

export default TypewriterEffect;
