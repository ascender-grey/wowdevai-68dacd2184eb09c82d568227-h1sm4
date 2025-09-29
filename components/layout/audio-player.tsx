"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePlayerStore } from '@/store/player-store';
import { formatDuration } from '@/lib/utils';

export function AudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    volume,
    currentTime,
    isShuffleOn,
    isRepeatOn,
    togglePlay,
    setVolume,
    setCurrentTime,
    toggleShuffle,
    toggleRepeat,
    nextTrack,
    previousTrack,
  } = usePlayerStore();

  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !currentTrack) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * currentTrack.duration;
    
    setCurrentTime(newTime);
  };

  if (!currentTrack) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-primary-900/95 backdrop-blur-xl border-t border-primary-700 z-50"
    >
      {/* Progress bar */}
      <div
        ref={progressRef}
        className="h-1 bg-primary-700 cursor-pointer relative"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-accent-gradient transition-all duration-200"
          style={{
            width: `${(currentTime / currentTrack.duration) * 100}%`,
          }}
        />
      </div>

      <div className="flex items-center justify-between p-4">
        {/* Track info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="relative group">
            <img
              src={currentTrack.thumbnail}
              alt={currentTrack.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
          </div>
          
          <div className="min-w-0 flex-1">
            <h4 className="font-medium text-white truncate">
              {currentTrack.title}
            </h4>
            <p className="text-sm text-gray-400 truncate">
              {currentTrack.artist}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleShuffle}
            className={isShuffleOn ? "text-accent-pink" : ""}
          >
            <Shuffle className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={previousTrack}
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button
            variant="accent"
            size="icon"
            onClick={togglePlay}
            className="w-12 h-12"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTrack}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleRepeat}
            className={isRepeatOn ? "text-accent-pink" : ""}
          >
            <Repeat className="h-4 w-4" />
          </Button>
        </div>

        {/* Volume & Time */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <span className="text-xs text-gray-400 tabular-nums">
            {formatDuration(currentTime)}
          </span>
          
          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-gray-400" />
            <div className="w-20 h-1 bg-primary-700 rounded-full">
              <div
                className="h-full bg-accent-gradient rounded-full transition-all"
                style={{ width: `${volume * 100}%` }}
              />
            </div>
          </div>
          
          <span className="text-xs text-gray-400 tabular-nums">
            {formatDuration(currentTrack.duration)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}