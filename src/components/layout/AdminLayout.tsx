import { Outlet, Link, useNavigate } from 'react-router-dom';
import { logout, isLoggedIn } from '../../utils/auth';

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg">Admin Panel</h1>
          {isLoggedIn() && (
            <nav className="flex gap-4">
              <Link to="/admin/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link to="/admin/blogs" className="hover:underline">
                Blogs
              </Link>
              <Link to="/admin/leads" className="hover:underline">
                Leads
              </Link>
              <button onClick={handleLogout} className="hover:underline">
                Logout
              </button>
            </nav>
          )}
        </div>
      </header>
      <main className="flex-1 container mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
}
