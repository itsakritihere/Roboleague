import background from "../../assets/images/Rectangle9.png";
import "./Part.css";

function Part() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">

  {/* Background Image */}
  <img
    src={background}
    alt="Robot Arena"
    className="absolute inset-0 w-full h-full object-cover object-right"
  />

  {/* Black Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

  {/* LIVE Badge */}
  <div className="live-box">
    <span className="live-dot"></span>
    <span className="live-text">LIVE :</span>
    <span className="episode">
      Episode 14 . Bengaluru Regionals
    </span>

    <span className="watch-live">
      WATCH LIVE
    </span>
  </div>

  {/* Content */}
 <div className="relative z-10 flex items-center min-h-[85vh] pl-24 pr-12 md:pl-32 lg:pl-40">
  <div className="max-w-2xl ml-16">
   <h1
  className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] font-semibold leading-tight text-white whitespace-nowrap"
  style={{ fontFamily: "Orbitron, sans-serif" }}
>
  INDIA'S ULTIMATE
  <br />
  ROBOTICS ARENA
</h1>
  

      <p className="mt-10 text-lg leading-8 text-gray-300">
        Build. Compete. Rank. The National
        <br />
        Ecosystem for Robotics Arena
      </p>

      <div className="buttons flex items-center gap-3 mt-12">
        <button className="w-[180px] h-[48px] bg-[#ff4d4d] rounded text-xs font-semibold uppercase text-white hover:bg-red-600 transition">
          CREATE ACCOUNT
        </button>

        <button className="w-[180px] h-[48px] border border-white rounded text-xs font-semibold uppercase text-white hover:bg-gray-800 transition">
          EXPLORE EVENTS
        </button>
      </div>

    </div>

  </div>

</section>

  );
}

export default Part;