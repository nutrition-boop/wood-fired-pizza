import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link 
      href={post.slug === "how-to-choose-the-firewood" ? `/${post.slug}` : `/blog/${post.slug}`} 
      className="post-card" 
      id={`post-${post.slug}`}
    >
      <img
        className="post-card-image"
        src={post.coverImage}
        alt={post.title}
        width="600"
        height="338"
        loading="lazy"
        decoding="async"
      />
      <div className="post-card-body">
        <div className="post-card-meta">
          <span className="post-card-category">{post.category}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="post-card-title">{post.title}</h3>
        <p className="post-card-excerpt">{post.excerpt}</p>
        <div className="post-card-footer">
          <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span className="read-more">Read more →</span>
        </div>
      </div>
    </Link>
  );
}
