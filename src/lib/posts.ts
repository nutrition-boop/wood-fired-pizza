import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  faqs?: { question: string; answer: string }[];
}

export interface Post extends PostMeta {
  content: string;
}

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensurePostsDirectory();

  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '/images/default-cover.jpg',
      author: data.author || 'Wood Fired Pizza Oven Team',
      category: data.category || 'General',
      tags: data.tags || [],
      readingTime: stats.text,
      faqs: data.faqs || [],
    };
  });

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(p => p.category));
  return Array.from(categories).sort();
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensurePostsDirectory();

  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || '/images/default-cover.jpg',
    author: data.author || 'Wood Fired Pizza Oven Team',
    category: data.category || 'General',
    tags: data.tags || [],
    readingTime: stats.text,
    faqs: data.faqs || [],
    content: contentHtml,
  };
}

export function getAllSlugs(): string[] {
  ensurePostsDirectory();
  return fs.readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}
