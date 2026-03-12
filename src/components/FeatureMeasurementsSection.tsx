import { useState, useEffect } from "react";
import dashboardVariants from "@/assets/VERSION 1.jpg";
import dashboardVariants2 from "@/assets/VERSION 2.jpg";
import { useInView } from "react-intersection-observer";

const FeatureMeasurementsSection = ({ t }) => {
  const images = [dashboardVariants, dashboardVariants2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Configuramos el observador
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // Agregamos ref y overflow-hidden
    <section
      ref={ref}
      className="py-10 md:py-28 bg-transparent overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto (Izquierda) 
              Efecto: Entra desde abajo flotando suavemente */}
          <div
            className={`order-1 transition-all ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDuration: "1.5s",
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {t.title.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              {t.desc.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Imagen Rotativa (Derecha) 
              Efecto: Desliza desde la derecha con delay */}
          <div
            className={`order-2 flex justify-center lg:justify-end transition-all ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.4s",
            }}
          >
            <div className="relative w-11/12 lg:w-full">
              <img
                src={images[currentImageIndex]}
                alt="Variantes de armado"
                className="relative lg:min-h-[500px] shadow-2xl w-full border border-white/5 object-cover"
              />

              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMeasurementsSection;
