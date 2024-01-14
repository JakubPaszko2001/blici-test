import React, { useRef } from "react";
import { Suspense } from "react";
import { DirectionalLightHelper, SpotLight } from "three";
import { useHelper } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./models/hoodie2/untitled.gltf");
  const modelScale = [7, 7, 7];

  const directionalLight1Ref = useRef();
  const directionalLight2Ref = useRef();
  const directionalLight3Ref = useRef();
  const directionalLight4Ref = useRef();
  const directionalLight5Ref = useRef();
  const directionalLight6Ref = useRef();

  // Use directional light helpers
  useHelper(directionalLight1Ref, DirectionalLightHelper, 1, "white");
  useHelper(directionalLight2Ref, DirectionalLightHelper, 1, "red");
  useHelper(directionalLight3Ref, DirectionalLightHelper, 1, "green");
  useHelper(directionalLight4Ref, DirectionalLightHelper, 1, "blue");
  useHelper(directionalLight5Ref, DirectionalLightHelper, 1, "white");
  useHelper(directionalLight6Ref, DirectionalLightHelper, 1, "red");

  console.log(gltf);

  return (
    <>
      <directionalLight
        ref={directionalLight1Ref}
        position={[0, 0, -5]}
        intensity={1.5}
      />
      <directionalLight
        ref={directionalLight2Ref}
        position={[0, 0, 5]}
        intensity={1.5}
      />
      {/* <directionalLight
        ref={directionalLight3Ref}
        position={[0, -5, 0]}
        intensity={2}
      /> */}
      <directionalLight
        ref={directionalLight4Ref}
        position={[0, 5, 0]}
        intensity={1.5}
      />
      {/* <directionalLight
        ref={directionalLight5Ref}
        position={[5, 0, 0]}
        intensity={2}
      />
      <directionalLight
        ref={directionalLight6Ref}
        position={[-5, 0, 0]}
        intensity={2}
      /> */}
      <Suspense fallback={null}>
        <primitive
          object={gltf.scene}
          scale={modelScale}
          position={[0, 0, 0]}
        />
      </Suspense>
    </>
  );
};

export default Experience;
