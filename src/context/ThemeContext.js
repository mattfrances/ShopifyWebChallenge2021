import React, { useState } from 'react';
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (localStorage.getItem('color-theme'))
      return localStorage.getItem('color-theme');

    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const updateTheme = (theme) => {
    const root = window.document.documentElement;

    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  };

  React.useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
