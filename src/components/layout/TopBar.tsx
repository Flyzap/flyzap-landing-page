
import React from 'react';
import { Bell, Moon, Sun } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const TopBar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode class on the root element
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center px-4">
      <div className="flex items-center">
        <SidebarTrigger />
        <h1 className="ml-4 text-lg font-semibold text-slate-900 dark:text-white">Clínica Exemplo</h1>
      </div>

      <div className="ml-auto flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <div className="flex items-center ml-2">
          <div className="h-8 w-8 rounded-full bg-flyzap-green text-white flex items-center justify-center">
            U
          </div>
          <span className="ml-2 text-sm font-medium hidden md:block">Usuário Exemplo</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
