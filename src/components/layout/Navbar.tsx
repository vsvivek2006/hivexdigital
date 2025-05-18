import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MenuIcon, X,  } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
  <img
    src="/PNGlogo.png"
    alt="Logo"
    className={`h-16 w-auto filter brightness-200 transition-all duration-300   ${
      isScrolled ? '' : 'invert'
    }`}
  />
</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              `font-medium transition-colors duration-200 ${
                isScrolled 
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600' 
                  : isActive ? 'text-white' : 'text-gray-100 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              `font-medium transition-colors duration-200 ${
                isScrolled 
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600' 
                  : isActive ? 'text-white' : 'text-gray-100 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/services"
            className={({ isActive }) => 
              `font-medium transition-colors duration-200 ${
                isScrolled 
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600' 
                  : isActive ? 'text-white' : 'text-gray-100 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/portfolio"
            className={({ isActive }) => 
              `font-medium transition-colors duration-200 ${
                isScrolled 
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600' 
                  : isActive ? 'text-white' : 'text-gray-100 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/pricing"
            className={({ isActive }) => 
              `font-medium transition-colors duration-200 ${
                isScrolled 
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600' 
                  : isActive ? 'text-white' : 'text-gray-100 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/blog"
            className={({ isActive }) => 
              `font-medium transition-colors duration-200 ${
                isScrolled 
                  ? isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600' 
                  : isActive ? 'text-white' : 'text-gray-100 hover:text-white'
              }`
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <Link 
            to="/contact"
            className={`btn ${
              isScrolled 
                ? 'btn-primary' 
                : 'bg-white text-primary-600 hover:bg-gray-100 focus:ring-white'
            }`}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X 
              size={24} 
              className={isScrolled ? 'text-gray-800' : 'text-white'} 
            />
          ) : (
            <MenuIcon 
              size={24} 
              className={isScrolled ? 'text-gray-800' : 'text-white'} 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-slide-down">
          <nav className="container flex flex-col py-8 space-y-6">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `text-lg font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `text-lg font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/services"
              className={({ isActive }) => 
                `text-lg font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/portfolio"
              className={({ isActive }) => 
                `text-lg font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/pricing"
              className={({ isActive }) => 
                `text-lg font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/blog"
              className={({ isActive }) => 
                `text-lg font-medium py-2 ${isActive ? 'text-primary-600' : 'text-gray-800'}`
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
            <Link 
              to="/contact"
              className="btn btn-primary mt-4 w-full text-center"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
