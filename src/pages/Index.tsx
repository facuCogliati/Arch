import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Feature3DSection from "@/components/Feature3DSection";
import FeatureNavigationSection from "@/components/FeatureNavigationSection";
import FeatureMeasurementsSection from "@/components/FeatureMeasurementsSection";
import MicrositeSection from "@/components/MicrositeSection";
import ManagementSection from "@/components/ManagementSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// IMPORTS DE FONDOS
import fondoArch from "@/assets/FONDO ARCH-01.png";
import fondoArch04 from "@/assets/FONDO ARCH-04.png";
import fondoArch03 from "@/assets/FONDO ARCH-03.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-foreground flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* =========================================================
            BLOQUE 1: Hero + Feature 3D
            Estrategia: El div padre maneja el fondo.
            'min-h-screen' asegura que cubra al menos una pantalla.
           ========================================================= */}
        <div
          className="relative w-full flex flex-col justify-center"
          style={{
            backgroundImage: `url(${fondoArch})`,
            backgroundSize: "cover", // Cubre todo el ancho
            backgroundPosition: "50% 100%", // Ancla el dibujo arriba
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Capa de oscurecimiento opcional si el texto no se lee bien */}
          {/* <div className="absolute inset-0 bg-background/10 z-0" /> */}

          <div className="relative z-10 pb-20">
            {" "}
            {/* pb-20 da aire abajo antes del siguiente bloque */}
            <HeroSection />
            <Feature3DSection />
          </div>

          {/* Degradado suave al final de este bloque para unirlo con el siguiente */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent z-10" /> */}
        </div>

        {/* =========================================================
            BLOQUE 2: Navegación + Medidas
           ========================================================= */}
        <div
          className="relative w-full flex flex-col justify-center"
          style={{
            backgroundImage: `url(${fondoArch04})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            // Un pequeño truco: color de fondo por si la imagen no carga o es corta
            backgroundColor: "#020817",
          }}
        >
          <div className="relative z-10 py-10">
            <FeatureNavigationSection />
            <FeatureMeasurementsSection />
          </div>

          {/* Degradado de unión */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent z-10" />
        </div>

        {/* =========================================================
            BLOQUE 3: Micrositio + Gestión
           ========================================================= */}
        <div
          className="relative w-full flex flex-col justify-center"
          style={{
            backgroundImage: `url(${fondoArch03})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#020817",
          }}
        >
          <div className="relative z-10 py-10">
            <MicrositeSection />
            <ManagementSection />
          </div>

          {/* Degradado final hacia el Contacto */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent z-10" />
        </div>

        {/* =========================================================
            CONTACTO (Fondo Sólido)
            Ya no se romperá porque está en el flujo normal (flex)
           ========================================================= */}
        <div className="relative z-20 bg-[#0a0f1e]">
          <ContactSection />
        </div>
      </main>

      <div className="relative z-20 bg-[#0a0f1e]">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
