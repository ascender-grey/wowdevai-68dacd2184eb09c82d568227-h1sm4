"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { FloatingAlbum } from './floating-album';

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Float
          speed={1.4}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <FloatingAlbum position={[0, 0, 0]} isPlaying={true} />
        </Float>
        
        <Float
          speed={1.8}
          rotationIntensity={1.5}
          floatIntensity={1.5}
        >
          <FloatingAlbum position={[-4, 2, -2]} />
        </Float>
        
        <Float
          speed={1.2}
          rotationIntensity={0.8}
          floatIntensity={1.8}
        >
          <FloatingAlbum position={[4, -1, -1]} />
        </Float>

        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}