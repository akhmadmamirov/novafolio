import About from "./about";
import Projects from "./projects";
import Blog from "./blog";
import Contact from "./contact";
import Experience from "./experience";
import FirstPage from "./firstPage";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FirstPage />
      <About />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
