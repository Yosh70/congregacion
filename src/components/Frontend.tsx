import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Rutas from "../Rutas";

const Frontend = () => {
  return (
    <>
      <Header />
      <main style={{ border: "1px solid blue" }}>
        <Container>Frontend Ejemplo</Container>
        <Rutas></Rutas>
      </main>
      <Footer />
    </>
  );
};

export default Frontend;
