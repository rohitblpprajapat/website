"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Design Tokens for 3D Elements — stay in sync with globals.css stone palette
const STONE_COLORS = {
  rajasthanBlack: "#2A2926",   // deep warm charcoal (NOT pure black — more natural)
  khardaRed: "#6B3728",        // slightly richer for depth against cream
  tigerSkin: "#C5A059",        // Tiger Skin amber for a third slab on larger screens
} as const;

type SlabProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale: number;
};

function Slab({ position, rotation, color, scale }: SlabProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function AntigravitySlabs() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} castShadow />
        <directionalLight position={[-5, 0, -5]} intensity={0.6} color="#C5A059" />
        <spotLight position={[0, 10, 10]} angle={0.3} penumbra={1} intensity={0.8} castShadow />

        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {/* Rajasthan Black Granite Slab */}
          <Slab
            position={[-2.2, 0.5, 0]}
            rotation={[0.2, 0.4, -0.1]}
            color={STONE_COLORS.rajasthanBlack}
            scale={1.2}
          />

          {/* Kharda Red Granite Slab */}
          <Slab
            position={[2, -0.5, -1]}
            rotation={[-0.1, -0.3, 0.2]}
            color={STONE_COLORS.khardaRed}
            scale={1}
          />

          {/* Tiger Skin — accent warm slab */}
          <Slab
            position={[0.3, 1.2, -2.5]}
            rotation={[0.15, 0.1, 0.05]}
            color={STONE_COLORS.tigerSkin}
            scale={0.75}
          />
        </PresentationControls>

        <Environment preset="city" />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.6} scale={25} blur={2.5} far={4.5} />
      </Canvas>
    </div>
  );
}
