import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const API_KEYS = {
  // Backend/API Placeholders - Replace with actual keys
  YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || 'your-youtube-api-key',
  LASTFM_API_KEY: process.env.NEXT_PUBLIC_LASTFM_API_KEY || 'your-lastfm-api-key',
  GENIUS_API_KEY: process.env.NEXT_PUBLIC_GENIUS_API_KEY || 'your-genius-api-key',
  OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY || 'your-openai-api-key',
}

export const BACKEND_CONFIG = {
  // Backend Service Placeholder Configuration
  DATABASE_URL: process.env.DATABASE_URL || 'your-database-url',
  STORAGE_BUCKET: process.env.STORAGE_BUCKET || 'your-storage-bucket',
  AUTH_SECRET: process.env.AUTH_SECRET || 'your-auth-secret',
}