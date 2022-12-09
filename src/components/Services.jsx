import React from "react";
import "./work.css";
import FullStaticText from "./FullStaticText";
import { Link } from "gatsby";

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
                    <p className="md:w-2/3 text-lg md:text-2xl uppercase bg-white/0 backdrop-blur-2xl dark:bg-black/10 p-8 rounded-md">
                      I BUILD LONG TERM RELATIONSHIPS WITH CLIENTS BIG AND NEW. WORK I DO SPANS ACROSS DIFFERENT INDUSTRIES AND DIFFERENT USE CASES. BELOW IS A LIST OF WORK I DELIEVERED IN PREVIOUS YEAR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="">
        <div className="pt-20 pb-20 px-8 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="h-[250vh]">
              <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br  dark:text-white p-6">
                <div className="min-h-[13rem]">
                  <FullStaticText word1="DESIGN" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[100vh]"></div>
            <div className="h-[150vh]">
              <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
                <div className="min-h-[13rem]">
                  <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">Send a Brief</h3>
                  <p className="mt-4 nord text-black/70 dark:text-white/70">Send us a complete brief along with documents and requirements to estimate the project and get started.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[200vh]">
              <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
                <div className="min-h-[13rem]">
                  <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">Stay In Touch</h3>
                  <p className="mt-4 text-black/70 dark:text-white/70 nord">Review preliminary results and leave your feedback for us to continue or leave your feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <div className="w-screen h-screen grid grid-cols-2">
        <div className="col-span-1 flex flex-col relative overflow-hidden">
          <div className="flex">
            <Marquee word={"DESIGN"} />
            <Marquee word={""} />
            <Marquee word={"DESIGN"} />
          </div>
          <div className="flex">
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
          </div>
          <div className="flex">
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
          </div>
          <div className="flex">
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
          </div>
          <div className="flex">
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
            <Marquee word={"DESIGN"} />
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
    </>
  );
}
