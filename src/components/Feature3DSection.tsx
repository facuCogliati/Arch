import apartmentView from "@/assets/Feature-section.jpg";

const Feature3DSection = ({ t }) => {
  return (
    // Mantenemos bg-transparent para que se vea el plano de fondo del Index
    <section
      id="features"
      className="pt-8 md:pt-16 pb-100 md:pb-32 bg-transparent"
    >
      <div className="container">
        {/* Ajusté el gap para separar más la imagen del texto, como en la foto */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Columna de Texto */}
          <div className="order-1">
            {/* 1. SUBTÍTULO CORREGIDO */}
            <div className="mb-4">
              {/* Cambié "_" por "." y aseguré un color celeste brillante (text-sky-400 o primary) */}
              <span className="text-[#38bdf8] text-sm md:text-base font-bold tracking-wider uppercase">
                . {t.sectionTitle}
              </span>
            </div>

            {/* 2. TÍTULO */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {/* Convertimos los \n del diccionario en etiquetas <br /> reales */}
              {t.card1Title.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* 3. PÁRRAFO */}
            {/* Usamos text-gray-200 para que sea bien legible sobre el azul oscuro */}
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg">
              {/* Convertimos los \n del diccionario en etiquetas <br /> reales */}
              {t.card1Desc.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Columna de Imagen */}
          <div className="order-2 flex-1 lg:mt-[50px]">
            {/* 4. IMAGEN LIMPIA */}
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
