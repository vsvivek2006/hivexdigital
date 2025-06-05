import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Leads from './pages/admin/Leads';
import BlogList from './pages/admin/BlogList';
import AddBlog from './pages/admin/AddBlog';
import EditBlog from './pages/admin/EditBlog';
import AdminBlogEditor from './pages/AdminBlogEditor';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="admin/blogs" element={<BlogList />} />
          <Route path="admin/add-blog" element={<AddBlog />} />
          <Route path="admin/edit-blog/:id" element={<EditBlog />} />
          <Route path="admin/blog-editor" element={<AdminBlogEditor />} />
          <Route path="admin/leads" element={<Leads />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;