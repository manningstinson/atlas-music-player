import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });

  useEffect(() => {
    updateTheme(theme);
  }, []);

  useEffect(() => {
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        updateTheme('system');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  const updateTheme = (newTheme) => {
    const root = window.document.documentElement;
    const isDark = newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme);
  };

  const buttons = [
    { name: 'light', icon: Sun },
    { name: 'dark', icon: Moon },
    { name: 'system', icon: Monitor }
  ];

  return (
    <div className="flex justify-center py-4">
      <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
        {buttons.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setTheme(name)}
            className={`
              p-2 rounded-md text-sm flex items-center gap-2 capitalize
              ${theme === name ?
                'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white' :
                'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;