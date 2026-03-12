import micrositePreview from "@/assets/MICROSITIO-q59.jpg";

// Recibimos t
const MicrositeSection = ({ t }) => {
  return (
    // 1. Fondo transparente
    <section className="py-10 md:py-28 bg-transparent">
      <div className="container">
        {/* 2. Subtítulo: Punto y color celeste */}
        <div className="mb-4">
          <span className="text-[#38bdf8] text-lg  font-bold tracking-wider uppercase">
            . {t.sectionTitle}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {t.title.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>
            {/* 3. Texto claro (gris casi blanco) */}
            <p className="text-white font-semibold text-lg leading-relaxed">
              {t.desc.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Image */}
          <div className="order-2 flex-1">
            <div className="relative">
              {/* 4. Limpieza: Borde azul claro y sombra suave */}
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
