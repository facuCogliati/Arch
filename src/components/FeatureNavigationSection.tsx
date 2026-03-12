import phoneMockup from "@/assets/CELU HD.png";
import laptopMockup from "@/assets/laptop con pantalla.png";
import { useInView } from "react-intersection-observer";

const FeatureNavigationSection = ({ t }) => {
  // Configuramos el observador
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Arranca cuando se ve el 20%
  });

  return (
    // Agregamos ref y overflow-hidden para que el efecto lateral no rompa la pantalla
    <section
      ref={ref}
      className="py-10 md:py-28 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* --------------------
              Columna 1 (Desktop): Celular
              Efecto: Entra desde la izquierda
              -------------------- */}
          <div
            className={`order-2 lg:order-1 flex justify-center lg:justify-end transition-all ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{
              transitionDuration: "1.5s",
            }}
          >
            <div className="relative">
              <img
                src={phoneMockup}
                alt="Aplicación móvil ArchVisualizer"
                // ACÁ ESTÁ EL CAMBIO: Bajamos de max-w-[220px] a max-w-[160px] para móviles
                className="relative max-w-[160px] md:max-w-[260px] rounded-[2.5rem] border-[4px] border-black/80 shadow-2xl animate-float"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 87%, transparent 90%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom, black 87%, transparent 90%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* --------------------
              Columna 2 (Desktop): Laptop
              Efecto: Zoom sutil desde el centro (con delay)
              -------------------- */}
          <div
            className={`order-3 lg:order-2 flex justify-center transition-all ease-out ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.3s",
            }}
          >
            <div className="relative">
              <img
                src={laptopMockup}
                alt="Aplicación web ArchVisualizer en Laptop"
                className="relative w-full max-w-[320px] md:max-w-[400px] shadow-2xl animate-float"
                style={{
                  animationDelay: "0.5s", // Esto es para el flotado continuo, no toca nuestra animación de entrada
                }}
              />
            </div>
          </div>

          {/* --------------------
              Columna 3 (Desktop): Texto
              Efecto: Entra desde la derecha (con más delay)
              -------------------- */}
          <div
            className={`order-1 lg:order-3 text-center lg:text-left transition-all ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.6s",
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
        </div>
      </div>
    </section>
  );
};

export default FeatureNavigationSection;
