import { useState } from "react";
import { toast } from "sonner";

export function useRating() {
  const [ratingSelected, setRatingSelected] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelected = (value: number) => {
    setRatingSelected(value);
  };

  const handleSubmit = () => {
    if (ratingSelected === null) {
      toast.error("Seleccione una calificación");
      return;
    }
    // Aquí podrías añadir la lógica para guardar en localStorage o una BD
    // await saveRatingToDatabase(ratingSelected);
    setIsSubmitted(true);
    toast.success("Rating submitted successfully");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setRatingSelected(null);
  };

  // El hook devuelve todo lo que la vista necesita
  return {
    ratingSelected,
    isSubmitted,
    handleRatingSelected,
    handleSubmit,
    handleReset,
  };
}
