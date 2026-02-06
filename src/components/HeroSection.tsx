import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    // CAMBIO: Reducimos 'pb-20' a 'pb-8' (o incluso 'pb-0' si quieres que estén más pegados)
    // También ajusté 'min-h-[85vh]' a 'min-h-[auto]' o 'min-h-[70vh]' para que no fuerce tanta altura si el contenido es corto.
    <section className="relative flex flex-col items-center justify-center pt-60 pb-36 overflow-hidden bg-transparent">
      {/* ... (Las luces/decoraciones siguen igual) ... */}

      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          Visualización 3D
          <br />
          <span className="text-gradient">
            Para Comercialización Inmobiliaria
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          La forma más clara de vender unidades de pozo o en construcción
          <br className="hidden md:block" />
          Muestre sus unidades como nunca antes
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button variant="hero" size="lg">
            VER DEMO
          </Button>
          <Button variant="heroOutline" size="lg">
            CÓMO FUNCIONA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
