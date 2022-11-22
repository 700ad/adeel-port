import Layout from "../components/Layout";
import FullWidthText from "../components/FullWidthText";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";
import sunsi from "../images/sunset.png";
import sunrise from "../images/adeel.jpeg";
import sunset from "../images/adeel2.jpeg";
import noise3Img from "../images/noisr3.jpeg";
import noise1Img from "../images/noise1.jpeg";
import noise2Img from "../images/noise2.jpeg";
import noiseImg from "../images/noise.jpeg";

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
);

extend({ ImageFadeMaterial });

function FadingImage() {
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useTexture([
    sunrise,
    sunset,
    noise3Img,
  ]);
  const [hovered, setHover] = useState(false);
  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(
      ref.current.dispFactor,
      hovered ? 1 : 0,
      0.065
    );
  });
  return (
    <mesh
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <planeGeometry />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
    </mesh>
  );
}

const Header = () => {
  return (
    <>
      <div className="w-screen relative h-screen unsets dark:sunet p-4 md:p-8 flex flex-col items-start justify-end">
        <div className="w-full  text-black dark:text-white">
          <div className="absolute inset-0">
            <section className="relative h-full w-full">
              <img
                className="ukiyo fv_img1 filter dark:invert-0 invert  "
                src={sunsi}
                data-u-speed="2.0"
                data-u-willchange
                decoding="async"
              />
            </section>
          </div>
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
              <FadingImage />
            </Canvas>
          </div>

          <FullWidthText word1="ADEEL FARZAND" />
          <div className="grid md:grid-cols-4 grid-cols-1 relative z-10 mt-4">
            <div className="col-span-1 md:text-3xl text-2xl md:pl-2 font-medium uppercase">
              FULLSTACK ENGINEER & CREATIVE DEVELOPER
            </div>
            <div className="col-span-1">
              <p className="leading-none text-sm my-4">
                I LOVE WRITING CODE & TRAVELING. I'VE BEEN WORKING SINCE 2019.
                DURING THIS TIME, I REALIZED THAT I LIKE TO COMBINE FUNCTIONAL
                SOLUTIONS WITH AESTHETICS, MAKING PRODUCTS PEOPLE LOVE.
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="bg-black mt-8 text-white cursor-pointer dark:text-black dark:bg-white flex items-center justify-center text-3xl hover:bg-white/10 hover:dark:bg-black/10 hover:dark:text-white transition-all duration-300 hover:text-black">
              Get Free Consultation
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function About() {
  return (
    <>
      <Header />
    </>
  );
}
