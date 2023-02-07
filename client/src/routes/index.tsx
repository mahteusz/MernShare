import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Toggle from "../components/ThemeSwitcher";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes