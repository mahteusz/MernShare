import { DefaultTheme } from "styled-components";

interface IThemeContextData {
  theme: DefaultTheme,
  loading: boolean,
  toggleTheme(): void,
}

interface IThemeProviderData {
  children: React.ReactNode
}

export { type IThemeContextData, type IThemeProviderData }