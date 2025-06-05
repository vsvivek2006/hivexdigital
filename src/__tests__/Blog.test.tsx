import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from '../pages/Blog';
import '@testing-library/jest-dom';

const posts = [
  { _id: '1', title: 'SEO Tips', slug: 'seo-tips', metaDescription: 'About SEO', createdAt: '', coverImage: '' },
  { _id: '2', title: 'Other Post', slug: 'other', metaDescription: 'Other', createdAt: '', coverImage: '' }
];

describe('Blog filtering', () => {
  it('shows only posts matching search term', () => {
    render(
      <MemoryRouter>
        <Blog initialPosts={posts} />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/search hivix digital articles/i);
    fireEvent.change(searchInput, { target: { value: 'SEO' } });

    expect(screen.getByText(/SEO Tips/i)).toBeInTheDocument();
    expect(screen.queryByText(/Other Post/i)).not.toBeInTheDocument();
  });
});
