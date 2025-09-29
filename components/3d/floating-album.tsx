"use client";

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingAlbumProps {
  position?: [number, number, number];
  albumArt?: string;
  isPlaying?: boolean;
}

export function FloatingAlbum({ position = [0, 0, 0], albumArt, isPlaying = false }: FloatingAlbumProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += isPlaying ? 0.01 : 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[1, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <MeshDistortMaterial
          color="#E45A92"
          attach="material"
          distort={isPlaying ? 0.3 : 0.1}
          speed={2}
          roughness={0}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[1.2, 16, 16]}>
        <meshBasicMaterial
          color="#FFACAC"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}