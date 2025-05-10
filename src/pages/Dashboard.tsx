
import React from 'react';
import { MessageSquare, Users, Clock, UserCheck, UserPlus, MessageSquareText } from 'lucide-react';
import MetricCard from '@/components/dashboard/MetricCard';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: "Atendimentos em Andamento",
      value: 24,
      icon: <MessageSquare className="h-5 w-5" />,
      description: "desde ontem",
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Atendimentos Aguardando",
      value: 8,
      icon: <Clock className="h-5 w-5" />,
      description: "desde ontem",
      trend: { value: 2, isPositive: false }
    },
    {
      title: "Mensagens Enviadas",
      value: 156,
      icon: <MessageSquareText className="h-5 w-5" />,
      description: "hoje",
      trend: { value: 18, isPositive: true }
    },
    {
      title: "Tempo Médio de Resposta",
      value: "2m 45s",
      icon: <Clock className="h-5 w-5" />,
      description: "nas últimas 24h",
      trend: { value: 10, isPositive: true }
    },
    {
      title: "Atendentes Ativos",
      value: 5,
      icon: <UserCheck className="h-5 w-5" />,
      description: "neste momento"
    },
    {
      title: "Novos Contatos",
      value: 12,
      icon: <UserPlus className="h-5 w-5" />,
      description: "hoje",
      trend: { value: 5, isPositive: true }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <div className="mt-2 sm:mt-0 flex items-center space-x-2">
          <select className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm">
            <option value="today">Hoje</option>
            <option value="week">Esta semana</option>
            <option value="month">Este mês</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            description={metric.description}
            trend={metric.trend}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="text-lg font-medium mb-4">Desempenho por Atendente</h3>
          <div className="h-64 flex items-center justify-center text-slate-500">
            Gráfico de desempenho será exibido aqui
          </div>
        </div>
        <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
          <h3 className="text-lg font-medium mb-4">Atendimentos por Dia</h3>
          <div className="h-64 flex items-center justify-center text-slate-500">
            Gráfico de atendimentos será exibido aqui
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
