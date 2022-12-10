import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import credoLogo from "../../images/projects/credo-logo.svg";
import theoremLogo from "../../images/projects/theorem-logo.svg";
import escapeLogo from "../../images/projects/escape-logo.svg";
import facesLogo from "../../images/projects/face-logo.svg";
import wolionLogo from "../../images/projects/wolion-logo.svg";
import Ukiyo from "ukiyojs";
import Link from "gatsby";
import FullStaticText from "../../components/FullStaticText";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    title: "Theorem Studio",
    logo: theoremLogo,
    bg: "https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["BRANDING", "WEB DESIGN", "WEB DEVELOPMENT"],
    detail: "",
    speed: 0.5,
  },
  {
    title: "Escape Hotel",
    logo: escapeLogo,
    bg: "https://www.datocms-assets.com/63595/1646059101-e1-1.png?auto=format",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
  },
  {
    title: "Credo",
    logo: credoLogo,
    bg: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
  },
  {
    title: "theFaces",
    logo: facesLogo,
    bg: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
  },
  {
    title: "Wolion Studio",
    logo: wolionLogo,
    bg: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
  },
];

export default function CaseStudies() {
  useEffect(() => {
    gsap.to(".elr", {
      transform: "translateX(0px)",
      scrollTrigger: {
        trigger: "#trig",
        start: "top top",
        end: "bottom top",
        scrub: 0.1,
        pin: true,
      },
      transform: "translateX(0px)",
      stagger: 0.2,
      ease: "circ.inout",
    });

    gsap.to(".elr2", {
      transform: "translateX(0px)",
      scrollTrigger: {
        trigger: "#trig2",
        start: "top top",
        end: "bottom top",
        scrub: 0.1,
        pin: true,
      },
      transform: "translateX(0px)",
      stagger: 0.2,
      ease: "circ.inout",
    });

    // gsap.to(".elr3", {
    //   transform: "translateX(0px)",
    //   scrollTrigger: {
    //     trigger: "#trig3",
    //     start: "top top",
    //     end: "bottom+400px top",
    //     scrub: 0.1,
    //     pin: true,
    //   },
    //   transform: "translateX(0px)",
    //   stagger: 0.2,
    //   ease: "circ.inout",
    // });

    gsap.to(".elr4", {
      transform: "translateX(0px)",
      scrollTrigger: {
        trigger: "#trig4",
        start: "top top",
        end: "bottom top",
        scrub: 0.1,
        pin: true,
      },
      transform: "translateX(0px)",
      stagger: 0.2,
      ease: "circ.inout",
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
    <div className="bg-white dark:bg-black">
      <div className="bg-white dark:bg-black w-screen min-h-screen grid grid-cols-1 gap-8 sunset p-4 pb-8 md:px-8 text-white dark:text-white pt-16 md:pt-20">
        <div className="text-black dark:text-white z-30 absolute top-16 left-8 right-8">
          <FullStaticText word1="CASE" word2="STUDIES" />
        </div>
        <div className="absolute top-32 w-1/3 right-8 z-30 flex flex-col items-end">
          <div className="bg-black/10 mb-2 col-span-1 w-fit dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] text-4xl dark:text-white mr-2 flex  items-center">
            BRANDING <div className="border border-white flex items-center justify-center rounded-full w-8 h-8 text-[2rem] ml-2">4</div>
          </div>
          <div className="bg-black/10 mb-2 col-span-1 w-fit dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] text-4xl dark:text-white mr-2 flex  items-center">
            DESIGN <div className="border border-white flex items-center justify-center rounded-full w-8 h-8 text-[2rem] ml-2">4</div>
          </div>
          <div className="bg-black/10 mb-2 col-span-1 w-fit dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] text-4xl dark:text-white mr-2 flex  items-center">
            DEVELOPMENT <div className="border border-white flex items-center justify-center rounded-full w-8 h-8 text-[2rem] ml-2">4</div>
          </div>
          <div className="bg-black/10 mb-2 col-span-1 w-fit dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] text-4xl dark:text-white mr-2 flex  items-center">
            ECOMMERCE <div className="border border-white flex items-center justify-center rounded-full w-8 h-8 text-[2rem] ml-2">4</div>
          </div>
        </div>
      </div>
      <div id="trig" className=" bg-white dark:bg-black text-black dark:text-white grid grid-cols-6 p-12 gap-12 h-screen">
        <div className="col-span-4 relative overflow-hidden">
          <img src={projectList[0].bg} className="w-full ukiyo object-cover" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-between">
          <div className="">
            <div className="text-6xl elr translate-x-[40rem] uppercase">{projectList[0].title}</div>
            <div className="elr flex my-8 translate-x-[40rem] uppercase">
              {projectList[0].services.map((pr, ind) => (
                <div key={ind} className="bg-black/10 dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] dark:text-white mr-2">
                  {pr}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className=""></div>
          </div>
          <div className=" translate-x-[40rem] elr ">
            <button className="bg-black mt-2 py-2 px-8 w-full text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-2xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black">
              View Project
            </button>
          </div>
        </div>
      </div>
      <div id="trig2" className=" bg-white dark:bg-black text-black dark:text-white grid grid-cols-6 p-12 gap-12 h-screen">
        <div className="col-span-4 relative overflow-hidden">
          <img src={projectList[1].bg} className="w-full ukiyo object-cover" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-between">
          <div className="">
            <div className="text-6xl elr2 translate-x-[40rem] uppercase">{projectList[1].title}</div>
            <div className="elr2 flex my-8 translate-x-[40rem] uppercase">
              {projectList[1].services.map((pr, ind) => (
                <div key={ind} className="bg-black/10 dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] dark:text-white mr-2">
                  {pr}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className=""></div>
          </div>
          <div className=" translate-x-[40rem] elr2 ">
            <button className="bg-black mt-2 py-2 px-8 w-full text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-2xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black">
              View Project
            </button>
          </div>
        </div>
      </div>
      {/* <div id="trig3" className=" bg-white dark:bg-black text-black dark:text-white grid grid-cols-6 p-12 gap-12">
        <div className="col-span-4 relative overflow-hidden">
          <img src={projectList[2].bg} className="w-full ukiyo object-cover" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-between">
          <div className="">
            <div className="text-6xl elr3 translate-x-[40rem] uppercase">{projectList[2].title}</div>
            <div className="elr3 flex my-8 translate-x-[40rem] uppercase">
              {projectList[2].services.map((pr, ind) => (
                <div key={ind} className="bg-black/10 dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] dark:text-white mr-2">
                  {pr}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className=""></div>
          </div>
          <div className=" translate-x-[40rem] elr3 ">
            <button className="bg-black mt-2 py-2 px-8 w-full text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-2xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black">
              View Project
            </button>
          </div>
        </div>
      </div> */}
      <div id="trig4" className=" bg-white dark:bg-black text-black dark:text-white grid grid-cols-6 p-12 gap-12 h-screen">
        <div className="col-span-4 relative overflow-hidden">
          <img src={projectList[3].bg} className="w-full ukiyo object-cover" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-between">
          <div className="">
            <div className="text-6xl elr4 translate-x-[40rem] uppercase">{projectList[3].title}</div>
            <div className="elr4 flex my-8 translate-x-[40rem] uppercase">
              {projectList[3].services.map((pr, ind) => (
                <div key={ind} className="bg-black/10 dark:bg-white/20 border border-black dark:border-white text-black rounded-full px-4 py-[0.15rem] dark:text-white mr-2">
                  {pr}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className=""></div>
          </div>
          <div className=" translate-x-[40rem] elr4 ">
            <button className="bg-black mt-2 py-2 px-8 w-full text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-2xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
