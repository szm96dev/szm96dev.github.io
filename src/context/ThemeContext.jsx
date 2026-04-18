import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

const ThemeContext = createContext();

const applyTheme = (isDarkMode) => {
  if (typeof document === 'undefined') return;

  document.documentElement.classList.toggle('dark', isDarkMode);
  document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
};

// Hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    applyTheme(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(true);
    applyTheme(true);
  }, []);

  const setTheme = useCallback((theme) => {
    const nextIsDarkMode = theme !== 'light';
    setIsDarkMode(nextIsDarkMode);
    applyTheme(nextIsDarkMode);
  }, []);

  const contextValue = useMemo(() => ({
    isDarkMode,
    toggleTheme,
    setTheme,
    theme: 'dark',
    themePreference: 'dark'
  }), [isDarkMode, setTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
