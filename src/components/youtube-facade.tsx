"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title?: string;
  aspectRatio?: "video" | "shorts";
  autoplayOnClick?: boolean;
  className?: string;
}

/**
 * YouTubeFacade Component
 * 
 * Shows a static thumbnail with a play button instead of loading the full YouTube iframe.
 * The iframe only loads when the user clicks, saving ~1-2MB of JavaScript on initial load.
 * 
 * This significantly improves LCP (Largest Contentful Paint) and overall page performance.
 */
export default function YouTubeFacade({
  videoId,
  title = "Play video",
  aspectRatio = "video",
  autoplayOnClick = true,
  className = "",
}: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // YouTube thumbnail URLs - maxresdefault is highest quality
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  // Build iframe src with autoplay if clicked
  const iframeSrc = autoplayOnClick
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
    : `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  const handleClick = () => {
    setIsLoaded(true);
  };

  const aspectClass = aspectRatio === "shorts" ? "aspect-[9/16]" : "aspect-video";

  if (isLoaded) {
    return (
      <div className={`relative ${aspectClass} ${className}`}>
        <iframe
          src={iframeSrc}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative ${aspectClass} ${className} group cursor-pointer bg-black`}
      aria-label={title}
    >
      {/* Thumbnail with fallback */}
      <picture>
        <source srcSet={thumbnailUrl} type="image/jpeg" />
        <img
          src={thumbnailFallback}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </picture>

      {/* Dark overlay for better play button visibility */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#22c55e] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] transition-all duration-300">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
        </div>
      </div>

      {/* Subtle pulse animation on the play button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#22c55e]/30 rounded-full animate-ping" />
      </div>
    </button>
  );
}
