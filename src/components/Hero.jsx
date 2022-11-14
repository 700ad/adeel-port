import React, { useEffect } from "react";
import FullWidthText from "./FullWidthText";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    gsap.timeline().to(".heroitem", {
      transform: "translateY(0px)",
      opacity: 1,
      stagger: 0.2,
      delay: 4,
    });
    gsap.to("#ball", {
      scrollTrigger: {
        trigger: "#cont",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      rotate: 360,
    });
  }, []);
  return (
    <>
      <div
        id="cont"
        className="w-screen min-h-screen sunsts p-4 md:px-8 bg-white dark:bg-black text-black dark:text-white grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 pt-16 md:pt-20"
      >
        <div className="col-span-1">
          <FullWidthText word1="ADEEL &copy;" word2="FARZAND" />
        </div>
        <div className="col-span-1">
          <div className="w-full  heroitem opacity-0 translate-y-3 relative md:h-full h-40 bg-gradient-to-br from-transparent to-gray-900/80 dark:to-gray-200/80"></div>
        </div>
        <div className="col-span-1 h-full items-center md:items-start justify-between pb-16 flex flex-col row-start-4 md:row-start-2">
          <p className="lg:w-2/5  heroitem opacity-0 translate-y-3 text-xl nord">
            Helping Companies Generate More Revenue By Creating Better Digital
            Products
          </p>

          <div
            id="ball"
            className="w-20 mt-12 heroitem opacity-0 translate-y-3 rounded-full h-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="w-full h-full dark:stroke-white stroke-black"
            >
              <g transform="translate(-337.5 -10)">
                <line
                  y2="20"
                  transform="translate(347.5 10)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="matrix(0.966, 0.259, -0.259, 0.966, 350.088, 10.341)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="translate(352.5 11.34) rotate(30)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="translate(354.571 12.929) rotate(45)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="translate(356.16 15) rotate(60)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="matrix(0.259, 0.966, -0.966, 0.259, 357.159, 17.412)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="translate(357.5 20) rotate(90)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="matrix(-0.259, 0.966, -0.966, -0.259, 357.159, 22.588)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="translate(356.16 25) rotate(120)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="translate(354.571 27.071) rotate(135)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="translate(352.5 28.66) rotate(150)"
                  fill="none"
                  strokeWidth="0.5"
                />
                <line
                  y2="20"
                  transform="matrix(-0.966, 0.259, -0.259, -0.966, 350.088, 29.659)"
                  fill="none"
                  strokeWidth="0.5"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <FullWidthText word1="CREATIVE" word2="ENGINEER" />
        </div>
      </div>
    </>
  );
}
