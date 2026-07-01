// components/common/DeadStarEffect.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
  rotation: number;
}

export default function DeadStarEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const particleId = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);
  const lastSpawnTime = useRef(0);

  // MORE COLORS for variety
  const colors = [
    '#FFD700', // Gold
    '#FFA500', // Orange
    '#FF6B00', // Orange-Red
    '#FF4500', // Red-Orange
    '#FF0000', // Red
    '#FF1493', // Deep Pink
    '#FF6BFF', // Pink
    '#00D4FF', // Cyan
    '#00FF7F', // Spring Green
    '#7B68EE', // Purple
    '#FFD700', // Gold
    '#FFFFFF', // White
    '#FF4081', // Pink
    '#00E5FF', // Light Blue
    '#76FF03', // Light Green
    '#FFEA00', // Yellow
    '#D500F9', // Purple
    '#FF6D00', // Orange
  ];

  // Check if inside PageLayout
//   const isInsidePageLayout = (element: HTMLElement | null): boolean => {
//     if (!element) return false;
//     let current = element;
//     while (current) {
//       if (current.id === 'page-layout' || current.classList?.contains('page-layout')) {
//         return true;
//       }
//       current = current.parentElement;
//     }
//     return false;
//   };
// components/common/DeadStarEffect.tsx
const isInsidePageLayout = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  let current = element;
  while (current) {
    if (current.dataset.pageLayout === 'true') {
      return true;
    }
    current = current.parentElement;
  }
  return false;
};

  const createExplosion = (x: number, y: number, count: number = 40) => {
    const newParticles: Particle[] = [];
    const colorCount = colors.length;
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 12;
      const size = 2 + Math.random() * 10;
      
      newParticles.push({
        id: particleId.current++,
        x: x + (Math.random() - 0.5) * 15,
        y: y + (Math.random() - 0.5) * 15,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 0.8 + Math.random() * 0.8,
        size: size,
        color: colors[Math.floor(Math.random() * colorCount)],
        rotation: Math.random() * 360,
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
    
    // Cleanup after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id >= particleId.current - count));
    }, 2000);
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (isInsidePageLayout(e.target as HTMLElement)) return;
      
      setIsDragging(true);
      createExplosion(e.clientX, e.clientY, 60);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (isDragging) {
        const now = Date.now();
        if (now - lastSpawnTime.current > 40) {
          lastSpawnTime.current = now;
          createExplosion(e.clientX, e.clientY, 15);
        }
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (isInsidePageLayout(e.target as HTMLElement)) {
        setIsDragging(false);
        return;
      }
      
      setIsDragging(false);
      createExplosion(e.clientX, e.clientY, 80);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.06,
            vx: p.vx * 0.99,
            life: p.life - 0.015,
            size: p.size * 0.998,
            rotation: p.rotation + 2,
          }))
          .filter(p => p.life > 0)
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
      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 99999,
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${p.color} 0%, ${p.color}80 60%, transparent 100%)`,
            opacity: p.life,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}60, 0 0 ${p.size * 6}px ${p.color}30`,
            transform: `rotate(${p.rotation}deg) scale(${0.5 + p.life * 0.6})`,
            transition: 'none',
          }}
        />
      ))}

      {/* Mouse glow when dragging */}
      {isDragging && (
        <>
          <div
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 99998,
              left: mousePos.x - 80,
              top: mousePos.y - 80,
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 69, 0, 0.08) 40%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 99997,
              left: mousePos.x - 30,
              top: mousePos.y - 30,
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              boxShadow: '0 0 40px rgba(255, 215, 0, 0.15)',
            }}
          />
          <div
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 99996,
              left: mousePos.x - 5,
              top: mousePos.y - 5,
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #FFFFFF 0%, #FFD700 50%, #FF4500 100%)',
              boxShadow: '0 0 30px #FFD700, 0 0 60px #FF4500',
            }}
          />
        </>
      )}
    </>
  );
}