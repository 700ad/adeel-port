import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import gsap from "gsap/dist/gsap";

export default function ThemeToggle() {
  const changeTheme = () => {
    gsap.to(".changer", {
      display: "flex",
      duration: 0,
      onComplete: () => {
        gsap.to(".rects div", {
          transform: "translateY(0px)",
          stagger: 0.2,
          duration: 0.8,
          ease: "expo.inout",
          onComplete: () => {
            gsap.to(".rects div", {
              transform: "translateY(-100vh)",
              stagger: 0.2,
              duration: 0.8,
              ease: "expo.inout",
              onComplete: () => {
                gsap.to(".changer", {
                  display: "none",
                  duration: 0,
                });
              },
            });
          },
        });
      },
    });
  };
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <>
          <button
            onClick={() => {
              changeTheme();
              setTimeout(() => {
                toggleTheme(theme === "dark" ? "light" : "dark");
              }, 4000);
            }}
            // onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            className="py-1 px-4 cursor-pointer mr-4 bg-black dark:bg-white hover:bg-white/60 hover:dark:bg-black/60 hover:dark:text-white hover:text-black transition-all duration-300 dark:text-black rounded-full uppercase text-white text-sm md:text-base"
          >
            {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
          <div className="fixed changer hidden rects inset-0 ">
            <div className="w-1/5 h-screen translate-y-[-100vh] bg-gradient-to-r from-white to-gray-50 dark:from-black dark:to-gray-900"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] bg-gradient-to-r  from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] bg-gradient-to-r  from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] bg-gradient-to-r  from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] bg-gradient-to-r  from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500"></div>
          </div>
        </>
      )}
    </ThemeToggler>
  );
}
