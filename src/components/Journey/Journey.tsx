import back1 from "../../assets/images/la_tools.png";
import back2 from "../../assets/images/game-icons_indian-palace.png";
import back3 from "../../assets/images/Group.png";
import back4 from "../../assets/images/boxicons_community.png";
import "./Journey.css";
const steps = [
  {
    image: back1,
    step: "STEP 1",
    title: "BUILD YOUR\nTEAM",
  },
  {
    image: back2,
    step: "STEP 2",
    title: "COMPETE ACROSS\nINDIA",
  },
  {
    image: back3,
    step: "STEP 3",
    title: "EARN NATIONAL\nRANKING & VALUE",
  },
  {
    image: back4,
    step: "STEP 4",
    title: "JOIN THE\nLEAGUE",
  },
];

function Journey() {
  return (
   <section className="journey-section bg-black text-white">

      {/* Heading */}
      <div className="journey-heading text-center">
        <p className="text-red-500 font-semibold tracking-wider uppercase">
          User Journey
        </p>

        <h2 className="mt-2 text-5xl font-bold uppercase">
          Your Path To The League
        </h2>

        <p className="mt-3 text-gray-400">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>

      {/* Timeline */}
     <div className="journey-timeline relative mx-auto flex items-start justify-between">

        {/* Blue Line */}
        <div className="absolute left-0 right-0 top-12 h-[2px] bg-blue-600"></div>

        {steps.map((step, index) => (
          <div
            key={index}
           className="journey-step relative z-10 flex flex-col items-center text-center"
          >
            {/* Circle */}
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-gray-700 bg-[#1E1E1E] shadow-[0_0_0_3px_blue]">

              <img
                src={step.image}
                alt={step.step}
                className="h-14 w-10 object-contain"
              />

            </div>

            {/* Vertical Line */}
            {index !== steps.length  && (
              <div className="h-18 w-[2px] bg-gray-500"></div>
            )}

            <p className="mt-2 text-red-500 font-semibold">
              {step.step}
            </p>

            <h3 className="mt-2 whitespace-pre-line text-lg font-bold uppercase">
              {step.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Journey;