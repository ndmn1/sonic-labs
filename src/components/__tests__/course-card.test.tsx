import { render, screen } from "@testing-library/react";
import { CourseCard } from "../course-card";
import { Course } from "@/lib/data/courses";

const mockCourse: Course = {
  id: "1",
  title: "Test Course",
  description: "This is a test course description",
  level: "Beginner",
  image: "/test-image.jpg",
  category: "Programming",
  duration: "4 weeks",
  price: 99,
  rating: 4.8,
  students: 1250,
};

describe("CourseCard", () => {
  it("renders course information correctly", () => {
    render(<CourseCard course={mockCourse} />);

    expect(screen.getByText("Test Course")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test course description")
    ).toBeInTheDocument();
    expect(screen.getByText("Beginner")).toBeInTheDocument();
    expect(screen.getByText("4.8")).toBeInTheDocument();
    expect(screen.getByText("(1250 students)")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
    expect(screen.getByText("Enroll Now")).toBeInTheDocument();
  });

  it("applies correct styling for Beginner level", () => {
    render(<CourseCard course={mockCourse} />);

    const badge = screen.getByText("Beginner");
    expect(badge).toHaveClass("bg-[#C1C1C1]", "text-[#141416]");
  });

  it("applies correct styling for Intermediate level", () => {
    const intermediateCourse = {
      ...mockCourse,
      level: "Intermediate" as const,
    };
    render(<CourseCard course={intermediateCourse} />);

    const badge = screen.getByText("Intermediate");
    expect(badge).toHaveClass("bg-[#3C3B3B]", "text-[#F5F5F5]");
  });

  it("applies correct styling for Advanced level", () => {
    const advancedCourse = { ...mockCourse, level: "Advanced" as const };
    render(<CourseCard course={advancedCourse} />);

    const badge = screen.getByText("Advanced");
    expect(badge).toHaveClass("bg-[#B96846]", "text-[#F5F5F5]");
  });

  it("displays star rating correctly", () => {
    render(<CourseCard course={mockCourse} />);

    const starIcon = document.querySelector("svg");
    expect(starIcon).toBeInTheDocument();
  });

  it("has hover animations applied", () => {
    render(<CourseCard course={mockCourse} />);

    const card = document.querySelector('[class*="group"]');
    expect(card).toHaveClass("group");
  });
});
