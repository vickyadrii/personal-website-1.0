import { useState, FC, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Import Icons
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../assets/logo.svg";
import { CgClose } from "react-icons/cg";

// Import Component
import ThemeSwitch from "../components/home/ThemeSwitch";

const Navbar: FC = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const location = useLocation();

  const handleMobileNav = () => {
    setMobileNav((show) => !show);
  };

  const navbarList = [
    {
      id: 0,
      list: "Home",
      href: "/",
    },
    {
      id: 1,
      list: "About",
      href: "/about",
    },
    {
      id: 2,
      list: "Projects",
      href: "/projects",
    },
    // {
    //   id: 3,
    //   list: "Contact",
    //   href: "/contact",
    // },
  ];

  return (
    <section className=" max-w-5xl m-auto p-5 z-50">
      <nav className="flex items-center justify-between px-10 md:py-5 py-3 bg-white shadow-md rounded-full">
        <img src={logo} alt="Logo" className="md:w-[54px] w-10" />

        <div className="flex items-center md:gap-16 gap-4">
          <ul className="md:flex gap-16 text-primaryBlack font-semibold hidden">
            {navbarList.map(({ id, list, href }) => (
              <li key={id} className="group cursor-pointer">
                <Link
                  to={href}
                  className={`${
                    location.pathname === href
                      ? "border-b-2 border-b-primaryGreen pb-[2px]"
                      : "bg-left-bottom bg-gradient-to-r from-primaryGreen to-primaryGreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1"
                  }`}
                >
                  <button>{list}</button>
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`${
              mobileNav ? "left-0 top-0" : "-left-full top-0"
            }  bg-gradient-to-b from-teal-50 to-white dark:bg-slate-800 shadow-md md:hidden absolute z-10 transition-all ease-in-out`}
          >
            <div className="h-screen w-56 flex items-center justify-center">
              <ul className="flex flex-col gap-16 text-primaryBlack dark:text-white font-semibold">
                {navbarList.map(({ id, list, href }) => (
                  <li key={id} className="group cursor-pointer">
                    <Link
                      to={href}
                      className={`${
                        location.pathname === href
                          ? "border-b-2 border-b-primaryGreen pb-[2px]"
                          : "bg-left-bottom bg-gradient-to-r from-primaryGreen to-primaryGreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1"
                      }`}
                    >
                      <button>{list}</button>
                    </Link>
                  </li>
                ))}
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
