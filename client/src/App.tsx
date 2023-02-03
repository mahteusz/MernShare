import { ThemeProvider } from "styled-components"
import themes from '../src/themes'
import AppRoutes from "./routes"

const App = () => {

  return (
    <ThemeProvider theme={themes.dark}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
