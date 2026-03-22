"use client";

import { useThree, Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls, useTexture } from "@react-three/drei";
import { Suspense, useRef, useMemo, useLayoutEffect } from "react";
import * as THREE from "three";

// Design Tokens for 3D Elements — stay in sync with globals.css stone palette
const STONE_COLORS = {
  rajasthanBlack: "#2A2926",
  khardaRed: "#8B4513",        // SaddleBrown-ish for Kharda Red
  tigerSkin: "#FDC421",
} as const;

const TEXTURES = {
  rajasthanBlack: "/assets/rajasthan-black.png",
  khardaRed: "/assets/rosy-pink.png", // Using rosy pink as an alternative for red if exact red is missing
  tigerSkin: "/assets/tiger-skin.png",
} as const;

type SlabProps = {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  texturePath: string;
  scale: number;
};

function Slab({ position, rotation, color, texturePath, scale }: SlabProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(texturePath);

  // Ensure texture repeats nicely if needed, though slabs are fixed size
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  }, [texture]);

  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 0.15]} />
        <meshStandardMaterial
          map={texture}
          color={color} // Tint the texture with the brand color
          roughness={0.05} // More polished for a premium look
          metalness={0.2}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const { size } = useThree();
  const isMobile = size.width < 768;

  const slabData = useMemo(() => {
    if (isMobile) {
      return [
        {
          id: "black",
          position: [-1.8, 1.8, -1] as [number, number, number],
          rotation: [0.3, 0.5, -0.2] as [number, number, number],
          color: "#ffffff",
          texturePath: TEXTURES.rajasthanBlack,
          scale: 0.7,
        },
        {
          id: "red",
          position: [1.8, -1.8, -1.5] as [number, number, number],
          rotation: [-0.2, -0.4, 0.3] as [number, number, number],
          color: STONE_COLORS.khardaRed,
          texturePath: TEXTURES.khardaRed,
          scale: 0.6,
        },
        {
          id: "tiger",
          position: [0.8, 2.5, -3] as [number, number, number],
          rotation: [0.2, 0.2, 0.1] as [number, number, number],
          color: "#ffffff",
          texturePath: TEXTURES.tigerSkin,
          scale: 0.5,
        }
      ];
    }
    return [
      {
        id: "black",
        position: [-2.2, 0.5, 0] as [number, number, number],
        rotation: [0.2, 0.4, -0.1] as [number, number, number],
        color: "#ffffff",
        texturePath: TEXTURES.rajasthanBlack,
        scale: 1.2,
      },
      {
        id: "red",
        position: [2, -0.5, -1] as [number, number, number],
        rotation: [-0.1, -0.3, 0.2] as [number, number, number],
        color: STONE_COLORS.khardaRed,
        texturePath: TEXTURES.khardaRed,
        scale: 1,
      },
      {
        id: "tiger",
        position: [0.3, 1.2, -2.5] as [number, number, number],
        rotation: [0.15, 0.1, 0.05] as [number, number, number],
        color: "#ffffff",
        texturePath: TEXTURES.tigerSkin,
        scale: 0.75,
      }
    ];
  }, [isMobile]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} castShadow />
      <directionalLight position={[-5, 0, -5]} intensity={0.6} color="#C5A059" />
      <spotLight position={[0, 10, 10]} angle={0.3} penumbra={1} intensity={0.8} castShadow />

      <Suspense fallback={null}>
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {slabData.map((slab) => (
            <Slab
              key={slab.id}
              position={slab.position}
              rotation={slab.rotation}
              color={slab.color}
              texturePath={slab.texturePath}
              scale={slab.scale}
            />
          ))}
        </PresentationControls>

        <Environment preset="sunset" />
      </Suspense>

      <ContactShadows position={[0, -4.5, 0]} opacity={isMobile ? 0.3 : 0.6} scale={30} blur={2.5} far={4.5} color="#1C1A17" />
    </>
  );
}

export default function AntigravitySlabs() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full cursor-grab active:cursor-grabbing">
      <Canvas 
        shadows={{ type: THREE.PCFShadowMap }}
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          preserveDrawingBuffer: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#000000'), 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
