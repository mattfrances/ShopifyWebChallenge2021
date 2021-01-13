import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ToggleTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === 'dark';
  }

  return (
    <label className="mt-3 inline-flex items-center cursor-pointer">
      <span className="mr-3 text-sm font-bold text-gray-700">Light</span>
      <span className="relative">
        <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
        <span
          className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out ${
            isDark() ? 'bg-purple-600 transform translate-x-full' : 'bg-white'
          }`}
        >
          <input
            type="checkbox"
            className="absolute opacity-0 w-0 h-0"
            checked={isDark()}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </span>
      </span>
      <span className="ml-3 text-sm font-bold text-white">Dark</span>
    </label>
  );
};

export default ToggleTheme;
