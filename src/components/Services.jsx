import React from "react";
import "./work.css";
import HeroFullWidth from "../components/HeroFullWidth";
import FullStaticText from "../components/FullStaticText";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({ word }) => {
  return (
    <div className="marqueeFull uppercase text-black">
      <div className="trackFull">
        <div className="content text-[8rem]">
          &nbsp;{word}&nbsp;&nbsp;{word}&nbsp;&nbsp;{word}&nbsp;&nbsp;{word}&nbsp;&nbsp;{word}&nbsp; &nbsp;{word}s&nbsp; &nbsp;{word}s&nbsp; &nbsp;{word}s&nbsp; &nbsp;{word}s&nbsp; &nbsp;{word}s&nbsp; &nbsp;New Horizons&nbsp; &nbsp;{word}s&nbsp; &nbsp;{word}
          s&nbsp; &nbsp;{word}s&nbsp; &nbsp;{word}s&nbsp;
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  useEffect(() => {
    gsap.to("#innerdiv", {
      scrollTrigger: {
        trigger: "#scroller",
        start: "top top",
        end: "4500px top",
        scrub: 0.1,
        pin: true,
      },
      transform: "translateX(-200vw)",
    });

    gsap.to(".first-translated-x", {
      scrollTrigger: {
        trigger: "#firstScroller",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.1,
      },

      transform: "translateX(0px)",
      stagger: 0.1,
    });
    gsap.to(".second-translated-x", {
      scrollTrigger: {
        trigger: "#secondScroller",
        start: "top bottom-=250vh",
        end: "2000px",
        scrub: 0.1,
      },
      transform: "translateX(0px)",
      stagger: 0.1,
    });
  }, []);
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <section className="relative md:h-[140vh] h-screen w-full">
          <img className="ukiyo fv_img1 filter dark:invert" src="https://images.pexels.com/photos/1114900/pexels-photo-1114900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
          <div className="z-10 relative dark:text-black text-white h-full flex flex-col items-center justify-center  p-4 uppercase md:p-8">
            <div className="w-full z-10 absolute top-0 left-0 right-0">
              <FullStaticText word1={"SERVICES"} />
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="md:aspect-[2/1] aspect-[1/2] overflow-hidden relative">
                <img className="w-full ukiyo shadow-2xl shadow-black h-full object-cover filter dark:invert" src="https://images.pexels.com/photos/1114900/pexels-photo-1114900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="absolute inset-0">
                  <div className="flex items-center justify-center h-full w-full">
                    <p className="md:w-2/3 text-lg md:text-xl uppercase bg-white/0 backdrop-blur-2xl dark:bg-black/10 p-8 rounded-md">
                      I BUILD LONG TERM RELATIONSHIPS WITH CLIENTS BIG AND NEW. WORK I DO SPANS ACROSS DIFFERENT INDUSTRIES AND DIFFERENT USE CASES. BELOW IS A LIST OF WORK I DELIEVERED IN PREVIOUS YEAR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="min-h-screen overflow-hidden">
          <div id="scroller" className="">
            <div id="innerdiv" className="w-[300vw] h-screen flex">
              <div id="firstScroller" className="w-screen grid grid-cols-2">
                <div className="col-span-1 flex flex-col pb-10 items-center justify-between relative overflow-hidden">
                  <div className="grid grid-cols-3 w-full">
                    <div className="col-span-3">
                      <FullStaticText word1="DESIGN" />
                    </div>
                  </div>
                  <div className="flex w-full relative">
                    <div className=" z-30 absolute left-0 right-0 bottom-0 rotate-6 bg-white">
                      <Marquee word={"DESIGN - DESIGN - DESIGN - DESIGN - "} />
                    </div>
                    <div className="absolute left-0 right-0 bottom-0 -rotate-6 bg-white">
                      <Marquee word={"DESIGN - DESIGN - DESIGN - DESIGN - "} />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 p-20">
                  <div className="translate-x-[25vw] first-translated-x">
                    <div className=" text-4xl">WEB DESIGN</div>
                    <div className=" ">
                      <p className="text-xl w-1/2">DESIGNING AWESPIRING WEBSITES AND WEB APPLICATIONS. I EXPERIMENT WITH MODERN DESIGNS AND</p>
                    </div>
                  </div>
                  <div className="translate-x-[25vw] first-translated-x mt-20">
                    <div className=" text-4xl">UI DESIGN</div>
                    <div className="">
                      <p className="text-xl w-1/2">DESIGNING AWESPIRING WEBSITES AND WEB APPLICATIONS. I EXPERIMENT WITH MODERN DESIGNS AND</p>
                    </div>
                  </div>
                  <div className="translate-x-[25vw] first-translated-x mt-20">
                    <div className=" text-4xl">ECOMMERCE DESIGN</div>
                    <div className="">
                      <p className="text-xl w-1/2">DESIGNING AWESPIRING WEBSITES AND WEB APPLICATIONS. I EXPERIMENT WITH MODERN DESIGNS AND</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="secondScroller" className="w-screen relative z-30 grid grid-cols-2">
                <div className="col-span-1 flex flex-col pb-10 items-center justify-between relative overflow-hidden">
                  <div className="grid grid-cols-3 w-full">
                    <div className="col-span-3">
                      <FullStaticText word1="DEVELOPMENT" />
                    </div>
                  </div>
                  <div className="flex w-full relative">
                    <div className=" z-30 absolute left-0 right-0 bottom-0 rotate-6 bg-white">
                      <Marquee word={"DEVELOPMENT - DEVELOPMENT - DEVELOPMENT - DEVELOPMENT - "} />
                    </div>
                    <div className="absolute left-0 right-0 bottom-0 -rotate-6 bg-white">
                      <Marquee word={"DEVELOPMENT - DEVELOPMENT - DEVELOPMENT - DEVELOPMENT - "} />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 p-20">
                  <div className="translate-x-[25vw] second-translated-x">
                    <div className=" text-4xl">WEB DEVELOPMENT</div>
                    <div className=" ">
                      <p className="text-xl w-1/2">DESIGNING AWESPIRING WEBSITES AND WEB APPLICATIONS. I EXPERIMENT WITH MODERN DESIGNS AND</p>
                    </div>
                  </div>
                  <div className="translate-x-[25vw] mt-20 second-translated-x">
                    <div className=" text-4xl">FRONTEND DEVELOPMENT</div>
                    <div className=" ">
                      <p className="text-xl w-1/2">DESIGNING AWESPIRING WEBSITES AND WEB APPLICATIONS. I EXPERIMENT WITH MODERN DESIGNS AND</p>
                    </div>
                  </div>
                  <div className="translate-x-[25vw] mt-20 second-translated-x">
                    <div className=" text-4xl">DESIGN SYSTEMS</div>
                    <div className=" ">
                      <p className="text-xl w-1/2">DESIGNING AWESPIRING WEBSITES AND WEB APPLICATIONS. I EXPERIMENT WITH MODERN DESIGNS AND</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="thirdScroller" className="w-screen relative z-30 grid grid-cols-2 p-4 md:p-8">
                <div className="col-span-1 flex flex-col pb-10 items-center justify-between relative overflow-hidden">
                  <div className="grid grid-cols-3 w-full">
                    <div className="col-span-3 flex flex-col relative overflow-hidden">
                      <div className="flex">
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                      </div>
                      <div className="flex">
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                      </div>
                      <div className="flex">
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                      </div>
                      <div className="flex">
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                      </div>
                      <div className="flex">
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                        <Marquee word="DESIGN" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                  <div className="bebas text-8xl w-2/3">
                    <span className=" italic text-orange">TRUSTED</span>
                    &nbsp;&nbsp;BY THOSE WHO KNOW BEST.
                  </div>
                  <p className="w-2/3 mt-8">Leading innovators of all sizes and industries rely on Arcadia to build better energy experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

<div className="col-span-1 flex flex-col items-center justify-center">
  <div className="bebas text-8xl w-2/3">
    <span className=" italic text-orange">TRUSTED</span>
    &nbsp;&nbsp;BY THOSE WHO KNOW BEST.
  </div>
  <p className="w-2/3 mt-8">Leading innovators of all sizes and industries rely on Arcadia to build better energy experiences.</p>
</div>;
