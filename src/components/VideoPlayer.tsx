import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  AlertCircle,
  Loader2,
  Film,
} from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
  title: string;
  aspectRatio?: '16:9' | '2.39:1' | '9:16';
  autoPlay?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title,
  aspectRatio = '16:9',
  autoPlay = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // AutoPlay support on mount
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {
          // Browser may require user gesture or muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => {
              setIsPlaying(true);
              setHasStarted(true);
            }).catch(() => {});
          }
        });
    }
  }, [autoPlay]);

  // Time formatting in SMPTE-like timecode (MM:SS:FF)
  const formatTimecode = (seconds: number) => {
    if (isNaN(seconds)) return '00:00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const frames = Math.floor((seconds % 1) * 24);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(mins)}:${pad(secs)}:${pad(frames)}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      setIsLoading(true);
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
          setHasStarted(true);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsLoading(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
      setHasStarted(true);
    }).catch(() => {});
  };

  // Auto hide controls when playing
  useEffect(() => {
    let timeout: any;
    if (isPlaying) {
      timeout = setTimeout(() => setShowControls(false), 3000);
    } else {
      setShowControls(true);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, currentTime]);

  const aspectClass =
    aspectRatio === '2.39:1'
      ? 'aspect-[2.39/1]'
      : aspectRatio === '9:16'
      ? 'aspect-[9/16] max-w-sm mx-auto'
      : 'aspect-cinematic';

  return (
    <div
      ref={containerRef}
      onMouseMove={() => setShowControls(true)}
      className={`relative ${aspectClass} w-full overflow-hidden rounded-xl bg-cinematic-dark border border-cinematic-border group shadow-2xl`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        playsInline
        preload="metadata"
        onTimeUpdate={() => {
          if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            setDuration(videoRef.current.duration);
          }
        }}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className="w-full h-full object-contain bg-black cursor-pointer"
        onClick={togglePlay}
      />

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none z-20">
          <Loader2 className="w-10 h-10 text-accent animate-spin" />
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cinematic-dark/95 p-6 text-center z-30">
          <AlertCircle className="w-10 h-10 text-red-400 mb-3" />
          <p className="font-mono text-sm text-film-white font-medium mb-1">
            Unable to stream this video preview directly.
          </p>
          <p className="text-xs text-film-gray mb-4">
            The external CDN stream might be restricted by your network or ad blocker.
          </p>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-cinematic-card border border-cinematic-border text-xs font-mono text-accent hover:border-accent"
          >
            Open Source Link Directly
          </a>
        </div>
      )}

      {/* Initial Play Overlay Button */}
      {!hasStarted && !hasError && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[1px] cursor-pointer z-10 transition-colors hover:bg-black/30"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-cinematic-dark flex items-center justify-center shadow-2xl shadow-accent/40 transform hover:scale-110 transition-transform duration-200">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-cinematic-dark translate-x-0.5" />
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-film-white mt-4 drop-shadow">
            PLAY VIDEO
          </span>
        </div>
      )}

      {/* Top Slate Overlay */}
      <div
        className={`absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-xs font-mono text-film-gray transition-opacity duration-300 z-20 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center space-x-2">
          <Film className="w-3.5 h-3.5 text-accent" />
          <span className="text-film-white font-medium truncate max-w-[200px] sm:max-w-md">
            {title}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[11px]">
          <span className="text-accent">{formatTimecode(currentTime)}</span>
          <span className="text-film-muted">/</span>
          <span>{formatTimecode(duration)}</span>
        </div>
      </div>

      {/* Custom Bottom Controls Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col space-y-2 transition-opacity duration-300 z-20 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Scrubber Range Bar */}
        <div className="relative w-full flex items-center group/scrubber cursor-pointer">
          <input
            type="range"
            min={0}
            max={duration || 100}
            step="0.05"
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C8FF00] hover:h-2 transition-all"
            aria-label="Video seek scrubber"
          />
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between text-film-white text-xs font-mono pt-1">
          <div className="flex items-center space-x-3">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded hover:bg-white/10 text-film-white hover:text-accent transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>

            <button
              onClick={handleRestart}
              className="p-1.5 rounded hover:bg-white/10 text-film-gray hover:text-white transition-colors cursor-pointer"
              aria-label="Restart"
              title="Restart"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={toggleMute}
              className="p-1.5 rounded hover:bg-white/10 text-film-gray hover:text-white transition-colors cursor-pointer"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <span className="text-[11px] text-film-gray font-mono hidden sm:inline">
              {formatTimecode(currentTime)} / {formatTimecode(duration)}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-film-gray hidden sm:inline">
              {aspectRatio}
            </span>
            <button
              onClick={handleFullscreen}
              className="p-1.5 rounded hover:bg-white/10 text-film-gray hover:text-accent transition-colors cursor-pointer"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
