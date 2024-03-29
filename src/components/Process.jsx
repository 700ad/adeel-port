import React from "react";

import FullStaticText from "./FullStaticText";

export default function Process() {
  return (
    <>
      <section className="relative md:h-[140vh] h-screen w-full">
        <img className="ukiyo fv_img1 filter dark:invert" src="https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
        <div className="z-10 relative dark:text-black text-white h-full flex flex-col items-center justify-center  p-4 uppercase md:p-8">
          <div className="w-full z-10 absolute top-0 left-0 right-0">
            <FullStaticText word1={"PROCESS"} />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="md:aspect-[2/1] aspect-[1/2] overflow-hidden relative">
              <img className="w-full ukiyo shadow-2xl shadow-black h-full object-cover filter dark:invert" src="https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
      {/*    
      <section className="relative md:h-[140vh] h-screen w-full">
        <img className="ukiyo fv_img1 filter dark:invert " src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
        <div className="z-10 dark:text-black  text-white h-full flex flex-col items-start justify-between relative p-4 uppercase md:p-8">
          <div className="w-full">
            <FullStaticText word1={"PROCESS"} />
          </div>
          <div className="flex items-start justify-end">
            <p className="md:w-1/3 text-xl md:text-2xl text-justify uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
              I specialize in new brands and brand transformations for fast-growing innovative companies. I create value by helping you adapt to a changing market and world.
            </p>
          </div>
        </div>
      </section> */}
      <div className="">
        <div className="pt-20 pb-20 px-8 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="h-[100vh] hidden md:block"></div>
            <div className="md:h-[250vh] h-screen">
              <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
                <div className="min-h-[13rem]">
                  <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">Send a Brief</h3>
                  <p className="mt-4 nord text-black/70 dark:text-white/70">Send us a complete brief along with documents and requirements to estimate the project and get started.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[150vh] hidden md:block"></div>
            <div className="md:h-[200vh] h-screen">
              <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
                <div className="min-h-[13rem]">
                  <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">Stay In Touch</h3>
                  <p className="mt-4 text-black/70 dark:text-white/70 nord">Review preliminary results and leave your feedback for us to continue or leave your feedback.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[200vh] hidden md:block"></div>
            <div className="md:h-[150vh] h-screen">
              <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
                <div className="min-h-[13rem]">
                  <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">Approve</h3>
                  <p className="mt-4 text-black/70 dark:text-white/70 nord">Approve the draft version of the services you like and want us to deliver.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-[250vh] hidden md:block"></div>
            <div className="md:h-[100vh] h-screen">
              <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
                <div className="min-h-[13rem]">
                  <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">Get Results</h3>
                  <p className="mt-4 text-black/70 dark:text-white/70 nord">Recieve the perfect quality of your services on time & leave us a review if you like.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
