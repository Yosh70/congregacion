import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const Frontend = () => {
  return (
    <>
      <Header />
      <main style={{ border: "1px solid blue" }}>
        <Container>Frontend Ejemplo</Container>
      </main>
      <Footer />
    </>
  );
};

export default Frontend;
