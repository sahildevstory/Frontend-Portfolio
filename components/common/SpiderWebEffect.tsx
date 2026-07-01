// components/common/SpiderWebEffect.tsx
"use client";

import { useEffect, useState, useRef } from "react";

interface WebConnection {
  id: number;
  points: { x: number; y: number }[];
  life: number;
  maxLife: number;
}

export default function SpiderWebEffect() {
  const [connections, setConnections] = useState<WebConnection[]>([]);
  const [clickHistory, setClickHistory] = useState<{ x: number; y: number }[]>([]);
  const connectionId = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Add click to history
      setClickHistory(prev => [...prev, { x: clientX, y: clientY }].slice(-5));
      
      // If we have enough points, create web
      if (clickHistory.length >= 2) {
        const lastPoints = [...clickHistory, { x: clientX, y: clientY }].slice(-3);
        
        const newConnection: WebConnection = {
          id: connectionId.current++,
          points: lastPoints,
          life: 1,
          maxLife: 2,
        };
        
        setConnections(prev => [...prev, newConnection]);
        
        setTimeout(() => {
          setConnections(prev => prev.filter(c => c.id !== newConnection.id));
        }, 2000);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [clickHistory]);

  useEffect(() => {
    const animate = () => {
      setConnections(prev =>
        prev
          .map(conn => ({
            ...conn,
            life: conn.life - 0.015,
          }))
          .filter(conn => conn.life > 0)
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
    <svg
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    >
      {connections.map(conn => {
        const opacity = conn.life;
        
        return (
          <g key={conn.id}>
            {/* Main web lines */}
            {conn.points.map((point, i) => {
              if (i === 0) return null;
              const prevPoint = conn.points[i - 1];
              
              return (
                <line
                  key={i}
                  x1={prevPoint.x}
                  y1={prevPoint.y}
                  x2={point.x}
                  y2={point.y}
                  stroke={`rgba(255, 255, 255, ${opacity * 0.8})`}
                  strokeWidth={2 + opacity * 2}
                  strokeLinecap="round"
                  opacity={opacity}
                  filter="url(#webGlow)"
                />
              );
            })}
            
            {/* Organic web strands (spider web) */}
            {conn.points.map((point, i) => {
              if (i === 0) return null;
              const prevPoint = conn.points[i - 1];
              
              return Array.from({ length: 4 }).map((_, j) => {
                const progress = (j + 1) / 5;
                const midX = prevPoint.x + (point.x - prevPoint.x) * progress;
                const midY = prevPoint.y + (point.y - prevPoint.y) * progress;
                
                const angle = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x);
                const offsetAngle = angle + Math.PI / 2 + (Math.random() - 0.5) * 0.5;
                const offset = 15 + Math.random() * 25;
                
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={midX}
                    y1={midY}
                    x2={midX + Math.cos(offsetAngle) * offset}
                    y2={midY + Math.sin(offsetAngle) * offset}
                    stroke={`rgba(200, 200, 255, ${opacity * 0.2})`}
                    strokeWidth={0.5}
                    opacity={opacity * 0.4}
                  />
                );
              });
            })}
          </g>
        );
      })}
      
      <defs>
        <filter id="webGlow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}