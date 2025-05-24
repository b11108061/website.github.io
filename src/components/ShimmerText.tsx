import React from 'react';

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

const ShimmerText: React.FC<ShimmerTextProps> = ({ children, className = '' }) => {
  return (
    <h2
      className={`relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-slide ${className}`}
      style={{ backgroundSize: '200% 200%' }}
    >
      {children}
    </h2>
  );
};

export default ShimmerText;
