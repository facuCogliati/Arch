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

export const en = {
  hero: {
    title: "3D Visualization\nfor Real Estate Marketing",
    subtitle:
      "The clearest way to sell off-plan or under-construction units. Show your units like never before.",
    btnDemo: "VIEW DEMO",
    btnHow: "HOW IT WORKS",
  },
  exploration: {
    sectionTitle: "Exploration Experience",
    // Agregamos \n al título y descripción
    card1Title: "Interactive 3D View\nFor Each Unit",
    card1Desc:
      "Explore, rotate, and understand each layout\nin seconds, with clear and intuitive visualization\nwithout relying on 2D floor plans.",
  },
  explorationNav: {
    title: "Simple Navigation\nfrom Web or Mobile",
    desc: "Instant access via link,\nfrom any device,\nwith no app downloads or installations required.",
  },
  explorationMeasurements: {
    title: "Room Dimensions\nand Layout Variants",
    desc: "Accurate measurements\nand alternative layout configurations available\nwhen the project requires them.",
  },
  managementMicrosite: {
    sectionTitle: "Sales Management",
    title: "Dedicated Microsite\nFor Each Project",
    desc: "Present the development in an exclusive environment,\naccessible via link or QR code\nfrom the construction site or your commercial website.",
  },
  managementStatus: {
    title: "Unit Status Management\nFor Each Unit",
    // Lo separamos para poder meter tus <span> de colores en el medio
    descPart1: "Manage availability in real time\n— ",
    descAvailable: "AVAILABLE",
    descReserved: "RESERVED",
    descSold: "SOLD",
    descPart2: " —\nthrough a simple and efficient self-management panel.",
  },
  contact: {
    title: "Contact",
    desc: "Do you have questions before getting started?\nOur team is here to assist you at every stage of the process,\nwhether related to functionality or technical details.",
    email: "info@archvisualizer.com",
    phone: "+54 911 5662 7904",
  },
  footer: "©2026 ARCHVISUALIZER",
};

export const es = {
  hero: {
    title: "Visualización 3D\nPara Comercialización Inmobiliaria",
    subtitle:
      "La forma más clara de vender unidades de pozo o en construcción. Muestre sus unidades como nunca antes.",
    btnDemo: "VER DEMO",
    btnHow: "CÓMO FUNCIONA",
  },
  exploration: {
    sectionTitle: "EXPERIENCIA DE EXPLORACIÓN",
    // Agregamos \n al título y usamos exactamente tu texto original de la web
    card1Title: "Vista 3D Interactiva\nPara Cada Unidad",
    card1Desc:
      "Recorra, rote y comprenda cada tipología\nen segundos, con una visualización clara e intuitiva\nque elimina la dependencia de planos 2D.",
  },
  explorationNav: {
    title: "Navegación Simple\ndesde Web o Celular",
    desc: "Acceso inmediato mediante link,\ndesde cualquier dispositivo\nsin descargar apps ni realizar instalaciones.",
  },
  explorationMeasurements: {
    title: "Medidas por Ambiente\ny Variantes de Armado",
    desc: "Dimensiones precisas\ny alternativas de configuración disponibles\ncuando el proyecto requiere.",
  },
  managementMicrosite: {
    sectionTitle: "GESTIÓN COMERCIAL",
    title: "Micrositio Dedicado\nPara Cada Proyecto",
    desc: "Presente el desarrollo en un entorno exclusivo,\naccesible mediante link o código QR\ndesde el cartel de obra o desde su sitio web comercial.",
  },
  managementStatus: {
    title: "Gestión del Estado\nPara Cada Unidad",
    descPart1: "Administre la disponibilidad en tiempo real\n— ",
    descAvailable: "DISPONIBLE",
    descReserved: "RESERVADA",
    descSold: "VENDIDA",
    descPart2: " —\na través de un panel de autogestión simple y eficiente.",
  },
  contact: {
    title: "Contacto",
    desc: "¿Tienes preguntas antes de empezar?\nNuestro equipo está aquí para ayudarte en cada paso del proceso,\nya sea sobre funcionalidad o aclaraciones técnicas.",
    email: "info@archvisualizer.com",
    phone: "+54 911 5662 7904",
  },
  footer: "©2026 ARCHVISUALIZER",
};

const Index = ({ lang }) => {
  const t = lang === "es" ? es : en;

  return (
    <div className="min-h-screen bg-[#020817] text-foreground flex flex-col">
      <Header lang={lang} />

      <main className="flex-grow">
        {/* =========================================================
            BLOQUE 1: Hero + Feature 3D
            (Solo este bloque tiene el degradado al 50% de opacidad)
           ========================================================= */}
        <div
          className="relative w-full flex flex-col justify-center"
          style={{
            // Usamos 0.5 de opacidad para oscurecer "solo un poco"
            backgroundImage: `linear-gradient(rgba(2, 8, 23, 0.5), rgba(2, 8, 23, 0.1)), url(${fondoArch})`,
            backgroundSize: "cover",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 pb-20">
            <HeroSection t={t.hero} lang={lang} />
            <Feature3DSection t={t.exploration} />
          </div>

          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent z-10" /> */}
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
            <FeatureNavigationSection t={t.explorationNav} />
            <FeatureMeasurementsSection t={t.explorationMeasurements} />
          </div>

          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent z-10" /> */}
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
            <MicrositeSection t={t.managementMicrosite} />
            <ManagementSection t={t.managementStatus} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent z-10" />
        </div>

        {/* =========================================================
            CONTACTO
           ========================================================= */}
        <div className="relative z-20 bg-[#0a0f1e]">
          <ContactSection t={t.contact} />
        </div>
      </main>

      <div className="relative z-20 bg-[#0a0f1e]">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
