"use client";

import type { ThankYouProps } from "../proyecto2/types/types";
import { motion } from "framer-motion";

export default function ThankYou({ rating, onReset }: ThankYouProps) {
  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <motion.div
      className="rounded-2xl gradient-background p-8 w-[347px] grid place-items-center text-center gap-y-2"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <img
        className="mb-2"
        src="/img/proyecto2/images/illustration-thank-you.svg"
        alt="Thank You Illustration"
      />
      <p className="font-light text-sm bg-gray-700 py-1 px-4 rounded-full text-Orange-500">
        Seleccionaste {rating} de 5
      </p>
      <h2 className="font-bold text-2xl pt-4">Muchas gracias!</h2>
      <p className="font-light text-sm text-gray-400">
        Agradecemos que te hayas tomado el tiempo de calificarnos. Si necesitas
        más ayuda, no dudes en contactarnos.
      </p>
      <button
        onClick={onReset}
        className="mt-4 text-gray-400 hover:text-Orange-500 text-lg"
      >
        Calificar nuevamente
      </button>
    </motion.div>
  );
}
