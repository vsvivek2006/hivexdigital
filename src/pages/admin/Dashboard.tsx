import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';

export default function Dashboard() {
  if (!isLoggedIn()) return <Navigate to="/admin" replace />;
  return (
    <div className="container py-16">
      <div className="bg-white rounded shadow p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p className="text-gray-700">Select an option from the navigation to manage content.</p>
      </div>
    </div>
  );
}
