import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sobre-nosotros" element={<About></About>}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
