import React from 'react'
import ThemeToggle from "./themeToggle";

const Nav = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 md:h-20 flex items-center justify-between">
        <nav className="w-full md:p-8 p-4 flex items-center justify-between">
          <div className="font-semibold uppercase md:text-xl dark:text-white text-black">
            Adeel Farzand
          </div>
          <div className="flex items-center justify-end">
            <ThemeToggle />
            <div className="h-10 py-1 w-12 hover:bg-black/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly">
              <div className="w-8 border border-black dark:border-white "></div>
              <div className="w-8 border border-black dark:border-white"></div>
              <div className="w-8 border border-black dark:border-white"></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
