// Asegúrate de importar tu logo
import logoFinal from "@/assets/LOGO FINAL.png";

const Footer = () => {
  return (
    // 'bg-[#0a0f1e]' y 'relative z-20' para continuar la solidez del ContactSection
    <footer className="py-8 border-t border-white/10 bg-[#0a0f1e] relative z-20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Imagen (Reemplazando el SVG anterior) */}
        <div className="flex items-center gap-2">
          <img
            src={logoFinal}
            alt="Arch Visualizer Logo"
            className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        <p className="text-sm text-gray-500">©2026 ARCHVISUALIZER.COM</p>
      </div>
    </footer>
  );
};

export default Footer;
