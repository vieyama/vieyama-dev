import { client } from "@/utils/directusClient";
import AboutMe from "./section/about-me";
import Experiences from "./section/experiences";
import Footer from "./section/footer";
import Greetings from "./section/greetings";
import Projects from "./section/projects";
import Skills from "./section/skills";
import { readItem } from "@directus/sdk";

export default async function Home() {
  const portoId = 'e12af376-fbb0-4d1f-b218-7c19d3197eaa'
  const result = await client.request(readItem('portofolio', portoId, {
    fields: ['*', { Links: ['*'], Projects: ['*'], Experiences: ['*'] }],
  }));

  return (
    <div>
      <Greetings data={result} />
      <AboutMe data={result} />
      <Projects data={result} />
      <Skills data={result} />
      <Experiences data={result} />
      <Footer />
    </div>
  );
}
