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

export default function CardTestimonial({
  testimonial: testimonial,
}: TestimonialProps) {
  return (
    <div
      className={`flex flex-col bg-very-dark-magenta p-6 rounded-lg text-white ${testimonial.classProps}`}
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
    </div>
  );
}
