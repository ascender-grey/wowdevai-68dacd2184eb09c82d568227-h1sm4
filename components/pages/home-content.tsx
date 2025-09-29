"use client";

import { motion } from 'framer-motion';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePlayerStore } from '@/store/player-store';
import { APIService } from '@/services/api-service';
import { useEffect, useState } from 'react';

export function HomeContent() {
  const { setCurrentTrack, setQueue } = usePlayerStore();
  const [trendingTracks, setTrendingTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrendingMusic = async () => {
      try {
        const tracks = await APIService.getFreeMusic();
        setTrendingTracks(tracks);
      } catch (error) {
        console.error('Error loading trending music:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrendingMusic();
  }, []);

  const playTrack = (track: any) => {
    setCurrentTrack(track);
    setQueue(trendingTracks);
  };

  return (
    <div className="h-full overflow-y-auto p-6 pb-32">
      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Good evening, Demo User
        </h1>
        <p className="text-white/70">
          Ready to discover your new favorite song?
        </p>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Recently Played', icon: Play, gradient: 'from-purple-500 to-pink-500' },
            { label: 'Liked Songs', icon: Heart, gradient: 'from-red-500 to-pink-500' },
            { label: 'Discover Weekly', icon: MoreHorizontal, gradient: 'from-green-500 to-teal-500' },
          ].map((item, index) => (
            <Button
              key={item.label}
              variant="ghost"
              className="h-16 justify-start bg-primary-800/30 hover:bg-primary-700/50 border border-primary-700"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} mr-4`}>
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">{item.label}</span>
            </Button>
          ))}
        </div>
      </motion.section>

      {/* Trending Now */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Trending Now</h2>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-primary-800/30 rounded-xl p-4 animate-pulse">
                <div className="bg-primary-700 h-48 rounded-lg mb-4"></div>
                <div className="bg-primary-700 h-4 rounded mb-2"></div>
                <div className="bg-primary-700 h-3 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-primary-800/30 rounded-xl p-4 hover:bg-primary-800/50 transition-all duration-300 cursor-pointer"
                onClick={() => playTrack(track)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={track.thumbnail}
                    alt={track.title}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="accent"
                      size="icon"
                      className="w-12 h-12 transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    >
                      <Play className="h-5 w-5 ml-0.5" />
                    </Button>
                  </div>
                </div>
                
                <h3 className="font-semibold text-white mb-1 truncate">
                  {track.title}
                </h3>
                <p className="text-sm text-white/70 truncate">
                  {track.artist}
                </p>

                {/* Action buttons */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" size="icon" className="w-8 h-8 bg-black/50 hover:bg-black/70">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.section>

      {/* Made for You */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Made for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Daily Mix 1', subtitle: 'Rock classics and new discoveries', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300' },
            { title: 'Chill Vibes', subtitle: 'Relaxing music for focus', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300' },
          ].map((playlist, index) => (
            <div
              key={playlist.title}
              className="group relative bg-primary-800/30 rounded-xl p-6 hover:bg-primary-800/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1">
                    {playlist.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {playlist.subtitle}
                  </p>
                </div>
                <Button
                  variant="accent"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
                >
                  <Play className="h-4 w-4 ml-0.5" />
                </Button>
              </div>

              {/* Background decoration */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-accent-gradient opacity-10 rounded-full blur-xl"></div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}