import { Outlet, NavLink } from "react-router-dom";

export default function EjerciciosLayout() {
  // Estilos para los enlaces de navegación, incluyendo el estado activo
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md transition-colors text-sm ${
      isActive
        ? "bg-violet-700 text-white font-semibold"
        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
    }`;

  return (
    <>
      {/* HEADER FIJO */}
      {/* Lo sacamos del div principal y le damos un fondo para que el contenido no se vea a través de él. */}
      {/* top-16 lo posiciona debajo de la navegación principal de RootLayout. */}
      <header
        className="fixed top-10 left-0 right-0 z-10 flex flex-col gap-4 p-4
      backdrop-blur-sm"
      >
        <h1 className="text-3xl font-bold text-violet-300">
          Galería de Ejercicios
        </h1>
        <nav className="flex flex-wrap gap-3">
          {/* Usamos NavLink para que sepa cuál es la ruta activa */}
          <NavLink to="/ejercicios/apply" className={navLinkClasses}>
            Uso de Apply
          </NavLink>
          <NavLink
            to="/ejercicios/Ejercicios-varios"
            className={navLinkClasses}
          >
            Ejercicios Varios
          </NavLink>
          <NavLink to="/ejercicios/grid-flex" className={navLinkClasses}>
            Grid & Flex
          </NavLink>
          <NavLink to="/ejercicios/medidas" className={navLinkClasses}>
            Medidas
          </NavLink>
          <NavLink to="/ejercicios/responsive" className={navLinkClasses}>
            Responsive
          </NavLink>
          <NavLink to="/ejercicios/pseudos" className={navLinkClasses}>
            Pseudo-Clases
          </NavLink>
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL CON PADDING SUPERIOR */}
      {/* El padding-top (pt-48) debe ser suficiente para compensar la altura del header fijo + la barra de nav principal */}
      <div className="w-full pt-48">
        <Outlet />
      </div>
    </>
  );
}
