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
            (Solo este bloque tiene el degradado al 50% de opacidad)
           ========================================================= */}
        <div
          className="relative w-full flex flex-col justify-center"
          style={{
            // Usamos 0.5 de opacidad para oscurecer "solo un poco"
            backgroundImage: `linear-gradient(rgba(2, 8, 23, 0.5), rgba(2, 8, 23, 0.5)), url(${fondoArch})`,
            backgroundSize: "cover",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 pb-20">
            <HeroSection />
            <Feature3DSection />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent z-10" />
        </div>

        {/* =========================================================
            BLOQUE 2: Navegación + Medidas
            (Vuelto a su estado original, sin oscurecer)
           ========================================================= */}
        <div
          className="relative w-full flex flex-col justify-center"
          style={{
            backgroundImage: `url(${fondoArch04})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#020817",
          }}
        >
          <div className="relative z-10 py-10">
            <FeatureNavigationSection />
            <FeatureMeasurementsSection />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent z-10" />
        </div>

        {/* =========================================================
            BLOQUE 3: Micrositio + Gestión
            (Vuelto a su estado original, sin oscurecer)
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

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent z-10" />
        </div>

        {/* =========================================================
            CONTACTO
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
