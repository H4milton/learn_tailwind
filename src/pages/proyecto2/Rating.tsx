"use client";

import { useRating } from "./../proyecto2/hooks/useRating"; // 1. Importamos nuestro hook personalizado
import RatingButton from "./RatingButton";
import ThankYou from "./ThankYou";
import { motion, AnimatePresence } from "framer-motion"; // 1. Importa motion y AnimatePresence

export default function Rating() {
  // 2. Usamos el hook para obtener toda la lógica y el estado
  const {
    ratingSelected,
    isSubmitted,
    handleRatingSelected,
    handleSubmit,
    handleReset,
  } = useRating();

  // Opcional: define las variantes de animación para no repetir código
  const cardVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const valueRatings = [1, 2, 3, 4, 5];

  // // 3. La lógica de renderizado condicional permanece aquí, ya que es parte de la vista
  // if (isSubmitted) {
  //   return <ThankYou rating={ratingSelected!} onReset={handleReset} />;
  // }

  return (
    // 2. Envuelve la lógica condicional con AnimatePresence
    // mode="wait" espera a que la animación de salida termine antes de empezar la de entrada.
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        // 4. Asegúrate de que ThankYou también sea un componente de motion y tenga una key
        <ThankYou
          key="thank-you-card"
          rating={ratingSelected!}
          onReset={handleReset}
        />
      ) : (
        // 3. Convierte el div principal en un motion.div y añade las props de animación y una key
        <motion.div
          key="rating-card"
          className="rounded-2xl gradient-background p-6 w-[347px]"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* El resto de tu JSX para la tarjeta de calificación va aquí... */}
          <div className="bg-gray-700 rounded-full size-10 grid place-items-center p-2 mb-4">
            <img
              src="../../../public/img/proyecto2/images/icon-star.svg"
              alt="icon-star"
            />
          </div>
          <h1 className="font-bold mb-4">How did we do?</h1>
          <p className="font-light text-sm text-gray-400 mb-4">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex place-content-between gap-x-4 my-5">
            {valueRatings.map((ratingValue) => {
              const isSelected = ratingSelected === ratingValue;
              const isHighlighted =
                ratingSelected !== null && ratingValue <= ratingSelected;
              return (
                <RatingButton
                  key={ratingValue}
                  value={ratingValue}
                  onClick={() => handleRatingSelected(ratingValue)}
                  isSelected={isSelected}
                  isHighlighted={isHighlighted}
                />
              );
            })}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-Orange-500 text-white rounded-full py-2 font-semibold hover:bg-white hover:text-Orange-500 cursor-pointer w-full text-sm tracking-widest uppercase transition-colors duration-200"
          >
            SUBMIT
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
