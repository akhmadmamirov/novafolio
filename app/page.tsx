import About from "./about";
import Blog from "./blog";
import Profile from "./profile";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Profile />
      <About />
      <Blog />
    </main>
  );
}
