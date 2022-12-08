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

  const menuNavigate = async (route) => {
    await navigate(route);
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
      <div className="bg-black dark:bg-white text-white dark:text-black absolute top-0 left-0 right-0 h-8">
        <div className="marqueeFull  uppercase text-brand-100">
          <div className="trackFull text-xl">
            WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER
            ACTIVE DEVELOPMENT - SITE UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT -
            WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - SITE UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT - WEBSITE IS UNDER ACTIVE
            DEVELOPMENT - WEBSITE IS UNDER ACTIVE DEVELOPMENT -{" "}
          </div>
        </div>
      </div>
      <div className="absolute z-40 top-8 left-0 right-0 md:h-20 flex items-center justify-between">
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
          <div className="grid h-screen grid-cols-2 ">
            <div className="py-20 col-span-2 px-4 md:px-8">
              <div onClick={() => menuNavigate("/")} className="text-[6vh] ctrans mb-2 md:text-[13vh]  cursor-pointer w-fit menubgInnerItem opacity-0  font-medium text-white dark:text-black leading-none uppercase">
                Home
              </div>
              <div onClick={() => menuNavigate("/case-studies")} className="text-[6vh] ctrans mb-2 md:text-[13vh] cursor-pointer w-fit menubgInnerItem opacity-0  font-medium text-white dark:text-black leading-none uppercase">
                Case Studies
              </div>
              <div onClick={() => menuNavigate("/about")} className="text-[6vh] ctrans mb-2 md:text-[13vh] cursor-pointer w-fit menubgInnerItem opacity-0  font-medium text-white dark:text-black leading-none uppercase">
                About
              </div>
              <div onClick={() => menuNavigate("/contact")} className="text-[6vh] ctrans mb-2 md:text-[13vh] cursor-pointer w-fit menubgInnerItem opacity-0  font-medium text-white dark:text-black leading-none uppercase">
                Contact
              </div>
            </div>
            <div className="md:col-span-1 flex items-end justify-end py-20 px-4 md:px-8">
              <div className="grid md:grid-cols-6 grid-cols-3 gap-8">
                <div className="col-span-1 menubgInnerItem opacity-0  p-8 bg-gradient-to-br dark:from-white dark:to-gray-300 from-black to-gray-700 aspect-square cursor-pointer">
                  <svg className="filter dark:invert-0 invert " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                  </svg>
                </div>
                <div className="col-span-1 menubgInnerItem opacity-0 p-8 bg-gradient-to-br dark:from-white dark:to-gray-300 from-black to-gray-700 aspect-square cursor-pointer">
                  <svg className="filter dark:invert-0 invert " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                  </svg>
                </div>
                <div className="col-span-1 menubgInnerItem opacity-0 p-8 bg-gradient-to-br dark:from-white dark:to-gray-300 from-black to-gray-700 aspect-square cursor-pointer">
                  <svg className="filter dark:invert-0 invert " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute  top-0 left-0 right-0 md:h-20 flex items-center justify-between">
            <nav className="w-full md:p-8 p-4 flex items-center justify-between">
              <div className="font-semibold  uppercase md:text-xl dark:text-blalck text-white dark:text-black menubgInnerItem opacity-0 translate-y-2">Adeel Farzand</div>
              <div className="flex items-center justify-end">
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
