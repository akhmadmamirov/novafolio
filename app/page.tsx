import About from "./about";
import Blog from "./blog";
import FirstPage from "./firstPage";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FirstPage />
      <About />
      <Blog />
    </main>
  );
}
