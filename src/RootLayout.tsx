import { Outlet, Link } from "react-router-dom";
import { Toaster } from "sonner";

export default function RootLayout() {
  return (
    <>
      {/* Puedes tener una barra de navegación aquí para moverte entre proyectos */}
      {/* 1. Añadimos un z-index (z-20) más alto que el del sub-menú (z-10). */}
      {/* 2. Corregimos el posicionamiento para que ocupe el ancho completo sin desbordar. */}
      {/* 3. Añadimos un poco de padding y un borde para un mejor diseño. */}
      <nav className="fixed top-0 left-0 right-0 z-20 flex gap-4  p-4 backdrop-blur-sm ">
        <div className="flex gap-6">
          <Link to="/proyecto1" className="hover:underline text-violet-300">
            Proyecto 1
          </Link>
          <Link to="/proyecto2" className="hover:underline text-violet-300">
            Proyecto 2
          </Link>
          <Link to="/proyecto3" className="hover:underline text-violet-300">
            Proyecto 3
          </Link>
          <Link to="/proyecto4" className="hover:underline text-violet-300">
            Proyecto 4
          </Link>
          <Link to="/ejercicios" className="hover:underline text-violet-300">
            Ejercicios
          </Link>
        </div>
      </nav>

      <main className="font-Outfit font-normal text-2xl p-6 text-white min-h-screen flex items-center justify-center w-full bg-Blue-950-main-BG">
        <Toaster richColors />
        <Outlet />
      </main>
    </>
  );
}
