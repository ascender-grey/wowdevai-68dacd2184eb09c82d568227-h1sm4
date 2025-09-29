"use client";

import { motion } from 'framer-motion';
import { Zap, Headphones, Sparkles, Users, Shield, Palette } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant search and streaming with optimized performance',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Headphones,
    title: 'Premium Audio',
    description: '3D spatial audio and high-quality streaming',
    gradient: 'from-accent-pink to-accent-coral',
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Smart playlists powered by machine learning',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Users,
    title: 'Social Features',
    description: 'Share playlists and discover music together',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your listening data stays secure and private',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Stunning 3D visuals and smooth animations',
    gradient: 'from-indigo-400 to-purple-500',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-6">
            Why Choose Sonora?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the future of music streaming with cutting-edge features
            designed for music lovers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl bg-primary-800/50 backdrop-blur-sm border border-primary-700 hover:border-accent-pink/50 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-white/70">
                  {feature.description}
                </p>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${feature.gradient} blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}