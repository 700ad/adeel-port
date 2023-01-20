import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import NewNav from "./NewNav";
import Lenis from "@studio-freight/lenis";
import sal from "sal.js";
import GlobalLoader from "./GlobalLoader";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }) {
  useEffect(() => {
    sal();
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
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {/* <GlobalLoader /> */}
      <NewNav />
      {children}
      <Footer />
    </>
  );
}
