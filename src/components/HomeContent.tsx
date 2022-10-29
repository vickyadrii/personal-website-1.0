import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Import File CV and Images
import HomeImages from "../assets/HomeImages.png";
const myCV = require("../assets/cv-vickyherdiansyahadri.pdf");

const HomeContent: React.FC = () => {
  return (
    <section className="max-w-5xl m-auto p-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-9">
          <div className="font-montserratAlternate text-primaryBlack flex flex-col gap-5">
            <h2 className="text-5xl font-bold">Hi everyone!</h2>
            <h3 className="text-3xl font-bold">
              I’m{" "}
              <span className="text-primaryGreen font-black">
                Vicky Herdiansyah Adri
              </span>
            </h3>
            <div className="max-w-md">
              <p className="font-montserrat font-medium text-lg leading-8">
                An undergraduate information technology student who experience
                in frontend web developer.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <button className="flex items-center justify-center w-[60px] h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer">
              <FaGithub size={30} color={"#268B6C"} className="" />
            </button>
            <button className="flex items-center justify-center w-[60px] h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer">
              <FaLinkedinIn size={30} color={"#268B6C"} className="" />
            </button>
            <button className="flex items-center justify-center w-[60px] h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer">
              <MdEmail size={30} color={"#268B6C"} className="" />
            </button>
          </div>
          <div>
            <a
              href={myCV}
              className="text-white font-semibold px-4 py-3 bg-secondGreen hover:bg-hoverGreen rounded-tl-md rounded-br-md transition-all duration-500 ease-out cursor-pointer"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <img src={HomeImages} alt="Images Frame" className="w-[50%]" />
      </div>
    </section>
  );
};

export default HomeContent;
