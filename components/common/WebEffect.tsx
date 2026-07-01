// components/common/WebEffect.tsx
"use client";

import { useEffect, useState, useRef } from "react";

interface WebLine {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  life: number;
  maxLife: number;
  width: number;
}

interface WebPoint {
  x: number;
  y: number;
}

export default function WebEffect() {
  const [webLines, setWebLines] = useState<WebLine[]>([]);
  const [lastClick, setLastClick] = useState<WebPoint | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const lineId = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);

  // Handle clicks to create web connections
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const currentPoint = { x: clientX, y: clientY };

      // If there's a last click, create a web line connecting them
      if (lastClick) {
        const distance = Math.sqrt(
          Math.pow(currentPoint.x - lastClick.x, 2) + 
          Math.pow(currentPoint.y - lastClick.y, 2)
        );

        // Only create web if points are far enough apart
        if (distance > 50) {
          const newLine: WebLine = {
            id: lineId.current++,
            startX: lastClick.x,
            startY: lastClick.y,
            endX: currentPoint.x,
            endY: currentPoint.y,
            life: 1,
            maxLife: 1.5, // Lives for 1.5 seconds
            width: 2 + Math.random() * 2,
          };

          setWebLines(prev => [...prev, newLine]);
          setIsDrawing(true);

          // Clean up after animation
          setTimeout(() => {
            setWebLines(prev => prev.filter(line => line.id !== newLine.id));
            setIsDrawing(false);
          }, 1500);
        }
      }

      // Update last click
      setLastClick(currentPoint);

      // Reset last click after a moment
      setTimeout(() => {
        setLastClick(null);
      }, 2000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [lastClick]);

  // Animation loop for web lines
  useEffect(() => {
    const animate = () => {
      setWebLines(prev =>
        prev
          .map(line => ({
            ...line,
            life: line.life - 0.02,
          }))
          .filter(line => line.life > 0)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Web lines (SVG) */}
      <svg
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ width: '100vw', height: '100vh' }}
      >
        {webLines.map(line => {
          const opacity = line.life;
          const width = line.width * (0.5 + line.life * 0.5);

          return (
            <g key={line.id}>
              {/* Main web line */}
              <line
                x1={line.startX}
                y1={line.startY}
                x2={line.endX}
                y2={line.endY}
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth={width}
                strokeLinecap="round"
                opacity={opacity}
                filter="url(#glow)"
              />

              {/* Secondary web strands (spider web effect) */}
              {Array.from({ length: 5 }).map((_, i) => {
                const progress = (i + 1) / 6;
                const midX = line.startX + (line.endX - line.startX) * progress;
                const midY = line.startY + (line.endY - line.startY) * progress;
                
                // Perpendicular offset for web strands
                const angle = Math.atan2(line.endY - line.startY, line.endX - line.startX);
                const perpAngle = angle + Math.PI / 2;
                const offset = (10 + Math.random() * 20) * (1 - line.life * 0.5);
                
                const strandX = midX + Math.cos(perpAngle) * offset;
                const strandY = midY + Math.sin(perpAngle) * offset;

                return (
                  <line
                    key={i}
                    x1={midX}
                    y1={midY}
                    x2={strandX}
                    y2={strandY}
                    stroke={`rgba(255, 255, 255, ${opacity * 0.3})`}
                    strokeWidth={1}
                    strokeLinecap="round"
                    opacity={opacity * 0.5}
                  />
                );
              })}
            </g>
          );
        })}

        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Click points - show where you clicked */}
      {lastClick && (
        <div
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: lastClick.x - 10,
            top: lastClick.y - 10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.6)',
            animation: 'pulse 0.5s ease-out forwards',
          }}
        />
      )}

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}