import { useState, useEffect } from "react";
import dashboardVariants from "@/assets/VERSION 1.jpg";
import dashboardVariants2 from "@/assets/VERSION 2.jpg";
import { useInView } from "react-intersection-observer";

// 1. Movemos el arreglo fuera del componente para no recrearlo en cada render
const images = [dashboardVariants, dashboardVariants2];

const FeatureMeasurementsSection = ({ t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  }, []); // Ya no dependemos de images.length porque está fuera del componente

  return (
    <section
      ref={ref}
      className="py-10 md:py-28 bg-transparent overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto (Izquierda) */}
          <div
            className={`order-1 transition-all ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1.5s" }}
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

          {/* Imagen Rotativa (Derecha) */}
          <div
            className={`order-2 flex justify-center lg:justify-end transition-all ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.4s",
            }}
          >
            {/* 2. Damos un alto mínimo al contenedor para evitar que colapse por el position absolute */}
            <div className="relative w-11/12 lg:w-full min-h-[300px] lg:min-h-[500px]">
              {/* 3. Mapeamos TODAS las imágenes para que ya estén en el DOM */}
              {images.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`Variante de armado ${idx + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover shadow-2xl border border-white/5  ${
                    idx === currentImageIndex ? "block" : "hidden"
                  }`}
                />
              ))}

              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
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
