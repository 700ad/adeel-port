import React from "react";
import FullWidthText from "../../components/FullWidthText";
import NextProject from "../../components/NextProject";

export default function TheoremStudio() {
  return (
    <div className="relative">
      <div className="p-4 md:p-8">
        <FullWidthText word1="THEOREM" word2="STUDIO" />
      </div>
      <section className="relative md:h-[140vh] h-screen w-full">
        <img
          className="ukiyo fv_img1 filter dark:invert"
          src="https://images.pexels.com/photos/2156883/pexels-photo-2156883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          data-u-speed="1.7"
          data-u-willchange
          decoding="async"
        />
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
        <div className="col-span-6 col-start-2 text-5xl">
          FUTURE GREEN STEPS HELPS BUSINESSES AND INSTITUTIONS PROVIDE A
          FULLY-MANAGED NETWORK OF EV CHARGING SOLUTIONS TO THEIR END-USERS.
        </div>
      </div>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-4 col-start-4">
          These EV-charging solutions enable organisations to plan sustainable
          investment in their decarbonisation efforts through a managed-service
          model. From a wider business perspective, the biggest challenges we
          had to solve for Future Green Steps were two-fold. Firstly, the brand
          identity had to promote authority and credibility – positioning Future
          Green Steps as established and knowledgeable brand in a fast growing
          market sector. And, secondly, it was important to differentiate them
          from basic ‘installers’ – in a highly fragmented market not renowned
          for its stability or corporate maturity.
        </div>
      </div>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-8">
          <img
            className="w-full h-full ukiyo object-cover"
            alt=""
            data-u-speed="1.7"
            data-u-willchange
            decoding="async"
            src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className="grid grid-cols-8 p-4 md:p-8">
        <div className="col-span-2 col-start-2 leading-none text-5xl">
          THE DEIGN
          <br />
          PRINCIPLES
        </div>
        <div className="col-span-3 col-start-4">
          These EV-charging solutions enable organisations to plan sustainable
          investment in their decarbonisation efforts through a managed-service
          model. From a wider business perspective, the biggest challenges we
          had to solve for Future Green Steps were two-fold. Firstly, the brand
          identity had to promote authority and credibility – positioning Future
          Green Steps as established and knowledgeable brand in a fast growing
          market sector. And, secondly, it was important to differentiate them
          from basic ‘installers’ – in a highly fragmented market not renowned
          for its stability or corporate maturity.
        </div>
      </div>
      <NextProject ind={1} />
    </div>
  );
}
