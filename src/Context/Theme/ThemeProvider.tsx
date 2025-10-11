import React from "react";
import { prettifyError } from "zod";
import { ThemeContext, type ThemeOptionsType, ThemeOptionsValidator } from "./ThemeContext";
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getDefaultTheme: () => ThemeOptionsType = () => {
    const { success, data } = ThemeOptionsValidator.safeParse(localStorage.getItem("theme"));
    return success ? data : "black";
  }
  const [theme, setTheme] = React.useState<ThemeOptionsType>(getDefaultTheme);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const applyTheme = (theme: ThemeOptionsType) => {
    const { success, data, error } = ThemeOptionsValidator.safeParse(theme);
    if (success) {
      localStorage.setItem("theme", data);
      document.documentElement.setAttribute('data-theme', data);
      setTheme(data);
    } else (prettifyError(error));
  };

  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}