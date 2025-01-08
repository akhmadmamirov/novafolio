import { useRouter } from "next/router";
import { posts } from "@/data/posts";

const PostDetails: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img
        src={post.imageURL}
        alt={post.title}
        className="w-full h-auto rounded mb-4"
      />
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default PostDetails;
