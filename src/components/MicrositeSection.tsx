import micrositePreview from "@/assets/MICROSITIO-q59.jpg";
// 1. Importamos el hook
import { useInView } from "react-intersection-observer";

const MicrositeSection = ({ t }) => {
  // 2. Configuramos el observador
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    // Agregamos ref y overflow-hidden
    <section
      ref={ref}
      className="py-10 md:py-28 bg-transparent overflow-hidden"
    >
      <div className="container">
        {/* Subtítulo: Lo animamos para que aparezca primero */}
        <div
          className={`mb-6 transition-all ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{
            transitionDuration: "1s", // Este es cortito para que aparezca rápido
          }}
        >
          <span className="text-[#38bdf8] text-lg md:text-2xl font-bold tracking-wider ">
            . {t.sectionTitle}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Text Content 
              Efecto: Entra desde la izquierda */}
          <div
            className={`order-1 transition-all ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.2s",
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
            <p className="text-white font-semibold text-lg leading-relaxed">
              {t.desc.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Image 
              Efecto: Zoom sutil desde el fondo */}
          <div
            className={`order-2 flex-1 transition-all ease-out ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.4s",
            }}
          >
            <div className="relative">
              <img
                src={micrositePreview}
                alt="Vista previa del micrositio"
                className="relative shadow-xl w-full border-2 border-[#38bdf8] lg:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrositeSection;
