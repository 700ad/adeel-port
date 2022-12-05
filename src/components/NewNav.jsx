import React, { useEffect, useState } from "react";
import gsap from "gsap/dist/gsap";
import ThemeToggle from "./themeToggle";
import NavThemeToggle from "./navThemeToggle";
import { navigate } from "gatsby";
import FullWidthText from "../components/FullWidthText";
import { Link } from "gatsby";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    const tl = gsap.timeline();
    tl.to(".menubg", {
      transform: "translateY(0px)",
      duration: 0,
    })
      .to(".menubgInnerDiv", {
        transform: "translateY(0px)",
        stagger: 0.2,
        duration: 0.8,
        ease: "expo.inout",
      })
      .to(".menubgInnerItem", {
        opacity: 1,
        transform: "translateY(0px)",
        stagger: 0.1,
        ease: "expo.inout",
      });
  };

  const hideMenu = () => {
    const tl = gsap.timeline();
    tl.to(".menubgInnerItem", {
      opacity: 0,
      transform: "translateY(0.5rem)",
      stagger: 0.1,
      ease: "expo.inout",
    })
      .to(".menubgInnerDiv", {
        transform: "translateY(-100vh)",
        stagger: 0.2,
        duration: 0.8,
        ease: "expo.inout",
      })
      .to(".menubg", {
        transform: "translateY(-100vh)",
        duration: 0,
      });
  };

  const menuNavigate = (route) => {
    navigate(route);
    const tl = gsap.timeline();
    tl.to(".menubgInnerItem", {
      opacity: 0,
      transform: "translateY(0.5rem)",
      stagger: 0.1,
      ease: "expo.inout",
    })
      .to(".menubgInnerDiv", {
        transform: "translateY(-100vh)",
        stagger: 0.2,
        duration: 0.8,
        ease: "expo.inout",
      })
      .to(".menubg", {
        transform: "translateY(-100vh)",
        duration: 0,
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="absolute z-40 top-0 left-0 right-0 md:h-20 flex items-center justify-between">
        <nav className="w-full md:p-8 p-4 flex items-center justify-between">
          <div className="font-semibold navitem uppercase md:text-xl dark:text-white text-black">Adeel Farzand</div>
          <div className="flex items-center justify-end">
            <ThemeToggle />
            <button onClick={() => showMenu()} className="h-10 py-1 w-12 navmenu hover:bg-black/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly">
              <div className="w-8 border border-black dark:border-white "></div>
              <div className="w-8 border border-black dark:border-white"></div>
              <div className="w-8 border border-black dark:border-white"></div>
            </button>
          </div>
        </nav>
      </div>
      <div className="fixed flex top-0 translate-y-[-100vh] left-0 right-0 bottom-0 menubg z-50">
        <div className="bg-black menubgInnerDiv translate-y-[-100vh] dark:bg-white w-1/5 h-screen"></div>
        <div className="bg-black menubgInnerDiv translate-y-[-100vh] dark:bg-white w-1/5 h-screen"></div>
        <div className="bg-black menubgInnerDiv translate-y-[-100vh] dark:bg-white w-1/5 h-screen"></div>
        <div className="bg-black menubgInnerDiv translate-y-[-100vh] dark:bg-white w-1/5 h-screen"></div>
        <div className="bg-black menubgInnerDiv translate-y-[-100vh] dark:bg-white w-1/5 h-screen"></div>
        <div className="menubgInnerMenu absolute inset-0">
          <div className="py-20 px-4 md:px-8">
            <div onClick={() => menuNavigate("/")} className="text-[13vh] cursor-pointer w-fit menubgInnerItem opacity-0 translate-y-2 font-medium text-white dark:text-black leading-none uppercase">
              Home
            </div>
            <div onClick={() => menuNavigate("/case-studies")} className="text-[13vh] cursor-pointer w-fit menubgInnerItem opacity-0 translate-y-2 font-medium text-white dark:text-black leading-none uppercase">
              Case Studies
            </div>
            <div onClick={() => menuNavigate("/about")} className="text-[13vh] cursor-pointer w-fit menubgInnerItem opacity-0 translate-y-2 font-medium text-white dark:text-black leading-none uppercase">
              About
            </div>
            <div onClick={() => menuNavigate("/contact")} className="text-[13vh] cursor-pointer w-fit menubgInnerItem opacity-0 translate-y-2 font-medium text-white dark:text-black leading-none uppercase">
              Contact
            </div>
          </div>
          <div className="absolute  top-0 left-0 right-0 md:h-20 flex items-center justify-between">
            <nav className="w-full md:p-8 p-4 flex items-center justify-between">
              <div className="font-semibold  uppercase md:text-xl dark:text-blalck text-white menubgInnerItem opacity-0 translate-y-2">Adeel Farzand</div>
              <div className="flex items-center justify-end">
                <div className="menubgInnerItem opacity-0 translate-y-2">
                  <NavThemeToggle />
                </div>
                <button onClick={() => hideMenu()} className="h-10 py-1 w-12 menubgInnerItem opacity-0 translate-y-2 hover:bg-black/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly">
                  <div className="w-8 border border-white dark:border-black "></div>
                  <div className="w-8 border border-white dark:border-black"></div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
