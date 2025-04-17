
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        'p-6 bg-flyzap-black-light rounded-xl border border-gray-800 transition-all duration-300',
        'hover:border-flyzap-green/40 hover:shadow-[0_0_25px_rgba(0,255,135,0.2)]',
        className
      )}
      style={style}
    >
      <div className="mb-4 p-3 w-12 h-12 flex items-center justify-center rounded-lg bg-flyzap-green/10 text-flyzap-green">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
