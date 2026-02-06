import micrositePreview from "@/assets/microsite-preview.jpg";

const MicrositeSection = () => {
  return (
    // 1. Fondo transparente
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container">
        {/* 2. Subtítulo: Punto y color celeste */}
        <div className="mb-4">
          <span className="text-[#38bdf8] text-lg  font-bold tracking-wider ">
            . Gestión Comercial
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Micrositio Dedicado
              <br />
              Para Cada Proyecto
            </h2>
            {/* 3. Texto claro (gris casi blanco) */}
            <p className="text-white font-semibold text-lg leading-relaxed">
              Presente el desarrollo en un entorno exclusivo,
              <br />
              accesible mediante link o código QR
              <br />
              desde el cartel de obra o desde su sitio web comercial.
            </p>
          </div>

          {/* Image */}
          <div className="order-2">
            <div className="relative">
              {/* 4. Limpieza: Borde azul claro y sombra suave */}
              <img
                src={micrositePreview}
                alt="Vista previa del micrositio"
                // CAMBIO AQUÍ:
                // - Se cambió el color del borde a '#38bdf8' (celeste).
                // - Se aumentó el grosor del borde a 'border-2'.
                // - Se ajustó la sombra a 'shadow-xl' para un efecto más suave.
                className="relative rounded-lg shadow-xl w-full border-2 border-[#38bdf8]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrositeSection;
