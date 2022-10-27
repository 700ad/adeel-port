import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <button
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          className="py-1 px-4 cursor-pointer mr-4 bg-black dark:bg-white hover:bg-white/60 hover:dark:bg-black/60 hover:dark:text-white hover:text-black transition-all duration-300 dark:text-black rounded-full uppercase text-white text-sm md:text-base"
        >
          {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      )}
    </ThemeToggler>
  );
}
