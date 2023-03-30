import { createContext, useState, useEffect } from "react";
import { ThemeContextData, ThemeProviderData } from './types'
import { DefaultTheme, ThemeProvider } from "styled-components";
import themes from "../../themes";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const CustomThemeProvider = ({ children }: ThemeProviderData) => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if(savedTheme)
      setTheme(JSON.parse(savedTheme))

    setLoading(false)
  }, [])

  const toggleTheme = () => {
    let newTheme = theme 
    if (theme.name === 'dark'){
      newTheme = themes.light
      setTheme(newTheme)
    }
    else {
      newTheme = themes.dark
      setTheme(newTheme)
    }
    localStorage.setItem("theme", JSON.stringify(newTheme))
  }

  return (
    <ThemeContext.Provider value={{ theme, loading, toggleTheme }}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, CustomThemeProvider }