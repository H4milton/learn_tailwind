#Notas
**Todas las imágenes cargados en src/assets se cargan mediante import.**
//1. En types se definen los tipos de datos que se usarán en el proyecto.
import type { StaticImageData } from "next/image";
export type CardBackground =
| "purple-100"
| "grey-400"
| "white"
| "dark-blue";

export interface Testimonial {
image: StaticImageData; // Cambiamos 'string' por 'StaticImageData'
background: CardBackground;
}

//2. importamos las imágenes y los asignamos a las propiedades de la interfaz.
import image1 from "./images/image-daniel.jpg";
import image2 from "./images/image-jonathan.jpg";

const testimonialsData: Testimonial[] = [
{
image: "/public/img/proyecto3/images/image-daniel.jpg",
image: imageDaniel,
name: "Daniel Clifford",
"...": "...",
}

//3. En el componente se usan las imágenes de la interfaz.
<Image
className="rounded-full size-10 border-2 border-white/50"
src={testimonial.image}
alt={`Foto de ${testimonial.name}`} // Atributo alt para accesibilidad
width={40}
height={40}
/>
