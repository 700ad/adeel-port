import React, { useEffect } from "react";

export default function Hero() {
  return (
    <>
      <div id="cont" className="min-h-screen p-4 md:px-8  text-black dark:text-white grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 pt-16 md:pt-20">
        <div className="flex flex-col text-black dark:text-white text-[20vw] md:text-[10vw] leading-none">
          <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="100" data-sal-easing="ease">
            ADEEL &copy;
          </p>
          <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease">
            FARZAND
          </p>
        </div>
        <div className="col-span-1">
          <div data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease" className="w-full   translate-y-3 relative md:h-full h-40 bg-gradient-to-br from-transparent to-gray-900/80 dark:to-gray-200/80"></div>
        </div>
        <div className="col-span-1 h-full items-center md:items-start justify-between pb-8 flex flex-col row-start-4 md:row-start-2">
          <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease" className="lg:w-3/5   translate-y-3 text-xl nord">
            Helping Companies Generate More Revenue By Creating Better Digital Products
          </p>
          <div className="mb-12  translate-y-3 rounded-full h-20">
            <a
              data-sal="fade"
              data-sal-duration="500"
              data-sal-delay="200"
              data-sal-easing="ease"
              target="_blank"
              href="https://calendly.com/adeelfarzand/30min-discovery-call"
              className="bg-black relative z-50 mt-8 text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center md:text-2xl uppercase px-8 py-2 hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-500 hover:text-black"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        <div className=" row-start-3 md:row-start-auto flex flex-col text-black dark:text-white text-[20vw] md:text-[10vw] leading-none">
          <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="200" data-sal-easing="ease">
            CREATIVE
          </p>
          <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease">
            ENGINEER
          </p>{" "}
        </div>
      </div>
    </>
  );
}
