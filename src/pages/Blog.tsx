import { useEffect, useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import SectionTitle from '../components/common/SectionTitle';
import { Search } from 'lucide-react';

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  metaDescription: string;
  coverImage?: string;
  createdAt: string;
};
type BlogProps = { initialPosts?: BlogPost[] };

const Blog = ({ initialPosts }: BlogProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);

  useEffect(() => {
    if (!initialPosts) {
      fetch('/api/blogs').then(res => res.json()).then(setPosts);
    }
  }, [initialPosts]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.metaDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <div className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Hivix Digital Blog</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Explore the latest digital marketing insights, tips, and strategies from Hivix Digital — empowering businesses to thrive online since 2025.
          </p>
        </div>
      </div>
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start md:items-center">
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Hivix Digital articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-80 pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <>
              {/* Featured Post */}
              <div className="mb-12">
                <BlogCard post={filteredPosts[0]} featured />
              </div>
              
              <SectionTitle
                title="Latest from Hivix Digital"
                subtitle="Stay ahead with our expert digital marketing knowledge and case studies"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map(post => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to discover Hivix Digital’s latest content.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
