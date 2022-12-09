import React from "react";
import { Link } from "gatsby";

import Dragon from "../components/Dragon";
import World from "../components/World";

const Footer = () => {
  const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard", text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      <footer className="footer text-white">
        <div className="footer__inner">
          <div className="relative h-screen text-orange-50">
            <Dragon />
            {/* <World /> */}
            <div className="absolute top-0 left-0 text-white p-4 md:p-8">
              <div id="fname" className="name text-[4vw] flex p-2 border border-white/5 rounded-xl backdrop-blur-3xl leading-none">
                ADEEL
                <br />
                FARZAND
              </div>
            </div>
            <div className="absolute top-0 right-0 text-white p-4 md:p-8">
              <div className="text-[2vw] uppercase leading-none">Get Free Consultation</div>
              <a
                href="https://calendly.com/adeelfarzand/30min-discovery-call"
                target="_blank"
                className="bg-black mt-2 py-2 wful text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-3xl hover:bg-white/10 hover:dark:bg-black/10 w-full transition-all duration-300"
              >
                Book Now
              </a>
            </div>
            <div className="absolute bottom-8  left-8 text-white flex flex-col items-center justify-end">
              <div className="flex flex-col p-2 border border-white/5 rounded-xl backdrop-blur-3xl">
                <div className="uppercase p-1 w-full flex">
                  <Link to="https://www.linkedin.com/in/adeelfarzand/" target="_blank" className="copy-link w-1/2 flex">
                    LI{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(255,255,255,1)" />
                    </svg>
                  </Link>
                  <Link to="https://www.instagram.com/adeellfarzand/" target="_blank" className="copy-link w-1/2 flex">
                    IG
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(255,255,255,1)" />
                    </svg>
                  </Link>
                </div>
                <div
                  onClick={() => copyContent("hello@adeelfarzand.com")}
                  // href="mailto:hello@adeelfarzand.com"
                  // target="_blank"
                  className="copy-link uppercase p-1 w-full flex items-center justify-between"
                >
                  <span>Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(255,255,255,1)" />
                  </svg>
                </div>
                <div onClick={() => copyContent("+92 300 795 4488")} className="copy-link uppercase p-1 flex items-center justify-between">
                  <span>Phone</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z" fill="rgba(255,255,255,1)" />
                  </svg>
                </div>
                <div className="uppercase p-1">Lahore, PK</div>
              </div>
            </div>
            <div className="absolute bottom-8  right-8 text-white flex flex-col items-center justify-end">
              <div className="flex flex-col cursor-default p-2 border border-white/5 rounded-xl backdrop-blur-3xl">
                <div className="uppercase w-full flex">Adeel &copy;</div>
                <div className="uppercase w-full">Farzand</div>
                <div className="uppercase p-1">&copy; &mdash; 2022</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
