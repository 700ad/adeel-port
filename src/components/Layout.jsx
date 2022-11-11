import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Lenis from "@studio-freight/lenis";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Ukiyo from "ukiyojs";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.008 - Math.pow(2.6, -8 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on(
      "scroll",
      ({ scroll, limit, velocity, direction, progress }) => {}
    );

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.to("#slider div", {
      width: "100%",
      delay: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: "expo.inout",
      onComplete: () => {
        gsap.to(".textitem", {
          opacity: 0,
          onComplete: () => {
            gsap.to("#slider div", {
              width: "0%",
              delay: 1,
              stagger: 0.15,
              duration: 0.8,
              ease: "expo.inout",
              onComplete: () => {
                gsap.to(".rects div", {
                  transform: "translateY(-100vh)",
                  stagger: 0.2,
                  duration: 0.8,
                  delay: 0.5,
                  ease: "expo.inout",
                  onComplete: () => {
                    gsap.to("#menu", {
                      display: "none",
                      duration: 0.01,
                    });
                  },
                });
              },
            });
          },
        });
      },
    });

    const images = document.querySelectorAll(".ukiyo");
    images.forEach((image) => {
      new Ukiyo(image, {
        speed: 2,
        scale: 1.25,
      });
    });
  }, []);
  return (
    <>
      <div
        id="menu"
        className="w-screen h-screen fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="absolute rects inset-0 flex">
          <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
          <div className="w-1/5 h-screen  bg-black  dark:bg-white"></div>
        </div>
        <div id="content" className="relative p-4">
          <div
            id="slider"
            className="absolute top-0 z-[100] left-0 bottom-0 right-0"
          >
            <div className="h-1/5 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 w-0"></div>
            <div className="h-1/5 bg-gradient-to-b  from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 w-0"></div>
            <div className="h-1/5 bg-gradient-to-b  from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 w-0"></div>
            <div className="h-1/5 bg-gradient-to-b  from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 w-0"></div>
            <div className="h-1/5 bg-gradient-to-b  from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 w-0"></div>
          </div>
          <div className="filter textitem text-black dark:text-white invert text-[20vw] md:text-[20vh] font-bold leading-none uppercase">
            Adeel &copy; <br />
            Farzand
          </div>
        </div>
      </div>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
