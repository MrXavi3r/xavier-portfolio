import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Showcase from "../components/showcase/Showcase";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Testimonials from "../components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="sections container">
      <Intro />
      <Portfolio />
      <Showcase />
      <About />
      <Skills />
      <Testimonials />
    </div>
  );
}
