"use client";

import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#131315] border-b border-[#333438]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-32 h-8 bg-gradient-to-r from-[#1C294B] via-[#FF4433] to-[#FECA4C] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">Sonic Labs</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-[#F5F5F5] hover:text-white px-3 py-2 text-sm font-medium flex items-center gap-1"
              >
                Learn
                <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="text-[#F5F5F5] hover:text-white px-3 py-2 text-sm font-medium flex items-center gap-1"
              >
                Community
                <ChevronDown className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-gradient-to-r from-[#215081] via-[#506179] to-[#ED5409] text-white border-0 rounded-full px-6 py-2"
              >
                Login
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-gradient-to-r from-[#EDAA60] via-[#BF5F38] to-[#1753B0] text-white border-0 rounded-full w-10 h-10 relative"
              >
                <Bell className="w-4 h-4" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#FF4433] to-[#FECA4C] rounded-full"></div>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-gradient-to-r from-[#215081] via-[#506179] to-[#ED5409] text-white border-0 rounded-full w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#131315] border-t border-[#333438]">
              <a
                href="#"
                className="text-[#F5F5F5] hover:text-white block px-3 py-2 text-base font-medium flex items-center gap-2"
              >
                Learn
                <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-[#F5F5F5] hover:text-white block px-3 py-2 text-base font-medium flex items-center gap-2"
              >
                Community
                <ChevronDown className="w-4 h-4" />
              </a>
              <div className="pt-4 pb-3 border-t border-[#333438]">
                <div className="flex items-center px-3">
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-[#215081] via-[#506179] to-[#ED5409] text-white border-0 rounded-full px-6 py-2 w-full"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
