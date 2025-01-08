import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";

export default function Home() {
  return (
      <main className="min-h-screen">
        <Profile />
        <Posts />
        <Footer />
      </main>
  );
}
