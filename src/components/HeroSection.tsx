import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideoES from "@/assets/ARCHVISUALIZER - ES. WEB.mp4";
import heroVideoEN from "@/assets/ARCHVISUALIZER - EN. WEB.mp4";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const HeroSection = ({ t, lang }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Configuramos el observador para el Hero
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [titleLine1, titleLine2] = t.title.split("\n");
  const [subLine1, subLine2] = t.subtitle.split(". ");

  const currentVideo = lang === "es" ? heroVideoES : heroVideoEN;

  return (
    <section
      ref={ref} // Enganchamos la ref aquí
      className="relative flex flex-col items-center justify-center pt-44 md:pt-60 pb-36 md:pb-36 overflow-hidden bg-transparent"
    >
      <div className="container relative z-10 text-center">
        {/* Usamos inView para disparar la animación */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 ${
            inView
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-10"
          }`}
        >
          {titleLine1}
          <br />
          <span className="text-gradient">{titleLine2}</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto mb-10 transition-all duration-700 delay-100 ${
            inView
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-10"
          }`}
        >
          {subLine1}
          {subLine2 && (
            <>
              <br className="hidden md:block" />
              {subLine2}
            </>
          )}
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${
            inView
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-10"
          }`}
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

      {/* POPUP DEL VIDEO (Se mantiene exactamente igual) */}
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
              {/* SVG de cierre omitido por brevedad */}
            </button>

            <video
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
