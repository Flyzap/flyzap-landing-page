
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="text-2xl font-bold flex items-center">
          <span className="bg-gradient-to-r from-flyzap-green to-flyzap-green-light bg-clip-text text-transparent">
            Fly
          </span>
          <span className="text-white">Zap</span>
          <div className="absolute -inset-1 blur-sm bg-gradient-to-r from-flyzap-green/30 to-flyzap-green-light/30 opacity-70 -z-10 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
