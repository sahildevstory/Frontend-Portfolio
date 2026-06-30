// components/sections/contact/Contact.tsx
"use client";

import { useState, useEffect } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { Badge } from "@/components/ui/badge";

// Import from react-icons
import {
  FiMail,
  FiCalendar,
  FiCopy,
  FiCheck,
  FiExternalLink,
  FiUsers,
  FiAward,
  FiCode,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaRocket,
} from "react-icons/fa";

import { TbSparkles } from "react-icons/tb";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const email = "sahilkhan.official325@gmail.com";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sahildevstory",
      icon: <FaGithub size={isMobile ? 16 : 20} />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sahil-khan-325",
      icon: <FaLinkedin size={isMobile ? 16 : 20} />,
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sahildevstory",
      icon: <FaTwitter size={isMobile ? 16 : 20} />,
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sahildevstory",
      icon: <FaInstagram size={isMobile ? 16 : 20} />,
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      url: `mailto:${email}`,
      icon: <FiMail size={isMobile ? 16 : 20} />,
      color: "hover:text-red-400",
    },
  ];

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionContainer id="contact">
      <SectionTitle
        title="Let's Work Together"
        subtitle="Have an idea or opportunity? Let's build something amazing."
      />

      <div className="mt-8 md:mt-12 lg:mt-16 grid gap-6 md:gap-8 lg:grid-cols-2">
        {/* Main Card */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-surface-light p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5">
            {/* Glow Effects - Responsive */}
            <div className="absolute -top-20 md:-top-32 -right-20 md:-right-32 h-40 md:h-64 w-40 md:w-64 rounded-full bg-red-600/10 blur-[80px] md:blur-[120px]" />
            <div className="absolute -bottom-20 md:-bottom-32 -left-20 md:-left-32 h-40 md:h-64 w-40 md:w-64 rounded-full bg-purple-600/5 blur-[80px] md:blur-[120px]" />

            <div className="relative text-center w-full">
              {/* Status Badge - Responsive */}
              <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1">
                  <span className="relative flex h-1.5 md:h-2 w-1.5 md:w-2 mr-1.5 md:mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-emerald-500" />
                  </span>
                  Available for work
                </Badge>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white heading-font">
                Got a project in mind?
              </h3>

              <p className="mt-2 md:mt-3 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
                I'm currently available for freelance work, full-time
                opportunities, and collaborations. Let's bring your ideas to
                life.
              </p>

              {/* CTA Buttons - Responsive */}
              <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
                {/* Cal.com Button */}
                <a
                  href="https://cal.com/sahildevstory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1.5 md:gap-2
                    rounded-full
                    bg-gradient-to-r from-red-600 to-red-500
                    px-4 md:px-6
                    py-2 md:py-3
                    text-xs md:text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-lg
                    hover:shadow-red-600/25
                  "
                >
                  <FiCalendar size={isMobile ? 14 : 18} />
                  <span className="hidden xs:inline">Schedule a Call</span>
                  <span className="xs:hidden">Call</span>
                  <FiExternalLink size={isMobile ? 12 : 14} />
                </a>

                {/* Email Button */}
                <button
                  onClick={copyEmail}
                  className="
                    inline-flex
                    items-center
                    gap-1.5 md:gap-2
                    rounded-full
                    border
                    border-white/10
                    px-4 md:px-6
                    py-2 md:py-3
                    text-xs md:text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-red-500/40
                    hover:bg-white/5
                    hover:scale-105
                  "
                >
                  {copied ? (
                    <>
                      <FiCheck
                        size={isMobile ? 14 : 18}
                        className="text-emerald-400"
                      />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={isMobile ? 14 : 18} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links - Responsive */}
              <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
                <span className="text-xs md:text-sm text-zinc-500 mr-1 md:mr-2">
                  Connect:
                </span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 md:p-2.5 rounded-full bg-surface/30 border border-white/5 
                      text-zinc-400 transition-all duration-300 
                      hover:border-white/20 hover:bg-white/5 hover:scale-110
                      ${social.color}
                    `}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Additional Info - Mobile */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5">
                <p className="text-[10px] md:text-xs text-zinc-500">
                  📧 {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
