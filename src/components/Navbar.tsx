import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

import logo from "../assets/logo.svg";
import darkLogo from "../assets/darkLogo.svg";

const Navbar: React.FC = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((show) => !show);
  };

  return (
    <section className={`${darkMode ? "dark" : ""} max-w-5xl m-auto p-5`}>
      <nav className="flex items-center justify-between px-10 py-5 bg-white dark:bg-slate-800 shadow-md rounded-full">
        {darkMode ? (
          <img src={darkLogo} alt="darkLogo" />
        ) : (
          <img src={logo} alt="logo" />
        )}
        <ul className="flex items-center gap-16 text-primaryBlack dark:text-white font-semibold">
          <li className="group cursor-pointer">
            <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
              Home
            </span>
          </li>
          <li className="group cursor-pointer">
            <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
              About
            </span>
          </li>
          <li className="group cursor-pointer">
            <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
              Projects
            </span>
          </li>
          <li className="group cursor-pointer">
            <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
              Contact
            </span>
          </li>
          <button onClick={handleDarkMode}>
            {darkMode ? (
              <HiMoon size={30} color={"#FFFFFF"} />
            ) : (
              <HiSun size={30} color={"#2C2E3C"} />
            )}
          </button>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
