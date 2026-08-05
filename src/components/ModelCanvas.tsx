"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center, Resize } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface ModelCanvasProps {
  src: string;
  initialRotation?: [number, number, number];
}

function GLTFModel({ src, rotation }: { src: string; rotation: [number, number, number] }) {
  const { scene } = useGLTF(src);
  return (
    <Resize scale={1.8}>
      <Center>
        <primitive object={scene} rotation={rotation} />
      </Center>
    </Resize>
  );
}

function STLModel({ src, rotation }: { src: string; rotation: [number, number, number] }) {
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
        <mesh geometry={geometry} rotation={rotation} castShadow receiveShadow>
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

function ModelSelector({
  src,
  extraRotation,
  configRotation = [0, 0, 0],
}: {
  src: string;
  extraRotation: [number, number, number];
  configRotation?: [number, number, number];
}) {
  const isStl = src.toLowerCase().endsWith(".stl");

  const combinedRotation: [number, number, number] = [
    configRotation[0] + extraRotation[0],
    configRotation[1] + extraRotation[1],
    configRotation[2] + extraRotation[2],
  ];

  return isStl ? (
    <STLModel src={src} rotation={combinedRotation} />
  ) : (
    <GLTFModel src={src} rotation={combinedRotation} />
  );
}

export default function ModelCanvas({ src, initialRotation = [0, 0, 0] }: ModelCanvasProps) {
  const controlsRef = useRef<any>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [interactiveRotation, setInteractiveRotation] = useState<[number, number, number]>([0, 0, 0]);

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
    setInteractiveRotation([0, 0, 0]);
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handleFlipAxis = () => {
    // Rotates the model 90 degrees around X-axis (useful for flipping Z-up CAD models)
    setInteractiveRotation((prev) => [
      (prev[0] + Math.PI / 2) % (Math.PI * 2),
      prev[1],
      prev[2],
    ]);
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
          <ModelSelector
            src={src}
            configRotation={initialRotation}
            extraRotation={interactiveRotation}
          />
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

      {/* Single Unified Centered Floating Toolbar Overlay */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-2 bg-black/85 backdrop-blur-md p-1.5 rounded-2xl border border-gray-800/80 shadow-2xl max-w-[95vw] pointer-events-auto">
        <div className="hidden md:flex items-center px-2 border-r border-gray-800 text-[11px] text-gray-400 font-mono select-none">
          🖱️ Arrastra
        </div>

        <button
          onClick={handleZoomIn}
          title="Acercar (Zoom +)"
          className="h-8 w-8 rounded-xl bg-gray-800/80 hover:bg-primary-600 text-gray-200 hover:text-white flex items-center justify-center transition-all text-base font-bold select-none active:scale-95"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          title="Alejar (Zoom -)"
          className="h-8 w-8 rounded-xl bg-gray-800/80 hover:bg-primary-600 text-gray-200 hover:text-white flex items-center justify-center transition-all text-base font-bold select-none active:scale-95"
        >
          −
        </button>
        <button
          onClick={handleFlipAxis}
          title="Girar orientación de la pieza 90°"
          className="h-8 w-8 rounded-xl bg-gray-800/80 hover:bg-primary-600 text-gray-200 hover:text-white flex items-center justify-center transition-all text-xs font-mono font-bold select-none active:scale-95"
        >
          📐
        </button>
        <button
          onClick={handleReset}
          title="Centrar / Restablecer vista inicial"
          className="h-8 w-8 rounded-xl bg-gray-800/80 hover:bg-primary-600 text-gray-200 hover:text-white flex items-center justify-center transition-all text-xs font-mono font-bold select-none active:scale-95"
        >
          🎯
        </button>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          title={autoRotate ? "Pausar rotación" : "Iniciar rotación"}
          className={`h-8 w-8 rounded-xl flex items-center justify-center transition-all text-xs select-none active:scale-95 ${
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
