import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroContent {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaUrl?: string;
  image?: string;
}

export default function EditHero() {
  const [content, setContent] = useState<HeroContent>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/sections/hero')
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/sections/hero', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    });
    navigate('/');
  };

  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold mb-4">Edit Hero Section</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <input
          name="heading"
          value={content.heading || ''}
          onChange={handleChange}
          placeholder="Heading"
          className="w-full p-2 border rounded"
        />
        <input
          name="subheading"
          value={content.subheading || ''}
          onChange={handleChange}
          placeholder="Subheading"
          className="w-full p-2 border rounded"
        />
        <input
          name="ctaText"
          value={content.ctaText || ''}
          onChange={handleChange}
          placeholder="CTA Text"
          className="w-full p-2 border rounded"
        />
        <input
          name="ctaUrl"
          value={content.ctaUrl || ''}
          onChange={handleChange}
          placeholder="CTA URL"
          className="w-full p-2 border rounded"
        />
        <input
          name="image"
          value={content.image || ''}
          onChange={handleChange}
          placeholder="Hero Image URL"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Save
        </button>
      </form>
    </div>
  );
}
