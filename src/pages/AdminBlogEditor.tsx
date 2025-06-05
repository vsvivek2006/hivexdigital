import BlogAdminEditor from '../components/blog/BlogAdminEditor';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

export default function AdminBlogEditor() {
  if (!isLoggedIn()) return <Navigate to="/admin" replace />;
  return <BlogAdminEditor />;
}
