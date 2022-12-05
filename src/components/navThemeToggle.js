import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import gsap from "gsap/dist/gsap";

export default function NavThemeToggle() {
  const changeTheme = () => {
    const tl = gsap.timeline();
    tl.to(".changer", {
      translateY: "0px",
      duration: 0.1,
    })
      .to(".themrects div", {
        translateY: "0px",
        stagger: 0.2,
        duration: 1.2,
        ease: "circ.inout",
      })
      .to(".themrects div", {
        translateY: "-100vh",
        stagger: 0.2,
        duration: 1.2,
        delay: 0.5,
        ease: "circ.inout",
      })
      .to(".changer", {
        translateY: "-100vh",
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
              }, 2500);
            }}
            className="py-1 px-4 cursor-pointer mr-4 bg-white hover:bg-white/60 hover:dark:bg-black/60  transition-all duration-300 dark:bg-black dark:text-white rounded-full uppercase"
          >
         {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
          <div className="fixed z-[100] changer translate-y-[-100vh] flex themrects inset-0 ">
            <div className="w-1/5 h-screen translate-y-[-100vh] dark:bg-black bg-white"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] dark:bg-black bg-white"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] dark:bg-black bg-white"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] dark:bg-black bg-white"></div>
            <div className="w-1/5 h-screen translate-y-[-100vh] dark:bg-black bg-white"></div>
          </div>
        </>
      )}
    </ThemeToggler>
  );
}
