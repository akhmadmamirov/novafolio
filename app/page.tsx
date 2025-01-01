import About from "./about";
import Blog from "./blog";
import Profile from "./profile";
import Projects from "./projects";
import StarWarsAsciiCrawl from "./animation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Profile />
      <About />
      <Projects />
      <Blog />
      <StarWarsAsciiCrawl />
    </main>
  );
}
