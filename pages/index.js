import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Showcase from "../components/showcase/Showcase";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <div className="container">
      <Intro />
      <Portfolio />
      <Showcase />
      <About />
      <Skills />
    </div>
  );
}
