import About from "./components/About";
import FooterBanner from "./components/FooterBanner";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RecentWork from "./components/RecentWork";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div className="w-full font-dmSans ">
      <Hero />
      <About />
      <RecentWork />
      <Projects />
      <Testimonial />
      <FooterBanner />
    </div>
  );
}
