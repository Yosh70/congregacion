import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import Error404 from "./pages/Error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Acomodadores from "./pages/Acomodadores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/acomodadores",
        element: <Acomodadores />,
        errorElement: <Error404 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router}></RouterProvider>
    </StyledEngineProvider>
  </StrictMode>
);
