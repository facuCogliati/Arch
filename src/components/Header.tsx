import logoFinal from "@/assets/LOGO FINAL.png";

const Header = () => {
  return (
    // CAMBIOS CLAVE:
    // 1. 'bg-[#0a0f1e]': Usamos un color SÓLIDO.
    //    Nota: Si este color se ve muy oscuro, prueba con 'bg-[#111827]' o 'bg-secondary'.
    //    Al quitarle el '/80' o '/95', se vuelve totalmente opaco.
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f273e] h-20 transition-all duration-300 border-b border-white/5">
      <div className="container h-full flex items-center">
        {/* LOGO */}
        {/* Ajusté el padding y el tamaño para que respire bien como en la foto */}
        <div className="flex items-center gap-2">
          <img
            src={logoFinal}
            alt="Arch Visualizer Logo"
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
