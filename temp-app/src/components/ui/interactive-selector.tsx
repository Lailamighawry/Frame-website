"use client";

import React, { useState, useEffect } from "react";
import {
  FaCampground,
  FaFire,
  FaTint,
  FaHotTub,
  FaHiking,
} from "react-icons/fa";

const options = [
  {
    title: "Luxury Tent",
    description: "Cozy glamping under the stars",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    icon: <FaCampground size={24} className="text-white" />,
  },
  {
    title: "Campfire Feast",
    description: "Gourmet s'mores & stories",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    icon: <FaFire size={24} className="text-white" />,
  },
  {
    title: "Lakeside Retreat",
    description: "Private dock & canoe rides",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icon: <FaTint size={24} className="text-white" />,
  },
  {
    title: "Mountain Spa",
    description: "Outdoor sauna & hot tub",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    icon: <FaHotTub size={24} className="text-white" />,
  },
  {
    title: "Guided Adventure",
    description: "Expert-led nature tours",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    icon: <FaHiking size={24} className="text-white" />,
  },
];

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0e0e0e] font-sans text-white">
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mt-8 mb-2 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg animate-fadeInTop">
          Frame Your World
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto animate-fadeInTopDelay">
          Discover premium ZAWYA frames for every style & space.
        </p>
      </div>

      <div className="h-12" />

      {/* Options Container */}
      <div
        className="options flex w-full max-w-[900px] h-[400px] mx-auto items-stretch overflow-hidden relative px-4"
        style={{ minWidth: "min(900px, 100%)" }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="option relative flex flex-col justify-end overflow-hidden"
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize:
                activeIndex === index ? "auto 100%" : "auto 120%",
              backgroundPosition: "center",
              backfaceVisibility: "hidden",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index)
                ? "translateX(0)"
                : "translateX(-60px)",
              minWidth: "60px",
              minHeight: "100px",
              margin: 0,
              borderRadius: 0,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: activeIndex === index ? "#c8a96e" : "#1a1a1a",
              cursor: "pointer",
              backgroundColor: "#18181b",
              boxShadow:
                activeIndex === index
                  ? "0 20px 60px rgba(0,0,0,0.55)"
                  : "0 10px 30px rgba(0,0,0,0.30)",
              flex: activeIndex === index ? "7 1 0%" : "1 1 0%",
              zIndex: activeIndex === index ? 10 : 1,
              transition:
                "flex-grow 0.7s cubic-bezier(0.4,0,0.2,1), box-shadow 0.7s, background-size 0.7s, opacity 0.5s, transform 0.5s, border-color 0.4s",
              willChange: "flex-grow",
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow overlay */}
            <div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                bottom: activeIndex === index ? "0" : "-40px",
                height: "120px",
                boxShadow:
                  activeIndex === index
                    ? "inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000"
                    : "inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000",
                transition: "all 0.7s ease-in-out",
              }}
            />

            {/* Label */}
            <div className="absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-10 pointer-events-none px-4 gap-3 w-full">
              <div className="min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="text-white whitespace-pre relative">
                <div
                  className="font-bold text-lg"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateX(0)"
                        : "translateX(25px)",
                    transition: "all 0.7s ease-in-out",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="text-base text-gray-300"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateX(0)"
                        : "translateX(25px)",
                    transition: "all 0.7s ease-in-out 0.05s",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          animation: fadeInFromTop 0.8s ease-in-out 0.3s forwards;
        }

        .animate-fadeInTopDelay {
          opacity: 0;
          animation: fadeInFromTop 0.8s ease-in-out 0.6s forwards;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
