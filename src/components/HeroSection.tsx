import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideoES from "@/assets/ARCHVISUALIZER - ES. WEB.mp4";
import heroVideoEN from "@/assets/ARCHVISUALIZER - EN. WEB.mp4";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const HeroSection = ({ t, lang }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [titleLine1, titleLine2] = t.title.split("\n");
  const [subLine1, subLine2] = t.subtitle.split(". ");

  const currentVideo = lang === "es" ? heroVideoES : heroVideoEN;

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center pt-44 md:pt-60 pb-36 md:pb-36 overflow-hidden bg-transparent"
    >
      <div className="container relative z-10 text-center">
        {/* TÍTULO */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDuration: "1.5s",
            transitionDelay: "0.2s",
          }}
        >
          {titleLine1}
          <br />
          <span className="text-gradient">{titleLine2}</span>
        </h1>

        {/* SUBTÍTULO */}
        <p
          className={`text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto mb-10 transition-all ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDuration: "1.5s",
            transitionDelay: "0.6s",
          }}
        >
          {subLine1}
          {subLine2 && (
            <>
              <br className="hidden md:block" />
              {subLine2}
            </>
          )}
        </p>

        {/* BOTONES */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDuration: "1.5s",
            transitionDelay: "1s",
          }}
        >
          <Button
            variant="heroOutline"
            size="lg"
            onClick={() => setIsVideoOpen(true)}
          >
            {t.btnHow}
          </Button>
          <Link to="https://www.archvisualizer.com/serena/">
            <Button variant="hero" size="lg">
              {t.btnDemo}
            </Button>
          </Link>
        </div>
      </div>

      {/* POPUP DEL VIDEO */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsVideoOpen(false)}
          ></div>

          <div className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black">
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
