
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  description,
  trend,
  className
}) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
        <div className="h-8 w-8 rounded-lg bg-flyzap-green/10 text-flyzap-green flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
      {(description || trend) && (
        <CardFooter className="pt-0">
          <div className="text-xs text-slate-500">
            {trend && (
              <span className={`font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'} mr-1`}>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
            )}
            {description}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default MetricCard;
