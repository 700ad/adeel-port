import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Image } from "gatsby";
gsap.registerPlugin(ScrollTrigger);
export default function Case({ word = "Design" }) {
  useEffect(() => {
    gsap.to("#scroller", {
      scrollTrigger: {
        trigger: "#scroller",
        start: "-25vh top",
        end: "5000px bottom",
        scrub: 0.1,
        pin: true,
      },
      translateX: "-144vw",
    });
  }, []);
  return (
    <>
      <div className="h-[120vh] relative">
        <img className="w-full h-full ukiyo object-cover" src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="absolute inset-0 px-4 py-2 mx-auto sm:p-4 md:px-8">
          <div className="p-4 text-[6vh] md:text-[8vh] lg:text-[10vh] leading-none uppercase dark:text-white">
            WORK I <br /> COMPLETED <br /> RECENTLY
          </div>
          <div className="absolute bottom-8 ml-8 right-8 bg-white/20 dark:bg-black/20 dark:text-white backdrop-blur-md rounded-md p-4 xl:w-1/4 md:w-2/4 sm:w-3/4 ">
            I BUILD LONGTERM RELATIONSHIPS WITH CLIENTS BIG AND NEW. WORK I DO SPANS ACROSS DIFFERENT INDUSTRIES AND DIFFERENT USE CASES. BELOW IS A LIST OF WORK I DELIEVERED IN PREVIOUS YEAR.
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden ">
        <div id="scroller" className="h-[75vh] w-[244vw] px-[4vw] flex items-center justify-center">
          <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease" className="h-[50vh] w-[50vw] mx-[2vw] flex flex-col">
            <div className="text-xl helv dark:text-white h-10 w-full">James Flower</div>
            <div className="w-full mt-4 h-full rounded-md">
              <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
          <div data-sal="fade" data-sal-duration="500" data-sal-delay="100" data-sal-easing="ease" className="h-[50vh] w-[50vw] mx-[2vw] flex flex-col">
            <div className="text-xl helv dark:text-white h-10 w-full">James Flower</div>
            <div className="w-full mt-4 h-full rounded-md">
              <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4871011/pexels-photo-4871011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
          <div className="h-[50vh] w-[50vw] mx-[2vw] flex flex-col">
            <div className="text-xl helv dark:text-white h-10 w-full">James Flower</div>
            <div className="w-full mt-4 h-full rounded-md">
              <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2425036/pexels-photo-2425036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
          <div data-sal="fade" className="h-[50vh] w-[50vw] mx-[2vw] flex flex-col">
            <div className="text-xl helv dark:text-white h-10 w-full">James Flower</div>
            <div className="w-full mt-4 h-full rounded-md">
              <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
          <div data-sal="fade" className="h-[50vh] w-[50vw] mx-[2vw] flex flex-col">
            <div className="text-xl helv dark:text-white h-10 w-full">James Flower</div>
            <div className="w-full mt-4 h-full rounded-md">
              <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
