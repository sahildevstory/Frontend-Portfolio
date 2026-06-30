// app/resume/page.tsx
import Link from "next/link";
import { ArrowLeft, Download, FileText, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin, ExternalLink, Calendar, Building2, Users, Rocket } from "lucide-react";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

   

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
           {/* Back Button */}
      <div className=" flex items-center justify-center pb-4">
        <Link
          href="/"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-surface/80
            backdrop-blur-xl
            border
            border-white/10
            px-4
            py-2.5
            text-sm
            font-medium
            text-zinc-300
            transition-all
            duration-300
            hover:border-red-500/40
            hover:text-white
            hover:bg-red-500/10
            hover:shadow-lg
            hover:shadow-red-500/10
            hover:-translate-x-1
          "
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>
      </div>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-2xl" />
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center mx-auto border-4 border-white/10">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white heading-font mt-4">
           Resume
          </h1>
          
          {/* Download Button */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition-all duration-300 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-600/20"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            <a
              href="https://drive.google.com/file/d/1giYC3ZUA0lmeXgFKP_aiqGMNRPmiZahT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-red-500/40 hover:bg-white/5 transition-all duration-300 px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white"
            >
              <ExternalLink className="w-4 h-4" />
              View in Drive
            </a>
          </div>
        </div>

        {/* Resume Content */}
        <div className="relative rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-xl p-6 md:p-10">
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/5 rounded-full blur-2xl" />

          <div className="relative space-y-8">
            {/* Personal Info */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-6 border-b border-white/5">
              <div>
                <h2 className="text-2xl font-bold text-white heading-font">Sahil Khan</h2>
                <p className="text-zinc-400">Frontend Developer</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-zinc-400 md:ml-auto">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-400" />
                  sahilkhanofficial325@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-400" />
                  +91 8982844484
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" />
                  Bhopal, India
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-lg font-semibold text-white heading-font flex items-center gap-2 mb-3">
                <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-purple-500 rounded-full" />
                Professional Summary
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Passionate Frontend Developer with 2+ years of experience specializing in React.js, Next.js, 
                and modern CSS frameworks. Proven track record of building responsive, high-performance web 
                applications with 90+ Lighthouse scores. Experienced in collaborating with cross-functional 
                teams to deliver pixel-perfect, user-centric solutions.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-semibold text-white heading-font flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-purple-500 rounded-full" />
                Experience
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-4 border-l-2 border-red-500/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h4 className="text-white font-bold">Frontend Developer</h4>
                      <p className="text-red-400 text-sm">Limbic Technologies</p>
                    </div>
                    <span className="text-xs text-zinc-500 whitespace-nowrap">Jan 2025 - Present</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">▸</span>
                      Built Shopify-like subscription storefront for 1,000+ premium users
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">▸</span>
                      Engineered inventory management platform used by 30+ outlets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">▸</span>
                      Achieved 90+ Lighthouse scores through performance optimization
                    </li>
                  </ul>
                </div>

                <div className="relative pl-4 border-l-2 border-purple-500/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h4 className="text-white font-bold">Frontend Developer Intern</h4>
                      <p className="text-purple-400 text-sm">Limbic Technologies</p>
                    </div>
                    <span className="text-xs text-zinc-500 whitespace-nowrap">Aug 2024 - Jan 2025</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      Built 3+ React dashboards for 50,000+ product records
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      Improved page load performance by 30%
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▸</span>
                      Developed 20+ responsive HTML/CSS email templates
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-white heading-font flex items-center gap-2 mb-3">
                <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-purple-500 rounded-full" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "ShadCN UI", "Redux", "Context API", "REST APIs", "Framer Motion", "Git", "GitHub", "Lighthouse", "Performance Optimization", "SEO"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-medium hover:border-red-500/40 hover:bg-red-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-semibold text-white heading-font flex items-center gap-2 mb-3">
                <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-purple-500 rounded-full" />
                Featured Projects
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-red-500/30 transition-all duration-300">
                  <h4 className="text-white font-bold">Abroad Education</h4>
                  <p className="text-xs text-zinc-400 mt-1">MERN Stack • Tailwind CSS</p>
                  <p className="text-sm text-zinc-300 mt-2">Consulting platform with 50+ videos, 70+ testimonials</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-red-500/30 transition-all duration-300">
                  <h4 className="text-white font-bold">InsightSphere</h4>
                  <p className="text-xs text-zinc-400 mt-1">MERN Stack • Firebase</p>
                  <p className="text-sm text-zinc-300 mt-2">Full-stack blogging platform with 15+ APIs</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-white heading-font flex items-center gap-2 mb-3">
                <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-purple-500 rounded-full" />
                Education
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 p-3 rounded-xl border border-white/5 bg-white/5">
                  <div>
                    <h4 className="text-white font-bold">B.Tech in Computer Science</h4>
                    <p className="text-sm text-zinc-400">Sagar Institute of Research & Technology</p>
                  </div>
                  <span className="text-xs text-zinc-500">CGPA: 8.02 | 2020 - 2024</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 p-3 rounded-xl border border-white/5 bg-white/5">
                  <div>
                    <h4 className="text-white font-bold">Class XII (PCM)</h4>
                    <p className="text-sm text-zinc-400">Government Excellence Boys School</p>
                  </div>
                  <span className="text-xs text-zinc-500">72% | 2019 - 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Sahil Khan. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}