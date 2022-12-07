import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
export default function FullWidthText({ word1, word2 }) {
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
    gsap.fromTo(
      ".innerSpan",
      {
        transform: "translate(0, 100%)",
        opacity: 0,
      },
      {
        transform: "translate(0, 0%)",
        opacity: 1,
        delay: 2,
      }
    );
  }, [bgScale]);

  return (
    <div className="scale__container--js">
      <h2 className={`scale--js leading-none text-left font-medium`}>
        <div className="overflow-hidden m-0 h1">
          <span className="block innerSpan">{word1}</span>
        </div>
        <br />
        <div className="overflow-hidden m-0 h1">
          <span className="block innerSpan">{word2}</span>
        </div>
      </h2>
    </div>
  );
}
