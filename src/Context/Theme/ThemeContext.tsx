import { createContext, useContext, type Context } from "react";
import { z } from "zod";
export const ThemeOptionsValidator = z.enum(["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"]);
export type ThemeOptionsType = z.infer<typeof ThemeOptionsValidator>;
export type ThemeContextProps = {
  theme: ThemeOptionsType;
  applyTheme: (theme: ThemeOptionsType) => void;
}
export const ThemeContext: Context<ThemeContextProps> = createContext<ThemeContextProps>({
  theme: "black",
  applyTheme: (theme: ThemeOptionsType) => { console.log(theme); },
});
export const useTheme = () => useContext(ThemeContext);
// const daisyUIThemes = 