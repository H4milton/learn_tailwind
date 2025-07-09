export type CardBackground = "purple-100" | "grey-400" | "white" | "dark-blue";

export interface Testimonial {
  image?: string;
  name: string;
  title: string;
  text: string;
  subText: string;
  background: CardBackground;
  cardClasses: string; // Añadido para la inyección directa de clases
  gridSpan?: string;
}
