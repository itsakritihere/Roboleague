import sportsBg from "../../assets/images/bkg.png";

import race from "../../assets/images/Rectangle 37.png";
import line from "../../assets/images/Rectangle 38.png";
import rc from "../../assets/images/Rectangle 39.png";
import drone from "../../assets/images/Rectangle 40.png";
import hockey from "../../assets/images/Rectangle 41.png";
import war from "../../assets/images/o.png";

const sports = [
  { image: race, title: "Robo Race" },
  { image: line, title: "Line Follower" },
  { image: rc, title: "RC Racing" },
  {
    image: drone,
    title: "FPV Drone Racing &\nAeromodelling",
  },
  { image: hockey, title: "Robo Hockey" },
  { image: war, title: "Robo War" },
];

function Sports() {
  return (
    <section
      className="relative py-20 px-10 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sportsBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="h-12"></div>
        <p className="text-red-500 text-lg font-semibold uppercase" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Sports
        </p>

        <h2 className="mt-2 text-5xl font-bold uppercase" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Competition Disciplines
        </h2>
        <div className="h-2"></div>

        <div className="mt-12 grid grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-700 bg-[#232323]/90 transition-all duration-300 hover:-translate-y-2 hover:border-red-500"
            >
              <img
                src={sport.image}
                alt={sport.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="whitespace-pre-line text-xl font-semibold">
                  {sport.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-32"></div>
    </section>
  );
}

export default Sports;