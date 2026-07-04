import leaderboard from "../../assets/images/col.png";
import medal from "../../assets/images/Vector (4).png";
import gavel from "../../assets/images/Vector (5).png";
import briefcase from "../../assets/images/Vector (6).png";
import energy from "../../assets/images/Vector (7).png";

const advantages = [
  {
    icon: medal,
    title: "NATIONAL RECOGNITION",
    desc: "Benchmark your skills on India's official robotics leaderboard.",
  },
  {
    icon: gavel,
    title: "FAIR JUDGING",
    desc: "Compete with confidence under standardized, expert-led evaluation.",
  },
  {
    icon: briefcase,
    title: "CAREER OPS",
    desc: "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    icon: energy,
    title: "HIGH-ENERGY ECO",
    desc: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

function Register() {
  return (
    <section className="bg-[#1C1C1C] py-24 px-10 text-white">

      <div className="mx-auto max-w-7xl flex items-center gap-20">

        {/* LEFT SIDE (SHIFTED RIGHT PROPERLY) */}
        <div className="w-1/2 pl-32">

          <div className="h-24"></div>

          <p className="text-red-500 text-4xl font-semibold uppercase tracking-wide" style={{ fontFamily: "Orbitron, sans-serif" }}>
            Why Register?
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-wide" style={{ fontFamily: "Orbitron, sans-serif" }}>
            The League Advantage
          </h2>

          <div className="h-10"></div>

          <div className="space-y-10">

            {advantages.map((item, index) => (
              <div key={index} className="flex gap-6">

                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-14 w-14 object-contain"
                />

                <div>
                  <h3 className="text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg text-gray-400 leading-7">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex justify-center">
          <img
            src={leaderboard}
            alt="Leaderboard"
            className="w-[420px] object-contain"
          />
        </div>

      </div>

      <div className="h-32"></div>

    </section>
  );
}

export default Register;