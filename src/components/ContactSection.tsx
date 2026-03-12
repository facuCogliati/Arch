import { Mail, Phone } from "lucide-react";

// Recibimos "t"
const ContactSection = ({ t }) => {
  return (
    // CAMBIOS CLAVE:
    // 1. 'bg-[#0a0f1e]': Color sólido oscuro (igual al del Header) para tapar el fondo de planos anterior.
    // 2. 'relative z-20': Asegura que esta sección esté POR ENCIMA del fondo desbordado de la sección anterior.
    <section id="contact" className="py-20 md:py-28 bg-[#0a0f1e] relative z-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          {t.title}
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl">
          {/* Iteramos sobre la descripción para los saltos de línea */}
          {t.desc.split("\n").map((line, index, array) => (
            <span key={index}>
              {line}
              {index < array.length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="flex flex-col gap-4">
          <a
            // Usamos template literals para el href dinámico
            href={`mailto:${t.email}`}
            className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span>{t.email}</span>
          </a>

          <a
            // Dejamos el href del teléfono fijo (sin espacios) para que el celular lo lea bien al hacer clic
            href="tel:+5491156627904"
            className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span>{t.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
