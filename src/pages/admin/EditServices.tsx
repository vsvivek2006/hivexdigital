import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export default function EditServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/sections/services')
      .then(res => res.json())
      .then(data => setServices(data.services || []));
  }, []);

  const handleChange = (index: number, field: keyof ServiceItem, value: string) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  const addService = () => {
    setServices([...services, { icon: '', title: '', description: '' }]);
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/sections/services', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ services })
    });
    navigate('/');
  };

  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold mb-4">Edit Services Section</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {services.map((service, idx) => (
          <div key={idx} className="border p-4 rounded space-y-2">
            <input
              value={service.icon}
              onChange={e => handleChange(idx, 'icon', e.target.value)}
              placeholder="Icon name (e.g. Search)"
              className="w-full p-2 border rounded"
            />
            <input
              value={service.title}
              onChange={e => handleChange(idx, 'title', e.target.value)}
              placeholder="Service Title"
              className="w-full p-2 border rounded"
            />
            <input
              value={service.description}
              onChange={e => handleChange(idx, 'description', e.target.value)}
              placeholder="Short Description"
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeService(idx)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addService} className="bg-gray-100 p-2 rounded">
          Add Service
        </button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Save
        </button>
      </form>
    </div>
  );
}
