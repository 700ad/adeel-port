import React, { useState } from "react";

import gsap from "gsap/dist/gsap";

import ThemeToggle from "./themeToggle";
import { useEffect } from "react";
import { Link, navigate } from "gatsby";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const [hovering, setHovering] = useState(0);
  const animIn = () => {
    gsap
      .timeline({
        defaults: {
          ease: "circ.inout",
        },
      })
      .to("#fchanger", {
        duration: 0,
        display: "flex",
      })
      .to(".rects div", {
        transform: "translateY(0px)",
        stagger: 0.2,
      })
      .to(
        ".nitem",
        {
          opacity: 1,
          stagger: 0.1,
        }
        // "-=1"
      );
  };

  const animOut = () => {
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: "circ.inout",
        },
      })
      .to(".nitem", {
        transform: "translateY(1rem)",
        opacity: 0,
        stagger: 0.2,
      })
      .to(".rects div", {
        transform: "translateY(-100vh)",
        stagger: 0.2,
      })
      .to("#fchanger", {
        duration: 0,
        display: "none",
      });
  };

  const navigateTo = (route) => {
    const tl = gsap.timeline();
    tl.to(".nitem", {
      opacity: 0,
      stagger: 0.15,
      transform: "translateY(1rem)",
      onComplete: () => navigate(route),
    });
    tl.to(".rects div", {
      transform: "translateY(-100vh)",
      stagger: 0.2,
      duration: 0.8,
      onComplete: () => {
        tl.to("#fchanger", {
          duration: 0,
          display: "none",
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
              onClick={() => animIn()}
              className="h-10 py-1 w-12 hover:bg-black/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly"
            >
              <div className="w-8 border border-black dark:border-white "></div>
              <div className="w-8 border border-black dark:border-white"></div>
              <div className="w-8 border border-black dark:border-white"></div>
            </div>
          </div>
        </nav>
      </div>

      <div id="fchanger" className="fixed hidden rects inset-0 z-[100]">
        <div className="w-1/5 h-screen translate-y-[-100vh] bg-black"></div>
        <div className="w-1/5 h-screen translate-y-[-100vh] bg-black"></div>
        <div className="w-1/5 h-screen translate-y-[-100vh] bg-black"></div>
        <div className="w-1/5 h-screen translate-y-[-100vh] bg-black"></div>
        <div className="w-1/5 h-screen translate-y-[-100vh] bg-black"></div>
        <div className="absolute z-40 top-0 left-0 right-0 p-8 flex items-center justify-between">
          <div className="font-semibold nitem opacity-0 absolute  uppercase md:text-xl text-white">
            Adeel Farzand
          </div>
          <div></div>
          <div className="flex nitem opacity-0 items-center justify-end">
            <div
              onClick={() => animOut()}
              className="h-10 py-1 w-12 hover:bg-white/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly"
            >
              <div className="w-8 border border-white "></div>
              <div className="w-8 border border-white"></div>
              <div className="w-8 border border-white"></div>
            </div>
          </div>
        </div>
        <div className=" absolute top-14 w-screen grid grid-cols-2 p-8">
          <div className="col-span-1 h-40 text-white flex flex-col">
            <div
              onClick={() => navigateTo("/")}
              className="text-[12vh] my-2 font-medium py-2 w-fit opacity-0 nitem leading-none cursor-pointer"
            >
              HOME
            </div>
            <div
              onClick={() => navigateTo("/case-studies")}
              className="text-[12vh] my-2 font-medium py-2 w-fit opacity-0 nitem leading-none cursor-pointer"
            >
              CASE STUDIES
            </div>
            <div
              onClick={() => navigateTo("/case-studies")}
              className="text-[12vh] my-2 font-medium py-2 w-fit opacity-0 nitem leading-none cursor-pointer"
            >
              ABOUT
            </div>
            <div
              onClick={() => navigateTo("/contact")}
              className="text-[12vh] my-2 font-medium py-2 w-fit opacity-0 nitem leading-none cursor-pointer"
            >
              CONTACT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
