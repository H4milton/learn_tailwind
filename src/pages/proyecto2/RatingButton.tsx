"use client";
import type { RatingButtonProps } from "../proyecto2/types/types";
import { motion } from "framer-motion";

export default function RatingButton({
  value,
  onClick,
  isSelected,
  isHighlighted,
}: RatingButtonProps) {
  // // Las clases base siempre incluyen las transiciones
  // const baseClasses = "rounded-full size-10 grid place-items-center cursor-pointer font-semibold transition-colors duration-300";

  // // Lógica condicional para los estilos
  // const stateClasses = isSelected
  //   ? 'bg-Orange-500 text-white' // 1. Estilo si está seleccionado (máxima prioridad)
  //   : isHighlighted
  //     ? 'bg-gray-500 text-white'   // 2. Estilo si está resaltado pero no seleccionado
  //     : 'bg-gray-700 text-gray-400 hover:bg-slate-500 hover:text-white'; // 3. Estilo por defecto

  // return (
  //   <button onClick={onClick} className={`${baseClasses} ${stateClasses}`}>
  //     {value}
  //   </button>
  // );

  // Construimos el string de clases dinámicamente
  const buttonClasses = `
    relative rounded-full size-10 grid place-items-center cursor-pointer 
    font-semibold transition-colors duration-300
    ${isHighlighted ? "bg-gray-500" : "bg-gray-700 hover:bg-slate-500"}
    ${
      isHighlighted || isSelected
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }
  `;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {/* El círculo naranja animado. Solo aparece si isSelected es true. */}
      {isSelected && (
        <motion.div
          layoutId="circulo-activo"
          className="absolute inset-0 rounded-full bg-Orange-500"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {/* El número, con `relative` para que se muestre por encima del círculo. */}
      <span className="relative">{value}</span>
    </button>
  );
}
