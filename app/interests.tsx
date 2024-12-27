"use client";
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useInView } from 'react-intersection-observer';

interface Bubble {
  id: number;
  x: number;
  y: number;
  label: string;
  color: string;
  icon: string;
  size: number;
  fx?: number | null;
  fy?: number | null;
}

export default function Interests() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const interests = [
    { label: "Programming", color: "#6366F1", icon: "💻", size: 100 },
    { label: "Design", color: "#EC4899", icon: "🎨", size: 90 },
    { label: "AI", color: "#8B5CF6", icon: "🤖", size: 110 },
    { label: "Music", color: "#10B981", icon: "🎵", size: 85 },
    { label: "Science", color: "#F59E0B", icon: "🔬", size: 95 },
    { label: "Data", color: "#3B82F6", icon: "📊", size: 80 },
    { label: "Innovation", color: "#6366F1", icon: "💡", size: 105 },
    { label: "Research", color: "#8B5CF6", icon: "📚", size: 88 }
  ];

  useEffect(() => {
    if (!containerRef.current || !inView) {
      setBubbles([]);
      return;
    }
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const simulation = d3.forceSimulation<Bubble>()
      .force('charge', d3.forceManyBody().strength(-800))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => (d as Bubble).size / 1.8))
      .force('x', d3.forceX(width / 2).strength(0.1))
      .force('y', d3.forceY(height / 2).strength(0.1))
      .alphaDecay(0.01)
      .velocityDecay(0.3)
      .on('tick', () => setBubbles([...simulation.nodes()]));

    const addBubble = (index: number) => {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 400;
      
      const newBubble: Bubble = {
        id: index,
        x: width / 2 + radius * Math.cos(angle),
        y: height / 2 + radius * Math.sin(angle),
        ...interests[index],
      };
      
      simulation.nodes([...simulation.nodes(), newBubble]);
      simulation.alpha(1);
      simulation.restart();
    };

    interests.forEach((_, index) => {
      setTimeout(() => addBubble(index), index * 400);
    });

    return () => {
      simulation.stop();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div 
      ref={ref}
      className="relative h-[600px]"
    >
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
      >
        <svg className="w-full h-full absolute">
          {bubbles.map((bubble, i) => 
            bubbles.slice(i + 1).map((target) => {
              const distance = Math.hypot(bubble.x - target.x, bubble.y - target.y);
              return distance < 200 ? (
                <line
                  key={`${bubble.id}-${target.id}`}
                  x1={bubble.x}
                  y1={bubble.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="#a770ad"
                  strokeWidth="1"
                  strokeDasharray="4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="8"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </line>
              ) : null;
            })
          )}
        </svg>
        
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-fadeIn"
            style={{
              left: `${bubble.x}px`,
              top: `${bubble.y}px`,
              animation: `fadeIn 0.5s ease-out ${bubble.id * 0.2}s forwards`,
            }}
          >
            <div
              className="rounded-full flex flex-col items-center justify-center text-white cursor-pointer transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `linear-gradient(135deg, ${bubble.color}, ${adjustColor(bubble.color, -20)})`,
                boxShadow: `0 0 30px orange`,
              }}
            >
              <span className="text-2xl mb-1">{bubble.icon}</span>
              <span className="text-xs font-medium">{bubble.label}</span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}

// Helper function to adjust color brightness
function adjustColor(color: string, amount: number): string {
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${(b | (g << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
}