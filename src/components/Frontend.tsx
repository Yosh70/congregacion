import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Frontend = () => {
  return (
    <>
      <Header />
      <main style={{ border: "1px solid blue" }}>
        <Container>Frontend Ejemplo</Container>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Frontend;
