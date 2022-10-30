import { useState, FC, useContext } from "react";
import { Link } from "react-router-dom";

// Import Icons
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../assets/logo.svg";
import { CgClose } from "react-icons/cg";

// Import Component
import ThemeSwitch from "../components/home/ThemeSwitch";

const Navbar: FC = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav((show) => !show);
  };

  return (
    <section className=" max-w-5xl m-auto p-5 z-50">
      <nav className="flex items-center justify-between px-10 md:py-5 py-3 bg-white shadow-md rounded-full">
        <img src={logo} alt="Logo" className="md:w-[54px] w-10" />

        <div className="flex items-center md:gap-16 gap-4">
          <ul className="md:flex gap-16 text-primaryBlack font-semibold hidden">
            <li className="group cursor-pointer">
              <Link to={"/"}>
                <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
                  Home
                </span>
              </Link>
            </li>
            <li className="group cursor-pointer">
              <Link to={"/about"}>
                <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
                  About
                </span>
              </Link>
            </li>
            <li className="group cursor-pointer">
              <Link to={"/"}>
                <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
                  Projects
                </span>
              </Link>
            </li>
            <li className="group cursor-pointer">
              <Link to={"/"}>
                <span className="bg-left-bottom bg-gradient-to-r from-primaryGreen dark:from-white to-primaryGreen dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
          <div
            className={`${
              mobileNav ? "left-0 top-0" : "-left-full top-0"
            } bg-white dark:bg-slate-800 shadow-md md:hidden absolute z-10 transition-all ease-in-out`}
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
          <ThemeSwitch />
          <div className="md:hidden flex">
            {mobileNav ? (
              <button onClick={handleMobileNav}>
                <CgClose
                  size={30}
                  className="text-primaryBlack dark:text-primaryBlack"
                />
              </button>
            ) : (
              <button onClick={handleMobileNav}>
                <HiMenuAlt3
                  size={30}
                  className="text-primaryBlack dark:text-primaryBlack"
                />
              </button>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
