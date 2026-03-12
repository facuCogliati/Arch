import phoneMockup from "@/assets/CELU HD.png";
import laptopMockup from "@/assets/LAPTOP HD.png";

// Recibimos la prop "t" (que va a ser t.explorationNav)
const FeatureNavigationSection = ({ t }) => {
  return (
    // 1. FONDO TRANSPARENTE
    <section className="py-10 md:py-28 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Cambiamos de lg:grid-cols-2 a lg:grid-cols-3 y ajustamos la alineación vertical a 'center' */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* --------------------
              Columna 1: Laptop
              -------------------- */}
          <div className="order-3 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src={laptopMockup}
                alt="Aplicación web ArchVisualizer en Laptop"
                // La laptop suele necesitar un poco más de ancho que el celu
                className="relative w-full max-w-[320px] md:max-w-[400px] shadow-2xl animate-float"
                style={{
                  // TIP: Retrasamos la animación para que el celu y la laptop no floten exactamente al mismo tiempo
                  animationDelay: "0.5s",
                }}
              />
            </div>
          </div>

          {/* --------------------
              Columna 2: Celular
              -------------------- */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={phoneMockup}
                alt="Aplicación móvil ArchVisualizer"
                // Reduje un poco el max-w para que respire mejor en las 3 columnas
                className="relative max-w-[220px] md:max-w-[260px] rounded-[2.5rem] border-[8px] border-black/80 shadow-2xl animate-float"
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
              Columna 3: Texto
              -------------------- */}
          <div className="order-1 lg:order-3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {/* Iteramos sobre el título para inyectar los <br /> */}
              {t.title.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-white font-semibold text-lg leading-relaxed">
              {/* Iteramos sobre la descripción para inyectar los <br /> */}
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
