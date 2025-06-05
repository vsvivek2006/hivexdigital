import { useEffect, useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import slugify from 'slugify';

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  useEffect(() => {
    if (!loggedIn) return;
    fetch(`/api/blogs/${id}`).then(res => res.json()).then(b => {
      setTitle(b.title);
      setMetaTitle(b.metaTitle || '');
      setMetaDescription(b.metaDescription || '');
      setContent(b.content);
      setCoverImage(b.coverImage || '');
    });
  }, [id, loggedIn]);

  if (!loggedIn) return <Navigate to="/admin" replace />;

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const slug = slugify(title, { lower: true, strict: true });
    await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, metaTitle, metaDescription, slug, content, coverImage })
    });
    navigate('/admin/blogs');
  };

  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <input value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded" />
        <input value={metaTitle} onChange={e => setMetaTitle(e.target.value)} placeholder="Meta Title" className="w-full p-2 border rounded" />
        <textarea value={metaDescription} onChange={e => setMetaDescription(e.target.value)} placeholder="Meta Description" className="w-full p-2 border rounded" />
        <ReactQuill value={content} onChange={setContent} className="bg-white" />
        <input value={coverImage} onChange={e => setCoverImage(e.target.value)} placeholder="Image URL" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Save</button>
      </form>
    </div>
  );
}
