"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Music, Users, Zap, Star, ArrowRight, Volume2 } from 'lucide-react';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Unlimited Music",
      description: "Stream millions of songs from YouTube and other sources",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Playlists",
      description: "Create and share playlists with friends worldwide",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Recommendations",
      description: "Smart music discovery powered by advanced algorithms",
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "High Quality Audio",
      description: "Crystal clear sound with adaptive streaming quality",
    },
  ];

  const stats = [
    { label: "Active Users", value: "50M+" },
    { label: "Songs Available", value: "100M+" },
    { label: "Countries", value: "180+" },
    { label: "Daily Streams", value: "1B+" },
  ];

  return (
    <div className="min-h-screen bg-sonora-purple relative overflow-hidden">
      {/* Background Canvas Effect */}
      <div className="absolute inset-0 z-0">
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName="bg-sonora-purple"
          colors={[
            [62, 30, 104],
            [93, 47, 119],
            [228, 90, 146],
          ]}
          dotSize={4}
          reverse={false}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-sonora-purple/90 via-sonora-surface/80 to-sonora-purple/90 z-1" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-sonora-purple to-transparent z-2" />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-sonora-pink to-sonora-coral rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Sonora</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-sonora-pink to-sonora-coral hover:from-sonora-coral hover:to-sonora-pink">
            Get Started
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <GooeyText
              texts={["Stream", "Music", "Share", "Discover"]}
              morphTime={1.2}
              cooldownTime={0.8}
              className="mb-4"
              textClassName="text-6xl md:text-8xl font-bold bg-gradient-to-r from-sonora-pink via-white to-sonora-coral bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            The next generation of music streaming. Powered by AI, built for music lovers.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sonora-pink to-sonora-coral hover:from-sonora-coral hover:to-sonora-pink text-white px-8 py-4 text-lg font-semibold group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Enter Sonora Web
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 hover:bg-white/10 px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 py-24 bg-gradient-to-b from-transparent to-sonora-surface/20"
        id="features"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Why Choose Sonora?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Experience music like never before with our cutting-edge features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-sonora-pink mb-4 group-hover:text-sonora-coral transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Demo Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-white/70">
              Get a preview of the Sonora experience
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Mock Player Interface */}
              <div className="bg-sonora-surface/50 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sonora-pink to-sonora-coral rounded-xl flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Now Playing</h3>
                    <p className="text-white/60">Your favorite track</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-white/10 rounded-full h-2 relative">
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-sonora-pink to-sonora-coral rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                    <span className="text-white/60 text-sm">2:34</span>
                  </div>

                  <div className="flex items-center justify-center space-x-6">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
                      </svg>
                    </Button>
                    <Button size="lg" className="bg-gradient-to-r from-sonora-pink to-sonora-coral hover:from-sonora-coral hover:to-sonora-pink rounded-full w-12 h-12 p-0">
                      <Play className="w-6 h-6" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute top-4 right-4 w-8 h-8 bg-sonora-coral/20 rounded-full"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 360, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-6 h-6 bg-sonora-pink/20 rounded-full"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [360, 0, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Music Experience?
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join millions of music lovers already using Sonora
          </p>

          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sonora-pink to-sonora-coral hover:from-sonora-coral hover:to-sonora-pink text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-sonora-pink/25 group"
              >
                <Music className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Enter Sonora Web - It's Free!
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <p className="text-white/50 text-sm">
              No credit card required • Free forever • Start streaming instantly
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 bg-sonora-surface/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-sonora-pink to-sonora-coral rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Sonora</span>
            </div>

            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
            </div>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-1 text-white/60 text-sm">
                <Star className="w-4 h-4 fill-sonora-coral text-sonora-coral" />
                <Star className="w-4 h-4 fill-sonora-coral text-sonora-coral" />
                <Star className="w-4 h-4 fill-sonora-coral text-sonora-coral" />
                <Star className="w-4 h-4 fill-sonora-coral text-sonora-coral" />
                <Star className="w-4 h-4 fill-sonora-coral text-sonora-coral" />
                <span className="ml-2">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            <p>© 2024 Sonora. Made with ❤️ for music lovers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;