import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';

type Stats = {
  blogs: number;
  leads: number;
};

export default function Dashboard() {
  if (!isLoggedIn()) return <Navigate to="/admin" replace />;

  const [stats, setStats] = useState<Stats>({ blogs: 0, leads: 0 });

  useEffect(() => {
    const load = async () => {
      try {
        const [blogsRes, leadsRes] = await Promise.all([
          fetch('/api/blogs'),
          fetch('/api/leads'),
        ]);
        const blogs = await blogsRes.json();
        const leads = await leadsRes.json();
        setStats({ blogs: blogs.length, leads: leads.length });
      } catch {
        // ignore errors for now
      }
    };

    load();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-4xl font-bold">{stats.blogs}</p>
          <p className="mt-2 text-gray-600">Total Blogs</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-4xl font-bold">{stats.leads}</p>
          <p className="mt-2 text-gray-600">Total Leads</p>
        </div>
      </div>
      <p>Select an option from the navigation to manage content.</p>
    </div>
  );
}
