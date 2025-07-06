import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Ejercicio1 from "./pages/ejercicios/Ejercicio1.tsx";
// import Medidas from "./pages/ejercicios/Medidas.tsx";
// import GridFlex from "./pages/ejercicios/GridFlex.tsx";
import Responsive1 from "./pages/proyecto1/Responsive1.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-linear-to-r from-[#fcf9e7] to-[#fffae2] h-screen font-sans font-light text-2xl p-6">
      {/* <Ejercicio1 /> */}
      {/* <Medidas /> */}
      {/* <GridFlex /> */}
      <Responsive1 />
    </div>
  </StrictMode>
);
