import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';

type Lead = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  subject?: string;
  message: string;
  createdAt: string;
};

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const loggedIn = isLoggedIn();

  useEffect(() => {
    if (loggedIn) {
      fetch('/api/leads').then(res => res.json()).then(setLeads);
    }
  }, [loggedIn]);

  if (!loggedIn) return <Navigate to="/admin" replace />;

  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Service</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Message</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map(l => (
              <tr key={l._id} className="border-t">
                <td className="p-2">{l.name}</td>
                <td className="p-2 break-all">{l.email}</td>
                <td className="p-2">{l.phone || 'N/A'}</td>
                <td className="p-2">{l.service}</td>
                <td className="p-2">{l.subject}</td>
                <td className="p-2">{l.message}</td>
                <td className="p-2">{new Date(l.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
