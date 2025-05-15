import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Frontend from "./components/Frontend";
import Home from "./pages/Home";
import Acomodadores from "./pages/Acomodadores";
import Error404 from "./pages/Error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [
      {
        index: true,
        element: <Home />,
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
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
