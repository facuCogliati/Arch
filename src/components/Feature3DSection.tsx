import apartmentView from "@/assets/Feature-section.jpg";

const Feature3DSection = () => {
  return (
    // Mantenemos bg-transparent para que se vea el plano de fondo del Index
    <section id="features" className="pt-16 pb-20 md:pb-32 bg-transparent">
      <div className="container">
        {/* Ajusté el gap para separar más la imagen del texto, como en la foto */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna de Texto */}
          <div className="order-1">
            {/* 1. SUBTÍTULO CORREGIDO */}
            <div className="mb-4">
              {/* Cambié "_" por "." y aseguré un color celeste brillante (text-sky-400 o primary) */}
              <span className="text-[#38bdf8] text-sm md:text-base font-bold tracking-wider uppercase">
                . Experiencia De Exploración
              </span>
            </div>

            {/* 2. TÍTULO */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Vista 3D Interactiva
              <br />
              Para Cada Unidad
            </h2>

            {/* 3. PÁRRAFO */}
            {/* Usamos text-gray-200 para que sea bien legible sobre el azul oscuro */}
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg">
              Recorra, rote y comprenda cada tipología
              <br />
              en segundos, con una visualización clara e intuitiva
              <br />
              que elimina la dependencia de planos 2D.
            </p>
          </div>

          {/* Columna de Imagen */}
          <div className="order-2">
            {/* 4. IMAGEN LIMPIA */}
            {/* Eliminé el div del 'glow' y el blur. La referencia es un corte limpio. */}
            {/* Cambié rounded-2xl a rounded-lg (bordes menos redondos, más profesionales) */}
            <div className="relative">
              <img
                src={apartmentView}
                alt="Vista 3D de apartamento"
                className="relative  shadow-2xl w-full border border-white/5"
              />

              {/* Opcional: Si quieres esa sombra sutil debajo, usa esto en lugar del glow masivo */}
              {/* <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/40 blur-xl -z-10" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3DSection;
