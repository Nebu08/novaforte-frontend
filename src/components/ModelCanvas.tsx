"use client";

import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

function GLTFModel({ src }: { src: string }) {
  const { scene } = useGLTF(src);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

function STLModel({ src }: { src: string }) {
  const geometry = useLoader(STLLoader, src);
  return (
    <Center>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#9c2535"
          roughness={0.25}
          metalness={0.3}
        />
      </mesh>
    </Center>
  );
}

function ModelSelector({ src }: { src: string }) {
  const isStl = src.toLowerCase().endsWith(".stl");
  return isStl ? <STLModel src={src} /> : <GLTFModel src={src} />;
}

export default function ModelCanvas({ src }: { src: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <directionalLight position={[-3, -3, -3]} intensity={0.5} color="#c5a059" />
      <Environment preset="studio" />
      <Suspense fallback={null}>
        <ModelSelector src={src} />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.5}
        minDistance={1}
        maxDistance={8}
      />
    </Canvas>
  );
}
