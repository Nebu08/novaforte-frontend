"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center, Resize } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

function GLTFModel({ src }: { src: string }) {
  const { scene } = useGLTF(src);
  return (
    <Resize scale={1.8}>
      <Center>
        <primitive object={scene} />
      </Center>
    </Resize>
  );
}

function STLModel({ src }: { src: string }) {
  const geometry = useLoader(STLLoader, src);

  useMemo(() => {
    if (geometry) {
      geometry.computeBoundingBox();
      geometry.center();
      geometry.computeVertexNormals();
    }
  }, [geometry]);

  return (
    <Resize scale={1.8}>
      <Center>
        <mesh geometry={geometry} castShadow receiveShadow>
          <meshStandardMaterial
            color="#9c2535"
            roughness={0.25}
            metalness={0.35}
            envMapIntensity={1.2}
          />
        </mesh>
      </Center>
    </Resize>
  );
}

function ModelSelector({ src }: { src: string }) {
  const isStl = src.toLowerCase().endsWith(".stl");
  return isStl ? <STLModel src={src} /> : <GLTFModel src={src} />;
}

export default function ModelCanvas({ src }: { src: string }) {
  const controlsRef = useRef<any>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(1.25);
      controlsRef.current.update();
    }
  };

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(1.25);
      controlsRef.current.update();
    }
  };

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-8, -8, -8]} intensity={0.6} color="#c5a059" />
        <directionalLight position={[0, -10, 5]} intensity={0.4} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <ModelSelector src={src} />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          autoRotate={autoRotate}
          autoRotateSpeed={1.8}
          minDistance={0.2}
          maxDistance={25}
        />
      </Canvas>

      {/* Floating Toolbar Controls Overlay */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1.5 rounded-xl border border-gray-800 shadow-xl">
        <button
          onClick={handleZoomIn}
          title="Acercar (Zoom +)"
          className="h-8 w-8 rounded-lg bg-gray-800/80 hover:bg-primary-600 text-gray-200 hover:text-white flex items-center justify-center transition-colors text-base font-bold select-none active:scale-95"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          title="Alejar (Zoom -)"
          className="h-8 w-8 rounded-lg bg-gray-800/80 hover:bg-primary-600 text-gray-200 hover:text-white flex items-center justify-center transition-colors text-base font-bold select-none active:scale-95"
        >
          −
        </button>
        <button
          onClick={handleReset}
          title="Centrar / Restablecer vista"
          className="h-8 w-8 rounded-lg bg-gray-800/80 hover:bg-primary-600 text-gray-200 hover:text-white flex items-center justify-center transition-colors text-xs font-mono font-bold select-none active:scale-95"
        >
          🎯
        </button>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          title={autoRotate ? "Pausar rotación" : "Iniciar rotación"}
          className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors text-xs select-none active:scale-95 ${
            autoRotate
              ? "bg-primary-600 text-white"
              : "bg-gray-800/80 hover:bg-gray-700 text-gray-400"
          }`}
        >
          🔄
        </button>
      </div>
    </div>
  );
}
