import { useRouter } from "next/router";
import { posts } from "@/data/posts";
import Image from "next/image";

const PostDetails: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center text-gray-300">Post not found.</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formattedContent = post.content
    .replace(/\n\n/g, '<p class="mb-6"></p>')
    .replace(/\n/g, '<br />');

  return (
    <article className="max-w-4xl mx-auto p-6 text-gray-100">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <time dateTime={post.createdAt}>
            {formatDate(post.createdAt)}
          </time>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-10 relative aspect-video w-full overflow-hidden rounded-xl">
        <Image 
          src={post.thumbNail}
          alt="Article cover image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <div
          className="text-gray-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </div>

      {/* Author Section */}
      <div className="mt-12 pt-8 border-t border-gray-700">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
            <Image
              src="/profile.png" // Add your author avatar path
              alt="Author avatar"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium text-gray-200">
              Akhmadillo Mamirov
            </div>
            <div className="text-sm text-gray-400">
              Software Engineer
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetails;