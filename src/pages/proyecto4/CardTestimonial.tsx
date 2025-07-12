import { motion, type Variants } from "framer-motion";
interface testimonial {
  image: string; // La imagen será una ruta (string) que obtenemos al importar el archivo
  name: string;
  verified: string;
  testimonial: string;
  classProps: string;
}

interface TestimonialProps {
  testimonial: testimonial;
}

// Variantes para cada tarjeta individual.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8, // Durará exactamente 0.8 segundos
      ease: "easeOut", // Empezará y terminará suavemente
    },
  },
};

export default function CardTestimonial({
  testimonial: testimonial,
}: TestimonialProps) {
  return (
    <motion.div
      className={`flex flex-col bg-very-dark-magenta p-6 rounded-lg text-white ${testimonial.classProps}`}
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      <div className="flex gap-4 items-center mb-4">
        <img
          className="rounded-full size-10 border-2 border-soft-pink/50"
          src={testimonial.image}
          alt={`Foto de ${testimonial.name}`} // Atributo alt para accesibilidad
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-base">{testimonial.name}</h2>
          <p className="text-sm text-soft-pink">{testimonial.verified}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed">"{testimonial.testimonial}"</p>
    </motion.div>
  );
}
