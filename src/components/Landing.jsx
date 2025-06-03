import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

function Landing() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return; // Disable effect on mobile
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setOffset({ x, y });
  };

  const transformStyle = (factor) =>
    isMobile
      ? {} // No transform on mobile
      : {
          transform: `translate(${offset.x * factor}px, ${offset.y * factor}px)`,
          transition: 'transform 0.1s ease-out',
        };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-screen h-screen overflow-hidden bg-black',
        'parallax-container'
      )}
    >
      {/* Cloud Layer */}
      <img
        src="/assets/new_cloud.jpg"
        alt="Cloud"
        className={cn('absolute top-0 left-0 w-full h-full object-cover object-center', 'layer')}
        style={transformStyle(20)}
      />

      {/* Mid Background */}
      <img
        src="/assets/GBU11.webp"
        alt="Mid"
        className={cn('absolute top-0 left-0 w-full h-full object-cover object-center', 'layer')}
        style={transformStyle(10)}
      />

      {/* Foreground Layer */}
      <img
        src="/assets/Hostel_Image.webp"
        alt="Foreground"
        className={cn('absolute top-0 left-0 w-full h-full object-cover object-center', 'layer')}
        style={transformStyle(30)}
      />
    </div>
  );
}

export default Landing;
