
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('container px-6 md:px-8 mx-auto max-w-7xl', className)}>
      {children}
    </div>
  );
};

export default Container;
