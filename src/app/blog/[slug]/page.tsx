import Image from "next/image";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Comments from "@/components/Comments";
import type { Metadata } from "next";

import FAQAccordion from "@/components/FAQAccordion";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = getAllPosts();
  const recentPosts = allPosts.filter(p => p.slug !== slug).slice(0, 4);

  if (!post || slug === "how-to-choose-the-firewood") {
    notFound();
  }

  // FAQ Schema
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="post-header" id="post-header">
        <div className="post-header-inner">
          <Link href="/blog" className="back-link" id="back-to-blog">
            ← Back to Blog
          </Link>
          <div className="post-header-meta-top">
            <span className="post-card-category">{post.category}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="post-header-meta">
            <span>By {post.author}</span>
            <span className="meta-separator">•</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="meta-separator">•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {post.coverImage && post.coverImage !== "/images/default-cover.jpg" && (
        <div className="post-cover">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            width={1200}
            height={675}
            priority
            unoptimized
            className="post-cover-image"
          />
        </div>
      )}

      <div className="article-layout">
        <main className="article-main">
          <article
            className="article"
            id="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags.length > 0 && (
            <div className="tags" id="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <FAQAccordion faqs={post.faqs} />
          )}

          <Comments postSlug={post.slug} />
        </main>
        
        <aside className="article-sidebar">
          <div className="sidebar-widget">
            <h3 className="widget-title">About the Author</h3>
            <p className="widget-text">
              The Wood Fired Pizza Oven Team consists of seasoned pizzaiolos and backyard cooking enthusiasts dedicated to the craft of wood-fired cooking.
            </p>
          </div>
          
          <div className="sidebar-widget">
            <h3 className="widget-title">Recent Articles</h3>
            <ul className="widget-list">
              {recentPosts.map(rp => (
                <li key={rp.slug}>
                  <Link href={rp.slug === "how-to-choose-the-firewood" ? `/${rp.slug}` : `/blog/${rp.slug}`}>
                    <span className="widget-post-title">{rp.title}</span>
                    <span className="widget-post-date">{new Date(rp.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-widget widget-newsletter">
            <h3 className="widget-title">Join Our Newsletter</h3>
            <p className="widget-text">Get the best tips and recipes delivered straight to your inbox.</p>
            <form className="sidebar-form">
              <input type="email" placeholder="Email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </aside>
      </div>
    </>
  );
}

