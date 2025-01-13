import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import Posts from "@/components/Posts";
import Header from "@/components/Header";
import { JSX, useState } from "react";
import Feedback from "@/components/Feedback";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("experience")
  const setPageOnClick = (page : string) => {
    setCurrentPage(page)
  }

  const pageComponents: {[key:string] : JSX.Element} = {
    experience: <Profile />,
    feedback: <Feedback />
  }

  return (
      <main className="min-h-screen">
        <div className="flex flex-col items-center pt-24 px-4 sm:px-8">
          <Header currentPage={currentPage} setPageOnClick={setPageOnClick}/>
        </div>
        {pageComponents[currentPage] || <Profile />}
        <Posts />
        <Footer />
      </main>
  );
}
