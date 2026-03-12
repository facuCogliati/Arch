import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const ContactSection = ({ t }) => {
  // 1. Alineamos el estado con los "name" en español de los inputs
  const [formData, setFormData] = useState({
    Nombre: "",
    Email: "",
    Teléfono: "",
    Mensaje: "",
  });

  // 2. Alineamos los errores también a las mismas claves
  const [errors, setErrors] = useState({
    Email: null,
    Mensaje: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Frenamos el envío un segundo para validar con JS

    const newErrors = { Email: null, Mensaje: null };
    let hasError = false;

    // 1. Validar Email
    if (!formData.Email.trim()) {
      newErrors.Email = t.errorRequired;
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.Email = t.errorEmail;
      hasError = true;
    }

    // 2. Validar Mensaje
    if (!formData.Mensaje.trim()) {
      newErrors.Mensaje = t.errorRequired;
      hasError = true;
    }

    // Si hay errores, mostramos los mensajes rojos y cortamos la función acá
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Si pasamos la validación, enviamos el formulario de forma nativa a FormSubmit
    // Esto va a redirigir al usuario a la pantalla del Captcha de Google
    e.target.submit();
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0a0f1e] relative z-20 overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* COLUMNA IZQUIERDA: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {t.title}
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              {t.desc.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-3 text-white hover:text-[#38bdf8] transition-colors group w-fit"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#38bdf8]/20 transition-colors border border-white/10 group-hover:border-[#38bdf8]/30">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-[#38bdf8] transition-colors" />
                </div>
                <span>{t.email}</span>
              </a>

              <a
                href="tel:+5491156627904"
                className="flex items-center gap-3 text-white hover:text-[#38bdf8] transition-colors group w-fit"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#38bdf8]/20 transition-colors border border-white/10 group-hover:border-[#38bdf8]/30">
                  <Phone className="w-5 h-5 text-gray-300 group-hover:text-[#38bdf8] transition-colors" />
                </div>
                <span>{t.phone}</span>
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario Nativo */}
          <div className="bg-[#111827] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative">
            <form
              action="https://formsubmit.co/fcogliati@casablancapolo.com"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Configuraciones de FormSubmit */}
              <input
                type="hidden"
                name="_subject"
                value="Nuevo contacto web - ArchVisualizer"
              />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="Nombre"
                    value={formData.Nombre} // <-- CORREGIDO
                    onChange={handleChange}
                    placeholder={t.formName}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="Teléfono"
                    value={formData.Teléfono} // <-- CORREGIDO
                    onChange={handleChange}
                    placeholder={t.formPhone}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="Email"
                  value={formData.Email} // <-- CORREGIDO
                  onChange={handleChange}
                  placeholder={t.formEmail}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                    errors.Email
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:border-[#38bdf8] focus:ring-[#38bdf8]"
                  }`}
                />
                {errors.Email && (
                  <p className="text-red-400 text-sm mt-1.5 ml-1">
                    {errors.Email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="Mensaje"
                  value={formData.Mensaje} // <-- CORREGIDO
                  onChange={handleChange}
                  placeholder={t.formMessage}
                  rows={4}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.Mensaje
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:border-[#38bdf8] focus:ring-[#38bdf8]"
                  }`}
                ></textarea>
                {errors.Mensaje && (
                  <p className="text-red-400 text-sm mt-1.5 ml-1">
                    {errors.Mensaje}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full font-bold py-3.5 rounded-lg transition-all duration-300 mt-2 bg-[#38bdf8] text-[#0a0f1e] hover:bg-[#7dd3fc]"
              >
                {t.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
