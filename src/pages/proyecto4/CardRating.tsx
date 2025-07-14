import { motion, type Variants } from "framer-motion";
// Variantes para cada tarjeta individual.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120, // Un poco más rígido que el default
      damping: 15, // Con un poco más de freno
    },
  },
};

import type { Rating } from "./types";
interface RatingProps {
  rating: Rating;
}

export default function CardRating({ rating }: RatingProps) {
  return (
    <motion.div
      className={`flex flex-col gap-4 mt-4 items-center bg-light-grayish-magenta py-2 rounded-lg xl:w-[350px] lg:flex-row lg:justify-center ${rating.classProps}`}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex gap-2 items-center mb-0">
        {/* 
          1. Creamos un array vacío con una longitud igual a `rating.rating`.
          2. Usamos .map() para iterar sobre ese array.
          3. Por cada elemento, renderizamos un componente <img>.
        */}
        {Array.from({ length: rating.rating }).map((_, index) => (
          <img
            key={index}
            src="/public/img/proyecto4/images/icon-star.svg"
            className="size-[10px]"
            alt="Star"
          />
        ))}
      </div>
      <p className="text-sm font-bold text-very-dark-magenta">
        {rating.rated_by}
      </p>
    </motion.div>
  );
}
