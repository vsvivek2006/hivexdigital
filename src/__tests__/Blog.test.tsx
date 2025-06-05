import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from '../pages/Blog';
import '@testing-library/jest-dom';

describe('Blog filtering', () => {
  it('shows only posts matching search term and category', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/search hivix digital articles/i);
    fireEvent.change(searchInput, { target: { value: 'SEO' } });

    const categoryButton = screen.getByRole('button', { name: 'SEO' });
    fireEvent.click(categoryButton);

    expect(screen.getByText(/10 SEO Strategies That Actually Work in 2025/i)).toBeInTheDocument();
    expect(screen.queryByText(/How to Create a Social Media Strategy That Converts/i)).not.toBeInTheDocument();
  });
});
