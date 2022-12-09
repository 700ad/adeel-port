import React from "react";
import FullWidthText from "../../components/FullWidthText";
import NextProject from "../../components/NextProject";

export default function TheoremStudio() {
  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white">
      <div className="p-4 md:p-8">
        <FullWidthText word1="THEOREM" word2="STUDIO" />
      </div>
      <section className="relative md:h-[140vh] h-screen w-full">
        <img className="ukiyo fv_img1" src="https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" data-u-speed="1.7" data-u-willchange decoding="async" />
        <div className="z-10 dark:text-black text-white h-full flex flex-col items-start justify-between relative p-4 uppercase md:p-8"></div>
      </section>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-1 col-start-2 flex flex-col">
          <div className="mb-4">Services</div>
          <div className="font-semibold">BRAND STRATEGY</div>
          <div className="font-semibold">REBRANDING</div>
          <div className="font-semibold">UI/US DESIGN</div>
          <div className="font-semibold">wEB DEVELOPMENT</div>
        </div>
      </div>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-6 col-start-2 text-5xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed.</div>
      </div>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-4 col-start-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat magnam dicta facere officiis aspernatur incidunt quam impedit numquam nobis aliquid harum ipsa corrupti vero dignissimos soluta ratione, cum aperiam debitis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Fugiat magnam dicta facere officiis aspernatur incidunt quam impedit numquam nobis aliquid harum ipsa corrupti vero dignissimos soluta ratione, cum aperiam debitis. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Fugiat magnam dicta facere officiis aspernatur incidunt quam impedit numquam nobis aliquid harum ipsa corrupti vero dignissimos soluta ratione, cum aperiam debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat magnam dicta
          facere officiis aspernatur incidunt quam impedit numquam nobis aliquid harum ipsa corrupti vero dignissimos soluta ratione, cum aperiam debitis.
        </div>
      </div>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-8">
          <img className="w-full h-full ukiyo object-cover" alt="" data-u-speed="1.7" data-u-willchange decoding="async" src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-2 col-start-2 leading-none text-5xl">
          THE DEIGN
          <br />
          PRINCIPLES
        </div>
        <div className="col-span-3 col-start-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam suscipit repellendus deleniti obcaecati commodi. Dolorum officiis tempore harum perferendis adipisci, aperiam, eligendi repellendus quos modi expedita consectetur! Quaerat,
          voluptatem sunt aliquid dolores iure nostrum autem tenetur quod vel asperiores quam, reiciendis consequuntur quis voluptas accusantium earum maxime cupiditate nam facere? Ex deserunt nam officiis saepe maxime odio. Sunt dolore iure quos provident
        </div>
      </div>
      <NextProject ind={1} />
    </div>
  );
}
