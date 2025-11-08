import { createContext, useContext, type Context } from "react";
import { z } from "zod";
export const ThemeOptionsValidator = z.enum(["light", "cupcake", "bumblebee", "emerald", "corporate", "retro", "valentine", "garden", "lofi", "pastel", "fantasy", "cmyk", "autumn", "acid", "lemonade", "winter", "nord", "dark", "synthwave", "halloween", "forest", "aqua", "black", "luxury", "dracula", "business", "night", "coffee", "dim", "sunset"]);
export type ThemeOptionsType = z.infer<typeof ThemeOptionsValidator>;
export type ThemeContextProps = {
  theme: ThemeOptionsType;
  applyTheme: (theme: ThemeOptionsType) => void;
}
export const ThemeContext: Context<ThemeContextProps> = createContext<ThemeContextProps>({
  theme: "dark",
  applyTheme: (theme: ThemeOptionsType) => { console.log(theme); },
});
export const useTheme = () => useContext(ThemeContext);
// const daisyUIThemes = 