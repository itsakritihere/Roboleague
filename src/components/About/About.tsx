import about from "../../assets/images/pp.png";
import mini from "../../assets/images/hiu.png";
import junior from "../../assets/images/b.png";
import young from "../../assets/images/Vector (3).png";
import robo from "../../assets/images/hugeicons_bitcoin-mind (1).png";

const features = [
  {
    no: "1.",
    title: "STRUCTURED EVENTS",
    desc: "From one-off events to a year-round competitive season.",
  },
  {
    no: "2.",
    title: "DIGITAL IDENTITY",
    desc: "Your professional robotics legacy, tracked and verified.",
  },
  {
    no: "3.",
    title: "NATIONAL RANKING",
    desc: "Benchmark your skills against the best engineers in India.",
  },
  {
    no: "4.",
    title: "CAREER PATHWAY",
    desc: "Turning arena victories into real-world industry opportunities.",
  },
];

const categories = [
  {
    image: mini,
    title: "MINI\nMAKERS",
    desc: "Where Creativity Meets Logic.",
  },
  {
    image: junior,
    title: "JUNIOR\nINNOVATORS",
    desc: "Engineering & Strategy Fundamentals.",
  },
  {
    image: young,
    title: "YOUNG\nENGINEERS",
    desc: "Advanced Wireless & Autonomous Control.",
  },
  {
    image: robo,
    title: "ROBO\nMINDS",
    desc: "Elite Professional Sports & Robotics.",
  },
];

function About() {
  return (
    <section className="bg-[#1B1B1B] text-white py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">

        {/* WHAT IS BOTLEAGUE */}

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

          {/* Left */}

          <div className="lg:pl-10">

            <h2 className="mb-12 text-4xl lg:text-5xl font-bold uppercase">
              What is BotLeague?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

              {features.map((item) => (

                <div key={item.no}>

                  <p className="text-red-500 text-2xl font-bold">
                    {item.no}
                  </p>

                  <h3 className="mt-3 text-xl font-bold uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">

            <img
              src={about}
              alt="About"
              className="w-[300px] md:w-[400px] lg:w-[470px] xl:w-[520px]"
            />

          </div>

        </div>

        {/* Categories */}

        <div className="mt-18 pb-20">

  {/* Categories Heading */}
  <h2 className="mb-20 pl-6 text-4xl lg:text-5xl font-bold uppercase">
    Categories
  </h2>
  <div className="h-12"></div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pl-12 justify-items-center">

    {categories.map((item, index) => (

      <div
        key={index}
        className="w-full max-w-[255px] h-[285px] rounded-xl border border-gray-600 bg-[#2B2B2B] pl-18 pr-6 pt-8 pb-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-lg"
      >

        <img
          src={item.image}
          alt={item.title}
          className="h-24 w-24 object-contain"
        />

        <h3 className="mt-6 whitespace-pre-line text-[22px] leading-7 font-bold uppercase">
          {item.title}
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-gray-400">
          {item.desc}
        </p>

        <button className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold uppercase text-red-500 hover:text-red-400">
          Learn More
          <span>→</span>
        </button>

      </div>

    ))}

  </div>
  

</div>

      </div>
<div className="h-32"></div>
    </section>
  );
}

export default About;