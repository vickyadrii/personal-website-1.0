import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

// Import File CV and Images
import HomeImages from "../assets/HomeImages.png";
const myCV = require("../assets/cv-vickyherdiansyahadri.pdf");

const HomeContent: React.FC = () => {
  return (
    <section className="max-w-5xl m-auto p-5">
      <div className="flex lg:flex-row flex-col items-center md:justify-between md:gap-14 lg:gap-0 gap-12">
        <div className="flex flex-col lg:items-start items-center md:gap-9 gap-8 md:my-5">
          <div className="font-montserratAlternate lg:text-left text-center text-primaryBlack flex flex-col gap-5">
            <h2 className="sm:text-5xl text-3xl font-bold">Hi everyone!</h2>
            <h3 className="sm:text-3xl text-xl font-bold">
              I’m{" "}
              <span className="text-primaryGreen font-black">
                Vicky Herdiansyah Adri
              </span>
            </h3>
            <div className="max-w-md">
              <p className="sm:text-lg font-montserrat font-medium md:leading-8 leading-7">
                An undergraduate information technology student who experience
                in frontend web developer.
              </p>
            </div>
          </div>
          <div className="flex items-center md:gap-10 gap-7">
            <a
              href="https://github.com/vickyadri29"
              target="_blank"
              className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer"
            >
              <FaGithub
                color={"#268B6C"}
                className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vickyadrii/"
              target="_blank"
              className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer"
            >
              <FaLinkedinIn
                color={"#268B6C"}
                className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
              />
            </a>
            <a
              href="https://www.instagram.com/vickyadrii/"
              target="_blank"
              className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer"
            >
              <AiFillInstagram
                color={"#268B6C"}
                className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
              />
            </a>
            <a
              href="mailto:vickyadri103@gmail.com"
              target="_blank"
              className="flex items-center justify-center md:w-[60px] md:h-[60px] p-3 bg-white rounded-full shadow-sm drop-shadow-md hover:-translate-y-1 hover:drop-shadow-2xl transition-all duration-200 ease-out cursor-pointer"
            >
              <MdEmail
                color={"#268B6C"}
                className="md:w-[30px] w-[20px] md:h-[30px] h-[20px]"
              />
            </a>
          </div>
          <div>
            <a
              href={myCV}
              className="text-white font-semibold px-4 py-3 md:text-base text-xs bg-secondGreen hover:bg-hoverGreen rounded-tl-md rounded-br-md transition-all duration-500 ease-out cursor-pointer"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <img src={HomeImages} alt="Images Frame" className="md:w-[80%] lg:w-[50%] w-56" />
      </div>
    </section>
  );
};

export default HomeContent;
