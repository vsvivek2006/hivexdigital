import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

type Post = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  coverImage?: string;
};

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`/api/blogs/slug/${slug}`)
      .then(res => res.json())
      .then(setPost);
  }, [slug]);

  if (!post) return <div className="container py-16">Loading...</div>;

  return (
    <div className="container py-16">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.coverImage && <img src={post.coverImage} className="mb-4" alt="" />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
