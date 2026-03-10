import { useState } from "react";
import logoFinal from "@/assets/LOGO FINAL.png";

const Header = () => {
  // Estado para controlar si el dropdown está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Estado para el idioma actual seleccionado (visual)
  const [currentLang, setCurrentLang] = useState({
    code: "es",
    label: "ES",
    flag: "🇪🇸",
  });

  // Lista de idiomas. En el futuro puedes usar la propiedad 'path' para los links
  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸", path: "/" },
    { code: "en", label: "English", flag: "🇺🇸", path: "/en" },
  ];

  return (
    // CAMBIOS CLAVE:
    // 1. 'bg-[#0a0f1e]': Usamos un color SÓLIDO.
    //    Nota: Si este color se ve muy oscuro, prueba con 'bg-[#111827]' o 'bg-secondary'.
    //    Al quitarle el '/80' o '/95', se vuelve totalmente opaco.
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f273e] h-20 transition-all duration-300 border-b border-white/5">
      {/* Agregamos justify-between para separar el logo (izq) del menú (der) */}
      <div className="container h-full flex items-center justify-between mx-auto px-4 md:px-8">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logoFinal}
            alt="Arch Visualizer Logo"
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>

        {/* SELECTOR DE IDIOMA */}
        <div className="relative">
          {/* Botón principal del selector */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-md border border-white/10"
          >
            {/* <span className="text-lg">{currentLang.flag}</span> */}
            <span className="text-sm font-medium">{currentLang.label}</span>

            {/* Icono de flecha que gira cuando se abre */}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Menú Desplegable */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-[#1f273e] border border-white/10 rounded-md shadow-lg overflow-hidden flex flex-col z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    // Actualiza el estado visual
                    setCurrentLang({
                      code: lang.code,
                      label: lang.code.toUpperCase(),
                      flag: lang.flag,
                    });
                    setIsOpen(false);

                    // FUTURO: Aquí es donde agregarás la lógica de navegación
                    // Por ejemplo: window.location.href = lang.path;
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-left text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {/* <span className="text-lg">{lang.flag}</span> */}
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
