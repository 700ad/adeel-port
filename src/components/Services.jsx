import React from "react";

import FullStaticText from "./FullStaticText";

import flower from "../images/Group 1.svg";
// import flowerWhite from "../images/flower-white.svg";

const Flower = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="w-full h-full rot object-cover dark:stroke-white stroke-black"
    >
      <g transform="translate(-337.5 -10)">
        <line
          y2="20"
          transform="translate(347.5 10)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="matrix(0.966, 0.259, -0.259, 0.966, 350.088, 10.341)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="translate(352.5 11.34) rotate(30)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="translate(354.571 12.929) rotate(45)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="translate(356.16 15) rotate(60)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="matrix(0.259, 0.966, -0.966, 0.259, 357.159, 17.412)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="translate(357.5 20) rotate(90)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="matrix(-0.259, 0.966, -0.966, -0.259, 357.159, 22.588)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="translate(356.16 25) rotate(120)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="translate(354.571 27.071) rotate(135)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="translate(352.5 28.66) rotate(150)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
        <line
          y2="20"
          transform="matrix(-0.966, 0.259, -0.259, -0.966, 350.088, 29.659)"
          fill="none"
          stroke="#000"
          stroke-width="0.5"
        />
      </g>
    </svg>
  );
};

export default function Services() {
  return (
    <div className="bg-white dark:bg-black">
      <section className="relative md:h-[140vh] h-screen w-full">
        <img
          alt=""
          className="ukiyo fv_img1 filter dark:invert  "
          src="https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          data-u-speed="1.7"
          data-u-willchange
          decoding="async"
        />
        <div className="z-10 dark:text-black  text-white h-full flex flex-col items-start justify-between relative p-4 uppercase md:p-8">
          <div className="w-full">
            <FullStaticText word1={"TOOLS & FRAMEWORKS"} />
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
      <div className="py-20">
        <div className="marqueeFull  text-black dark:text-white uppercase text-brand-100">
          <div className="trackFull">
            <div className="content flex items-center">
              NEXTJS
              <div className=" w-20 mx-16 relative overflow-hidden">
                <Flower />
              </div>
              REACTJS
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
            </div>
          </div>
        </div>
        <div className="marqueeFullR  text-black dark:text-white uppercase  text-brand-100">
          <div className="trackFullR">
            <div className="content flex items-center">
              NEXTJS
              <div className=" w-20 mx-16 relative overflow-hidden">
                <Flower />
              </div>
              REACTJS
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
            </div>
          </div>
        </div>
        <div className="marqueeFull text-black dark:text-white uppercase text-brand-100">
          <div className="trackFull">
            <div className="content flex items-center">
              NEXTJS
              <div className=" w-20 mx-16 relative overflow-hidden">
                <Flower />
              </div>
              REACTJS
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<div className="pt-20 pb-20 px-8 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="col-span-1 ">
    <div className="h-[100vh] hidden md:block"></div>
    <div className="h-[250vh] hover:opacity-80 transition-all duration-300 cursor-pointer">
      <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
        <div className="w-full relative overflow-hidden aspect-square">
          <img
            alt=""
            className="w-full ukiyo h-full object-cover"
            src="https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">
          Brand
        </h3>
        <p className="mt-4 nord text-black/70 dark:text-white/70">
          Send us a complete brief along with documents and requirements to
          estimate.
        </p>
      </div>
    </div>
  </div>

  <div className="col-span-1">
    <div className="h-[150vh] hidden md:block"></div>
    <div className="h-[200vh]  hover:opacity-80 transition-all duration-300 cursor-pointer">
      <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
        <div className="w-full relative overflow-hidden aspect-square">
          <img
            alt=""
            className="w-full ukiyo h-full object-cover"
            src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">
          Content
        </h3>
        <p className="mt-4 text-black/70 dark:text-white/70 nord">
          Review preliminary results and leave your feedback for us to continue
          or leave your feedback.
        </p>
      </div>
    </div>
  </div>
  <div className="col-span-1">
    <div className="h-[200vh] hidden md:block"></div>
    <div className="h-[150vh]  hover:opacity-80 transition-all duration-300 cursor-pointer">
      <div className="w-full sticky transition-all duration-300  top-20 bg-gradient-to-br from-transparent to-stone-100/60 dark:to-stone-100/20 p-6">
        <div className="w-full relative overflow-hidden aspect-square">
          <img
            alt=""
            className="w-full ukiyo h-full object-cover"
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <h3 className="text-black dark:text-white uppercase mt-4 text-3xl">
          Development
        </h3>
        <p className="mt-4 text-black/70 dark:text-white/70 nord">
          Approve the draft version of the services you like and want us to
          deliver.
        </p>
      </div>
    </div>
  </div>
</div>;
