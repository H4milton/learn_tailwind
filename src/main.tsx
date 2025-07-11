import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// 1. Importación de todos los componentes que actuarán como páginas.
// Layouts
import RootLayout from "./RootLayout.tsx";
import EjerciciosLayout from "./pages/ejercicios/EjerciciosLayout.tsx";

// Ejercicios
import GridFlex from "./pages/ejercicios/GridFlex.tsx";
import Medidas from "./pages/ejercicios/Medidas.tsx";
import Seudos from "./pages/ejercicios/Seudos.tsx";
import Responsive1 from "./pages/ejercicios/Responsive1.tsx";
import Apply from "./pages/ejercicios/Apply.tsx";
import Ejercicio1 from "./pages/ejercicios/Ejercicio1.tsx";

// Proyectos
import PreviewCard from "./pages/proyecto1/PreviewCard.tsx";
import Rating from "./pages/proyecto2/Rating.tsx";
import TestimonialsGrid from "./pages/proyecto3/TestimonialsGrid.tsx";
import SocialSection from "./pages/proyecto4/SocialSection.js";


//Definimos las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "proyecto1",
        element: <PreviewCard />,
      },
      {
        path: "proyecto2",
        element: <Rating />,
      },
      {
        path: "proyecto3",
        element: <TestimonialsGrid />,
      },
      {
        path: "proyecto4",
        element: <SocialSection />,
      },
      {
        path: "ejercicios",
        element: <EjerciciosLayout />,
        children: [
          { index: true },
          // { index: true, element: <GridFlex /> },
          { path: "apply", element: <Apply /> },
          { path: "Ejercicios-varios", element: <Ejercicio1 /> },
          { path: "grid-flex", element: <GridFlex /> },
          { path: "medidas", element: <Medidas /> },
          { path: "pseudos", element: <Seudos /> },
          { path: "responsive", element: <Responsive1 /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //
  // </StrictMode>
  <StrictMode>{<RouterProvider router={router} />}</StrictMode>
);
