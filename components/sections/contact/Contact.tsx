// components/sections/contact/Contact.tsx
"use client";

import { useState } from "react";
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
  const email = "sahilkhan.official325@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sahildevstory",
      icon: <FaGithub size={20} />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sahil-khan-325",
      icon: <FaLinkedin size={20} />,
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sahildevstory",
      icon: <FaTwitter size={20} />,
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/sahildevstory",
      icon: <FaInstagram size={20} />,
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      url: `mailto:${email}`,
      icon: <FiMail size={20} />,
      color: "hover:text-red-400",
    },
  ];

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionContainer>
      <SectionTitle
        title="Let's Work Together"
        subtitle="Have an idea or opportunity? Let's build something amazing."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-1">
        {/* Main Card - Left Side */}
        <div className="lg:col-span-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-surface-light p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5 h-full flex flex-col items-center justify-center">
            {/* Glow Effects */}
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-red-600/10 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-600/5 blur-[120px]" />

            <div className="relative text-center w-full">
              {/* Status Badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Available for work
                </Badge>
              </div>

              <h3 className="text-3xl font-bold text-white heading-font">
                Got a project in mind?
              </h3>

              <p className="mt-3 text-zinc-400">
                I'm currently available for freelance work, full-time
                opportunities, and collaborations. Let's bring your ideas to
                life.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {/* Cal.com Button */}
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

                {/* Email Button */}
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

              {/* Social Links */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm text-zinc-500 mr-2">
                  Connect with me:
                </span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2.5 rounded-full bg-surface/30 border border-white/5 
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
            </div>
          </div>
        </div>

      
      </div>
    </SectionContainer>
  );
}