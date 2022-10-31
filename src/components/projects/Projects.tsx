// Import Components
import Navbar from "../../components/Navbar";
import TitleProject from "./TitleProject";
import Cards from "./Cards";

// Import Images
import wave1 from "../../assets/wave1.svg";
import wave2 from "../../assets/wave2.svg";

const Projects: React.FC = () => {
  return (
    <section className="z-50">
      <div
        className="
        relative font-montserrat bg-gradient-to-b from-white to-teal-50 h-screen  dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
      >
        <div className="">
          <img
            src={wave1}
            alt="wave1"
            className="h-screen sm:absolute lg:flex hidden sm:right-0 md:opacity-100 opacity-20 -z-20"
          />
          <img
            src={wave2}
            alt="wave2"
            className="absolute left-0 w-56 h-56 top-0 right-0 -z-10"
          />
        </div>
        <div className="z-50">
          <Navbar />
          <div className="">
            <TitleProject />
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
