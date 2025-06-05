import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';

type Blog = {
  _id: string;
  title: string;
  slug: string;
  createdAt: string;
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const loggedIn = isLoggedIn();

  const load = () =>
    fetch('/api/blogs').then(res => res.json()).then(setBlogs);

  useEffect(() => {
    if (loggedIn) load();
  }, [loggedIn]);

  if (!loggedIn) return <Navigate to="/admin" replace />;

  const handleDelete = async(id: string) => {
    await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div className="container py-16">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link to="/admin/add-blog" className="bg-blue-600 text-white px-4 py-2 rounded">Add</Link>
      </div>
      <ul>
        {blogs.map(b => (
          <li key={b._id} className="border-b py-2 grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
            <span className="font-medium">{b.title}</span>
            <span className="text-sm break-all">{b.slug}</span>
            <span className="text-sm">{new Date(b.createdAt).toLocaleDateString()}</span>
            <span className="flex gap-2 justify-end">
              <Link to={`/admin/edit-blog/${b._id}`} className="text-blue-600">Edit</Link>
              <button onClick={() => handleDelete(b._id)} className="text-red-600">Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
