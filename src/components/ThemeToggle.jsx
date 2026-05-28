import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

// Cambiar entre modo claro y oscuro
export const ThemeToggle = () => {
  // Cargar modo oscuro preferido
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    } catch {
      // Ignorar error
    }
    return true;
  });

  // Guardar y aplicar tema en la web
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignorar error
    }
  }, [isDark]);

  // Pintar botón del tema
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 md:bottom-auto md:top-4 md:right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-zinc-700 hover:border-black dark:hover:border-white cursor-pointer"
      title="Alternar tema"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};
