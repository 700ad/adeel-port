import React from "react";
import { Vector3 } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, SpotLight, useDepthBuffer } from "@react-three/drei";
function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const { nodes, materials } = useGLTF("https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf");

  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="#dcb697" position={[3, 3, 2]} />
      <MovingSpot depthBuffer={depthBuffer} color="#fc7001" position={[-3, 3, 3]} />
      <mesh position={[0, -1.03, 0]} castShadow receiveShadow geometry={nodes.dragon.geometry} material={materials["Default OBJ.001"]} dispose={null} />
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
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1);
    light.current.target.updateMatrixWorld();
  });
  return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />;
}

export default function Dragon() {
  return (
    <Canvas className="h-screen absolute" shadows dpr={[1, 2]} camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}>
      <color attach="background" args={["#202020"]} />
      <fog attach="fog" args={["#202020", 5, 20]} />
      <ambientLight intensity={0.015} />
      <Scene />
    </Canvas>
  );
}
