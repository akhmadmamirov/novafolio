import { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import type { Post } from "@/utils/types/components";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts: any[] = [];
    const postsSnapshot = await getDocs(collection(db, "posts"));
    
    postsSnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Internal error");
  }
}
