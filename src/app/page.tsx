import AboutMe from "./section/about-me";
import Experiences from "./section/experiences";
import Footer from "./section/footer";
import Greetings from "./section/greetings";
import Projects from "./section/projects";
import Skills from "./section/skills";

export default function Home() {
  return (
    <div>
      <Greetings />
      <AboutMe />
      <Projects />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
}
