import { useState, useEffect } from "react";
import dashboardVariants from "@/assets/dashboard-variants.jpg";
// Si tienes la segunda imagen real, impórtala aquí:
// import dashboardVariants2 from "@/assets/dashboard-variants-2.jpg";

const FeatureMeasurementsSection = () => {
  // 1. Array de imágenes a rotar
  // (Si tienes la segunda imagen real, reemplaza la segunda 'dashboardVariants' por 'dashboardVariants2')
  const images = [
    dashboardVariants,
    dashboardVariants, // Pon aquí tu segunda imagen
  ];

  // 2. Estado para saber qué índice mostrar (0 o 1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3. Efecto para rotar cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        // Si estamos en la última, volvemos a 0, si no, sumamos 1
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // 4000ms = 4 segundos

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto (Izquierda) */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Medidas por Ambiente
              <br />y Variantes de Armado
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Dimensiones precisas
              <br />
              y alternativas de configuración disponibles
              <br />
              cuando el proyecto lo requiere.
            </p>
          </div>

          {/* Imagen Rotativa (Derecha) */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-11/12 lg:w-full">
              <img
                src={images[currentImageIndex]}
                alt="Variantes de armado"
                className="relative rounded-lg shadow-2xl w-full border border-white/5 object-cover"
                // 'object-cover' asegura que si las imagenes tienen distinto tamaño, llenen el espacio igual
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
