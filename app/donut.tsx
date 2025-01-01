"use client"
import { useEffect, useRef, useState } from 'react';

const SpinningDonut = () => {
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(true);
  const animationFrameRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!isRunning) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    let A = 1;
    let B = 1;
    
    const renderFrame = () => {
      const b = Array(1760).fill(' ');
      const z = Array(1760).fill(0);
      
      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(A);
          const f = Math.sin(j);
          const g = Math.cos(A);
          const h = d + 2;
          const D = 1 / (c * h * e + f * g + 5);
          const l = Math.cos(i);
          const m = Math.cos(B);
          const n = Math.sin(B);
          const t = c * h * g - f * e;
          
          const x = Math.floor(40 + 30 * D * (l * h * m - t * n));
          const y = Math.floor(12 + 15 * D * (l * h * n + t * m));
          const o = Math.floor(x + 80 * y);
          const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
          
          if (y < 22 && y >= 0 && x >= 0 && x < 80 && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }
      
      let asciiFrame = '';
      for (let k = 0; k < 1760; k++) {
        asciiFrame += k % 80 ? b[k] : '\n';
      }
      setOutput(asciiFrame);
      
      A += 0.05;
      B += 0.03;
      
      animationFrameRef.current = requestAnimationFrame(renderFrame);
    };
    
    renderFrame();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning]);
  
  return (
    <div className="flex items-center justify-center p-4">
      <pre 
        onClick={() => setIsRunning(!isRunning)}
        className="font-mono text-xs leading-none text-center whitespace-pre bg-black p-4 rounded-lg shadow-lg cursor-pointer
          bg-gradient-to-r from-[#2196F3] to-[#a770ad] text-transparent bg-clip-text"
      >
        {isRunning ? "Click the donut to stop\n" : "Click the donut to start\n"}
        {output}
      </pre>
    </div>
  );
};

export default SpinningDonut;