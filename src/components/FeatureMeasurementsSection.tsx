import dashboardVariants from "@/assets/dashboard-variants.jpg";

const FeatureMeasurementsSection = () => {
  return (
    // 1. FONDO TRANSPARENTE y quitamos 'blueprint-grid'
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container">
        {/* Cambié items-start por items-center para que el texto quede centrado verticalmente con el grupo de imágenes */}
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

          {/* Imágenes (Derecha) */}
          <div className="order-2">
            {/* CAMBIO 1: Agregamos 'items-center' para centrar las imágenes ahora que son más chicas */}
            <div className="relative flex flex-col gap-2 items-center">
              <img
                src={dashboardVariants}
                alt="Dashboard de variantes"
                // CAMBIO 2: Cambiamos 'w-full' por 'w-11/12' (o prueba w-10/12 si quieres achicar más)
                className="relative  shadow-2xl w-11/12 border border-white/5"
              />
              <img
                src={dashboardVariants}
                alt="Dashboard de variantes"
                // CAMBIO 2: Lo mismo aquí
                className="relative  shadow-2xl w-11/12 border border-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMeasurementsSection;
