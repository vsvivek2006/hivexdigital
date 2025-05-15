import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
};

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <div className="card overflow-hidden group">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-hidden h-full min-h-[300px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-8 flex flex-col">
            <div className="mb-auto">
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm mb-4">
                {post.category}
              </span>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary-600 transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{post.author.name}</p>
                  <p className="text-gray-500 text-xs">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={14} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="card overflow-hidden group">
      <div className="relative overflow-hidden h-56">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-medium text-sm">{post.author.name}</p>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;