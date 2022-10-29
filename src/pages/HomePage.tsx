import { FC, useState } from "react";

// Import Components
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";

// Import Images
import wave1 from "../assets/wave1.svg";
import wave2 from "../assets/wave2.svg";

const HomePage: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((show) => !show);
  };
  return (
    <section>
      <div className="relative font-montserrat bg-gradient-to-b from-white to-teal-50 h-screen dark:bg-gray-800 -z-0">
        <div className="">
          <img
            src={wave1}
            alt="wave1"
            className="h-screen md:absolute hidden right-0 md:opacity-100 opacity-20 -z-20"
          />
          <img
            src={wave2}
            alt="wave2"
            className="absolute left-0 w-56 h-56 top-0 right-0 -z-10"
          />
        </div>
        <div className="z-50">
          <Navbar />
          <div className="absolute top-0 right-0 left-0 pt-20 flex items-center justify-center h-screen -z-10">
            <HomeContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
