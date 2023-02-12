import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import NewNav from "./NewNav";
import Lenis from "@studio-freight/lenis";
import sal from "sal.js";
import GlobalLoader from "./GlobalLoader";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Curtains, Vec2, PingPongPlane, ShaderPass } from "curtainsjs";
import { ripplesVs, ripplesFs, renderFs } from "./shader";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }) {
  const [mode, setMode] = useState([255, 255, 255]);

  useEffect(() => {
    sal();
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.008 - Math.pow(2.6, -8 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let canv = document.getElementById("canvas");
    const curtains = new Curtains({
      container: canv,
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
      alpha: false,
    });
    curtains.onSuccess(() => {
      const mouse = {
        last: new Vec2(),
        current: new Vec2(),
        velocity: new Vec2(),
        updateVelocity: false,
        lastTime: null,
      };

      const curtainsBBox = curtains.getBoundingRect();

      const ripples = new PingPongPlane(curtains, document.getElementById("canvas"), {
        vertexShader: ripplesVs,
        fragmentShader: ripplesFs,
        autoloadSources: false,
        watchScroll: false,
        sampler: "uRipples",
        texturesOptions: {
          floatingPoint: "half-float",
        },
        uniforms: {
          mousePosition: {
            name: "uMousePosition",
            type: "2f",
            value: mouse.current,
          },
          // our velocity
          velocity: {
            name: "uVelocity",
            type: "2f",
            value: mouse.velocity,
          },
          resolution: {
            name: "uResolution",
            type: "2f",
            value: new Vec2(curtainsBBox.width, curtainsBBox.height),
          },
          pixelRatio: {
            name: "uPixelRatio",
            type: "1f",
            value: curtains.pixelRatio,
          },
          time: {
            name: "uTime",
            type: "1i",
            value: -1,
          },

          viscosity: {
            name: "uViscosity",
            type: "1f",
            value: 10.75,
          },
          speed: {
            name: "uSpeed",
            type: "1f",
            value: 6.75,
          },
          size: {
            name: "uSize",
            type: "1f",
            value: 2,
          },
          dissipation: {
            name: "uDissipation",
            type: "1f",
            value: 0.9879,
            // value: 0.9875,
          },
        },
      });

      ripples
        .onRender(() => {
          mouse.velocity.set(curtains.lerp(mouse.velocity.x, 0, 0.05), curtains.lerp(mouse.velocity.y, 0, 0.1));
          ripples.uniforms.velocity.value = mouse.velocity.clone();
          ripples.uniforms.time.value++;
        })
        .onAfterResize(() => {
          const boundingRect = ripples.getBoundingRect();
          ripples.uniforms.resolution.value.set(boundingRect.width, boundingRect.height);
        });

      const onMouseMove = (e) => {
        if (ripples) {
          const mousePos = {
            x: e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
            y: e.targetTouches ? e.targetTouches[0].clientY : e.clientY,
          };
          mouse.last.copy(mouse.current);
          mouse.updateVelocity = true;
          if (!mouse.lastTime) {
            mouse.lastTime = (performance || Date).now();
          }
          if (mouse.last.x === 0 && mouse.last.y === 0 && mouse.current.x === 0 && mouse.current.y === 0) {
            mouse.updateVelocity = false;
          }
          mouse.current.set(mousePos.x, mousePos.y);
          const webglCoords = ripples.mouseToPlaneCoords(mouse.current);
          ripples.uniforms.mousePosition.value = webglCoords;
          if (mouse.updateVelocity) {
            const time = (performance || Date).now();
            const delta = Math.max(14, time - mouse.lastTime);
            mouse.lastTime = time;
            mouse.velocity.set((mouse.current.x - mouse.last.x) / delta, (mouse.current.y - mouse.last.y) / delta);
          }
        }
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onMouseMove);
      const renderPassUniforms = {
        resolution: {
          name: "uResolution",
          type: "2f",
          value: new Vec2(curtainsBBox.width, curtainsBBox.height),
        },
        hue: {
          name: "uHue",
          type: "1f",
          // value: 100,
          value: 100,
        },
        saturation: {
          name: "uSaturation",
          type: "1f",
          value: 1.4,
          // value: 1.5
        },
        bgColor: {
          name: "uBgColor",
          type: "3f",
          value: mode,
        },
      };
      const params = {
        fragmentShader: renderFs,
        depth: false,
        uniforms: renderPassUniforms,
      };
      const renderPass = new ShaderPass(curtains, params);
      renderPass.onAfterResize(() => {
        const boundingRect = renderPass.getBoundingRect();
        renderPass.uniforms.resolution.value.set(boundingRect.width, boundingRect.height);
      });
      renderPass.createTexture({
        sampler: "uRipplesTexture",
        fromTexture: ripples.getTexture(),
      });
    });
    return () => {
      curtains.dispose();
    };
  }, []);
  return (
    <>
      {/* <GlobalLoader /> */}
      <div id="canvas" className="w-screen fixed h-screen bottom-0 right-0 top-0 left-0"></div>

      <NewNav />
      {children}
      <Footer />
    </>
  );
}
