import { useState } from "react";

// Import Icons
import { HiSun, HiMoon, HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import logo from "../assets/logo.svg";
import darkLogo from "../assets/darkLogo.svg";

const Navbar: React.FC = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((show) => !show);
  };

  const handleMobileNav = () => {
    setMobileNav((show) => !show);
  };

  const handleShowNav = () => {
    setShowNav((show) => !show);
  };

  return (
    <section className={`${darkMode ? "dark" : ""} max-w-5xl m-auto p-5`}>
      <nav className="flex items-center justify-between px-10 md:py-5 py-3 bg-white dark:bg-slate-800 shadow-md rounded-full">
        {darkMode ? (
          <img src={darkLogo} alt="darkLogo" className="md:w-[54px] w-10" />
        ) : (
          <img src={logo} alt="logo" className="md:w-[54px] w-10" />
        )}
        <div className="flex items-center md:gap-16 gap-4">
          <ul className="md:flex gap-16 text-primaryBlack dark:text-white font-semibold hidden">
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
          </ul>
          <div className="md:hidden flex">
            {mobileNav ? (
              <button onClick={handleMobileNav}>
                <CgClose
                  size={30}
                  className="text-primaryBlack dark:text-white"
                />
              </button>
            ) : (
              <button onClick={handleMobileNav}>
                <HiMenuAlt3
                  size={30}
                  className="text-primaryBlack dark:text-white"
                />
              </button>
            )}
          </div>
          <div
            className={`${
              mobileNav ? "left-0 top-0" : "-left-full"
            } bg-white dark:bg-slate-800 rounded shadow-md md:hidden absolute z-10 transition-all duration-500 ease-out`}
          >
            <div className="h-screen w-56 flex items-center justify-center">
              <ul className="flex flex-col gap-16 text-primaryBlack dark:text-white font-semibold">
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
              </ul>
            </div>
          </div>

          <button onClick={handleDarkMode}>
            {darkMode ? (
              <HiMoon size={30} color={"#FFFFFF"} />
            ) : (
              <HiSun size={30} color={"#2C2E3C"} />
            )}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
