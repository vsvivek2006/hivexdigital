import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Blog = {
  _id: string;
  title: string;
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const load = () =>
    fetch('/api/blogs').then(res => res.json()).then(setBlogs);

  useEffect(() => { load(); }, []);

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
          <li key={b._id} className="border-b py-2 flex justify-between">
            <span>{b.title}</span>
            <span>
              <Link to={`/admin/edit-blog/${b._id}`} className="text-blue-600 mr-2">Edit</Link>
              <button onClick={() => handleDelete(b._id)} className="text-red-600">Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
