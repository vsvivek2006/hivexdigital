import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title, content, coverImage})
    });
    navigate('/admin/blogs');
  };

  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold mb-4">Add Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border" />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" className="w-full p-2 border h-40" />
        <input value={coverImage} onChange={e => setCoverImage(e.target.value)} placeholder="Image URL" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
