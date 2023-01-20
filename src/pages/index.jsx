import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Process from "../components/Process";
import Tools from "../components/Tools";
import Services from "../components/Services";
import Cta from "../components/Cta";
import Ukiyo from "ukiyojs";

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

const IndexPage = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".ukiyo");
    images.forEach((image) => {
      new Ukiyo(image, {
        speed: 2,
        scale: 1.25,
      });
    });
  }, []);
  return (
    <div className="bg-white dark:bg-black">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Tools />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Adeel Farzand &mdash; Portfolio</title>;
