import backgroundTopPhone from "../../../public/img/proyecto4/images/bg-pattern-top-mobile.svg";
import backgroundBottomPhone from "../../../public/img/proyecto4/images/bg-pattern-bottom-mobile.svg";
import backgroundTopDesktop from "../../../public/img/proyecto4/images/bg-pattern-top-desktop.svg";
import backgroundBottomDesktop from "../../../public/img/proyecto4/images/bg-pattern-bottom-desktop.svg";

export default function Background() {
  return (
    <div>
      <picture className="absolute top-0 left-0 -z-1">
        {/* Si colocamos top-0 y bottom-0 en la imagen, la imagen se desplaza verticalmente y se sale del div padre, a menos que usemos relative en el elemento donde quieres que use como referencia o que sea su elemento padre */}
        <source srcSet={backgroundTopPhone} media="(max-width: 375px)" />
        <source srcSet={backgroundTopDesktop} media="(min-width: 375px)" />
        <img src={backgroundTopPhone} alt="backgroundTopPhone" />
      </picture>

      <picture className="absolute bottom-0 right-0 -z-1">
        <source srcSet={backgroundBottomPhone} media="(max-width: 375px)" />
        <source srcSet={backgroundBottomDesktop} media="(min-width: 375px) " />
        <img src={backgroundBottomPhone} alt="backgroundTopPhone" />
      </picture>
    </div>
  );
}
