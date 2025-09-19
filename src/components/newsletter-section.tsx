"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="bg-[#131315] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-medium text-[#F5F5F5]">
                Have a question?
              </h2>
              <p className="text-xl text-[#F5F5F5] leading-relaxed">
                Leave an email, we will contact as soon as possible.
              </p>
            </div>

            {/* Newsletter CTA Card */}
            <div className="relative">
              <div className="bg-gradient-to-r from-[#215081] via-[#506179] to-[#ED5409] p-1 rounded-xl">
                <div className="bg-[#131315]/85 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-[#F5F5F5]" />
                    <h3 className="text-lg font-semibold text-[#F5F5F5]">
                      Stay up to new technology with our courses!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-4 px-6 bg-white border-[#506077] rounded-full text-[#131315] placeholder-[#9CA3AF] text-lg"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#C7B08A]/50 text-[#C7B08A] hover:bg-[#C7B08A]/60 rounded-full px-6 py-2"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
            </form>

            <p className="text-sm text-[#9CA3AF] text-center">
              By subscribing, you agree to our privacy policy and terms of
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
