import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    // CAMBIOS CLAVE:
    // 1. 'bg-[#0a0f1e]': Color sólido oscuro (igual al del Header) para tapar el fondo de planos anterior.
    // 2. 'relative z-20': Asegura que esta sección esté POR ENCIMA del fondo desbordado de la sección anterior.
    <section id="contact" className="py-20 md:py-32 bg-[#0a0f1e] relative z-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Contacto
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl">
          ¿Tienes preguntas antes de empezar?
          <br />
          Nuestro equipo está aquí para ayudarte en cada paso del proceso,
          <br />
          ya sea sobre funcionalidad o aclaraciones técnicas.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:info@archvisualizer.com"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span>info@archvisualizer.com</span>
          </a>

          <a
            href="tel:+5491156627904"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span>+54 911 5662 7904</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
