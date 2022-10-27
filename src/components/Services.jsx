import React from "react";

import FullWidthText from "./FullWidthText";

export default function Services() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="relative md:h-[140vh] h-screen w-full">
        <img
          className="ukiyo fv_img1 filter dark:invert  "
          src="https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          //   src="https://images.pexels.com/photos/5086477/pexels-photo-5086477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          // src="https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          data-u-speed="1.7"
          data-u-willchange
          decoding="async"
        />
        <div className="z-10 dark:text-black  text-white h-full flex flex-col items-start justify-between relative p-4 uppercase md:p-8">
          <div className="w-full">
            <FullWidthText word1={"SERVICES"} />
          </div>
          <div className="flex items-start justify-end">
            <p className="w-1/3 uppercase bg-white/30 dark:bg-black/10 backdrop-blur-md p-4 rounded-md">
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
      <div className="pt-20 pb-20 px-8 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="col-span-1 h-[320vh]">
          <div className="sticky top-10 border border-orange-400"></div>
        </div>
        <div className="h-[400vh]">
          <div className="sticky  top-10 h-screen">
            <div className="h-fit bg-gradient-to-br from-white to-stone-200 dark:from-black dark:to-stone-800 dark:text-white p-8">
              <h4 className="text-3xl">WEB DESIGN</h4>
              <p className="mt-8 text-xl">
                Design is the foundation of any site or product we build. We
                help with a wide range of disciplines, including design audit,
                branding, user interfaces, motion, and illustration.
              </p>
            </div>
          </div>
          <div className="sticky top-32 h-screen">
            <div className="h-fit bg-gradient-to-br from-white to-orange-500 dark:from-black dark:to-stone-800 dark:text-white p-8">
              <h4 className="text-3xl">WEB DEVELOPMENT</h4>
              <p className="mt-8 text-xl">
                Be it a simple website or a complex web application, we use the
                most sophisticated tools and a refined approach to deliver a
                fast and usable product.
              </p>
            </div>
          </div>
          <div className="sticky top-[13.5rem] h-screen">
            <div className="h-fit bg-gradient-to-br from-white to-stone-200 dark:from-black dark:to-stone-800 dark:text-white p-8">
              <h4 className="text-3xl">HEADLESS DEVELOPMENT</h4>
              <p className="mt-8 text-xl">
                We empower companies to easily create and manage their content
                using a Headless CMS.
              </p>
            </div>
          </div>
          <div className="sticky top-40 h-screen">
            <div className="h-fit bg-gradient-to-br from-white to-stone-200 dark:from-black dark:to-stone-800 dark:text-white p-8">
              <h4 className="text-3xl uppercase">Frontend consultancy</h4>
              <p className="mt-8">
                The amount of possibilities and technologies in frontend is
                overwhelming. With our years of experience in the market, we're
                able to support businesses with architecture, research, and
                strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-4 md:px-8 py-20 grid grid-cols-4 gap-8">
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border border-b-black w-full" />
          <div className="flex flex-col p-2 my-4">
            <div className="uppercase text-3xl mb-4">Web Design</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem excepturi vitae rem ipsam, libero, numquam ut ea eaque
              doloremque iusto, recusandae culpa beatae sint provident? Numquam
              illo distinctio consequuntur.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
