import pop from "../../assets/images/poun.png.jpeg";
import "./Competitions.css";

function Competitions() {
  return (
    <section className="bg-[#1A1A1A] py-16 text-white">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <h2 className="mb-12 text-[44px] font-semibold uppercase tracking-wide" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Competitions & Events
        </h2>
 <div className="h-8"></div>
        <div className="competition-grid grid grid-cols-3 gap-6">

          {/* LIVE NOW */}

          <div>
            <h3 className="mb-4 text-2xl uppercase text-red-500 font-semibold" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Live Now
            </h3>

           <div className="live-card flex flex-col rounded-md border border-gray-700 bg-[#232323] p-5">

              <div className="flex items-start justify-between">

                <div>
                  <h4 className="text-2xl font-semibold" >
                    Bengaluru Regionals
                  </h4>

                  <p className="text-gray-400">
                    Lorem Ipsum
                  </p>
                </div>

                <span className="rounded bg-red-500 px-3 py-1 text-xs">
                  Ongoing
                </span>

              </div>

              <hr className="my-3 border-gray-700" />

              <img
                src={pop}
                alt="Tournament Bracket"
                className="mt-2 h-full w-full object-contain"
              />

            </div>

          </div>

          {/* UPCOMING */}

          <div>

            <h3 className="mb-4 text-2xl uppercase font-semibold" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Upcoming
            </h3>

           <div className="upcoming-container flex flex-col">

              {/* Card */}

              <div className="upcoming-card rounded-md border border-gray-700 bg-[#232323] p-5">

                <h4 className="mb-5 text-2xl font-semibold">
                  Event in Mumbai
                </h4>

                <div className="mb-8 flex justify">

                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p>11/11/25</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>BKC</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Category</p>
                    <p>Lorem</p>
                  </div>

                </div>

                <button className="rounded bg-[#ff4d4d] py-3 text-lg font-semibold uppercase transition hover:bg-red-600">
                  Register
                </button>

              </div>

              {/* Card */}

              <div className="upcoming-card rounded-md border border-gray-700 bg-[#232323] p-5">

                <h4 className="mb-5 text-2xl font-semibold" >
                  Event in Delhi
                </h4>

                <div className="mb-8 flex justify-between">

                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p>11/11/25</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>BKC</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Category</p>
                    <p>Lorem</p>
                  </div>

                </div>

                <button className="rounded bg-[#ff4d4d] py-3 text-lg font-semibold uppercase transition hover:bg-red-600">
                  Register
                </button>

              </div>

            </div>

          </div>

          {/* PAST RESULTS */}

          <div  className="border-b border-gray-700">

            <h3  className="border-b border-gray-700 mb-4 text-2xl uppercase font-semibol d" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Past Results
            </h3>

           <div className="past-card flex flex-col rounded-md border border-gray-700 bg-[#232323] p-5">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border-b border-gray-700 py-5 last:border-none"
                >

                  <h4 className="text-2xl font-semibold">
                    Bengaluru Regionals
                  </h4>

                  <p className="text-gray-400">
                    Lorem Ipsum
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Competitions;