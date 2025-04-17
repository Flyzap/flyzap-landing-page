
import React from 'react';
import { cn } from '@/lib/utils';

interface IntegrationIconProps {
  name: string;
  iconUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

const IntegrationIcon: React.FC<IntegrationIconProps> = ({
  name,
  iconUrl,
  className,
  style,
}) => {
  return (
    <div className={cn('flex flex-col items-center', className)} style={style}>
      <div className="w-16 h-16 flex items-center justify-center p-3 mb-2 rounded-xl bg-flyzap-black-light">
        <img src={iconUrl} alt={name} className="max-w-full max-h-full" />
      </div>
      <span className="text-sm text-gray-400">{name}</span>
    </div>
  );
};

export default IntegrationIcon;
