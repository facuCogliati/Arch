import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideoES from "@/assets/ARCHVISUALIZER - ES. WEB.mp4";
import heroVideoEN from "@/assets/ARCHVISUALIZER - EN. WEB.mp4";
import { Link } from "react-router-dom";

// 1. Recibimos la prop "t"
const HeroSection = ({ t, lang }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // 2. Cortamos el título donde pusiste el "\n" en tu objeto
  const [titleLine1, titleLine2] = t.title.split("\n");

  // 3. Cortamos el subtítulo donde hay un punto para separarlo en dos líneas
  // (ya que en tu objeto lo separaste con un punto ". ")
  const [subLine1, subLine2] = t.subtitle.split(". ");

  const currentVideo = lang === "es" ? heroVideoES : heroVideoEN;

  return (
    <section className="relative flex flex-col items-center justify-center pt-44 md:pt-60 pb-36 md:pb-36 overflow-hidden bg-transparent">
      {/* ... (Las luces y decoraciones siguen igual) ... */}

      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
          {titleLine1}
          <br />
          <span className="text-gradient">{titleLine2}</span>
        </h1>

        <p
          className="text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {subLine1}
          {/* Si hay una segunda línea (subLine2), la renderizamos con su <br /> */}
          {subLine2 && (
            <>
              <br className="hidden md:block" />
              {subLine2}
            </>
          )}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Link to="https://www.archvisualizer.com/serena/">
            <Button variant="hero" size="lg">
              {t.btnDemo}
            </Button>
          </Link>
          <Button
            variant="heroOutline"
            size="lg"
            onClick={() => setIsVideoOpen(true)}
          >
            {t.btnHow}
          </Button>
        </div>
      </div>

      {/* =========================================================
          POPUP DEL VIDEO
         ========================================================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsVideoOpen(false)}
          ></div>

          <div className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black animate-fade-in-up">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 text-white bg-black/40 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Cerrar video"
            >
              {/* ... (SVG del botón cerrar) ... */}
            </button>

            <video
              // 3. Acá usamos la variable currentVideo en el src
              src={currentVideo}
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
