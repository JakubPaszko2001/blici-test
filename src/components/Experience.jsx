import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  SpotLight,
  ScrollControls,
} from "@react-three/drei";
import { Suspense } from "react";
import React from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./models/koszulka/untitled.gltf");
  const modelScale = [7, 7, 7];

  console.log(gltf);

  return (
    <PresentationControls
      speed={1.5}
      global
      polar={[-0.1, Math.PI / 4]}
      rotation={[Math.PI / 8, Math.PI / 4, 0]}
    >
      {/* <OrbitControls /> */}
      <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
        <Suspense fallback={null}>
          <primitive
            object={gltf.scene}
            scale={modelScale}
            position={[0, 0, 0]}
          />
        </Suspense>
      </Stage>
      <Stage />
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh> */}
    </PresentationControls>
  );
};

export default Experience;
