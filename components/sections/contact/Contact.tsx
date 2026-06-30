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
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { Heart } from "lucide-react";
import Image from "next/image";

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
      icon: <FaGithub size={isMobile ? 20 : 24} />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sahil-khan-325",
      icon: <FaLinkedin size={isMobile ? 20 : 24} />,
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sahildevstory",
      icon: <FaTwitter size={isMobile ? 20 : 24} />,
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sahildevstory",
      icon: <FaInstagram size={isMobile ? 20 : 24} />,
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      url: `mailto:${email}`,
      icon: <FiMail size={isMobile ? 20 : 24} />,
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

      {/* Main Row - Data Left | Image Right */}
      <div className="mt-8 md:mt-12 lg:mt-16 grid gap-6 md:gap-8 lg:grid-cols-2 items-center overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-surface-light p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5">
        {/* Left Side - Contact Data */}
        <div className="relative">
          {/* Glow Effects */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-600/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-600/5 blur-[80px]" />

          <div className="relative">
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs px-3 py-1">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for work
              </Badge>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white heading-font">
              Got a project in mind?
            </h3>

            <p className="mt-3 text-zinc-400 max-w-lg">
              I'm currently available for freelance work, full-time
              opportunities, and collaborations. Let's bring your ideas to
              life.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://cal.com/sahildevstory"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r from-red-600 to-red-500
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                  hover:shadow-red-600/25
                "
              >
                <FiCalendar size={18} />
                Schedule a Call
                <FiExternalLink size={14} />
              </a>

              <button
                onClick={copyEmail}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  px-6
                  py-3
                  text-sm
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
                    <FiCheck size={18} className="text-emerald-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FiCopy size={18} />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            {/* Email Display */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-sm text-zinc-500">
                📧 {email}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center ">
          <Image
            src="/images/intro/contact.svg"
            alt="Contact illustration"
            width={200}
            height={200}
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[300px] h-auto"
            loading="eager"
            priority
          />
          

        </div>
      </div>

      {/* Social Media Links - Below */}
      <div className="mt-8 md:mt-10">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-zinc-500 uppercase tracking-wider">
            Connect with me
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-1 md:p-2 rounded-full bg-surface/30 border border-white/10 
                  text-zinc-400 transition-all duration-300 
                  hover:border-white/20 hover:bg-white/5 hover:scale-110 hover:-translate-y-1
                  ${social.color}
                `}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" pt-8  border-white/5">
        <p className="text-sm text-[var(--text-secondary)] flex justify-center items-center text-center gap-1">
          &copy; {new Date().getFullYear()} All Rights Reserved by Sahil Khan.
          <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" />
        </p>
      </div>
    </SectionContainer>
  );
}