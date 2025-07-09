import type { CardBackground, Testimonial } from "./types";
import { motion } from "framer-motion";

interface CardTestimonialProps {
  testimonial: Testimonial;
}

// MÉTODO 1: Mapeo de clases. Ideal para abstraer la lógica de estilos.
const quoteClasses: Record<CardBackground, string> = {
  "purple-100": "text-white/70",
  "grey-400": "text-white/70",
  white: "text-gray-500",
  "dark-blue": "text-white/70",
};

// Variantes para cada tarjeta individual.
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function CardTestimonial({ testimonial }: CardTestimonialProps) {
  const quoteColorClass = quoteClasses[testimonial.background];

  return (
    <motion.article
      className={`rounded-lg shadow-xl p-8 flex flex-col gap-4 ${testimonial.cardClasses} ${testimonial.gridSpan} cursor-pointer`} // MÉTODO 2: Inyección directa de clases desde los datos.
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <header className="flex gap-4 items-center">
        {testimonial.image && (
          <img
            className="rounded-full size-10 border-2 border-white/50"
            src={testimonial.image}
            alt={`Foto de ${testimonial.name}`} // Atributo alt para accesibilidad
          />
        )}
        <div className="text-sm">
          <h2 className="font-semibold">{testimonial.name}</h2>
          <p className="opacity-50">{testimonial.title}</p>
        </div>
      </header>

      <h3 className="text-xl font-semibold">{testimonial.text}</h3>
      <blockquote className={`text-sm ${quoteColorClass}`}>
        <p>"{testimonial.subText}"</p>
      </blockquote>
    </motion.article>
  );
}
