import React from "react";
import { useDarkMode } from "../context/darkModeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

function Header() {
  const { dark, setDark } = useDarkMode();

  const handleDark = () => {
    setDark(!dark);
    localStorage.setItem("dark", JSON.stringify(!dark));
  };

  return (
    <header className="sticky top-0 w-full p-4 flex justify-between items-center bg-white dark:bg-primary border-b border-gray-200 dark:border-secondary z-10">
      <h1 className="text-2xl font-nunito flex font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-blue-400">
        Link.gen
      </h1>
      <div className="flex justify-center items-center space-x-4">
        {dark ? (
          <BsFillMoonStarsFill
            size={25}
            className="text-border-dark cursor-pointer"
            onClick={handleDark}
          />
        ) : (
          <MdLightMode
            size={25}
            className="text-border-dark cursor-pointer"
            onClick={handleDark}
          />
        )}
        <a
          rel="noreferrer"
          href="https://linkpile-bffd7.web.app/"
          target="_blank"
          className="px-4 py-2 text-white font-nunito font-bold rounded-3xl bg-gradient-to-r from-primary-accent to-rose-400 hover:bg-secondary-accent"
        >
          Try Linkpile
        </a>
      </div>
    </header>
  );
}

export default Header;
