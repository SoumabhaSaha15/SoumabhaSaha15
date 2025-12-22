import { prettifyError } from "zod";
import { type ReactNode, useState, useEffect } from "react";
import { ThemeContext, type ThemeOptionsType, ThemeOptionsValidator } from "./ThemeContext";
export default function ThemeProvider({ children }: { children: ReactNode }) {

  const getDefaultTheme: () => ThemeOptionsType = () => {
    const { success, data } = ThemeOptionsValidator.safeParse(localStorage.getItem("theme"));
    const finalTheme = success ? data : "dark";
    document.documentElement.setAttribute('data-theme', finalTheme);
    return finalTheme;
  }

  const [theme, setTheme] = useState<ThemeOptionsType>(getDefaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const applyTheme = (theme: ThemeOptionsType) => {
    const { success, data, error } = ThemeOptionsValidator.safeParse(theme);
    if (!success) return console.log(prettifyError(error));
    setTheme(data);
  };

  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}