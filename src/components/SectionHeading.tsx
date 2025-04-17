
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  gradient?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
  subtitleClassName,
  gradient = false,
}) => {
  return (
    <div className={cn(centered ? 'text-center' : '', 'max-w-3xl', centered ? 'mx-auto' : '', 'mb-12')}>
      <h2 
        className={cn(
          'heading-lg mb-4',
          gradient ? 'gradient-text' : '',
          className
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-lg text-gray-300', subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
