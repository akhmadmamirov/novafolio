import { NextApiRequest, NextApiResponse } from "next";
import { initializeFirebaseAdmin } from "../firebase-admin";
import admin from "firebase-admin"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 if (req.method === "GET") {
  try {
    const { adminDb } = initializeFirebaseAdmin();
    const postsSnapshot = await adminDb.collection('posts')
      .orderBy('createdAt', 'desc')
      .get();

    const posts : any = [];
    postsSnapshot.forEach(doc => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    res.json(posts);
    } catch (error : any) {
    console.log(error)
    res.status(500).send(error.message);
  }
}
if (req.method === "POST"){
  const { adminDb } = initializeFirebaseAdmin();
  try {
    const { title, content, imageUrls = [], tags = [] } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const postData = {
      title,
      slug,
      content,
      imageUrls,
      tags,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      published: false 
    };

    // Check if slug already exists
    const existing = await adminDb.collection('posts')
      .where('slug', '==', slug)
      .get();
    
    if (!existing.empty) {
      return res.status(400).json({ error: 'A post with this title already exists' });
    }

    const docRef = await adminDb.collection('posts').add(postData);
    res.status(201).json({ 
      id: docRef.id,
      ...postData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
 }
}