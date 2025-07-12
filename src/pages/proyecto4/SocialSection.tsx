//Importamos imagenes de la seccion social de comentarios
// import image1 from "./images/image-daniel.jpg";
import colton_img from "../../assets/img/proyecto4/image-colton.jpg";
import irene_img from "../../assets/img/proyecto4/image-irene.jpg";
import anne_img from "../../assets/img/proyecto4/image-anne.jpg";
import CardRating from "./CardRating";
import CardTestimonial from "./CardTestimonial";
import Background from "./Background";
import { motion } from "framer-motion";

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

const ratings = [
  {
    rating: 5,
    rated_by: "Rated 5 Stars in Reviews",
    classProps: "lg:self-start",
  },
  {
    rating: 3,
    rated_by: "Rated 5 Stars in Report Guru",
    classProps: "lg:self-center",
  },
  {
    rating: 2,
    rated_by: "Rated 5 Stars in BestTech",
    classProps: "lg:self-end",
  },
];

const ratings_testimonial = [
  {
    image: colton_img,
    name: "Colton Smith",
    verified: "Verified Buyer",
    testimonial:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    classProps: "lg:self-start ",
  },
  {
    image: irene_img,
    name: "Irene Roberts",
    verified: "Verified Buyer",
    testimonial:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    classProps: "lg:self-center",
  },
  {
    image: anne_img,
    name: "Anne Wallace",
    verified: "Verified Buyer",
    testimonial:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    classProps: "lg:self-end",
  },
];

export default function SocialSection() {
  return (
    <>
      {/* Relative hace que los elementos con propiedad absolute tomen como referencia el elemento con la propiedad relative */}
      <motion.div
        className="mt-20 lg:mx-30 z-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Background />
        <div className="flex flex-col gap-4 xl:flex-row lg:gap-6 mb-5">
          <div className="flex flex-col gap-4 justify-center lg:flex-1">
            <h1 className="font-bold mb-4 text-center lg:text-left lg:text-3xl lg:w-3xs">
              10,000+ of our users love our products..
            </h1>
            <p className="text-sm mb-4 text-center lg:text-left lg:text-1xs lg:w-[500px]">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[400px] justify-center">
            {ratings.map((rating) => (
              <CardRating key={rating.rated_by} rating={rating} />
            ))}
          </div>
        </div>

        {/* <div className="my-6 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:h-[230px]"> */}
        {/* Usamos un grid para los testimonios. En pantallas grandes, cada tarjeta se desplaza un poco hacia abajo. */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 lg:h-[230px]">
          {ratings_testimonial.map((testimonial) => (
            <CardTestimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </motion.div>
    </>
  );
}
