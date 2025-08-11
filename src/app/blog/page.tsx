import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiArrowRight, FiClock } from 'react-icons/fi';
import BlogSidebar from '../components/Blog/BlogSidebar';

interface Blog {
  id: string; slug: string; title: string; excerpt: string; image: string; author: string; category: string; readTime: string; createdAt: string;
}

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error("Failed to fetch blogs");
      return [];
    }
    return await res.json() as Blog[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

const BlogPostCard: React.FC<Blog> = ({ slug, title, excerpt, image, category, readTime, createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image fill src={image} alt={title} className="object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center mr-4"><FiCalendar className="mr-1" /> {formattedDate}</span>
          <span className="flex items-center"><FiClock className="mr-1" /> {readTime}</span>
        </div>
        <span className="inline-block self-start px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-300 mt-auto">
          Read more <FiArrowRight className="ml-1" />
        </Link>
      </div>
    </article>
  );
};

export default async function BlogPage() {
  const blogPosts = await getBlogs();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Insights & Updates</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Stay updated with the latest trends, tutorials, and company news
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            {blogPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (<BlogPostCard key={post.id} {...post} />))}
              </div>
            ) : (<p>No blog posts found.</p>)}
          </main>
          <aside className="lg:w-1/3">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}