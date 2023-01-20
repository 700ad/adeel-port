import React from "react";
import "./work.css";
import FullStaticText from "./FullStaticText";
import credoLogo from "../images/projects/credo-logo.svg";
import theoremLogo from "../images/projects/theorem-logo.svg";
import escapeLogo from "../images/projects/escape-logo.svg";
import facesLogo from "../images/projects/face-logo.svg";
import wolionLogo from "../images/projects/wolion-logo.svg";
import { Link } from "gatsby";
import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    title: "Theorem Studio",
    logo: theoremLogo,
    bg: "https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN", "WEB DEVELOPMENT"],
    detail: "",
    speed: 0.5,
    route: "/case-studies/theorem-studio",
  },
  {
    title: "Escape Hotel",
    logo: escapeLogo,
    bg: "https://www.datocms-assets.com/63595/1646059101-e1-1.png?auto=format",
    services: ["BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
    detail: "",
    speed: 0.5,
    route: "/",
    // route: "/case-studies/escape-hotel",
  },
  {
    title: "Credo",
    logo: credoLogo,
    bg: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["BRANDING", "WEB DESIGN"],
    detail: "",
    speed: 0.5,
    route: "/",
    // route: "/case-studies/credo",
  },
  {
    title: "theFaces",
    logo: facesLogo,
    bg: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN", "WEBAPP DEVELOPMENT"],
    detail: "",
    speed: 0.5,
    route: "/",
    // route: "/case-studies/the-faces",
  },
  // {
  //   title: "Wolion Studio",
  //   logo: wolionLogo,
  //   bg: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   services: ["WEB DESIGN"],
  //   detail: "",
  //   speed: 0.5,
  //   route: "/case-studies/wolion-studio",
  // },
];

export default function Work() {
  useEffect(() => {
    gsap.to("#a", {
      scrollTrigger: {
        trigger: "#a",
        start: "top top",
        end: "bottom center",
        scrub: 0.1,
      },
      width: "-=6rem",
    });
    gsap.to("#b", {
      scrollTrigger: {
        trigger: "#b",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
      },
      width: "-=4rem",
    });
    gsap.to("#c", {
      scrollTrigger: {
        trigger: "#c",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
      },
      width: "-=2rem",
    });
    gsap.to("#d", {
      scrollTrigger: {
        trigger: "#d",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
      },
    });
  }, []);
  return (
    <>
      <div className="h-[120vh] relative mt-16 bg-orange-300">
        <img alt="" className="w-full h-full object-cover" src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="absolute inset-0 px-4 py-2 mx-auto sm:p-4 md:px-8">
          <div className="p-4 text-[6vh] md:text-[8vh] lg:text-[10vh] leading-none uppercas">
            WORK I <br /> COMPLETED <br /> RECENTLY
          </div>
          <div className="absolute bottom-8 ml-8 right-8 bg-white/20 backdrop-blur-md rounded-md p-4 xl:w-1/4 md:w-2/4 sm:w-3/4 ">
            I BUILD LONGTERM RELATIONSHIPS WITH CLIENTS BIG AND NEW. WORK I DO SPANS ACROSS DIFFERENT INDUSTRIES AND DIFFERENT USE CASES. BELOW IS A LIST OF WORK I DELIEVERED IN PREVIOUS YEAR.
          </div>
        </div>
      </div>
      <div className="px-4 py-2 mx-auto sm:p-4 md:px-8 min-h-screen">
        <div id="a" className="sticky top-0 translate-y-10 mx-auto container max-w-5xl h-[100vh] p-4 ">
          <div className="bg-white border border-black p-4 grid grid-cols-2 gap-4">
            <div className="aspect-square w-full bg-red-500"></div>
          </div>
        </div>
        <div id="b" className="sticky top-0 translate-y-16  mx-auto container max-w-5xl h-[100vh] p-4 ">
          <div className="bg-white border border-black p-4 grid grid-cols-2 gap-4">
            <div className="aspect-square w-full bg-red-500"></div>
          </div>
        </div>
        <div id="c" className="sticky top-0 translate-y-24 mx-auto container max-w-5xl h-[100vh] p-4 ">
          <div className="bg-white border border-black p-4 grid grid-cols-2 gap-4">
            <div className="aspect-square w-full bg-red-500"></div>
          </div>
        </div>
        <div id="d" className="sticky top-0 translate-y-32 mx-auto container max-w-5xl h-[100vh] p-4 ">
          <div className="bg-white border border-black p-4 grid grid-cols-2 gap-4">
            <div className="aspect-square w-full bg-red-500"></div>
          </div>
        </div>
        <div className="sticky top-0 translate-y-20 mx-auto container max-w-5xl h-96 p-4 "></div>
      </div>
    </>
  );
}
