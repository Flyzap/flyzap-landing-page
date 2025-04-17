
import React from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('relative', className)}>
      <div className="flex items-start">
        <div className="mr-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-flyzap-green text-flyzap-black font-bold text-xl">
            {number}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
