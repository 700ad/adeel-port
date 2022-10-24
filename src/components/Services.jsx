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
      <div className="px-4 md:px-8 py-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia
        pariatur deleniti libero culpa sapiente consequatur amet reprehenderit
        vel, aperiam cupiditate quibusdam. Consequuntur laborum optio adipisci
        magnam nulla ex eligendi?
      </div>
    </div>
  );
}
