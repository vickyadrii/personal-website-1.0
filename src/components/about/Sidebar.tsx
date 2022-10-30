import { MdSchool } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { FaBuilding, FaCode } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { useState } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Sidebar: React.FC = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const sidebarBtn = [
    {
      id: 0,
      icon: <RiProfileFill className="flex w-7 h-7 " />,
    },
    {
      id: 1,
      icon: (
        <MdSchool className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
      ),
    },
    {
      id: 2,
      icon: (
        <FaBuilding className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
      ),
    },
    {
      id: 3,
      icon: (
        <HiCode className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
      ),
    },
  ];

  return (
    <section className="flex justify-between w-full max-w-5xl m-auto p-5">
      <div className="flex flex-row-reverse gap-5 w-full justify-between">
        <div>
          {currIndex === 0 && <Profile />}
          {currIndex === 1 && <Education />}
          {currIndex === 2 && <Experience />}
          {currIndex === 3 && <Skills />}
        </div>
        <div className="flex items-center justify-center flex-col gap-10 bg-white dark:bg-slate-700 px-3 py-10 shadow-md rounded-[10px] md:h-[470px]">
          {sidebarBtn.map(({ id, icon }) => (
            <button
              key={id}
              onClick={() => setCurrIndex(id)}
              className={`text-primaryGreen dark:text-white hover:bg-primaryGreen dark:hover:bg-slate-800 hover:text-white p-3  ${
                currIndex === id &&
                "text-white p-3 bg-primaryGreen active:bg-hoverGreen dark:bg-slate-800"
              } cursor-pointer  transition-all duration-300 ease-out rounded-[15px] outline-primaryGreen`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
