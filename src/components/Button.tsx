
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseClasses = 'rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-flyzap-green text-flyzap-black hover:bg-flyzap-green-light hover:shadow-[0_0_20px_rgba(0,255,135,0.7)] transform hover:-translate-y-1',
    outline: 'border-2 border-flyzap-green text-flyzap-green hover:bg-flyzap-green/10 hover:shadow-[0_0_15px_rgba(0,255,135,0.4)]',
    text: 'text-flyzap-green hover:text-flyzap-green-light',
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
