import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { useRef } from "react";
export default function HeroFullWidth({ word1, word2, children }) {
  const ballRef = useRef();

  const scaleHeader = () => {
    let scalable = document.querySelectorAll(".scale--js");
    let margin = 10;
    for (let i = 0; i < scalable.length; i++) {
      let scalableContainer = scalable[i].parentNode;
      scalable[i].style.transform = "scale(1)";
      let scalableContainerWidth = scalableContainer.offsetWidth - margin;
      let scalableWidth = scalable[i].offsetWidth;
      scalable[i].style.transform = "scale(" + scalableContainerWidth / scalableWidth + ")";
      scalableContainer.style.height = scalable[i].getBoundingClientRect().height + "px";
    }
  };

  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  let bgScale = debounce(function () {
    scaleHeader();
  }, 250);

  useEffect(() => {
    bgScale();
    window.addEventListener("resize", bgScale);
    console.log(ballRef.current, "BALL");
    gsap.to(ballRef.current, {
      scrollTrigger: {
        trigger: "#cont",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      rotate: 360,
    });
  }, [bgScale]);

  return (
    <div id="cont" className="scale__container--js">
      <h2 className={`scale--js leading-none text-left flex font-medium`}>
        <div className="relative flex">
          ADEEL
          <div className="absolute right-2" ref={ballRef}>
            &copy;
          </div>
        </div>
        FARZAND
      </h2>
    </div>
  );
}
