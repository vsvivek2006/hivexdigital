import { Link } from 'react-router-dom';
import { BlogPost } from '../../pages/Blog';

type Props = {
  post: BlogPost;
  featured?: boolean;
};

const BlogCard = ({ post, featured = false }: Props) => {
  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded shadow-lg">
        {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover" />}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 line-clamp-3">{post.metaDescription}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded shadow-md hover:shadow-lg transition">
      {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-2">{post.metaDescription}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
