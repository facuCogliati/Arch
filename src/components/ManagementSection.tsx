import managementDashboard from "@/assets/ADMIN-q70.jpg";

const ManagementSection = () => {
  return (
    <section className="py-10 md:py-28 bg-transparent">
      <div className="container">
        {/* DEFINICIÓN DE LA GRILLA:
            - Mobile: 1 sola columna.
            - Desktop (lg): 2 columnas.
            - gap-12: Espacio entre elementos.
        */}
        <div className="flex md:flex-row flex-col gap-12 lg:gap-16">
          {/* TEXTO -> FILA 1, COLUMNA 1 
             (lg:col-start-1 lg:row-start-1)
          */}
          <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Gestión del Estado
              <br />
              Para Cada Unidad
            </h2>

            <p className="text-white text-lg leading-relaxed font-semibold">
              Administre la disponibilidad en tiempo real
              <br />—{" "}
              <span className="font-bold text-[#4ade80]">DISPONIBLE</span>,{" "}
              <span className="font-bold text-[#fbbf24]">RESERVADA</span> o{" "}
              <span className="font-bold text-gray-400">VENDIDA</span> —
              <br />a través de un panel de autogestión simple y eficiente.
            </p>
          </div>

          {/* IMAGEN -> FILA 2, COLUMNA 2 
             (lg:col-start-2 lg:row-start-2)
             Esto fuerza a que la imagen baje y se vaya a la derecha, dejando
             el espacio de la izquierda libre para el dibujo del fondo.
          */}
          <div className="flex-1 w-full">
            <div className="relative">
              <img
                src={managementDashboard}
                alt="Dashboard de gestión"
                className="relative shadow-2xl  w-full border border-white/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
