"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Course } from "@/lib/data/courses";
import { Star } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-[#C1C1C1] text-[#141416]";
      case "Intermediate":
        return "bg-[#3C3B3B] text-[#F5F5F5]";
      case "Advanced":
        return "bg-[#B96846] text-[#F5F5F5]";
      default:
        return "bg-[#C1C1C1] text-[#141416]";
    }
  };

  return (
    <Card className="group bg-[#FFF5F0] border-[#ADADAD] hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      <div className="relative overflow-hidden h-full">
        {/* Use next/image for optimized image loading */}
        <Image
          src="/sonic-labs.jpg"
          alt={course.title}
          width={200}
          height={100}
          className="w-full h-48 object-cover"
          loading="lazy"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-[#131315] flex-1">
            {course.title}
          </h3>
          <Badge
            className={`${getLevelColor(
              course.level
            )} text-xs font-bold px-2 py-1`}
          >
            {course.level}
          </Badge>
        </div>

        <p className="text-[#131315] text-sm mb-4 leading-relaxed">
          {course.description}
        </p>

        <div className="flex items-center justify-between mb-4 mt-auto">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#FECA4C] text-[#FECA4C]" />
            <span className="text-sm text-[#131315] font-medium">
              {course.rating}
            </span>
            <span className="text-xs text-[#666]">
              ({course.students} students)
            </span>
          </div>
          <span className="text-sm text-[#131315] font-medium">
            ${course.price}
          </span>
        </div>

        <Button className="w-full bg-gradient-to-r from-[#215081] via-[#506179] to-[#ED5409] hover:from-[#1a3f6a] hover:via-[#3d4a5e] hover:to-[#c44407] text-white border-0 rounded-full py-2 transition-all duration-300 hover:scale-105">
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
}
