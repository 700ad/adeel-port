//
import React, { useEffect, useState } from "react";
import gsap from "gsap/dist/gsap";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    const tl = gsap.timeline();
    tl.to(".rects", {
      transform: "translateY(0px)",
    })
      .to(".rects div", {
        transform: "translateY(0px)",
        stagger: 0.2,
        duration: 1.4,
        ease: "circ.inout",
      })
      .to(
        ".navitem",
        {
          stagger: 0.2,
          color: "white",
        },
        "-=1.2"
      );
  };

  const hideMenu = () => {
    const tl = gsap.timeline();
    tl.to(".navitem", {
      stagger: 0.2,
      opacity: 0,
      translateY: "1.5rem",
    })
      .to(".rects div", {
        transform: "translateY(-100vh)",
        stagger: 0.2,
        duration: 1.4,
        ease: "circ.inout",
      })
      .to(
        ".rects",
        {
          transform: "translateY(-100vh)",
        },
        "-=1.2"
      );
  };

  useEffect(() => {}, []);

  return (
    <>

      <div className="absolute z-[60] top-10 left-0 right-0 md:h-20 flex items-center justify-between">
        <nav className="w-full md:p-8 p-4 flex items-center justify-between">
          <div className="font-semibold navitem uppercase md:text-xl dark:text-white text-black">Adeel Farzand</div>
          <div className="flex items-center justify-end">
            {/* <ThemeToggle /> */}

            <button className="bg-black navbtn text-white px-4 rounded-full mr-4 py-1 cursor-pointers">Dark Theme</button>
            <button
              onClick={() => {
                showMenu();
              }}
              className="h-10 py-1 w-12 navmenu hover:bg-black/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly"
            >
              <div className="w-8 border border-black dark:border-white "></div>
              <div className="w-8 border border-black dark:border-white"></div>
              <div className="w-8 border border-black dark:border-white"></div>
            </button>
          </div>
        </nav>
      </div>
      <div className="absolute translate-y-[-100vh] flex z-50  changer rects inset-0 ">
        <div className="w-1/5 translate-y-[-100vh] h-screen bg-black border-r border-white/20"></div>
        <div className="w-1/5 translate-y-[-100vh] h-screen bg-black border-r border-white/20"></div>
        <div className="w-1/5 translate-y-[-100vh] h-screen bg-black border-r border-white/20"></div>
        <div className="w-1/5 translate-y-[-100vh] h-screen bg-black border-r border-white/20"></div>
        <div className="w-1/5 translate-y-[-100vh] h-screen bg-black border-r border-white/20"></div>
        {/* <div className="absolute z-10 top-0 left-0 right-0 md:h-20 flex items-center justify-between">
          <nav className="w-full md:p-8 p-4 flex items-center justify-between">
            <div className="font-semibold opacity-0 navitem translate-y-6 uppercase md:text-xl dark:text-white text-white">
              Adeel Farzand
            </div>
            <div className="flex items-center justify-end">
              <ThemeToggle />
              <button className="bg-black opacity-0 navitem translate-y-6 text-white px-2 py-2 cursor-pointers">
                Hide Nav
              </button>
              <button
                onClick={() => hideMenu()}
                className="h-10 py-1 w-12 opacity-0 navitem translate-y-6 hover:bg-white/10 dark:hover:bg-white/10 hovanim cursor-pointer flex flex-col items-center justify-evenly"
              >
                <div className="w-8 border border-white dark:border-white "></div>
                <div className="w-8 border border-white dark:border-white"></div>
              </button>
            </div>
          </nav>
        </div> */}
      </div>
    </>
  );
}
