import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';

export default function Dashboard() {
  if (!isLoggedIn()) return <Navigate to="/admin" replace />;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Select an option from the navigation to manage content.</p>
    </div>
  );
}
