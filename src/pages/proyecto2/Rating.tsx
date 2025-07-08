"use client";

import { useRating } from "./../proyecto2/hooks/useRating"; // 1. Importamos nuestro hook personalizado
import RatingButton from "./RatingButton";
import ThankYou from "./ThankYou";

export default function Rating() {
  // 2. Usamos el hook para obtener toda la lógica y el estado
  const {
    ratingSelected,
    isSubmitted,
    handleRatingSelected,
    handleSubmit,
    handleReset,
  } = useRating();

  const valueRatings = [1, 2, 3, 4, 5];

  // 3. La lógica de renderizado condicional permanece aquí, ya que es parte de la vista
  if (isSubmitted) {
    return <ThankYou rating={ratingSelected!} onReset={handleReset} />;
  }

  return (
    <>
      <div className="rounded-2xl gradient-background p-6 w-[347px]">
        <div className="bg-gray-700 rounded-full size-10 grid place-items-center p-2 mb-4">
          <img
            src="../../../public/img/proyecto2/images/icon-star.svg"
            alt="icon-star"
          />
        </div>

        <h1 className="font-bold mb-4">How did we do?</h1>
        <p className="font-light text-sm text-gray-400 mb-4">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering! 1
        </p>
        <div className="flex place-content-between gap-x-4 my-5">
          {valueRatings.map((rating) => (
            <RatingButton
              key={rating}
              value={rating}
              onClick={() => handleRatingSelected(rating)}
              isSelected={ratingSelected === rating}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-Orange-500 text-white rounded-full py-2 font-semibold hover:bg-white hover:text-Orange-500 cursor-pointer w-full text-sm tracking-widest uppercase transition-colors duration-200"
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}
