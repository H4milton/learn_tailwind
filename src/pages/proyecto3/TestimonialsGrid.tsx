import CardTestimonial from "./CardTestimonial";
import { motion } from "framer-motion";
import type { Testimonial } from "./types";

// Variantes para el contenedor de la grilla.
// Controlará la animación de sus hijos.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Pequeño retraso entre la animación de cada tarjeta
    },
  },
};

const testimonialsData: Testimonial[] = [
  {
    image: "/public/img/proyecto3/images/image-daniel.jpg",
    name: "Daniel Clifford",
    title: "Verified Graduate",
    text: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    subText:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    background: "purple-100",
    cardClasses: "bg-violet-700 text-white",
    gridSpan: "lg:col-span-2",
  },
  {
    image: "/public/img/proyecto3/images/image-jonathan.jpg",
    name: "Jonathan Walters",
    title: "Verified Graduate",
    text: "The team was very supportive and kept me motivated",
    subText:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
    background: "grey-400",
    cardClasses: "bg-gray-600 text-white",
    gridSpan: "", //NO colocamos lg:col-span-1, porque por defecto es 1
  },
  {
    image: "/public/img/proyecto3/images/image-jeanette.jpg", // Imagen que faltaba
    name: "John Smith",
    title: "Verified Graduate",
    text: "An overall wonderful and rewarding experience",
    subText:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    background: "white",
    cardClasses: "bg-white text-gray-800",
    gridSpan: "lg:row-start-2", //mp colocamos lg:col-span-1
  },
  {
    image: "/public/img/proyecto3/images/image-patrick.jpg",
    name: "Patrick Abrams",
    title: "Verified Graduate",
    text: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    subText:
      "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    background: "dark-blue",
    cardClasses: "bg-gray-900 text-white",
    gridSpan: "lg:col-span-2",
  },
  {
    image: "/public/img/proyecto3/images/image-kira.jpg", // Corregido: imgage -> image
    name: "Kira Whittle",
    title: "Verified Graduate",
    text: "Such a life-changing experience. Highly recommended!",
    subText:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    background: "white",
    cardClasses: "bg-white text-gray-800",
    gridSpan: "lg:col-start-4 lg:row-span-2 lg:row-start-1",
  },
];

export default function TestimonialsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {testimonialsData.map((testimonial) => (
        <CardTestimonial key={testimonial.name} testimonial={testimonial} />
      ))}
    </motion.div>
  );
}
