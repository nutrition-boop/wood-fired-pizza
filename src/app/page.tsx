import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7);

  return (
    <>
      {/* Hero */}
      <section className="hero" id="home-hero">
        <h1 className="animate-in">
          Master the Art of <span>Wood Fired Pizza</span>
        </h1>
        <p className="animate-in animate-delay-1">
          Expert guides, authentic recipes, oven reviews, and everything you
          need to create restaurant-quality pizza at home.
        </p>
      </section>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="section" id="featured-section">
          <h2 className="section-title">Featured Article</h2>
          <p className="section-subtitle">Our top pick for you</p>
          <Link href={`/blog/${featuredPost.slug}`} className="featured-card">
            <Image
              className="post-card-image"
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              width={800}
              height={450}
              priority
            />
            <div className="post-card-body">
              <span className="featured-badge">🔥 Featured</span>
              <span className="post-card-category">
                {featuredPost.category}
              </span>
              <h3
                className="post-card-title"
                style={{ fontSize: "1.6rem", marginTop: "12px" }}
              >
                {featuredPost.title}
              </h3>
              <p className="post-card-excerpt">{featuredPost.excerpt}</p>
              <div className="post-card-footer">
                <span>{featuredPost.date} · {featuredPost.readingTime}</span>
                <span className="read-more">Read article →</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="section" id="recent-posts">
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Fresh content about wood-fired cooking
          </p>
          <div className="posts-grid">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Empty state if no posts */}
      {posts.length === 0 && (
        <section className="section">
          <div className="empty-state">
            <div className="empty-state-icon">🍕</div>
            <h3>No Posts Yet</h3>
            <p>
              Blog posts will appear here once you add markdown files to the
              <code> content/blog/ </code> directory.
            </p>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="section" id="newsletter-section">
        <div className="newsletter">
          <h3>Stay in the Loop 🔥</h3>
          <p>
            Get the latest wood-fired pizza tips, recipes, and oven reviews
            delivered to your inbox.
          </p>
          <form className="newsletter-form" id="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              id="newsletter-email"
            />
            <button type="submit" id="newsletter-submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
