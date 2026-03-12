import apartmentView from "@/assets/Feature-section.jpg";
// 1. Importamos el hook
import { useInView } from "react-intersection-observer";

const Feature3DSection = ({ t }) => {
  // 2. Configuramos el observador
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Se dispara cuando el 20% del elemento es visible
  });

  return (
    <section
      id="features"
      // 3. Le pasamos la "ref" a la sección padre
      ref={ref}
      className="pt-8 md:pt-16 pb-100 md:pb-32 bg-transparent overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Columna de Texto: Tiempos en el atributo style */}
          <div
            className={`order-1 transition-all ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDuration: "1.5s",
            }}
          >
            <div className="mb-6">
              <span className="text-[#38bdf8] text-lg md:text-2xl font-bold tracking-wider ">
                . {t.sectionTitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.card1Title.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg">
              {t.card1Desc.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Columna de Imagen: Duración y Delay en el atributo style para la cascada */}
          <div
            className={`order-2 flex-1 lg:mt-[50px] transition-all ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.4s",
            }}
          >
            <div className="relative">
              <img
                src={apartmentView}
                alt="Vista 3D de apartamento"
                className="relative lg:min-h-[600px]  shadow-2xl w-full border border-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3DSection;
