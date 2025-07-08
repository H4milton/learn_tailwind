import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Ejercicio1 from "./pages/ejercicios/Ejercicio1.tsx";
// import Medidas from "./pages/ejercicios/Medidas.tsx";
// import GridFlex from "./pages/ejercicios/GridFlex.tsx";
import Responsive1 from "./pages/proyecto1/Responsive1.tsx";
import Seudos from "./pages/ejercicios/Seudos.tsx";
import Apply from "./pages/ejercicios/Apply.tsx";
import PreviewCard from "./pages/proyecto1/PreviewCard.tsx";
import Rating from "./pages/proyecto2/Rating.tsx";
import ThankYou from "./pages/proyecto2/ThankYou.tsx";
import GridFlex from "./pages/ejercicios/GridFlex.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="font-Outfit font-normal text-2xl p-6 bg-Blue-950-main-BG text-white min-h-screen grid grid-cols-1 gap-y-8 place-content-center place-items-center">
      <Toaster richColors />
      {/* <Ejercicio1 /> */}
      {/* <Medidas /> */}
      {/* <GridFlex /> */}
      {/* <Responsive1 /> */}
      {/* <Seudos /> */}
      {/* <Apply /> */}
      {/* <PreviewCard/> */}
      <Rating />
    </main>
  </StrictMode>
);
