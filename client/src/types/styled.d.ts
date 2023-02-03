import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    name: string,
    colors: {
      primary: string,
      secondary: string,
      backgroundPrimary: string,
      backgroundSecondary: string,
      grey: string,
      textColor: string
    }
  }
}