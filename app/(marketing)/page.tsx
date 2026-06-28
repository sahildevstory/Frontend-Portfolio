import Headline from "@/components/headline/headline";
import Intro from "@/components/introloader/Introloader";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/about";
import BlogPreview from "@/components/sections/blog/BlogPreview";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function HomePage() {
  return (
    <>
      {/* <Projects /> */}
      <Navbar />
      <Intro />
      <Headline />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <BlogPreview />
    </>
  );
}
