import { z } from "zod";
import { createContext, type Context, use } from "react";
export const ThemeOptionsValidator = z.enum(["light", "cupcake", "bumblebee", "emerald", "corporate", "retro", "cyberpunk", "valentine", "garden", "lofi", "pastel", "fantasy", "cmyk", "autumn", "acid", "lemonade", "winter", "nord", "caramellatte", "silk", "dark", "synthwave", "halloween", "forest", "aqua", "black", "luxury", "dracula", "business", "night", "coffee", "dim", "sunset", "abyss"]);
export type ThemeOptionsType = z.infer<typeof ThemeOptionsValidator>;
type ThemeContextProps = {
  theme: ThemeOptionsType;
  applyTheme: (theme: ThemeOptionsType) => void;
}
export const ThemeContext: Context<ThemeContextProps> = createContext<ThemeContextProps>({
  theme: "dark",
  applyTheme: (theme: ThemeOptionsType) => { console.log(theme); },
});
export const useTheme = () => use(ThemeContext);