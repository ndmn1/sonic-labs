"use client";

import { Button } from "@/components/ui/button";

const footerLinks = {
  courses: ["Most enrolled courses", "New courses", "Fee Monetization"],
  external: ["Blog", "Docs", "Press"],
};

export function Footer() {
  return (
    <footer className="bg-[#131315] border-t border-[#333438]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="space-y-4">
            <div className="w-32 h-8 bg-gradient-to-r from-[#1C294B] via-[#FF4433] to-[#FECA4C] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">Sonic Labs</span>
            </div>
            <p className="text-[#6B7280] text-sm max-w-xs">
              Empowering learners with cutting-edge technology education and
              practical skills.
            </p>
          </div>

          {/* Courses Links */}
          <div className="space-y-4">
            <h3 className="text-[#FFEDD6] font-medium text-lg">Courses</h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="text-[#F5F5F5] hover:text-white p-0 h-auto font-normal justify-start"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h3 className="text-[#FFEDD6] font-medium text-lg">External</h3>
            <ul className="space-y-2">
              {footerLinks.external.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="text-[#F5F5F5] hover:text-white p-0 h-auto font-normal justify-start"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333438] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#6B7280] text-sm">
              © 2025 Sonic Labs. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Button
                variant="ghost"
                className="text-[#6B7280] hover:text-white p-0 h-auto"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="text-[#6B7280] hover:text-white p-0 h-auto"
              >
                Terms of Service
              </Button>
              <Button
                variant="ghost"
                className="text-[#6B7280] hover:text-white p-0 h-auto"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
