import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import File from "../Pages/File";
import NotFound from "../Pages/NotFound";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file/:id" element={<File />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes