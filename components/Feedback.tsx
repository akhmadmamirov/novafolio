import React, { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoSlideInterval = 5000; // 5 seconds
  const progressBarDuration = autoSlideInterval; // Duration of progress bar in ms

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
      setProgress(0); // Reset progress when slide changes
    }, autoSlideInterval);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + (100 / (progressBarDuration / 100))
      );
    }, 100);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [progressBarDuration]);

  return (
    <div className="w-full max-w-3xl mx-auto h-80 mt-20 mb-15 overflow-hidden relative">
      <div
        className="relative w-full flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full flex-shrink-0">
            <div className="card shadow-xl w-full">
              <div className="card-body p-6">
                <div className="flex justify-center mb-4">
                  <span
                    className="rounded-full px-4 py-2 text-white text-sm font-semibold animate-pulse"
                    style={{
                      background: `linear-gradient(90deg, #ff7e5f, #feb47b)`,
                    }}
                  >
                    {testimonial.category}
                  </span>
                </div>
                <p className="text-lg font-light italic mb-4">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex flex-col">
                  <span className="text-primary font-semibold">
                    {testimonial.name}
                  </span>
                  <span className="text-sm opacity-75">{testimonial.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
        <div className="relative w-1/2 h-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-[#a770ad] rounded-full"
            style={{
              width: `${progress}%`,
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
