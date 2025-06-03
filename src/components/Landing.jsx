import React, { useState } from 'react';
import { cn } from '../utils/cn';

function Landing() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setOffset({ x, y });
  };

  const transformStyle = (factor) => ({
    transform: `translate(${offset.x * factor}px, ${offset.y * factor}px)`,
    transition: 'transform 0.1s ease-out',
  });

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-screen h-screen overflow-hidden bg-black',
        'parallax-container'
      )}
    >

    

      <img
        src="/assets/new_cloud.jpg"
        alt="Mid"
        className={cn('absolute top-0 left-0 w-full object-cover', 'layer')}
        style={transformStyle(20)}
      />

      <img
        src="/assets/GBU11.webp"
        alt="Mid-2"
        className={cn('absolute top-0 left-0 w-full object-cover', 'layer')}
        style={transformStyle(10)}
      />

      {/* More movement */}
      <img
        src="/assets/Hostel_Image.webp"
        alt="Foreground"
        className={cn('absolute top-0 left-0 w-full object-cover', 'layer')}
        style={transformStyle(30)} // Increased from 30 → 40
      />
    </div>
  );
}

export default Landing;
