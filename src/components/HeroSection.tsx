import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/ARCHVISUALIZER - ES. WEB.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // Estado para controlar si el popup del video está abierto
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center pt-44 md:pt-60 pb-36 md:pb-36 overflow-hidden bg-transparent">
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
          {/* Agregamos el onClick para cambiar el estado y abrir el video */}
          <Link to="https://www.archvisualizer.com/serena/">
            <Button variant="hero" size="lg">
              VER DEMO
            </Button>
          </Link>
          <Button
            variant="heroOutline"
            size="lg"
            onClick={() => setIsVideoOpen(true)}
          >
            CÓMO FUNCIONA
          </Button>
        </div>
      </div>

      {/* =========================================================
          POPUP DEL VIDEO
          Se renderiza solo cuando isVideoOpen es true
         ========================================================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Fondo oscuro desenfocado. Al hacer clic acá, se cierra el modal */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsVideoOpen(false)}
          ></div>

          {/* Contenedor principal del video */}
          <div className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black animate-fade-in-up">
            {/* Botón de cerrar (Crucecita) arriba a la derecha */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 text-white bg-black/40 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Cerrar video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Etiqueta de video */}
            <video
              src={heroVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[85vh] outline-none"
            >
              Tu navegador no soporta el formato de video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
