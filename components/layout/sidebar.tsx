"use client";

import { motion } from 'framer-motion';
import { Home, Search, Heart, Clock, Music, Plus, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUIStore } from '@/store/ui-store';
import { cn } from '@/lib/utils';

const navigationItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Heart, label: 'Favorites', href: '/favorites' },
  { icon: Clock, label: 'History', href: '/history' },
];

const libraryItems = [
  { icon: Music, label: 'My Playlists' },
  { icon: Plus, label: 'Create Playlist' },
];

export function Sidebar() {
  const { sidebarOpen, currentPage, setCurrentPage } = useUIStore();

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => useUIStore.getState().toggleSidebar()}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : -300,
        }}
        className={cn(
          "fixed left-0 top-16 bottom-20 w-72 bg-primary-900/95 backdrop-blur-xl border-r border-primary-700 z-50 lg:relative lg:top-0 lg:bottom-0 lg:translate-x-0",
          !sidebarOpen && "lg:w-20"
        )}
      >
        <div className="flex flex-col h-full p-4">
          {/* Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant={currentPage === item.href ? "accent" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 text-left",
                  !sidebarOpen && "lg:justify-center lg:px-2"
                )}
                onClick={() => setCurrentPage(item.href)}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {(sidebarOpen || window.innerWidth < 1024) && (
                  <span>{item.label}</span>
                )}
              </Button>
            ))}
          </nav>

          {/* Library */}
          <div className="mt-8">
            {(sidebarOpen || window.innerWidth < 1024) && (
              <h3 className="text-sm font-semibold text-gray-400 mb-4 px-3">
                Your Library
              </h3>
            )}
            <div className="space-y-2">
              {libraryItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 text-left",
                    !sidebarOpen && "lg:justify-center lg:px-2"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {(sidebarOpen || window.innerWidth < 1024) && (
                    <span>{item.label}</span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* User section at bottom */}
          <div className="mt-auto pt-4 border-t border-primary-700">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3",
                !sidebarOpen && "lg:justify-center lg:px-2"
              )}
            >
              <User className="h-5 w-5 flex-shrink-0" />
              {(sidebarOpen || window.innerWidth < 1024) && (
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Demo User</span>
                  <span className="text-xs text-gray-400">Free Account</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}