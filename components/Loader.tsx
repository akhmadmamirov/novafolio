import React from "react";

interface LoaderProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 40 }) => {
  return (
    <div 
      className="relative"
      style={{ width: size, height: size }}
    >
      <div 
        className="absolute w-full h-full border-4 border-transparent rounded-full animate-spin"
        style={{
          borderTopColor: '#FF5F6D',
          borderRightColor: '#FF5F6D',
          borderBottomColor: '#A950C4',
          borderLeftColor: '#A950C4',
        }}
      />
    </div>
  );
};

export default Loader;