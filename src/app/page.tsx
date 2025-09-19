import { HeroSection } from "@/components/hero-section";
import { CoursesSection } from "@/components/courses-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#141416]">
      <HeroSection />
      <CoursesSection />
      <NewsletterSection />
    </div>
  );
}
