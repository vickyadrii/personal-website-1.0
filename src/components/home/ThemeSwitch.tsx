import React, { useContext, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import MyThemeContext from "../../context/MyThemeContext";

const ThemeSwitch: React.FC = () => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleThemeHandler = (): void => {
    themeCtx.toggleThemeHandler();
    setDarkMode((show) => !show);
  };
  return (
    <button type="button" onClick={toggleThemeHandler}>
      {darkMode ? (
        <HiMoon size={30} className="text-primaryBlack" />
      ) : (
        <HiSun size={30} className="text-primaryBlack" />
      )}
    </button>
  );
};

export default ThemeSwitch;
