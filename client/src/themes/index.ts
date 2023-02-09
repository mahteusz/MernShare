import lightTheme from "./light";
import darkTheme from "./dark";
import { defaultThemeProperties } from "./default";

export default {
    light: Object.assign(lightTheme, defaultThemeProperties),
    dark: Object.assign(darkTheme, defaultThemeProperties),
}