import React, { useState, useRef, useCallback } from 'react';
import { Sliders } from 'lucide-react';

interface ColorGradeCompareProps {
  beforeUrl: string;
  afterUrl: string;
  aspectRatio?: '16:9' | '2.39:1' | '9:16';
}

export const ColorGradeCompare: React.FC<ColorGradeCompareProps> = ({
  beforeUrl,
  afterUrl,
  aspectRatio = '16:9',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const aspectClass =
    aspectRatio === '2.39:1'
      ? 'aspect-[2.39/1]'
      : aspectRatio === '9:16'
      ? 'aspect-[9/16] max-w-sm mx-auto'
      : 'aspect-cinematic';

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs font-mono text-film-gray px-1">
        <span className="flex items-center space-x-1.5 text-accent font-semibold">
          <Sliders className="w-3.5 h-3.5" />
          <span>INTERACTIVE COLOR GRADE BREAKDOWN</span>
        </span>
        <span className="text-film-muted text-[11px] hidden sm:inline">
          Drag slider to inspect ACES Log vs. Kodak 2383 Film Print
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className={`relative ${aspectClass} w-full overflow-hidden rounded-lg border border-cinematic-border select-none cursor-ew-resize bg-cinematic-dark`}
      >
        {/* After Image (Graded) - Full background */}
        <img
          src={afterUrl}
          alt="After Color Grade"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Before Image (Log/Raw) - Clipped by width percentage */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeUrl}
            alt="Before Color Grade (Log)"
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%',
            }}
          />
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-accent pointer-events-none z-20 shadow-[0_0_10px_rgba(200,255,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cinematic-dark border-2 border-accent flex items-center justify-center text-accent shadow-xl">
            <div className="flex space-x-0.5">
              <span className="w-0.5 h-3 bg-accent rounded-full" />
              <span className="w-0.5 h-3 bg-accent rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 pointer-events-none z-10">
          <span className="px-2 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-film-white font-semibold uppercase tracking-wider">
            RAW LOG (BEFORE)
          </span>
        </div>

        <div className="absolute top-3 right-3 pointer-events-none z-10">
          <span className="px-2 py-1 rounded bg-accent/90 backdrop-blur-md text-[10px] font-mono text-cinematic-dark font-bold uppercase tracking-wider">
            ACES GRADED (AFTER)
          </span>
        </div>
      </div>
    </div>
  );
};
