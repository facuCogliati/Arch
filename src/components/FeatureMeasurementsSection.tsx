import { useState, useEffect } from "react";
import dashboardVariants from "@/assets/VERSION 1.jpg";
import dashboardVariants2 from "@/assets/VERSION 2.jpg";

// 1. Recibimos "t"
const FeatureMeasurementsSection = ({ t }) => {
  const images = [dashboardVariants, dashboardVariants2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-10 md:py-28 bg-transparent">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto (Izquierda) */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {/* Leemos los \n del título y ponemos <br /> */}
              {t.title.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              {/* Leemos los \n de la descripción y ponemos <br /> */}
              {t.desc.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Imagen Rotativa (Derecha) */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-11/12 lg:w-full">
              <img
                src={images[currentImageIndex]}
                alt="Variantes de armado"
                className="relative lg:min-h-[500px] shadow-2xl w-full border border-white/5 object-cover"
              />

              {/* Opcional: Indicadores (puntos) para saber que hay más fotos */}
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
