import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}

// Sample data - replace with backend data later
const samplePosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "John Doe",
    date: "2024-03-20",
    content: "This is a sample blog post about React..."
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    author: "Jane Smith",
    date: "2024-03-19",
    content: "Here are some TypeScript tips and tricks..."
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      
      <div className="space-y-8">
        {samplePosts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="text-gray-600 mb-4">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-700">{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
