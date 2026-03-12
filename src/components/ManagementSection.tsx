import managementDashboard from "@/assets/ADMIN-q70.jpg";

// Recibimos t
const ManagementSection = ({ t }) => {
  return (
    <section className="py-10 md:py-28 bg-transparent">
      <div className="container">
        <div className="flex md:flex-row flex-col gap-12 lg:gap-16">
          <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {/* Iteramos el título principal */}
              {t.title.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <p className="text-white text-lg leading-relaxed font-semibold">
              {/* 1. Primera parte del texto */}
              {t.descPart1.split("\n").map((line, index, array) => (
                <span key={`p1-${index}`}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
              {/* 2. Los span de colores */}
              <span className="font-bold text-[#4ade80]">
                {t.descAvailable}
              </span>
              ,{" "}
              <span className="font-bold text-[#fbbf24]">{t.descReserved}</span>{" "}
              o <span className="font-bold text-gray-400">{t.descSold}</span>
              {/* 3. Segunda parte del texto */}
              {t.descPart2.split("\n").map((line, index, array) => (
                <span key={`p2-${index}`}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

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
