"use client"
import React, { useEffect, useState } from 'react';

const SpinningCPU = () => {
  const [rotation, setRotation] = useState(0);
  const width = 40;    
  const height = 15;  
  const depth = 3;     
  
  const drawRectangle = (
    points: string[][],
    startX: number,
    startY: number,
    rectWidth: number,
    rectHeight: number,
    char: string,
    fill?: string
  ) => {
    for (let y = startY; y < startY + rectHeight; y++) {
      for (let x = startX; x < startX + rectWidth; x++) {
        if (
          y === startY ||
          y === startY + rectHeight - 1 ||
          x === startX ||
          x === startX + rectWidth - 1 ||
          (fill && y > startY && y < startY + rectHeight - 1 && x > startX && x < startX + rectWidth - 1)
        ) {
          if (x >= 0 && x < width && y >= 0 && y < height) {
            points[y][x] = fill && y > startY && y < startY + rectHeight - 1 && x > startX && x < rectWidth - 1 ? fill : char;
          }
        }
      }
    }
  };

  const drawTransistors = (
    points: string[][],
    startX: number,
    startY: number,
    cols: number,
    rows: number
  ) => {
    const transistorWidth = 2;  
    const transistorHeight = 1; 
    const spacingX = 3;        
    const spacingY = 2;        

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * spacingX;
        const y = startY + row * spacingY;
        if (x + transistorWidth < width && y + transistorHeight < height) {
          points[y][x] = '┌';
          points[y][x + transistorWidth - 1] = '┐';
          if (y + transistorHeight < height) {
            points[y + transistorHeight - 1][x] = '└';
            points[y + transistorHeight - 1][x + transistorWidth - 1] = '┘';
          }
        }
      }
    }
  };

  const generatePoints = (angle: number) => {
    const points: string[][] = Array(height).fill('').map(() => Array(width).fill(' '));
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const projectPoint = (xPos: number, yPos: number, zPos: number) => {
      const rotatedX = xPos * cos - zPos * sin;
      const rotatedZ = xPos * sin + zPos * cos;
      const perspective = 80 / (80 - rotatedZ); // Adjusted perspective
      return {
        x: Math.round(rotatedX * perspective + width / 2),
        y: Math.round(yPos * perspective + height / 2),
      };
    };

    // Draw outer frame
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const xPos = x - width / 2;
        const yPos = y - height / 2;
        
        let projected = projectPoint(xPos, yPos, depth / 2);
        if (projected.x >= 0 && projected.x < width && projected.y >= 0 && projected.y < height) {
          if (y === 0 || y === height - 1 || x === 0 || x === width - 1) {
            points[projected.y][projected.x] = '█';
          }
        }

        projected = projectPoint(xPos, yPos, -depth / 2);
        if (projected.x >= 0 && projected.x < width && projected.y >= 0 && projected.y < height) {
          if (y === 0 || y === height - 1 || x === 0 || x === width - 1) {
            points[projected.y][projected.x] = '▒';
          }
        }
      }
    }

    // Scaled down component positions
    const components = [
      { x: 4, y: 2, w: 10, h: 4, label: 'ALU' },
      { x: 16, y: 2, w: 8, h: 4, label: 'CU' },
      { x: 26, y: 2, w: 10, h: 4, label: 'Registers' },
      { x: 4, y: 8, w: 14, h: 4, label: 'Cache' },
      { x: 20, y: 8, w: 16, h: 4, label: 'Clock' }
    ];

    const angleThreshold = Math.PI / 2;

    // Draw components
    components.forEach(comp => {
      const projected = projectPoint(comp.x - width / 2, comp.y - height / 2, depth / 2);
      const projectedEnd = projectPoint(
        (comp.x + comp.w) - width / 2,
        (comp.y + comp.h) - height / 2,
        depth / 2
      );
      
      drawRectangle(
        points,
        projected.x,
        projected.y,
        projectedEnd.x - projected.x,
        projectedEnd.y - projected.y,
        '═',
        '·'
      );

      drawTransistors(
        points,
        projected.x + 1,
        projected.y + 1,
        Math.floor((projectedEnd.x - projected.x - 2) / 3),
        Math.floor((projectedEnd.y - projected.y - 2) / 2)
      );

      if (Math.abs(angle % (2 * Math.PI)) < angleThreshold) {
        const labelX = projected.x + Math.floor((projectedEnd.x - projected.x - comp.label.length) / 2);
        const labelY = projected.y + Math.floor((projectedEnd.y - projected.y) / 2);
        for (let i = 0; i < comp.label.length; i++) {
          if (labelX + i < width && labelY < height) {
            points[labelY][labelX + i] = comp.label[i];
          }
        }
      }
    });

    return points;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.05) % (2 * Math.PI));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const points = generatePoints(rotation);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[200px] p-8">
  <div className="bg-black rounded-lg p-6 shadow-lg">
    <pre className="font-mono text-green-500 leading-none">
      {points.map((row, i) => (
        <div key={i} className="whitespace-pre">
          {row.join('')}
        </div>
      ))}
    </pre>
  </div>
  <div className="text-green-500 font-mono mt-4">
    Jupyter M1 TPU
  </div>
</div>
  );
};

export default SpinningCPU;
