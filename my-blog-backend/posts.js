const express = require('express');
const { db } = require('./firebase');
const router = express.Router();

// Middleware to verify admin
const verifyAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }
    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log(decodedToken)
    // Check if the UID matches your admin UID
    if (decodedToken.uid !== process.env.ADMIN_UID) {
      return res.status(403).json({ error: 'Not authorized' });
    }
    
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Create a new post
router.post('/posts', verifyAdmin, async (req, res) => {
  res.status(200).json({message: "Post created"})
  // try {
  //   const { title, content, imageUrls = [], tags = [] } = req.body;
    
  //   // Basic validation
  //   if (!title || !content) {
  //     return res.status(400).json({ error: 'Title and content are required' });
  //   }

  //   // Create URL-friendly slug from title
  //   const slug = title
  //     .toLowerCase()
  //     .replace(/[^a-z0-9]+/g, '-')
  //     .replace(/(^-|-$)/g, '');

  //   const postData = {
  //     title,
  //     slug,
  //     content,
  //     imageUrls,
  //     tags,
  //     createdAt: admin.firestore.FieldValue.serverTimestamp(),
  //     updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  //     published: false // Default to draft
  //   };

  //   // Check if slug already exists
  //   const existing = await db.collection('posts')
  //     .where('slug', '==', slug)
  //     .get();
    
  //   if (!existing.empty) {
  //     return res.status(400).json({ error: 'A post with this title already exists' });
  //   }

  //   const docRef = await db.collection('posts').add(postData);
  //   res.status(201).json({ 
  //     id: docRef.id,
  //     ...postData,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   });

  // } catch (error) {
  //   console.error('Error creating post:', error);
  //   res.status(500).json({ error: 'Failed to create post' });
  // }
});

// Get all published posts
router.get('/posts', async (req, res) => {
  try {
    const postsSnapshot = await db.collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .get();
    
    const posts = [];
    postsSnapshot.forEach(doc => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get single post by slug
router.get('/posts/:slug', async (req, res) => {
  try {
    const postsSnapshot = await db.collection('posts')
      .where('slug', '==', req.params.slug)
      .limit(1)
      .get();
    
    if (postsSnapshot.empty) {
      return res.status(404).send('Post not found');
    }
    
    const post = postsSnapshot.docs[0].data();
    res.json({ id: postsSnapshot.docs[0].id, ...post });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;