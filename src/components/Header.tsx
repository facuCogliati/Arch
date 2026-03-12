import { useState } from "react";
import logoFinal from "@/assets/LOGO FINAL.png";
// Importamos useNavigate para cambiar de ruta sin recargar la página
import { useNavigate } from "react-router-dom";

// Recibimos la prop "lang" que nos pasa el Index.jsx (será "en" o "es")
const Header = ({ lang = "en" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Lista de idiomas con sus rutas correctas
  const languages = [
    { code: "en", label: "English", short: "EN", flag: "🇺🇸", path: "/" }, // Inglés en la raíz
    { code: "es", label: "Español", short: "ES", flag: "🇪🇸", path: "/es" }, // Español en /es
  ];

  // Buscamos el objeto del idioma actual basándonos en la prop 'lang'
  // Si por alguna razón 'lang' no coincide, usamos el inglés por defecto
  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f273e] h-20 transition-all duration-300 border-b border-white/5">
      <div className="container h-full flex items-center justify-between mx-auto px-4 md:px-8">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/* Al hacer clic en el logo, siempre volvemos a la raíz (inglés) por convención, 
              o podrías hacerlo que vuelva a la ruta actual */}
          <button onClick={() => navigate("/")} className="cursor-pointer">
            <img
              src={logoFinal}
              alt="Arch Visualizer Logo"
              className="h-6 md:h-8 w-auto object-contain"
            />
          </button>
        </div>

        {/* SELECTOR DE IDIOMA */}
        <div className="relative">
          {/* Botón principal del selector */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-md border border-white/10"
          >
            {/* Mostramos el texto corto del idioma actual (ES o EN) */}
            <span className="text-sm font-medium">{currentLangObj.short}</span>

            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
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
              {languages.map((languageOption) => (
                <button
                  key={languageOption.code}
                  onClick={() => {
                    setIsOpen(false);
                    // Usamos react-router para navegar suavemente a la nueva ruta
                    navigate(languageOption.path);
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                    // Si el idioma iterado es el actual, lo resaltamos sutilmente
                    lang === languageOption.code
                      ? "bg-white/10 text-white font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{languageOption.label}</span>
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
