
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/components/Logo';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6">
        <div className="w-full bg-white dark:bg-slate-950 rounded-lg shadow-md p-8 border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col items-center mb-6">
            <Logo className="h-12 mb-2" />
            <h1 className="text-2xl font-bold text-flyzap-black dark:text-white">FlyZap</h1>
            <p className="text-sm text-slate-500">Gerenciamento de Atendimento</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <a href="#" className="text-xs text-flyzap-green hover:underline">
                  Esqueci minha senha
                </a>
              </div>
              <Input id="password" type="password" placeholder="********" required />
            </div>
            <Button type="submit" className="w-full bg-flyzap-green hover:bg-flyzap-green/90">
              Entrar
            </Button>
            <div className="text-center text-sm text-slate-500">
              <span>Não tem uma conta? </span>
              <a href="#" className="text-flyzap-green hover:underline">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
