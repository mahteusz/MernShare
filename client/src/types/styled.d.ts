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
    },
    
    fonts: {
      primary:string,
      secondary:string,

      sizes: {
        xlarge:string,
        large:string,
        medium:string,
        small:string
      }
    }
  }
}