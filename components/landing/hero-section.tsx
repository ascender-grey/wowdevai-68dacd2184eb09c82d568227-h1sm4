"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { HeroScene } from '@/components/3d/hero-scene';

interface HeroSectionProps {
  onEnterApp: () => void;
}

export function HeroSection({ onEnterApp }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Canvas Effect Overlay */}
      <div className="absolute inset-0 opacity-30">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-transparent"
          colors={[[227, 90, 146], [255, 172, 172]]}
          dotSize={4}
          showGradient={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <GooeyText
              texts={["Sonora", "Music", "Streaming", "Experience"]}
              morphTime={1.5}
              cooldownTime={2}
              className="mb-4"
              textClassName="text-6xl md:text-8xl font-bold"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experience music like never before with AI-powered recommendations, 
            3D visualizations, and immersive audio streaming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="accent"
              size="lg"
              onClick={onEnterApp}
              className="text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
            >
              Enter Sonora Web
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 text-sm text-white/60"
          >
            <p>✨ Free forever • 🎵 Unlimited streaming • 🤖 AI-powered</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-accent-gradient opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}