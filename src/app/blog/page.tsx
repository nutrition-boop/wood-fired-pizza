import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Browse all articles about wood-fired pizza ovens — recipes, reviews, building guides, tips and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="hero" id="blog-hero">
        <h1 className="animate-in">
          The <span>Blog</span>
        </h1>
        <p className="animate-in animate-delay-1">
          Explore our collection of wood-fired pizza articles, recipes, and guides.
        </p>
      </section>

      <section className="section" id="all-posts">
        {posts.length > 0 ? (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">📝</div>
            <h3>Coming Soon</h3>
            <p>
              We&apos;re working on some amazing content. Check back soon!
            </p>
          </div>
        )}
      </section>
    </>
  );
}
