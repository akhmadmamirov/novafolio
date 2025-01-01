"use client"
import { useEffect, useState, useRef } from 'react';

const StarWarsAsciiCrawl = () => {
  const [frame, setFrame] = useState(0);
  const requestRef = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);
  
  const text = `
                     Go akhmad pictures presents
                        in the 21st century 

                A long time ago in a galaxy far,
                          far away....



                        THIS AKHMAD GUY says

     Bye
  `;

  const lines = text.split('\n');
  const totalLines = lines.length;
  const visibleLines = 20; // Number of lines visible at once

  const animate = (timestamp: number) => {
    if (!startTime.current) startTime.current = timestamp;
    const progress = timestamp - startTime.current;
    
    // Adjust speed of scroll here
    const newFrame = Math.floor(progress / 100); // Lower number = faster scroll
    
    if (newFrame !== frame) {
      setFrame(newFrame);
    }
    
    if (frame < totalLines + visibleLines) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [frame]);

  const getVisibleText = () => {
    const startLine = Math.max(0, frame - visibleLines);
    const endLine = Math.min(totalLines, frame);
    
    return lines
      .slice(startLine, endLine)
      .map((line, index) => {
        const perspective = 1 - (index / visibleLines) * 0.5;
        const fontSize = `${perspective * 100}%`;
        return (
          <div 
            key={index} 
            className="text-center"
            style={{ 
              fontSize,
              opacity: perspective,
              transform: `perspective(400px) rotateX(30deg) translateZ(0px)`
            }}
          >
            {line}
          </div>
        );
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-full max-w-4xl h-[600px] overflow-hidden perspective-[400px]">
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-yellow-400 font-mono whitespace-pre">
          <div className="transform-style-preserve-3d">
            {getVisibleText()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarWarsAsciiCrawl;