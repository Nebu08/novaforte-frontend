"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";

function Model({ src }: { src: string }) {
  const { scene } = useGLTF(src);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function ModelCanvas({ src }: { src: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, -3, -3]} intensity={0.4} color="#c5a059" />
      <Environment preset="studio" />
      <Suspense fallback={null}>
        <Model src={src} />
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
