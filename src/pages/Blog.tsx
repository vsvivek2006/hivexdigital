import { useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import SectionTitle from '../components/common/SectionTitle';
import blogData from '../data/blogData';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(blogData.map(post => post.category)))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <div className="bg-gradient-blue py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Insights, tips, and strategies to help your business succeed online
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
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-80 pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
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
                title="Latest Articles"
                subtitle="Explore our most recent insights and tips"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;