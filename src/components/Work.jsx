import React from "react";
import "./work.css";
import FullStaticText from "./FullStaticText";
import credoLogo from "../images/projects/credo-logo.svg";
import theoremLogo from "../images/projects/theorem-logo.svg";
import escapeLogo from "../images/projects/escape-logo.svg";
import facesLogo from "../images/projects/face-logo.svg";
import wolionLogo from "../images/projects/wolion-logo.svg";
import { Link } from "gatsby";

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
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <section className="relative md:h-[140vh] h-screen w-full">
        <img className="ukiyo fv_img1 filter dark:invert" src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
        <div className="z-10 relative dark:text-black text-white h-full flex flex-col items-center justify-center  p-4 uppercase md:p-8">
          <div className="w-full z-10 absolute top-0 left-0 right-0">
            <FullStaticText word1={"Case Studies"} />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="md:aspect-[2/1] aspect-[1/2] overflow-hidden relative">
              <img className="w-full ukiyo shadow-2xl shadow-black h-full object-cover filter dark:invert" src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <div className="absolute inset-0">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="md:w-2/3 text-lg md:text-2xl uppercase bg-white/0 backdrop-blur-2xl dark:bg-black/10 p-8 rounded-md">
                    I BUILD LONGTERM RELATIONSHIPS WITH CLIENTS BIG AND NEW. WORK I DO SPANS ACROSS DIFFERENT INDUSTRIES AND DIFFERENT USE CASES. BELOW IS A LIST OF WORK I DELIEVERED IN PREVIOUS YEAR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative md:h-[140vh] h-screen w-full">
        <img className="ukiyo fv_img1 filter dark:invert" src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
        <div className="z-10 relative dark:text-black text-white h-full flex flex-col items-center justify-between  p-4 uppercase md:p-8">
          <div className="w-full">
            <FullStaticText word1={"Case Studies"} />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex items-start justify-end w-full">
              <p className="md:w-1/3 text-xl md:text-2xl text-justify uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
                I SPECIALIZE IN NEW BRANDS AND BRAND TRANSFORMATIONS FOR FAST-GROWING INNOVATION COMPANIES. WE CREATE VALUE BY HELPING YOU ADAPT TO A CHANGING MARKET AND WORLD.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {projectList.map((project, ind) => (
        <div key={ind} className="sticky top-0 p-4 md:p-32  h-screen grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 relative overflow-hidden">
            <img className="ukiyo w-full h-[60vh] md:h-full object-cover" data-u-speed="1.3" src={project.bg} />
            <div className="absolute inset-0 flex items-start pt-[40%] justify-center ">
              <img src={project.logo} className=" w-40 " />
            </div>
          </div>
          <div className="col-span-1 bg-white dark:bg-black  md:px-8 md:pt-8">
            <div className="uppercase flex flex-col h-full items-start justify-between">
              <div className="flex flex-col">
                <h3 className="text-4xl text-black dark:text-white md:text-7xl">{project.title}</h3>
                <div className="pt-8 flex flex-col md:flex-row">
                  {project.services.map((service, ind) => (
                    <p className="px-2 mb-2 md:mb-0 text-xl border mr-8 rounded-md border-black dark:border-white text-black dark:text-white w-fit" key={ind}>
                      {service}
                    </p>
                  ))}
                </div>
              </div>
              <Link
                target="_blank"
                to={project.route}
                className="bg-black mt-2 py-2 md:w-1/2 w-full text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-2xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

<div className="min-h-screen bg-white dark:bg-black">
  <section className="relative md:h-[140vh] h-screen w-full">
    <img className="ukiyo fv_img1 filter dark:invert" src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
    <div className="z-10 relative dark:text-black text-white h-full flex flex-col items-center justify-between  p-4 uppercase md:p-8">
      <div className="w-full">
        <FullStaticText word1={"Case Studies"} />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-start justify-end w-full">
          <p className="md:w-1/3 text-xl md:text-2xl text-justify uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
            I SPECIALIZE IN NEW BRANDS AND BRAND TRANSFORMATIONS FOR FAST-GROWING INNOVATION COMPANIES. WE CREATE VALUE BY HELPING YOU ADAPT TO A CHANGING MARKET AND WORLD.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="relative md:h-[140vh] h-screen w-full">
    <img className="ukiyo fv_img1 filter dark:invert" src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
    <div className="z-10 relative dark:text-black text-white h-full flex flex-col items-center justify-between  p-4 uppercase md:p-8">
      <div className="w-full">
        <FullStaticText word1={"Case Studies"} />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-start justify-end w-full">
          <p className="md:w-1/3 text-xl md:text-2xl text-justify uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
            I SPECIALIZE IN NEW BRANDS AND BRAND TRANSFORMATIONS FOR FAST-GROWING INNOVATION COMPANIES. WE CREATE VALUE BY HELPING YOU ADAPT TO A CHANGING MARKET AND WORLD.
          </p>
        </div>
      </div>
    </div>
  </section> */}
  {projectList.map((project, ind) => (
    <div key={ind} className="sticky top-0 p-4 md:p-32 el h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 relative overflow-hidden">
        <img className="ukiyo w-full h-[60vh] md:h-full object-cover" data-u-speed="1.3" src={project.bg} />
        <div className="absolute inset-0 flex items-start pt-[40%] justify-center ">
          <img src={project.logo} className=" w-40 " />
        </div>
      </div>
      <div className="col-span-1 bg-white dark:bg-black px-4 md:px-8 md:pt-8">
        <div className="uppercase flex flex-col h-full items-start justify-between">
          <div className="flex flex-col">
            <h3 className="text-4xl text-black dark:text-white md:text-7xl">{project.title}</h3>
            <div className="pt-8 flex flex-col md:flex-row">
              {project.services.map((service, ind) => (
                <p className="px-2 mb-2 md:mb-0 text-xl border mr-8 rounded-md border-black dark:border-white text-black dark:text-white w-fit" key={ind}>
                  {service}
                </p>
              ))}
            </div>
          </div>
          <Link
            target="_blank"
            to={project.route}
            className="bg-black mt-2 py-2 md:w-1/2 w-full text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-2xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>;
