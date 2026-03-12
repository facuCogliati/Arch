import managementDashboard from "@/assets/ADMIN-q70.jpg";
// 1. Importamos el hook
import { useInView } from "react-intersection-observer";

const ManagementSection = ({ t }) => {
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
        <div className="flex md:flex-row flex-col gap-12 lg:gap-16">
          {/* Texto 
              Efecto: Cae suavemente desde arriba */}
          <div
            className={`transition-all ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
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

            <p className="text-white text-lg leading-relaxed font-semibold">
              {t.descPart1.split("\n").map((line, index, array) => (
                <span key={`p1-${index}`}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
              <span className="font-bold text-[#4ade80]">
                {t.descAvailable}
              </span>
              ,{" "}
              <span className="font-bold text-[#fbbf24]">{t.descReserved}</span>{" "}
              o <span className="font-bold text-gray-400">{t.descSold}</span>
              {t.descPart2.split("\n").map((line, index, array) => (
                <span key={`p2-${index}`}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Imagen 
              Efecto: Sube desde abajo con un poco de delay para completar la cascada */}
          <div
            className={`flex-1 w-full transition-all ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{
              transitionDuration: "1.5s",
              transitionDelay: "0.4s",
            }}
          >
            <div className="relative">
              <img
                src={managementDashboard}
                alt="Dashboard de gestión"
                className="relative shadow-2xl w-full border border-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
