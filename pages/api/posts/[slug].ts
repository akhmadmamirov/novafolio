import { NextApiRequest, NextApiResponse } from "next";
import { initializeFirebaseAdmin } from "@/utils/firebase-admin";

// Get post by slug
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  try {
    const { adminDb } = initializeFirebaseAdmin();
    const { slug } = req.query;
    const postsSnapshot = await adminDb.collection('posts')
      .where('slug', '==', slug)
      .limit(1)
      .get();
    
    if (postsSnapshot.empty) {
      return res.status(404).send('Post not found');
    }
    
    const post = postsSnapshot.docs[0].data();
    res.json({ id: postsSnapshot.docs[0].id, ...post });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      res.status(500).send(error.message);
    } else {
      console.log(error);
      res.status(500).send('An unknown error occurred');
    }
  }
}
