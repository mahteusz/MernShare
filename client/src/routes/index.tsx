import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import File from "../Pages/File";
import InfoCard from "../components/InfoCard";
import Modal from "../components/Modal";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file/:id" element={<File />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes