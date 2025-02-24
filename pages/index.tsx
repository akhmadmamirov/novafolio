import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";
import Header from "@/components/Header";

export default function Home() {
  return (
      <main className="min-h-screen">
        <div className="flex flex-col items-center pt-24 px-4 sm:px-8">
          <Header/>
        </div>
        <Profile />
        <Posts />
        <Footer />
      </main>
  );
}
