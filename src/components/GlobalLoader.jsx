import React from "react";
import { useEffect } from "react";
import gsap from "gsap/dist/gsap";

export default function GLobalLoader() {
  useEffect(() => {
    gsap.to("#slider div", {
      width: "100%",
      stagger: 0.1,
      duration: 0.8,
      ease: "expo.inout",
      onComplete: () => {
        gsap.to(".textitem", {
          opacity: 0,
          duration: 0,
          onComplete: () => {
            gsap.to("#slider div", {
              width: "0%",
              delay: 0.25,
              stagger: 0.15,
              duration: 0.8,
              ease: "expo.inout",
              onComplete: () => {
                gsap.to(".rects div", {
                  transform: "translateY(-100vh)",
                  stagger: 0.2,
                  duration: 0.8,
                  ease: "expo.inout",
                  onStart: () => {
                    gsap.to("#menu", {
                      delay: 1.8,
                      display: "none",
                      duration: 0,
                    });
                  },
                });
              },
            });
          },
        });
      },
    });
  }, []);
  return (
    <div id="menu" className="w-screen h-screen fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute rects inset-0 flex">
        <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
        <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
        <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
        <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
        <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
      </div>
      <div id="content" className="relative p-4">
        <div id="slider" className="absolute top-0 z-[100] left-0 bottom-0 right-0">
          <div className="h-1/5 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 w-0"></div>
          <div className="h-1/5 bg-gradient-to-b  from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 w-0"></div>
          <div className="h-1/5 bg-gradient-to-b  from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 w-0"></div>
          <div className="h-1/5 bg-gradient-to-b  from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 w-0"></div>
          <div className="h-1/5 bg-gradient-to-b  from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 w-0"></div>
        </div>
        <div className="filter textitem font-sans text-black dark:text-white invert text-[20vw] md:text-[20vh] font-bold leading-none uppercase">
          Adeel &copy;
          <br />
          Farzand
        </div>
      </div>
    </div>
  );
}
