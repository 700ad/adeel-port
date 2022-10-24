import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Ukiyo from "ukiyojs";
import Process from "../components/Process";
import Services from "../components/Services";
import Cta from "../components/Cta";

const IndexPage = () => {
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
      <Layout>
        <Hero />
        <Work />
        <Services />
        <Process />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
