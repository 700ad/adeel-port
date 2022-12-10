import React, { useEffect } from "react";
import FullWidthText from "./FullWidthText";
import HeroFullWidth from "./HeroFullWidth";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import FullStaticText from "./FullStaticText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    gsap.timeline().to(".heroitem", {
      transform: "translateY(0px)",
      opacity: 1,
      stagger: 0.2,
      delay: 4,
    });
    // gsap.to("#ball", {
    //   scrollTrigger: {
    //     trigger: "#cont",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: 1,
    //   },
    //   rotate: 360,
    // });
  }, []);
  return (
    <>
      <div id="cont" className="min-h-screen p-4 md:px-8 bg-white dark:bg-black text-black dark:text-white grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 pt-16 md:pt-20">
        <div className="col-span-1">
          <HeroFullWidth />
        </div>
        <div className="col-span-1">
          <div className="w-full  heroitem opacity-0 translate-y-3 relative md:h-full h-40 bg-gradient-to-br from-transparent to-gray-900/80 dark:to-gray-200/80"></div>
        </div>
        <div className="col-span-1 h-full items-center md:items-start justify-between pb-8 flex flex-col row-start-4 md:row-start-2">
          <p className="lg:w-2/5  heroitem opacity-0 translate-y-3 text-xl nord">Helping Companies Generate More Revenue By Creating Better Digital Products</p>

          <div className="mb-12 heroitem opacity-0 translate-y-3 rounded-full h-20">
            <a
              target="_blank"
              href="https://calendly.com/adeelfarzand/30min-discovery-call"
              className="bg-black relative z-50 mt-8 text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center md:text-2xl uppercase px-8 py-2 hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-500 hover:text-black"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <FullStaticText word1="CREATIVE" word2="ENGINEER" />
          {/* <FullWidthText word1="CREATIVE" word2="ENGINEER" /> */}
        </div>
      </div>
    </>
  );
}
