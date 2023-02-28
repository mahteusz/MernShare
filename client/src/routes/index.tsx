import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import File from "../Pages/File";
import Modal from "../components/Modal";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file/:id" element={<File />} />
        <Route path="/test" element={<Modal children={<h1>olá</h1>}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes