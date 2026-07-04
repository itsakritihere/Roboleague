import logo from "../../assets/images/logos.png";
import "./Header.css";


function Header() {
  return (
   <header className="header bg-[#1b1b1b] border-b border-gray-800">
  <div className="header-container max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

    <img
      src={logo}
      alt="Bot League"
      className="logo w-[200px] h-[46px] relative top-[3px] left-[20px] cursor-pointer"
    />

    <nav className="nav">
      <ul className="flex items-center gap-8 text-[13px] text-gray-300">
           <li className="relative cursor-pointer text-white "
            
               style={{ fontFamily: "Orbitron, sans-serif" }}>
          Events
          <span className="absolute left-0 -bottom-5 h-[2px] w-full bg-red-500"></span>
        </li>

        <li className="cursor-pointer hover:text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>Programs</li>
        <li className="cursor-pointer hover:text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>Community</li>
        <li className="cursor-pointer hover:text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>Ranks</li>
      </ul>
    </nav>

   <div className="buttons flex items-center gap-3">

  <button className="w-[120px] h-[38px] border border-white rounded text-xs font-semibold uppercase text-white hover:bg-gray-800 transition">
    Login
  </button>

  <button className="w-[120px] h-[38px] bg-[#ff4d4d] rounded text-xs font-semibold uppercase text-white hover:bg-red-600 transition">
    Register Now
  </button>

</div>

  </div>
</header>
  );
}

export default Header;