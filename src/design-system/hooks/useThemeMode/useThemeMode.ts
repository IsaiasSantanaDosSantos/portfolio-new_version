import { useState } from 'react';

export function useThemeMode() {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((previous) => !previous);
  }

  return {
    isDark,
    toggleTheme,
  };
}
