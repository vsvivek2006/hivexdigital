import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/blogs/${id}`).then(res => res.json()).then(b => {
      setTitle(b.title); setContent(b.content); setCoverImage(b.coverImage || '');
    });
  }, [id]);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title, content, coverImage})
    });
    navigate('/admin/blogs');
  };

  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border" />
        <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border h-40" />
        <input value={coverImage} onChange={e => setCoverImage(e.target.value)} className="w-full p-2 border" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
