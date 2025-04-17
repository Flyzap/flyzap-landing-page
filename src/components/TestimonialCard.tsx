
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  industry?: string;
  rating?: number;
  imageUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  company,
  industry,
  rating = 5,
  imageUrl,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        'p-6 bg-flyzap-black-light rounded-xl border border-gray-800',
        'transition-all duration-300 hover:border-flyzap-green/30',
        className
      )}
      style={style}
    >
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="text-flyzap-green fill-flyzap-green mr-1" />
        ))}
      </div>
      
      <blockquote className="text-lg italic mb-6 text-gray-300">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        {imageUrl && (
          <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-400">
            {company} {industry && <span>• {industry}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
