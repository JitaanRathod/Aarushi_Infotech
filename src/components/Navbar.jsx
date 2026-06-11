import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-brand-navy border-brand-navy/20 py-3 shadow-lg transition-all duration-500"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Aarushi Infotech Home"
        >
          <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-1 overflow-hidden shadow-md group-hover:scale-105 transition-all duration-300">
            <img
              src={logo}
              alt="Aarushi Infotech Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-heading font-extrabold text-sm md:text-base leading-tight tracking-wider">
              AARUSHI
            </span>

            <span className="text-brand-mint font-heading font-semibold text-xs leading-none tracking-widest">
              INFOTECH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">



          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-heading font-bold text-sm tracking-wider uppercase transition-colors duration-300 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-mint after:scale-x-0 after:origin-right hover:after:scale-x-105 hover:after:origin-left after:transition-transform after:duration-300 ${
                  isActive
                    ? 'text-brand-mint after:scale-x-105'
                    : 'text-white/80 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-brand-mint p-1 focus:outline-none transition-colors duration-300"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-brand-navy z-40 transform transition-transform duration-500 flex flex-col justify-center items-center gap-8 ${
          isOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-brand-mint transition-colors duration-300"
          aria-label="Close Menu"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-6 items-center text-center">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-heading font-extrabold text-2xl uppercase tracking-widest transition-colors duration-300 ${
                  isActive
                    ? 'text-brand-mint'
                    : 'text-white hover:text-brand-mint'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}