"use client";

import { useState, useMemo } from "react";
import { CourseCard } from "./course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { courses, categories, levels } from "@/lib/data/courses";
import { Search, Filter, ChevronDown } from "lucide-react";

export function CoursesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="bg-[#FFEDD6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-medium text-[#131315] mb-4">
            Our courses
          </h2>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 bg-white border-[#506077] rounded-full text-[#131315] placeholder-[#9CA3AF]"
            />
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:block space-y-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              <div className="flex items-center gap-2 mr-4">
                <Filter className="w-4 h-4 text-[#131315]" />
                <span className="text-sm font-medium text-[#131315]">
                  Filter by:
                </span>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm ${
                      selectedCategory === category
                        ? "bg-[#131315] text-white"
                        : "bg-white text-[#131315] border-[#ADADAD] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Level Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  onClick={() => setSelectedLevel(level)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    selectedLevel === level
                      ? "bg-[#131315] text-white"
                      : "bg-white text-[#131315] border-[#ADADAD] hover:bg-[#F5F5F5]"
                  }`}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full bg-[#131315] text-white hover:bg-[#2a2a2a] rounded-full py-3 flex items-center justify-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isMobileFilterOpen ? "rotate-180" : ""
                }`}
              />
            </Button>

            {/* Mobile Filter Dropdown */}
            {isMobileFilterOpen && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-[#ADADAD] space-y-4">
                {/* Category Filters */}
                <div>
                  <h3 className="text-sm font-medium text-[#131315] mb-2">
                    Category
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={
                          selectedCategory === category ? "default" : "outline"
                        }
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-3 py-2 text-xs ${
                          selectedCategory === category
                            ? "bg-[#131315] text-white"
                            : "bg-white text-[#131315] border-[#ADADAD] hover:bg-[#F5F5F5]"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Level Filters */}
                <div>
                  <h3 className="text-sm font-medium text-[#131315] mb-2">
                    Level
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {levels.map((level) => (
                      <Button
                        key={level}
                        variant={
                          selectedLevel === level ? "default" : "outline"
                        }
                        onClick={() => setSelectedLevel(level)}
                        className={`rounded-full px-3 py-2 text-xs ${
                          selectedLevel === level
                            ? "bg-[#131315] text-white"
                            : "bg-white text-[#131315] border-[#ADADAD] hover:bg-[#F5F5F5]"
                        }`}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters Button */}
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedLevel("All");
                    setIsMobileFilterOpen(false);
                  }}
                  className="w-full bg-gray-100 text-[#131315] hover:bg-gray-200 rounded-full py-2"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#131315] text-lg">
              No courses found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLevel("All");
              }}
              className="mt-4 bg-[#131315] text-white hover:bg-[#2a2a2a]"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
