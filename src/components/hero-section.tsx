"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Award, FileText } from "lucide-react";

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
  return (
    <div className="relative min-h-screen bg-[#141416] overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#141416] to-[#141416]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#FFECD4] to-[#FECA4C] rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-[#FF4433] to-[#ED5409] rounded-full blur-3xl"></div>
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
