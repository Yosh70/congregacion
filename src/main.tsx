import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Demo from "./components/Demo";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
