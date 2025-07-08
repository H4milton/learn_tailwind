"use client";
import type { RatingButtonProps } from "../proyecto2/types/types";

export default function RatingButton({
  value,
  onClick,
  isSelected,
}: RatingButtonProps) {
  const baseClasses =
    "rounded-full size-10 grid place-content-center cursor-pointer font-bold text-sm transition-colors duration-200";

  const selectedClasses = "bg-Orange-500 text-white";
  const unselectedClasses =
    "bg-gray-700 text-gray-500 hover:bg-gray-500 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        isSelected ? selectedClasses : unselectedClasses
      }`}
    >
      {value}
    </button>
  );
}
