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
      easing: (t) => Math.min(1, 1.008 - Math.pow(2.6, -8 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    //get scroll value
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // gsap.to("#inner", {
    //   height: "0px",
    //   y: "100px",
    //   ease: "power4.easeInOut",
    //   duration: 1,
    //   delay: 0.5,
    // });
    // gsap.to("#outer", {
    //   transform: "translateY(-100vh)",
    //   delay: 1.5,
    //   ease: "power4.easeInOut",
    //   duration: 1,
    // });

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
      {/* <div
        id="outer"
        className="w-screen h-screen bg-black fixed inset-0 z-50 flex items-center justify-center"
      >
        <div id="inner" className="w-40 h-60 bg-white"></div>
      </div> */}
      <Nav />
      {children}
      <Footer />
    </>
  );
}
