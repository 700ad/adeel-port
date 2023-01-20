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
    <>
      <section className="relative md:h-[140vh] h-screen w-full">
        <img className="ukiyo fv_img1 filter dark:invert" src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
        <div className="z-10 relative dark:text-black text-white h-full flex flex-col items-center justify-center  p-4 uppercase md:p-8">
          <div className="w-full z-10 absolute top-0 left-0 right-0">
            <FullStaticText word1={"TOOLS & FRAMEWORKS"} />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="md:aspect-[2/1] aspect-[1/2] overflow-hidden relative">
              <img className="w-full ukiyo shadow-2xl shadow-black h-full object-cover filter dark:invert" src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <div className="absolute inset-0">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="md:w-2/3 text-lg md:text-2xl uppercase bg-white/0 backdrop-blur-2xl dark:bg-black/10 p-8 rounded-md">
                    I specialize in new brands and brand transformations for fast-growing innovative companies. I create value by helping you adapt to a changing market and world.
                  </p>
                </div>
              </div>
            </div>
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
    </>
  );
}
