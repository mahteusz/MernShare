import { ThemeProvider } from "styled-components"
import themes from '../src/themes'
import AppRoutes from "./routes"
import { CustomThemeProvider } from "./contexts/ThemeContext"

const App = () => {

  return (
    <CustomThemeProvider>
      <AppRoutes />
    </CustomThemeProvider>
  )
}

export default App
