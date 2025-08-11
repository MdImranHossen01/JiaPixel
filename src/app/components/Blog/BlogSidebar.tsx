import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiTag } from 'react-icons/fi';

const BlogSidebar = () => {
  // Placeholder data - you can make this dynamic later
  const categories = [
    { name: "Web Development", count: 12 },
    { name: "UI/UX Design", count: 8 },
    { name: "SEO", count: 5 },
    { name: "Digital Marketing", count: 7 },
  ];

  const popularPosts = [
    {
      slug: 'getting-started-with-nextjs',
      title: "Getting Started with Next.js",
      date: "August 5, 2025",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      slug: 'the-complete-guide-to-css-grid',
      title: "The Future of CSS Layouts",
      date: "July 28, 2025",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
  ];

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Search</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="flex justify-between items-center">
              <Link href="#" className="text-gray-600 hover:text-purple-600 flex items-center">
                <FiTag className="mr-2 text-sm" /> {category.name}
              </Link>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts Widget */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <div key={post.slug} className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.image} 
                    alt={post.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </Link>
              </div>
              <div>
                <Link href={`/blog/${post.slug}`} className="text-gray-800 hover:text-purple-600 font-medium leading-tight">
                  {post.title}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;