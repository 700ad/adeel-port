import React from "react";
import { useState } from "react";
import credoLogo from "../../images/projects/credo-logo.svg";
import theoremLogo from "../../images/projects/theorem-logo.svg";
import escapeLogo from "../../images/projects/escape-logo.svg";
import facesLogo from "../../images/projects/face-logo.svg";
import wolionLogo from "../../images/projects/wolion-logo.svg";

import FullStaticText from "../../components/FullStaticText";

const projectList = [
  {
    title: "Theorem Studio",
    logo: theoremLogo,
    bg: "https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN", "WEB DEVELOPMENT"],
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
  const [display, setDisplay] = useState("Grid");
  return (
    <div>
      <div className="w-screen h-screen bg-white dark:bg-black p-4 md:p-8 grid grid-cols-4 gap-8">
        <div className="col-span-3 mt-20 h-fit text-black dark:text-white">
          <FullStaticText word1={"CASE STUDIES"} />
        </div>
        <div className="col-span-2 border border-black h-fit col-start-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          deserunt accusamus sunt error velit porro, laboriosam amet, et
          voluptatem nobis dolor culpa. Autem hic corrupti vero cum, modi fuga
          consequatur!
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div className="sticky top-0 flex items-center justify-between pb-4 md:pb-8 border-b border-black">
          <div className="uppercase">
            Filter :
            <select className="ml-2 bg-transparent">
              <option value="All">All Work</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Branding">Branding</option>
              <option value="All">All Work</option>
            </select>
          </div>
          <button
            onClick={() => setDisplay(display === "Grid" ? "List" : "Grid")}
            className="py-1 px-4 cursor-pointer mr-4 bg-black dark:bg-white hover:bg-white/60 hover:dark:bg-black/60 hover:dark:text-white hover:text-black transition-all duration-300 dark:text-black rounded-full uppercase text-white text-sm md:text-base"
          >
            {display}
          </button>
        </div>
        <div className="grid grid-cols-2">
          <div className="border-r border-black pt-4 pr-4 pb-4 md:pt-8 md:pr-8 md:pb-8">
            <img src={projectList[0].bg} />
          </div>
          <div className="py-4 md:py-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            delectus, culpa qui similique rerum porro modi, velit voluptates
            odit quae quod voluptate, sapiente recusandae officia animi dolore!
            Error, repellat recusandae!
          </div>
        </div>
      </div>
    </div>
  );
}
