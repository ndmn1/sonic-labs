"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Award, FileText } from "lucide-react";
import { useState, useEffect } from "react";

// Configuration object for the animated grid
const GRID_CONFIG = {
  // Dot configuration
  dots: {
    radius: 0.1,
    spacing: 2, // Distance between dots
    color: "#F5F5F5",
  },

  // Animation configuration
  animation: {
    duration: 3, // seconds
    delay: 0.5, // delay between shapes
    interval: 3000, // milliseconds between new random shapes
  },

  // Shape configuration
  shapes: {
    count: 5, // Number of shapes to display
    types: [
      "square",
      "horizontal-line",
      "vertical-line",
      "diagonal-up",
      "diagonal-down",
      // Add new shape types here:
      // "circle", "triangle", "cross", "diamond", etc.
    ],
    size: 4, // Size of shapes (width/height)
    strokeWidth: 0.12,
    color: "#F5F5F5",
    opacity: 0.7,
  },

  // Grid bounds
  grid: {
    maxX: 45, // Maximum X position for random generation
    maxY: 45, // Maximum Y position for random generation
  },
};

const features = [
  {
    icon: BookOpen,
    title: "Courses",
    description:
      "Explore a wide range of courses across technology, business, and personal development.",
  },
  {
    icon: GraduationCap,
    title: "Learning Paths",
    description:
      "Follow our structured programs designed to help you master skills step by step.",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Earn recognized certificates to showcase your expertise and advance your career.",
  },
  {
    icon: FileText,
    title: "Resources",
    description:
      "Access guides, articles, and tutorials to support your continuous learning journey.",
  },
];

export function HeroSection() {
  // Initialize shapes with proper spacing alignment
  const getInitialShapes = () => {
    const spacing = GRID_CONFIG.dots.spacing;
    const centerOffset = spacing / 2;
    return [
      { x: centerOffset, y: centerOffset, type: "square" },
      {
        x: 17 * spacing + centerOffset,
        y: 13 * spacing + centerOffset,
        type: "square",
      },
      {
        x: 3 * spacing + centerOffset,
        y: 25 * spacing + centerOffset,
        type: "square",
      },
    ];
  };

  const [shapes, setShapes] = useState(getInitialShapes());

  // Function to render different shapes
  const renderShape = (shape: any, index: number) => {
    const { x, y, type } = shape;
    const commonProps = {
      stroke: GRID_CONFIG.shapes.color,
      strokeWidth: GRID_CONFIG.shapes.strokeWidth,
      className: "animate-square-draw",
      style: {
        strokeDasharray: "24",
        strokeDashoffset: "24",
        animationDelay: `${index * GRID_CONFIG.animation.delay}s`,
      },
    };

    const size = GRID_CONFIG.shapes.size;
    const halfSize = size / 2;

    switch (type) {
      case "square":
        return (
          <rect
            key={`shape-${index}`}
            x={x}
            y={y}
            width={size}
            height={size}
            fill="none"
            {...commonProps}
          />
        );
      case "horizontal-line":
        return (
          <line
            key={`shape-${index}`}
            x1={x}
            y1={y + halfSize}
            x2={x + size}
            y2={y + halfSize}
            {...commonProps}
          />
        );
      case "vertical-line":
        return (
          <line
            key={`shape-${index}`}
            x1={x + halfSize}
            y1={y}
            x2={x + halfSize}
            y2={y + size}
            {...commonProps}
          />
        );
      case "diagonal-up":
        return (
          <line
            key={`shape-${index}`}
            x1={x}
            y1={y + size}
            x2={x + size}
            y2={y}
            {...commonProps}
          />
        );
      case "diagonal-down":
        return (
          <line
            key={`shape-${index}`}
            x1={x}
            y1={y}
            x2={x + size}
            y2={y + size}
            {...commonProps}
          />
        );
      default:
        return null;
    }
  };

  // Generate random positions and shapes
  useEffect(() => {
    const generateRandomShapes = () => {
      const newShapes = [];
      const spacing = GRID_CONFIG.dots.spacing;
      const centerOffset = spacing / 2; // Center the shapes on the grid points

      for (let i = 0; i < GRID_CONFIG.shapes.count; i++) {
        // Generate random positions that align with the grid spacing
        const x =
          Math.floor(Math.random() * GRID_CONFIG.grid.maxX) * spacing +
          centerOffset;
        const y =
          Math.floor(Math.random() * GRID_CONFIG.grid.maxY) * spacing +
          centerOffset;
        // Generate random shape type
        const type =
          GRID_CONFIG.shapes.types[
            Math.floor(Math.random() * GRID_CONFIG.shapes.types.length)
          ];
        newShapes.push({ x, y, type });
      }
      setShapes(newShapes);
    };

    // Generate initial shapes
    generateRandomShapes();

    // Set up interval to change shapes
    const interval = setInterval(
      generateRandomShapes,
      GRID_CONFIG.animation.interval
    );

    return () => clearInterval(interval);
  }, [GRID_CONFIG.dots.spacing]); // Re-run when spacing changes

  return (
    <div className="relative min-h-screen bg-[#141416] overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#141416] to-[#141416]"></div>

        {/* Animated Dotted Grid with Connecting Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Dots */}
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width={GRID_CONFIG.dots.spacing}
                height={GRID_CONFIG.dots.spacing}
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx={GRID_CONFIG.dots.spacing / 2}
                  cy={GRID_CONFIG.dots.spacing / 2}
                  r={GRID_CONFIG.dots.radius}
                  fill={GRID_CONFIG.dots.color}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />

            {/* Random animated shapes */}
            <g style={{ opacity: GRID_CONFIG.shapes.opacity }}>
              {shapes.map((shape, index) => renderShape(shape, index))}
            </g>
          </svg>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-gradient-to-r from-[#FFECD4] to-[#FECA4C] rounded-full blur-3xl"></div>
          <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-gradient-to-r from-[#FF4433] to-[#ED5409] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-[#215081] to-[#506179] rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-medium text-[#F5F5F5] mb-6">
            Sonic Labs
          </h1>
          <p className="text-xl md:text-2xl text-[#F5F5F5] mb-12 max-w-3xl mx-auto leading-relaxed">
            Sonic Labs is a modern online learning platform that offers a wide
            range of high-quality courses designed to help learners upgrade
            their skills and achieve their personal and professional goals.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1B1C1D]/60 backdrop-blur-sm border-[#333438] hover:bg-[#1B1C1D]/80 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#FFECD4] to-[#FECA4C] rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-12 h-12 text-[#141416]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#B1B1B4] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
