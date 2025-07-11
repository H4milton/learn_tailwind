//Importamos imagenes de la seccion social de comentarios
// import image1 from "./images/image-daniel.jpg";
import colton_img from "../../assets/img/proyecto4/image-colton.jpg";
import irene_img from "../../assets/img/proyecto4/image-irene.jpg";
import anne_img from "../../assets/img/proyecto4/image-anne.jpg";
import CardRating from "./CardRating";
import CardTestimonial from "./CardTestimonial";

const ratings = [
  {
    rating: 5,
    rated_by: "Rated 5 Stars in Reviews",
  },
  {
    rating: 3,
    rated_by: "Rated 5 Stars in Report Guru",
  },
  {
    rating: 2,
    rated_by: "Rated 5 Stars in BestTech",
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
      <div className="mt-20 lg:mx-50">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-4 lg:w-1/2 justify-center">
            <h1 className="font-bold mb-4 text-center">
              10,000+ of our users love our products.
            </h1>
            <p className="text-sm mb-4 text-center">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="mb-6 flex flex-col gap-4 lg:w-2/3">
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
      </div>
    </>
  );
}
