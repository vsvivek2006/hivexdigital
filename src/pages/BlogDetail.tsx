import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null as any);

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  if (!post) return <div className="container py-16">Loading...</div>;

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.coverImage && <img src={post.coverImage} className="mb-4" alt="" />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
