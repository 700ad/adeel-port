import React from "react";

import { Vector3 } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
import { Link } from "gatsby";

function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const { nodes, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf"
  );

  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#05299E"
        position={[3, 3, 2]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#B3001B"
        position={[-3, 3, 3]}
      />
      <mesh
        position={[0, -1.03, 0]}
        castShadow
        receiveShadow
        geometry={nodes.dragon.geometry}
        material={materials["Default OBJ.001"]}
        dispose={null}
      />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  );
}

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
            <Canvas
              className="h-screen absolute"
              shadows
              dpr={[1, 2]}
              camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
            >
              <color attach="background" args={["#202020"]} />
              <fog attach="fog" args={["#202020", 5, 20]} />
              <ambientLight intensity={0.015} />
              <Scene />
            </Canvas>
            <div className="absolute hidden inset-0 backdrop-blur-md"></div>
            <div className="absolute bottom-8  left-8 text-white flex flex-col items-center justify-end">
              <div className="flex flex-col p-2 border border-white/5 rounded-xl backdrop-blur-3xl">
                <div className="uppercase p-1 w-full flex">
                  <Link
                    to="https://www.linkedin.com/in/adeelfarzand/"
                    target="_blank"
                    className="copy-link w-1/2 flex"
                  >
                    LI{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                        fill="rgba(255,255,255,1)"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="https://www.instagram.com/adeellfarzand/"
                    target="_blank"
                    className="copy-link w-1/2 flex"
                  >
                    IG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                        fill="rgba(255,255,255,1)"
                      />
                    </svg>
                  </Link>
                </div>
                <div
                  onClick={() => copyContent("hello@adeelfarzand.com")}
                  className="copy-link uppercase p-1 w-full flex items-center justify-between"
                >
                  <span>Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                      fill="rgba(255,255,255,1)"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => copyContent("+92 300 795 4488")}
                  className="copy-link uppercase p-1 flex items-center justify-between"
                >
                  <span>Phone</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z"
                      fill="rgba(255,255,255,1)"
                    />
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

<footer className="w-full h-screen relative bg-black">
  <div className="absolute bottom-8  left-8 right-8 text-white flex flex-col items-center justify-end">
    <div className="hidden md:ex flex-col items-center justify-center">
      <h4 className="text-[10vh] max-w-4xl text-center leading-none font-thin text-white">
        Let's talk about the next big thing
      </h4>
      <button className="p-4 px-8 my-20 rounded-full bg-white/90 hover:bg-white/10 transition-all duration-300 text-black hover:text-white">
        Contact Us
      </button>
    </div>
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
      <div className="flex flex-col">
        <div className="text-sm mb-4">Based in</div>
        <div className="text-xl uppercase p-1">Lahore, PK</div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm mb-4">Social</div>
        <div className="text-xl uppercase mb-1 cursor-pointer p-1">
          LinkedIn
        </div>
        <div className="text-xl uppercase cursor-pointer p-1">Instagram</div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm mb-4">Contact</div>
        <div className="copy-link mb-1 active:bg-white/60">Email</div>
        <div className="copy-link active:bg-white/60">Phone</div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm mb-4">&nbsp;</div>
        <div className="text-xl uppercase p-1">Adeel &copy;</div>
        <div className="text-xl uppercase p-1">Farzand</div>
      </div>
    </div>
    <hr className="border-b w-full border-white" />
  </div>
</footer>;
