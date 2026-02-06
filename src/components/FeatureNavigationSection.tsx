import phoneMockup from "@/assets/phone-mockup.jpg";

const FeatureNavigationSection = () => {
  return (
    // 1. FONDO TRANSPARENTE
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Imagen (Celular) */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Quité el fondo glow blur para que se vea nítido como en la referencia */}
              <img
                src={phoneMockup}
                alt="Aplicación móvil ArchVisualizer"
                // Quité 'shadow-2xl' si quieres que se integre más plano, o déjalo si te gusta.
                // Importante: 'bg-transparent'
                className="relative max-w-[280px] md:max-w-xs rounded-[2.5rem] border-[8px] border-black/80 shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Navegación Simple
              <br />
              desde Web o Celular
            </h2>
            <p className="text-white font-semibold text-lg leading-relaxed">
              Acceso inmediato mediante link,
              <br />
              desde cualquier dispositivo
              <br />
              sin descargar apps ni realizar instalaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureNavigationSection;
