import React, { useEffect } from "react";
import "./work.css";
import FullWidthText from "./FullWidthText";
import credoLogo from "../images/projects/credo-logo.svg";
import theoremLogo from "../images/projects/theorem-logo.svg";
import escapeLogo from "../images/projects/escape-logo.svg";
import facesLogo from "../images/projects/face-logo.svg";
import wolionLogo from "../images/projects/wolion-logo.svg";

import gsap from "gsap/dist/gsap";

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

export default function Work() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <section className="relative md:h-[140vh] h-screen w-full">
        <img
          className="ukiyo fv_img1 filter dark:invert"
          src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          data-u-speed="1.7"
          data-u-willchange
          decoding="async"
        />
        <div className="z-10 dark:text-black text-white h-full flex flex-col items-start justify-between relative p-4 uppercase md:p-8">
          <div className="w-full">
            <FullWidthText word1={"Case Studies"} />
          </div>
          <div className="flex items-start justify-end">
            <p className="md:w-1/3 uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
              beatae doloremque molestias facilis quo mollitia sed quis itaque
              vel reprehenderit suscipit nesciunt, aliquid laborum quam
              repellendus, voluptatibus quia temporibus? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Delectus, perferendis
              laudantium, illum possimus soluta aliquid enim, suscipit nostrum
              voluptatem nobis dolores iste dolore cum illo unde. Dicta soluta
              odit ratione!
            </p>
          </div>
        </div>
      </section>
      {projectList.map((project, ind) => (
        <div
          key={ind}
          className="sticky top-0 p-32 el h-screen grid grid-cols-1 md:grid-cols-2"
        >
          <div className="col-span-1 relative overflow-hidden">
            <img
              className="ukiyo w-full h-[60vh] md:h-full object-cover"
              data-u-speed="1.3"
              src={project.bg}
            />
            <div className="absolute inset-0 flex items-start pt-[40%] justify-center ">
              <img src={project.logo} className=" w-40 " />
            </div>
          </div>
          <div className="col-span-1 bg-white dark:bg-black px-4 md:px-8 md:pt-8">
            <div className="uppercase flex flex-col h-full items-start justify-between">
              <div className="flex flex-col">
                <h3 className="text-4xl text-black dark:text-white md:text-7xl">
                  {project.title}
                </h3>
                <div className="pt-8 flex">
                  {project.services.map((service, ind) => (
                    <p
                      className="px-2 text-xl border mr-8 rounded-md border-black dark:border-white text-black dark:text-white w-fit"
                      key={ind}
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
              <button className="bg-black mt-2 py-2 w-1/2 text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-3xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black">
                View Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="p-4 md:px-8 md:py-20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative md:col-span-4 md:col-start-2">
            <img
              className="ukiyo w-full h-[50vh]"
              data-u-speed="1.3"
              src="https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="absolute flex items-center justify-center inset-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="546.924"
                height="597.361"
                viewBox="0 0 546.924 597.361"
                className=" backdrop-blur-md w-1/4 h-1/4"
              >
                <g transform="translate(-686.537 -241.32)">
                  <g
                    transform="matrix(0.819, -0.574, 0.574, 0.819, 839.357, 333.078)"
                    fill="none"
                    stroke="#f45959"
                    strokeWidth="16"
                  >
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="79.988"
                      ry="139.334"
                      stroke="none"
                    />
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="71.988"
                      ry="131.334"
                      fill="none"
                    />
                  </g>
                  <g
                    transform="matrix(0.819, -0.574, 0.574, 0.819, 832.477, 346.84)"
                    fill="none"
                    stroke="#f45959"
                    strokeWidth="16"
                  >
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="79.988"
                      ry="139.334"
                      stroke="none"
                    />
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="71.988"
                      ry="131.334"
                      fill="none"
                    />
                  </g>
                  <g
                    transform="matrix(0.819, -0.574, 0.574, 0.819, 839.357, 333.078)"
                    fill="none"
                    stroke="#f45959"
                    strokeWidth="16"
                  >
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="79.988"
                      ry="139.334"
                      stroke="none"
                    />
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="71.988"
                      ry="131.334"
                      fill="none"
                    />
                  </g>
                  <g
                    transform="matrix(0.819, -0.574, 0.574, 0.819, 832.477, 346.84)"
                    fill="none"
                    stroke="#f45959"
                    strokeWidth="16"
                  >
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="79.988"
                      ry="139.334"
                      stroke="none"
                    />
                    <ellipse
                      cx="79.988"
                      cy="139.334"
                      rx="71.988"
                      ry="131.334"
                      fill="none"
                    />
                  </g>
                  <g transform="translate(686.551 749.805)">
                    <rect
                      width="182.304"
                      height="29.624"
                      transform="translate(364.608 0)"
                      fill="#f45959"
                    />
                    <rect
                      width="182.304"
                      height="29.624"
                      transform="translate(182.304 29.626)"
                      fill="#fdf539"
                    />
                    <rect
                      width="182.304"
                      height="29.624"
                      transform="translate(0 59.251)"
                    />
                  </g>
                  <path
                    d="M65.4,98.833q0,7.253,1.9,9.972t7.829,2.72q1.319,0,5.6-.33a.728.728,0,0,1,.824.824v11.538q0,.659-.824.989-5.439.494-9.56.494-12.857,0-17.8-5.852t-4.945-19.7v-45H37.544a.728.728,0,0,1-.824-.824V42.79a.728.728,0,0,1,.824-.824H48.423V23.67q0-.989.659-.989l15.494-2.967a.423.423,0,0,1,.577.165,1.1,1.1,0,0,1,.247.659V41.966H80.73a.728.728,0,0,1,.824.824V53.669a.728.728,0,0,1-.824.824H65.4Zm62.306-58.35q28.516,0,28.516,31.977v51.1a.728.728,0,0,1-.824.824H140.069a.728.728,0,0,1-.824-.824V76.416q0-12.527-4.038-17.8t-12.28-5.275a16.965,16.965,0,0,0-14.093,6.923q-5.357,6.923-5.357,17.472v45.823a.728.728,0,0,1-.824.824H87.323a.728.728,0,0,1-.824-.824V9.824A.728.728,0,0,1,87.323,9h15.329a.728.728,0,0,1,.824.824V52.68Q112.707,40.483,127.707,40.483Zm69.064-.165q17.637,0,27.609,12.115t9.313,32.719a.728.728,0,0,1-.824.824H176q.989,27.362,20.934,27.362,7.582,0,12.527-3.709A17.241,17.241,0,0,0,215.892,99q.33-.824.989-.824h15.165q1.154,0,.824.824-2.8,12.857-12.445,19.945t-23.653,7.088q-18.3,0-28.6-11.621t-10.3-31.236q0-19.285,10.549-31.071T196.771,40.318Zm0,12.527q-9.066,0-14.505,5.934t-6.1,16.318h40.054q-.33-10.22-5.522-16.236T196.771,52.845Zm107.305,61.482q-10.879,11.7-29.01,11.7t-28.928-11.785q-10.8-11.785-10.8-31.071t10.8-31.071q10.8-11.785,28.928-11.785T304.077,52.1q10.879,11.785,10.879,31.071T304.077,114.327Zm-45-9.56q5.769,7.912,15.989,7.912a18.771,18.771,0,0,0,16.071-8.077q5.852-8.077,5.852-21.428t-5.852-21.428a19.864,19.864,0,0,0-31.977,0q-5.852,8.077-5.852,21.428Q253.309,96.69,259.078,104.767ZM361.768,41.8q.824.33.824.989V55.482q0,.989-.824.659-11.7-.659-18.708,5.769t-7.005,18.131v43.516a.728.728,0,0,1-.824.824H319.9a.728.728,0,0,1-.824-.824V42.79a.728.728,0,0,1,.824-.824h13.681q.989,0,.989.824l.824,11.868Q345.12,40.483,361.768,41.8Zm34.779-1.483q17.637,0,27.609,12.115t9.313,32.719a.728.728,0,0,1-.824.824H375.779q.989,27.362,20.934,27.362,7.582,0,12.527-3.709A17.242,17.242,0,0,0,415.668,99q.33-.824.989-.824h15.165q1.154,0,.824.824-2.8,12.857-12.445,19.945t-23.653,7.088q-18.3,0-28.6-11.621t-10.3-31.236q0-19.285,10.549-31.071T396.547,40.318Zm0,12.527q-9.066,0-14.505,5.934t-6.1,16.318H416q-.33-10.22-5.522-16.236T396.547,52.845ZM528.412,40.318q13.681,0,21.346,7.912t7.665,24.23v51.1q0,.989-.824.989H541.269q-.824,0-.824-.989V76.251q0-12.527-3.544-17.307t-11.95-4.78q-7.747,0-13.1,6.511t-5.357,17.06v45.823q0,.989-.824.989H490.336q-.824,0-.824-.989V76.251q0-11.209-3.461-16.648t-11.538-5.439a17.008,17.008,0,0,0-13.681,6.593q-5.439,6.593-5.439,16.813v45.988q0,.989-.824.989H439.239q-.824,0-.824-.989V42.79a.728.728,0,0,1,.824-.824H452.92q.989,0,.989.824l.824,11.044q8.9-13.516,23.9-13.516,16.318,0,23.736,15.824A38.332,38.332,0,0,1,513.33,44.851,26.227,26.227,0,0,1,528.412,40.318Zm38.076,84.064a.728.728,0,0,1-.824-.824V105.921a.728.728,0,0,1,.824-.824h16.318a.728.728,0,0,1,.824.824v17.637a.728.728,0,0,1-.824.824Z"
                    transform="translate(649.816 550.328)"
                    fill="#f45959"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute bg-gradient-to-b p-4 from-transparent to-black/60 bottom-0 flex flex-col backdrop-blur-lg left-0 right-0 col-span-12">
              <p className="text-3xl text-white uppercase">Theorem Studio</p>
              <p className="text-white uppercase">
                Branding &mdash; Web Development
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:mt-20 mt-4">
          <div className="col-span-12 relative md:col-span-7 md:col-start-5">
            <img
              className="ukiyo w-full md:h-[78vh] h-[50vh]"
              data-u-speed="1.7"
              src="https://www.datocms-assets.com/63595/1646059101-e1-1.png?auto=format"
            />
            <div className="absolute flex items-center justify-center inset-0">
              <svg
                className="backdrop-blur-md"
                width="100"
                height="107.319"
                viewBox="0 0 100 107.319"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#fffcb8" />
                    <stop offset="0" stopColor="#279af1" />
                    <stop offset="1" stopColor="#ff6700" />
                  </linearGradient>
                </defs>
                <g transform="translate(-6075.002 -961)">
                  <path
                    d="M-101.318-39.343v1.1h-8.939v6.062h5.985v1.1h-5.985v7.6h8.939v1.1h-11.791V-39.343Zm9.948,16.28a4.561,4.561,0,0,0,1.24-.173,3.619,3.619,0,0,0,1.1-.512,2.684,2.684,0,0,0,.78-.831,2.189,2.189,0,0,0,.294-1.145,2.453,2.453,0,0,0-.4-1.388,4.7,4.7,0,0,0-1.055-1.113,10.544,10.544,0,0,0-1.49-.953q-.838-.448-1.707-.9t-1.707-.94a8.479,8.479,0,0,1-1.49-1.1,5.244,5.244,0,0,1-1.055-1.356,3.571,3.571,0,0,1-.4-1.72,4.441,4.441,0,0,1,.364-1.8,4.009,4.009,0,0,1,1.068-1.439,5.094,5.094,0,0,1,1.733-.953,7.41,7.41,0,0,1,2.359-.345,8.249,8.249,0,0,1,2.148.256,5.3,5.3,0,0,1,1.662.755,4.753,4.753,0,0,1,1.215,1.228A6.452,6.452,0,0,1-85.91-35.8l-1.458.665a6.71,6.71,0,0,0-.652-1.426,4.5,4.5,0,0,0-.946-1.106,3.987,3.987,0,0,0-1.272-.71,4.98,4.98,0,0,0-1.631-.249,4.025,4.025,0,0,0-1.407.224,3.077,3.077,0,0,0-1,.588,2.392,2.392,0,0,0-.6.818,2.3,2.3,0,0,0-.2.927,2.016,2.016,0,0,0,.409,1.221A4.924,4.924,0,0,0-93.583-33.8a13.155,13.155,0,0,0,1.541.953q.863.46,1.758.934t1.758.985a9.738,9.738,0,0,1,1.541,1.119,5.286,5.286,0,0,1,1.087,1.33,3.224,3.224,0,0,1,.409,1.618,4.74,4.74,0,0,1-.384,1.9,4.232,4.232,0,0,1-1.151,1.547,5.668,5.668,0,0,1-1.905,1.042,8.291,8.291,0,0,1-2.647.384,8.125,8.125,0,0,1-2.187-.269,5.571,5.571,0,0,1-1.694-.78,5.147,5.147,0,0,1-1.26-1.247,6.707,6.707,0,0,1-.857-1.682l1.522-.627a5.581,5.581,0,0,0,.723,1.483A4.833,4.833,0,0,0-94.273-24a4.589,4.589,0,0,0,1.336.7A4.962,4.962,0,0,0-91.37-23.063ZM-77.79-30.8a8.928,8.928,0,0,0,.537,3.191,6.982,6.982,0,0,0,1.477,2.391,6.341,6.341,0,0,0,2.219,1.5,7.323,7.323,0,0,0,2.775.518,4.458,4.458,0,0,0,1.726-.345,6.576,6.576,0,0,0,1.541-.9A7.865,7.865,0,0,0-66.242-25.7a7.836,7.836,0,0,0,.921-1.413l1.2.767a10.865,10.865,0,0,1-1.24,1.643,8.368,8.368,0,0,1-1.656,1.394,8.337,8.337,0,0,1-2.123.966,9.1,9.1,0,0,1-2.641.358,10.032,10.032,0,0,1-3.83-.7A9.06,9.06,0,0,1-78.557-24.6a8.452,8.452,0,0,1-1.9-2.807,8.709,8.709,0,0,1-.671-3.4,8.828,8.828,0,0,1,.307-2.321,8.638,8.638,0,0,1,.889-2.123,8.779,8.779,0,0,1,1.42-1.816,8.934,8.934,0,0,1,1.893-1.42,9.6,9.6,0,0,1,2.308-.921,10.58,10.58,0,0,1,2.673-.326,8.2,8.2,0,0,1,2.5.364,8.81,8.81,0,0,1,2.085.966,8.689,8.689,0,0,1,1.675,1.388,10.218,10.218,0,0,1,1.26,1.643l-1.24.818a8.35,8.35,0,0,0-2.379-3.012,5.038,5.038,0,0,0-3.031-.953,7.028,7.028,0,0,0-2.75.537A6.572,6.572,0,0,0-75.75-36.44a7.142,7.142,0,0,0-1.5,2.423A8.976,8.976,0,0,0-77.79-30.8Zm25.32-8.926,7.98,17.341h-2.9l-2.583-5.652h-7.277l-2.673,5.652h-1.432l8.172-17.341Zm-4.284,10.589H-50.5l-3.082-6.714Zm15.665-10.205h5.371a9.38,9.38,0,0,1,2.494.32,6.3,6.3,0,0,1,2.027.94,4.533,4.533,0,0,1,1.356,1.522A4.239,4.239,0,0,1-29.35-34.5a4.044,4.044,0,0,1-.48,2.008,4.311,4.311,0,0,1-1.266,1.42,5.589,5.589,0,0,1-1.784.838,7.618,7.618,0,0,1-2.033.275q-.448,0-.934-.019t-.934-.058q-.448-.038-.831-.09t-.627-.1v7.839h-2.852Zm2.852,8.159a7.979,7.979,0,0,0,1.036.275,5.789,5.789,0,0,0,1.125.109,4.339,4.339,0,0,0,1.611-.275,3.22,3.22,0,0,0,1.151-.755,3.042,3.042,0,0,0,.684-1.125,4.169,4.169,0,0,0,.224-1.375,3.912,3.912,0,0,0-.294-1.547,3.506,3.506,0,0,0-.812-1.183,3.644,3.644,0,0,0-1.215-.761,4.107,4.107,0,0,0-1.49-.269h-2.021Zm25.128-8.159v1.1h-8.939v6.062h5.985v1.1h-5.985v7.6h8.939v1.1H-24.9V-39.343Z"
                    transform="translate(6188.111 1078.952)"
                    fill="#fff"
                  />
                  <path
                    d="M70.92,70.92H0V0H70.92V70.92ZM34.139,34.367h0c.817,0,1.577.031,2.259.091a14.636,14.636,0,0,1,1.959.3,7.641,7.641,0,0,1,1.592.534,3.973,3.973,0,0,1,1.157.808,2.964,2.964,0,0,1,.589.888,3.43,3.43,0,0,1,.255,1.05,5.117,5.117,0,0,1-.046,1.189,8.28,8.28,0,0,1-.313,1.306A16.232,16.232,0,0,1,40.3,43.4a33.9,33.9,0,0,1-1.958,3.066c-.685.965-1.477,2-2.354,3.08-.751.923-1.586,1.9-2.482,2.913-1.637,1.846-3.159,3.438-4.271,4.6l-.147.153c-.613.642-.683.96-.633,1.115a.238.238,0,0,0,.17.154h.053a5.075,5.075,0,0,0,1.017-.128,10.721,10.721,0,0,0,2.184-.745c1.516-.69,3.295-1.56,5.143-2.517,2.1-1.088,4.155-2.214,6.1-3.346,2.228-1.3,4.224-2.549,5.934-3.723A38,38,0,0,0,53.7,44.378a14.5,14.5,0,0,0,1.617-1.809,10.035,10.035,0,0,0,1.035-1.707,7.006,7.006,0,0,0,.7-3.03,6.387,6.387,0,0,0-.312-1.927,7.05,7.05,0,0,0-.67-1.466,6.408,6.408,0,0,0-.97-1.26h0a16.238,16.238,0,0,1,1.622-1.03,13.572,13.572,0,0,1,1.616-.774,7.614,7.614,0,0,1,1.785-.488,5.513,5.513,0,0,1,.707-.045,6.472,6.472,0,0,1,1.457.173,7.893,7.893,0,0,1,1.193.381,7.113,7.113,0,0,1,1.1.554,5.264,5.264,0,0,0-.014-.92,3.844,3.844,0,0,0-.165-.806,2.045,2.045,0,0,0-.4-.73,2.02,2.02,0,0,0-.68-.475,3.749,3.749,0,0,0-.778-.246,5.106,5.106,0,0,0-.906-.105,3.592,3.592,0,0,0-.189-1.161,2.714,2.714,0,0,0-.525-.926,2.381,2.381,0,0,0-1.07-.69,5.385,5.385,0,0,0-1.615-.2,16.272,16.272,0,0,0-2.758.276c-.774.135-1.32.27-1.343.276a10.843,10.843,0,0,0,1.333-2.033,8.261,8.261,0,0,0,.743-2.066,5.157,5.157,0,0,0-.028-2.343,4.4,4.4,0,0,0-.758-1.519,7.418,7.418,0,0,0-1.442-1.42,12.593,12.593,0,0,0-2.087-1.27,19.7,19.7,0,0,0-2.692-1.069,30.374,30.374,0,0,0-4.309-.976c-1.533-.247-3.293-.453-5.23-.61-3.3-.268-7.17-.4-11.513-.4-2.366,0-6.165.043-10.831.247-2.788.122-4.59.246-4.608.247,0,0-.039.026-.031.06.014.055.147.13.705.174l.19.015c1.891.146,5.411.417,9.182.9a63.875,63.875,0,0,1,10.991,2.2A17.843,17.843,0,0,1,36.3,17.408a12.68,12.68,0,0,1,1.95,1.2,6.9,6.9,0,0,1,1.287,1.23,2.587,2.587,0,0,1,.556,1.131,3.107,3.107,0,0,1-.125,1.106c-.054.122-.111.266-.176.432a11.876,11.876,0,0,1-.54,1.224,6.6,6.6,0,0,1-.971,1.4A6.165,6.165,0,0,1,36.636,26.4a8.269,8.269,0,0,1-2.553.839,28.956,28.956,0,0,1-3.075.319c-1.073.062-2.306.093-3.665.093-1.787,0-3.837-.052-6.266-.16-2.118-.094-4.246-.218-6.123-.327-1.809-.105-3.517-.2-4.879-.258-.409-.016-.792-.024-1.139-.024a9.706,9.706,0,0,0-2.079.166c-.408.1-.549.22-.6.305a.159.159,0,0,0-.005.158.918.918,0,0,0,.094.322,1.028,1.028,0,0,0,.57.507,15.279,15.279,0,0,0,2.935.577c.669.094,1.361.191,2.08.318,1.683.3,3.739.465,5.554.613a41.594,41.594,0,0,1,4.414.5,9.744,9.744,0,0,1,2.068.617c.358.174.544.351.551.527a.352.352,0,0,1-.117.257,1.124,1.124,0,0,1-.273.2,2.437,2.437,0,0,1-.4.169c-.006,0-.651.239-2.2.68-1.288.366-2.9.756-4.453,1.132-2.23.54-4.537,1.1-6.1,1.631a15.6,15.6,0,0,0-2.438,1c-.365.207-.547.381-.54.515s.2.176.2.177a1.966,1.966,0,0,0,.4.125,6.065,6.065,0,0,0,1.319.125h.165a23,23,0,0,0,3.723-.566c.975-.2,2.08-.419,3.245-.6.7-.106,1.4-.216,2.152-.333A106.451,106.451,0,0,1,34.139,34.367Z"
                    transform="translate(6089.542 961)"
                    fill="url(#a)"
                  />
                  <path
                    d="M770.608,500.153Z"
                    transform="translate(5366.464 486.659)"
                    fill="none"
                    stroke="#707070"
                    strokeWidth="1"
                  />
                  <path
                    d="M5.487-35.519H6.4v-1.55H8.4v1.55h.9v-3.933H8.4v1.544H6.4v-1.544h-.91Zm9.829-1.969a2.2,2.2,0,0,0,.236,1,1.89,1.89,0,0,0,.688.757,1.927,1.927,0,0,0,1.057.287,1.927,1.927,0,0,0,1.057-.287,1.89,1.89,0,0,0,.688-.757,2.2,2.2,0,0,0,.236-1,2.182,2.182,0,0,0-.236-1,1.9,1.9,0,0,0-.688-.754A1.927,1.927,0,0,0,17.3-39.53a1.927,1.927,0,0,0-1.057.287,1.9,1.9,0,0,0-.688.754A2.182,2.182,0,0,0,15.316-37.489Zm3.023,0a1.35,1.35,0,0,1-.123.572,1.03,1.03,0,0,1-.359.428.968.968,0,0,1-.56.162.954.954,0,0,1-.557-.162,1.038,1.038,0,0,1-.356-.428,1.35,1.35,0,0,1-.123-.572,1.385,1.385,0,0,1,.12-.569,1.025,1.025,0,0,1,.356-.434.955.955,0,0,1,.56-.165.955.955,0,0,1,.56.165,1.047,1.047,0,0,1,.359.434A1.356,1.356,0,0,1,18.339-37.489Zm7.908,1.969h.91v-3.095h1.455v-.838H24.792v.838h1.455Zm8.3,0H38.3v-.838H35.459v-.712h2.107v-.838H35.459v-.706H38.3v-.838H34.549Zm9.835,0h3.089v-.838H45.294v-3.095h-.91Z"
                    transform="translate(6098.462 1103.761)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute bg-gradient-to-b p-4 from-transparent to-black/60 bottom-0 flex flex-col backdrop-blur-lg left-0 right-0 col-span-12">
              <p className="text-3xl text-white uppercase">Escape Hotel</p>
              <p className="text-white uppercase">
                ReBranding &mdash; Web Development
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:mt-20 mt-4">
          <div className="col-span-12 relative md:col-span-4 md:col-start-4">
            <div className="absolute z-40 flex items-center justify-center inset-0">
              <svg
                className="backdrop-blur-md"
                width="100"
                height="107.319"
                viewBox="0 0 100 107.319"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#fffcb8" />
                    <stop offset="0" stopColor="#279af1" />
                    <stop offset="1" stopColor="#ff6700" />
                  </linearGradient>
                </defs>
                <g transform="translate(-6075.002 -961)">
                  <path
                    d="M-101.318-39.343v1.1h-8.939v6.062h5.985v1.1h-5.985v7.6h8.939v1.1h-11.791V-39.343Zm9.948,16.28a4.561,4.561,0,0,0,1.24-.173,3.619,3.619,0,0,0,1.1-.512,2.684,2.684,0,0,0,.78-.831,2.189,2.189,0,0,0,.294-1.145,2.453,2.453,0,0,0-.4-1.388,4.7,4.7,0,0,0-1.055-1.113,10.544,10.544,0,0,0-1.49-.953q-.838-.448-1.707-.9t-1.707-.94a8.479,8.479,0,0,1-1.49-1.1,5.244,5.244,0,0,1-1.055-1.356,3.571,3.571,0,0,1-.4-1.72,4.441,4.441,0,0,1,.364-1.8,4.009,4.009,0,0,1,1.068-1.439,5.094,5.094,0,0,1,1.733-.953,7.41,7.41,0,0,1,2.359-.345,8.249,8.249,0,0,1,2.148.256,5.3,5.3,0,0,1,1.662.755,4.753,4.753,0,0,1,1.215,1.228A6.452,6.452,0,0,1-85.91-35.8l-1.458.665a6.71,6.71,0,0,0-.652-1.426,4.5,4.5,0,0,0-.946-1.106,3.987,3.987,0,0,0-1.272-.71,4.98,4.98,0,0,0-1.631-.249,4.025,4.025,0,0,0-1.407.224,3.077,3.077,0,0,0-1,.588,2.392,2.392,0,0,0-.6.818,2.3,2.3,0,0,0-.2.927,2.016,2.016,0,0,0,.409,1.221A4.924,4.924,0,0,0-93.583-33.8a13.155,13.155,0,0,0,1.541.953q.863.46,1.758.934t1.758.985a9.738,9.738,0,0,1,1.541,1.119,5.286,5.286,0,0,1,1.087,1.33,3.224,3.224,0,0,1,.409,1.618,4.74,4.74,0,0,1-.384,1.9,4.232,4.232,0,0,1-1.151,1.547,5.668,5.668,0,0,1-1.905,1.042,8.291,8.291,0,0,1-2.647.384,8.125,8.125,0,0,1-2.187-.269,5.571,5.571,0,0,1-1.694-.78,5.147,5.147,0,0,1-1.26-1.247,6.707,6.707,0,0,1-.857-1.682l1.522-.627a5.581,5.581,0,0,0,.723,1.483A4.833,4.833,0,0,0-94.273-24a4.589,4.589,0,0,0,1.336.7A4.962,4.962,0,0,0-91.37-23.063ZM-77.79-30.8a8.928,8.928,0,0,0,.537,3.191,6.982,6.982,0,0,0,1.477,2.391,6.341,6.341,0,0,0,2.219,1.5,7.323,7.323,0,0,0,2.775.518,4.458,4.458,0,0,0,1.726-.345,6.576,6.576,0,0,0,1.541-.9A7.865,7.865,0,0,0-66.242-25.7a7.836,7.836,0,0,0,.921-1.413l1.2.767a10.865,10.865,0,0,1-1.24,1.643,8.368,8.368,0,0,1-1.656,1.394,8.337,8.337,0,0,1-2.123.966,9.1,9.1,0,0,1-2.641.358,10.032,10.032,0,0,1-3.83-.7A9.06,9.06,0,0,1-78.557-24.6a8.452,8.452,0,0,1-1.9-2.807,8.709,8.709,0,0,1-.671-3.4,8.828,8.828,0,0,1,.307-2.321,8.638,8.638,0,0,1,.889-2.123,8.779,8.779,0,0,1,1.42-1.816,8.934,8.934,0,0,1,1.893-1.42,9.6,9.6,0,0,1,2.308-.921,10.58,10.58,0,0,1,2.673-.326,8.2,8.2,0,0,1,2.5.364,8.81,8.81,0,0,1,2.085.966,8.689,8.689,0,0,1,1.675,1.388,10.218,10.218,0,0,1,1.26,1.643l-1.24.818a8.35,8.35,0,0,0-2.379-3.012,5.038,5.038,0,0,0-3.031-.953,7.028,7.028,0,0,0-2.75.537A6.572,6.572,0,0,0-75.75-36.44a7.142,7.142,0,0,0-1.5,2.423A8.976,8.976,0,0,0-77.79-30.8Zm25.32-8.926,7.98,17.341h-2.9l-2.583-5.652h-7.277l-2.673,5.652h-1.432l8.172-17.341Zm-4.284,10.589H-50.5l-3.082-6.714Zm15.665-10.205h5.371a9.38,9.38,0,0,1,2.494.32,6.3,6.3,0,0,1,2.027.94,4.533,4.533,0,0,1,1.356,1.522A4.239,4.239,0,0,1-29.35-34.5a4.044,4.044,0,0,1-.48,2.008,4.311,4.311,0,0,1-1.266,1.42,5.589,5.589,0,0,1-1.784.838,7.618,7.618,0,0,1-2.033.275q-.448,0-.934-.019t-.934-.058q-.448-.038-.831-.09t-.627-.1v7.839h-2.852Zm2.852,8.159a7.979,7.979,0,0,0,1.036.275,5.789,5.789,0,0,0,1.125.109,4.339,4.339,0,0,0,1.611-.275,3.22,3.22,0,0,0,1.151-.755,3.042,3.042,0,0,0,.684-1.125,4.169,4.169,0,0,0,.224-1.375,3.912,3.912,0,0,0-.294-1.547,3.506,3.506,0,0,0-.812-1.183,3.644,3.644,0,0,0-1.215-.761,4.107,4.107,0,0,0-1.49-.269h-2.021Zm25.128-8.159v1.1h-8.939v6.062h5.985v1.1h-5.985v7.6h8.939v1.1H-24.9V-39.343Z"
                    transform="translate(6188.111 1078.952)"
                    fill="#fff"
                  />
                  <path
                    d="M70.92,70.92H0V0H70.92V70.92ZM34.139,34.367h0c.817,0,1.577.031,2.259.091a14.636,14.636,0,0,1,1.959.3,7.641,7.641,0,0,1,1.592.534,3.973,3.973,0,0,1,1.157.808,2.964,2.964,0,0,1,.589.888,3.43,3.43,0,0,1,.255,1.05,5.117,5.117,0,0,1-.046,1.189,8.28,8.28,0,0,1-.313,1.306A16.232,16.232,0,0,1,40.3,43.4a33.9,33.9,0,0,1-1.958,3.066c-.685.965-1.477,2-2.354,3.08-.751.923-1.586,1.9-2.482,2.913-1.637,1.846-3.159,3.438-4.271,4.6l-.147.153c-.613.642-.683.96-.633,1.115a.238.238,0,0,0,.17.154h.053a5.075,5.075,0,0,0,1.017-.128,10.721,10.721,0,0,0,2.184-.745c1.516-.69,3.295-1.56,5.143-2.517,2.1-1.088,4.155-2.214,6.1-3.346,2.228-1.3,4.224-2.549,5.934-3.723A38,38,0,0,0,53.7,44.378a14.5,14.5,0,0,0,1.617-1.809,10.035,10.035,0,0,0,1.035-1.707,7.006,7.006,0,0,0,.7-3.03,6.387,6.387,0,0,0-.312-1.927,7.05,7.05,0,0,0-.67-1.466,6.408,6.408,0,0,0-.97-1.26h0a16.238,16.238,0,0,1,1.622-1.03,13.572,13.572,0,0,1,1.616-.774,7.614,7.614,0,0,1,1.785-.488,5.513,5.513,0,0,1,.707-.045,6.472,6.472,0,0,1,1.457.173,7.893,7.893,0,0,1,1.193.381,7.113,7.113,0,0,1,1.1.554,5.264,5.264,0,0,0-.014-.92,3.844,3.844,0,0,0-.165-.806,2.045,2.045,0,0,0-.4-.73,2.02,2.02,0,0,0-.68-.475,3.749,3.749,0,0,0-.778-.246,5.106,5.106,0,0,0-.906-.105,3.592,3.592,0,0,0-.189-1.161,2.714,2.714,0,0,0-.525-.926,2.381,2.381,0,0,0-1.07-.69,5.385,5.385,0,0,0-1.615-.2,16.272,16.272,0,0,0-2.758.276c-.774.135-1.32.27-1.343.276a10.843,10.843,0,0,0,1.333-2.033,8.261,8.261,0,0,0,.743-2.066,5.157,5.157,0,0,0-.028-2.343,4.4,4.4,0,0,0-.758-1.519,7.418,7.418,0,0,0-1.442-1.42,12.593,12.593,0,0,0-2.087-1.27,19.7,19.7,0,0,0-2.692-1.069,30.374,30.374,0,0,0-4.309-.976c-1.533-.247-3.293-.453-5.23-.61-3.3-.268-7.17-.4-11.513-.4-2.366,0-6.165.043-10.831.247-2.788.122-4.59.246-4.608.247,0,0-.039.026-.031.06.014.055.147.13.705.174l.19.015c1.891.146,5.411.417,9.182.9a63.875,63.875,0,0,1,10.991,2.2A17.843,17.843,0,0,1,36.3,17.408a12.68,12.68,0,0,1,1.95,1.2,6.9,6.9,0,0,1,1.287,1.23,2.587,2.587,0,0,1,.556,1.131,3.107,3.107,0,0,1-.125,1.106c-.054.122-.111.266-.176.432a11.876,11.876,0,0,1-.54,1.224,6.6,6.6,0,0,1-.971,1.4A6.165,6.165,0,0,1,36.636,26.4a8.269,8.269,0,0,1-2.553.839,28.956,28.956,0,0,1-3.075.319c-1.073.062-2.306.093-3.665.093-1.787,0-3.837-.052-6.266-.16-2.118-.094-4.246-.218-6.123-.327-1.809-.105-3.517-.2-4.879-.258-.409-.016-.792-.024-1.139-.024a9.706,9.706,0,0,0-2.079.166c-.408.1-.549.22-.6.305a.159.159,0,0,0-.005.158.918.918,0,0,0,.094.322,1.028,1.028,0,0,0,.57.507,15.279,15.279,0,0,0,2.935.577c.669.094,1.361.191,2.08.318,1.683.3,3.739.465,5.554.613a41.594,41.594,0,0,1,4.414.5,9.744,9.744,0,0,1,2.068.617c.358.174.544.351.551.527a.352.352,0,0,1-.117.257,1.124,1.124,0,0,1-.273.2,2.437,2.437,0,0,1-.4.169c-.006,0-.651.239-2.2.68-1.288.366-2.9.756-4.453,1.132-2.23.54-4.537,1.1-6.1,1.631a15.6,15.6,0,0,0-2.438,1c-.365.207-.547.381-.54.515s.2.176.2.177a1.966,1.966,0,0,0,.4.125,6.065,6.065,0,0,0,1.319.125h.165a23,23,0,0,0,3.723-.566c.975-.2,2.08-.419,3.245-.6.7-.106,1.4-.216,2.152-.333A106.451,106.451,0,0,1,34.139,34.367Z"
                    transform="translate(6089.542 961)"
                    fill="url(#a)"
                  />
                  <path
                    d="M770.608,500.153Z"
                    transform="translate(5366.464 486.659)"
                    fill="none"
                    stroke="#707070"
                    strokeWidth="1"
                  />
                  <path
                    d="M5.487-35.519H6.4v-1.55H8.4v1.55h.9v-3.933H8.4v1.544H6.4v-1.544h-.91Zm9.829-1.969a2.2,2.2,0,0,0,.236,1,1.89,1.89,0,0,0,.688.757,1.927,1.927,0,0,0,1.057.287,1.927,1.927,0,0,0,1.057-.287,1.89,1.89,0,0,0,.688-.757,2.2,2.2,0,0,0,.236-1,2.182,2.182,0,0,0-.236-1,1.9,1.9,0,0,0-.688-.754A1.927,1.927,0,0,0,17.3-39.53a1.927,1.927,0,0,0-1.057.287,1.9,1.9,0,0,0-.688.754A2.182,2.182,0,0,0,15.316-37.489Zm3.023,0a1.35,1.35,0,0,1-.123.572,1.03,1.03,0,0,1-.359.428.968.968,0,0,1-.56.162.954.954,0,0,1-.557-.162,1.038,1.038,0,0,1-.356-.428,1.35,1.35,0,0,1-.123-.572,1.385,1.385,0,0,1,.12-.569,1.025,1.025,0,0,1,.356-.434.955.955,0,0,1,.56-.165.955.955,0,0,1,.56.165,1.047,1.047,0,0,1,.359.434A1.356,1.356,0,0,1,18.339-37.489Zm7.908,1.969h.91v-3.095h1.455v-.838H24.792v.838h1.455Zm8.3,0H38.3v-.838H35.459v-.712h2.107v-.838H35.459v-.706H38.3v-.838H34.549Zm9.835,0h3.089v-.838H45.294v-3.095h-.91Z"
                    transform="translate(6098.462 1103.761)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <img
              className="ukiyo w-full md:h-[78vh] h-[50vh]"
              data-u-speed="1.7"
              src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="absolute bg-gradient-to-b p-4 from-transparent to-black/60 bottom-0 flex flex-col backdrop-blur-lg left-0 right-0 col-span-12">
              <p className="text-3xl text-white uppercase">PCS</p>
              <p className="text-white uppercase">
                ReBranding &mdash; Web Development
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:mt-20 mt-4">
          <div className="col-span-12 relative md:col-span-5 md:col-start-7">
            <img
              className="ukiyo w-full h-[50vh]"
              data-u-speed="1.7"
              src="https://images.unsplash.com/photo-1647613049527-851295e24918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            />
            <div className="absolute bg-gradient-to-b p-4 from-transparent to-black/60 bottom-0 flex flex-col backdrop-blur-lg left-0 right-0 col-span-12">
              <p className="text-3xl text-white uppercase">Grunge Clothing</p>
              <p className="text-white uppercase">
                ReBranding &mdash; Web Development
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:mt-20 mt-4">
          <div className="col-span-12 cursor-pointer relative md:col-span-5 md:col-start-3">
            <img
              className="ukiyo w-full md:h-[75vh] h-[50vh]"
              data-u-speed="2.1"
              data-u-scale="1.35"
              src="https://images.unsplash.com/photo-1647613049527-851295e24918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            />
            <div className="absolute bg-gradient-to-b p-4 from-transparent to-black/60 bottom-0 flex flex-col backdrop-blur-lg left-0 right-0 col-span-12">
              <p className="text-3xl text-white uppercase">theFaces</p>
              <p className="text-white uppercase">
                ReBranding &mdash; Web Development
              </p>
            </div>
          </div>
        </div>
      </div> */
}
