import sponsor1 from "../../assets/images/bolp.png";
import sponsor2 from "../../assets/images/mo.png";
import sponsor3 from "../../assets/images/nnj.png";
import sponsor4 from "../../assets/images/moo.png";
import sponsor5 from "../../assets/images/imk.png";
import sponsor6 from "../../assets/images/jio.png";

import youtube from "../../assets/images/lo.png";
import instagram from "../../assets/images/Vector.png";
import facebook from "../../assets/images/Vector (1).png";
import twitter from "../../assets/images/Vector (2).png";

const forms = [
  "BECOME IN JUDGE",
  "VOLUNTEER",
  "COMMUNITY MEMBER",
];

const sponsors = [
  { img: sponsor1, name: "NIT DELHI" },
  { img: sponsor2, name: "INDIAN BIT" },
  { img: sponsor3, name: "NIT SILCHAR" },
  { img: sponsor4, name: "ROBO COMPANY" },
  { img: sponsor5, name: "IIT BOMBAY" },
  { img: sponsor6, name: "ROBO COMPANY" },
];

function Footer() {
  return (
    <footer className="bg-black text-white px-20 py-16">

      {/* Heading */}
       <div className="h-4"></div>
      <div className="flex">
        <div className="w-6"></div>
          
        <h3 className="mb-5 text-5xl font-semibold uppercase tracking-wide" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Join The Ecosystem
        </h3>
      </div>
        <div className="h-8"></div>

      {/* ================= FORM CARDS ================= */}
       {/* ================= FORM CARDS ================= */}
       <div className="max-w-7xl mx-auto px-19">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
   
 
        {forms.map((title, index) => (
          <div
            key={index}
            className="flex flex-col w-full rounded-lg border border-gray-700 bg-[#1B1B1B] p-6"
          >
            <h3 className="mb-5 text-base font-semibold uppercase tracking-wide" style={{ fontFamily: "Orbitron, sans-serif" }}>
              {title}
            </h3>

            <input
              type="text"
              placeholder="Name"
              className="mb-3 rounded border border-gray-600 bg-[#232323] px-4 py-3 text-base outline-none placeholder-gray-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="mb-3 rounded border border-gray-600 bg-[#232323] px-4 py-3 text-base outline-none placeholder-gray-500"
            />

            <input
              type="text"
              placeholder="Enroll"
              className="mb-5  rounded border border-gray-600 bg-[#232323] px-4 py-3 text-base outline-none placeholder-gray-500"
            />

            <button className="rounded bg-red-500 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-red-600 transition">
              Sign Up
            </button>
          </div>
          

    
        ))}
      </div>
 </div>
      {/* ================= SPONSORS ================= */}
        <div className="h-12"></div>
      <div className="flex">
        <div className="w-12"></div>
        <h3 className="mt-14 mb-6 text-xl font-semibold uppercase tracking-wide" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Sponsors
        </h3>
          <div className="h-4"></div>
      </div>

      <div className="flex">
        <div className="w-12"></div>
        <div className="grid grid-cols-3 gap-y-12 gap-x-24 justify-items-start">
          {sponsors.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <img
                src={item.img}
                alt={item.name}
                className="h-30 w-30 object-contain"
              />

              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
        <div className="h-12"></div>

      {/* ================= FOOTER ================= */}
      <div className="flex">
        <div className="w-12"></div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex justify-between w-full">

          {/* Quick Links */}
          <div className="pl-6">
            <h3 className="text-base font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h3>
              <div className="h-4"></div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-gray-400 text-sm">
              <p>The Arena</p>
              <p>Join the Team</p>
              <p>Episodes</p>
              <p>Sponsorships</p>
              <p>National Rankings</p>
              <p>Help Center</p>
              <p>Programs</p>
              <p>Contact Us</p>
              <p>Rulebooks</p>
              <p>Legal</p>
            </div>
          </div>

          {/* Social */}
          <div className="pr-6">
            <h3 className="text-base font-semibold uppercase tracking-wide mb-4">
              Social Media
            </h3>

            <div className="flex gap-5">
              <img src={youtube} className="h-6 cursor-pointer" alt="YouTube" />
              <img src={instagram} className="h-6 cursor-pointer" alt="Instagram" />
              <img src={facebook} className="h-6 cursor-pointer" alt="Facebook" />
              <img src={twitter} className="h-6 cursor-pointer" alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
        <div className="h-19"></div>
    </footer>
  );
}

export default Footer;
