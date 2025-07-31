// components/Logo.tsx
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon-only';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full',
  className = '' 
}) => {
  // Size configurations
  const sizes = {
    sm: { icon: 24, text: 16, spacing: 8 },
    md: { icon: 32, text: 20, spacing: 10 },
    lg: { icon: 40, text: 24, spacing: 12 }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      {/* Pixel Art Icon */}
      <Image 
        src="/Jia-Pixel-Logo.png" 
        alt="Jia Pixel Logo" 
        width={currentSize.icon} 
        height={currentSize.icon}
      />
      
      {/* Brand Name */}
      {variant === 'full' && (
        <div 
          className="font-bold tracking-tight"
          style={{ 
            marginLeft: `${currentSize.spacing}px`,
            fontSize: `${currentSize.text}px`
          }}
        >
          <span className="text-indigo-600">Jia</span>
          <span className="text-pink-500">Pixel</span>
        </div>
      )}
    </div>
  );
};

export default Logo;