import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Process from "../components/Process";
import Services from "../components/Services";
import Cta from "../components/Cta";

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
  // const workRef = useRef();
  // const workOnScreen = useIntersectionObserver(workRef, { threshold: 0.5 });
  // const servicesRef = useRef();
  // const servicesOnScreen = useIntersectionObserver(servicesRef, {
  //   threshold: 0.1,
  // });

  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Process />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
