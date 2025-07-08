"use client";

import type { ThankYouProps } from "../proyecto2/types/types";

export default function ThankYou({ rating, onReset }: ThankYouProps) {
  return (
    <>
      <div className="rounded-2xl gradient-background p-8 w-[347px] grid place-items-center text-center">
        <div className="flex justify-center mb-4">
          <img
            className="mb-2 w-[144px]"
            src="/img/proyecto2/images/illustration-thank-you.svg"
          />
        </div>
        <div className="flex justify-center my-4">
          <p className="font-light text-sm bg-gray-700 py-2 px-5 rounded-full text-Orange-500">
            You selected {rating} out of 5
          </p>
        </div>
        <h1 className="font-bold text-2xl mb-4">Thank you!</h1>
        <p className="font-light text-sm text-gray-400 text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
        <button
          onClick={onReset}
          className="bg-Orange-500 text-white rounded-full py-2 font-semibold hover:bg-white hover:text-Orange-500 cursor-pointer w-full text-sm tracking-widest uppercase transition-colors duration-200 my-4"
        >
          ENVIAR OTRA CALIFICACIÓN
        </button>
      </div>
    </>
  );
}
