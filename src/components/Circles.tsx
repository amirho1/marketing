"use client";
import { cn } from "@/lib/utils";

interface AnimatedCirclesProps {
  className?: string;
}

const circles = [
  {
    size: "w-[718px] h-[718px]",
    opacity: "opacity-5",
    animation: "animate-pulse-slow",
    border: "border-2",
  },
  // {
  //   size: "w-[590px] h-[590px]",
  //   opacity: "opacity-20",
  //   animation: "animate-pulse-medium",
  //   border: "border-2",
  // },
  {
    size: "w-[496px] h-[496px]",
    opacity: "opacity-10",
    animation: "animate-pulse-fast",
    border: "border-2",
  },
  {
    size: "w-[378px] h-[378px]",
    opacity: "opacity-15",
    animation: "animate-pulse-slow",
    border: "border-2",
  },
  {
    size: "w-[296px] h-[296px]",
    opacity: "opacity-20",
    animation: "animate-pulse-medium",
    border: "border-2",
  },
  {
    size: "w-[186px] h-[186px]",
    opacity: "opacity-30",
    animation: "animate-pulse-fast",
    border: "border-2",
    fill: "bg-yellow-500/3",
  },
];

function AnimatedCircles({ className }: AnimatedCirclesProps) {
  return (
    <div className={cn("absolute w-full h-full top-0 right-0 -z-1", className)}>
      {/* Circles container */}
      <div className="inset-0 flex items-center justify-center">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={cn(
              "absolute rounded-full border-yellow-500 transform-gpu",
              circle.size,
              circle.opacity,
              circle.animation,
              circle.border,
              circle.fill
            )}
            style={{
              animationDelay: `${index * 0.5}s`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimatedCircles;
