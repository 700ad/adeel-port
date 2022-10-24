import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  useEffect(() => {
    gsap.to("#text", {
      scrollTrigger: {
        trigger: "#trig",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
      fontSize: "7.5vw",
    });
  }, []);
  return (
    <div
      id="trig"
      className="w-screen h-screen bg-red-100 p-4 md:px-8 md:py-20"
    >
      <div
        id="text"
        className="text-[15vw] uppercase tracking-tight leading-none"
      >
        Let's get <br /> Started.
      </div>
    </div>
  );
}
