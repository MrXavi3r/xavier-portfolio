import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Showcase from "../components/showcase/Showcase";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <div className="sections container mx-auto">
      <Intro />
      <Portfolio />
      <Showcase />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}
