import React, { Suspense } from "react";
import FullStaticText from "./FullStaticText";

const Flower = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="w-full h-full rot dark:stroke-white stroke-black">
      <g transform="translate(-337.5 -10)">
        <line y2="20" transform="translate(347.5 10)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="matrix(0.966, 0.259, -0.259, 0.966, 350.088, 10.341)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="translate(352.5 11.34) rotate(30)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="translate(354.571 12.929) rotate(45)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="translate(356.16 15) rotate(60)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="matrix(0.259, 0.966, -0.966, 0.259, 357.159, 17.412)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="translate(357.5 20) rotate(90)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="matrix(-0.259, 0.966, -0.966, -0.259, 357.159, 22.588)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="translate(356.16 25) rotate(120)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="translate(354.571 27.071) rotate(135)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="translate(352.5 28.66) rotate(150)" fill="none" strokeWidth="0.5" />
        <line y2="20" transform="matrix(-0.966, 0.259, -0.259, -0.966, 350.088, 29.659)" fill="none" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

export default function Tools() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="relative md:h-[140vh] h-screen w-full">
        <img alt="" className="ukiyo fv_img1 filter dark:invert  " src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
        <div className="z-10 dark:text-black  text-white h-full flex flex-col items-start justify-between relative p-4 uppercase md:p-8">
          <div className="w-full">
            <FullStaticText word1={"TOOLS & FRAMEWORKS"} />
          </div>
          <div className="flex items-end justify-end w-full">
            {/* <p className="md:w-1/3 text-xl md:text-2xl text-justify uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
              I specialize in new brands and brand transformations for fast-growing innovation companies. We create value by helping you adapt to a changing market and world.
            </p> */}
          </div>
        </div>
      </section>
      <div className="py-20">
        <div className="marqueeFull  text-black dark:text-white uppercase text-brand-100">
          <div className="trackFull">
            <div className="content text-4xl md:text-[8rem] flex items-center">
              REACTJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              NEXTJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              GATSBYJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              ANGULAR2+
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              GIT
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              REACTJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              NEXTJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              GATSBYJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              ANGULAR2+
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              GIT
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
            </div>
          </div>
        </div>
        <div className="marqueeFullR  text-black dark:text-white uppercase  text-brand-100">
          <div className="trackFullR">
            <div className="content  text-4xl md:text-[8rem] flex items-center">
              REDUX
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              GSAP
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              DATOCMS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              TAILWINDCSS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              REDUX
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              GSAP
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              DATOCMS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              TAILWINDCSS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
            </div>
          </div>
        </div>
        <div className="marqueeFull text-black dark:text-white uppercase text-brand-100">
          <div className="trackFull">
            <div className="content text-4xl md:text-[8rem] flex items-center">
              STRAPI
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              THREEJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              EXPRESSJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              MONGODB
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              STRAPI
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              THREEJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              EXPRESSJS
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
              MONGODB
              <div className="md:w-20 w-12 md:mx-16 mx-12 relative overflow-hidden">
                <Flower />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<div className="bg-white dark:bg-black">
  <section className="relative md:h-[140vh] h-screen w-full">
    <img alt="" className="ukiyo fv_img1 filter dark:invert  " src="https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
    <div className="z-10 dark:text-black  text-white h-full flex flex-col items-start justify-between relative p-4 uppercase md:p-8">
      <div className="w-full">
        <FullStaticText word1={"TOOLS & FRAMEWORKS"} />
      </div>
      <div className="flex items-end justify-end w-full">
        <p className="md:w-1/3 text-xl md:text-2xl text-justify uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
          I specialize in new brands and brand transformations for fast-growing innovation companies. We create value by helping you adapt to a changing market and world.
        </p>
      </div>
    </div>
  </section>
  <div className="py-20">
    <div className="marqueeFull  text-black dark:text-white uppercase text-brand-100">
      <div className="trackFull">
        <div className="content flex items-center">
          REACTJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          NEXTJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          GATSBYJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          ANGULAR2+
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          GIT
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          REACTJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          NEXTJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          GATSBYJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          ANGULAR2+
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          GIT
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
        </div>
      </div>
    </div>
    <div className="marqueeFullR  text-black dark:text-white uppercase  text-brand-100">
      <div className="trackFullR">
        <div className="content flex items-center">
          REDUX
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          GSAP
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          DATOCMS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          TAILWINDCSS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          REDUX
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          GSAP
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          DATOCMS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          TAILWINDCSS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
        </div>
      </div>
    </div>
    <div className="marqueeFull text-black dark:text-white uppercase text-brand-100">
      <div className="trackFull">
        <div className="content flex items-center">
          STRAPI
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          THREEJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          EXPRESSJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          MONGODB
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          STRAPI
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          THREEJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          EXPRESSJS
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
          MONGODB
          <div className=" w-20 mx-16 relative overflow-hidden">
            <Flower />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;