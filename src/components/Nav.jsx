import React, { useEffect } from "react";

import gsap from "gsap/dist/gsap";

import ThemeToggle from "./themeToggle";
import { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const [hovering, setHovering] = useState(0);

  const showMenu = () => {
    // if (menu) {
    //   return;
    // }
    setMenu(true);
    gsap.to(".fix-header", {
      transform: "translateY(0px)",
      duration: 0.01,
      onComplete: () => {
        gsap.to(".rects div", {
          transform: "translateY(0px)",
          stagger: 0.2,
          duration: 0.8,
          ease: "circ.easeinout",
          onComplete: () => {
            gsap.to(".nav-item", {
              opacity: 1,
              stagger: 0.15,
              transform: "translateY(0px)",
            });
          },
        });
      },
    });
  };
  const hideMenu = () => {
    gsap.to(".nav-item", {
      opacity: 0,
      stagger: 0.15,
      transform: "translateY(1rem)",
      onComplete: () => {
        gsap.to(".rects div", {
          transform: "translateY(-100vh)",
          stagger: 0.2,
          duration: 0.8,
          delay: 0.5,
          ease: "circ.easeinout",
          onComplete: () => {
            gsap.to(".fix-header", {
              transform: "translateY(-100vh)",
              duration: 0.01,
            });
          },
        });
      },
    });
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="absolute z-40 top-0 left-0 right-0 md:h-20 flex items-center justify-between">
        <nav className="w-full md:p-8 p-4 flex items-center justify-between">
          <div className="font-semibold uppercase md:text-xl dark:text-white text-black">
            Adeel Farzand
          </div>
          <div className="flex items-center justify-end">
            <ThemeToggle />
            <div
              onClick={() => showMenu()}
              className="h-10 py-1 w-12 hover:bg-black/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly"
            >
              <div className="w-8 border border-black dark:border-white "></div>
              <div className="w-8 border border-black dark:border-white"></div>
              <div className="w-8 border border-black dark:border-white"></div>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-screen h-screen fix-header translate-y-[-100vh] fixed inset-0 z-50">
        <div className="absolute rects inset-0 flex">
          <div className="w-1/5 h-screen translate-y-[-100vh] bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen translate-y-[-100vh] bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen translate-y-[-100vh] bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen translate-y-[-100vh] bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen translate-y-[-100vh] bg-black  dark:bg-white"></div>
        </div>

        <nav className="w-full absolute md:h-20 top-0 left-0 right-0 z-50 nav md:p-8 p-4 flex items-center justify-between">
          <div className="font-semibold translate-y-4 opacity-0 nav-item uppercase md:text-xl dark:text-black text-white">
            Adeel Farzand
          </div>
          <div className="flex items-center justify-end">
            <div className="nav-item opacity-0 translate-y-4">
              <ThemeToggle />
            </div>
            <div
              onClick={() => hideMenu()}
              className="h-10 py-1 w-12 nav-item opacity-0 hover:bg-white/10 dark:hover:bg-black/10 hovanim cursor-pointer flex flex-col items-center justify-evenly"
            >
              <div className="w-8 border border-white dark:border-black "></div>
              <div className="w-8 border border-white dark:border-black"></div>
            </div>
          </div>
        </nav>
        <div className=" absolute inset-0 pt-20 px-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-white dark:text-black menulink flex flex-col items-start justify-between">
              <div
                onMouseEnter={() => setHovering(1)}
                onMouseLeave={() => setHovering(0)}
                className="text-9xl nav-item opacity-0 cursor-pointer my-2"
              >
                Case Studies
              </div>
              <div
                onMouseEnter={() => setHovering(2)}
                onMouseLeave={() => setHovering(0)}
                className="text-9xl nav-item opacity-0 cursor-pointer my-2"
              >
                Services
              </div>
              <div
                onMouseEnter={() => setHovering(3)}
                onMouseLeave={() => setHovering(0)}
                className="text-9xl nav-item opacity-0 cursor-pointer my-2"
              >
                About
              </div>
              <div
                onMouseEnter={() => setHovering(4)}
                onMouseLeave={() => setHovering(0)}
                className="text-9xl nav-item opacity-0 cursor-pointer my-2"
              >
                Contact
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className={`w-1/2 nav-item opacity-0 border aspect-square transition-all duration-300 
                ${hovering === 1 ? "bg-orange-500" : ""}
                ${hovering === 2 ? "bg-emerald-500" : ""}
                ${hovering === 3 ? "bg-amber-500" : ""}
                ${hovering === 4 ? "bg-indigo-500" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
