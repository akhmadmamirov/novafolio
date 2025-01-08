import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import type { Posts } from "@/utils/types/components";
import { posts } from "@/data/posts";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const Posts: React.FC = () => {
  const router = useRouter();
  
  const handlePostClick = (slug: string) => {
    router.push(`/posts/${slug}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex">
        <FaLongArrowAltDown className="w-3 h-3 mt-3 mr-3" />
        <h2 className="text-2xl mb-8 text-gray-100">Latest News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <Post
            key={post.slug}
            post={post}
            onClick={() => handlePostClick(post.slug)}
          />
        ))}
      </div>
    </div>
  );
};

type PostProps = {
  post: Posts[0];
  onClick: () => void;
};

const Post: React.FC<PostProps> = ({ post, onClick }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mb-3">
        <Image
          src={post.thumbNail}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onClick={onClick}
        />
      </div>
      <div className="space-y-2">
        <h3 
          className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2"
          onClick={onClick}
        >
          {post.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          {post.content}
        </p>
        <button 
          onClick={onClick}
          className="inline-flex items-center space-x-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          <span>Read More</span>
          <FaLongArrowAltRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Posts;