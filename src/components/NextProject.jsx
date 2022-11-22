import React from "react";
import credoLogo from "../images/projects/credo-logo.svg";
import theoremLogo from "../images/projects/theorem-logo.svg";
import escapeLogo from "../images/projects/escape-logo.svg";
import facesLogo from "../images/projects/face-logo.svg";
import wolionLogo from "../images/projects/wolion-logo.svg";

const projectList = [
  {
    title: "Theorem Studio",
    logo: theoremLogo,
    bg: "https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN", "WEB DEVELOPMENT"],
    detail: "",
    speed: 0.5,
    route: "case-studies/theorem-studio",
  },
  {
    title: "Escape Hotel",
    logo: escapeLogo,
    bg: "https://www.datocms-assets.com/63595/1646059101-e1-1.png?auto=format",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
    route: "case-studies/escape-hotel",
  },
  {
    title: "Credo",
    logo: credoLogo,
    bg: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
    route: "case-studies/credo",
  },
  {
    title: "theFaces",
    logo: facesLogo,
    bg: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
    route: "case-studies/the-faces",
  },
  {
    title: "Wolion Studio",
    logo: wolionLogo,
    bg: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    services: ["WEB DESIGN"],
    detail: "",
    speed: 0.5,
    route: "case-studies/wolion-studio",
  },
];

export default function NextProject({ ind }) {
  return (
    <div className="grid grid-cols-8 gap-8 p-4 md:p-8">
      <div className="col-span-3 col-start-2">
        <div className="aspect-[2/1.2] w-full">
          <img
            className="ukiyo w-full h-full object-cover"
            src={projectList[ind].bg}
          />
        </div>
      </div>
      <div className="col-span-3 flex flex-col items-start justify-end">
        <div className="text-3xl border">Next Project</div>
        <div className="text-5xl">{projectList[ind].title}</div>
      </div>
    </div>
  );
}
