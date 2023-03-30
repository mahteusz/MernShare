import { DefaultTheme } from "styled-components";

type ThemeContextData = {
  theme: DefaultTheme,
  loading: boolean,
  toggleTheme(): void,
}

type ThemeProviderData = {
  children: React.ReactNode
}

export { type ThemeContextData, type ThemeProviderData }