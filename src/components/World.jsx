import React, { useRef, useState } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";

import { MapControls } from "three/examples/jsm/controls/OrbitControls";

extend({ MapControls });

function Controls(props) {
  const controls = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    controls.current.update();
  });
  return (
    <mapControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping={true}
      dampingFactor={0.05}
      minDistance={100}
      maxDistance={500}
      maxPolarAngle={Math.PI / 2}
      {...props}
    />
  );
}

let world = [];
for (let i = 0; i < 1000; i++) {
  world.push(
    <mesh
      key={i}
      position={[Math.random() * 1600 - 800, 0, Math.random() * 1600 - 800]}
      scale={[20, Math.random() * 160 + 10, 20]}
    >
      <boxBufferGeometry
        attach="geometry"
        args={[1, 1, 1]}
        ref={(ref) => ref && ref.translate(0, 0.5, 0)}
      />
      <meshPhongMaterial attach="material" color="#ad0071" flatShading={true} />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry
        attach="geometry"
        args={[1800, 1800]}
        ref={(ref) => ref && ref.translate(0, 0.5, 0)}
      />
      <meshPhongMaterial attach="material" color="#ad0071" flatShading={true} />
    </mesh>
  );
}

export default function World() {
  const [screenSpacePanning, toggle] = useState(true);
  return (
    <>
      <Canvas className="bg-[#ff6161]" camera={{ position: [400, 200, 0] }}>
        <Controls screenSpacePanning={screenSpacePanning} />
        <fog attach="fog" args={["#ff6161", 0.002, 1000]} />
        <directionalLight position={[1, 1, 1]} color="#ad0071" />
        <directionalLight position={[-1, -1, -1]} color="#ffd738" />
        <ambientLight color="#444444" />
        {world}
        <Plane />
      </Canvas>
    </>
  );
}
