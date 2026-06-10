import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { SERVICE_LINKS } from '../config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-navy border-brand-navy/20 py-3 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
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

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-heading font-bold text-sm tracking-wider uppercase transition-colors duration-300 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-mint after:scale-x-0 after:origin-right hover:after:scale-x-105 hover:after:origin-left after:transition-transform after:duration-300 ${
                isActive
                  ? 'text-brand-mint after:scale-x-105'
                  : 'text-white/80 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`font-heading font-bold text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-1 py-1 ${
                isServicesOpen ? 'text-brand-mint' : 'text-white/80 hover:text-white'
              }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-brand-navy border border-white/10 rounded-2xl shadow-xl py-2 z-50">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-brand-mint hover:bg-white/5 font-medium transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setIsServicesOpen(false)}
                  className="block px-4 py-2.5 text-xs text-brand-cyan hover:text-brand-mint font-bold uppercase tracking-wider border-t border-white/10 mt-1"
                >
                  View All Services →
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-brand-mint p-1 focus:outline-none transition-colors duration-300"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-brand-navy z-40 transform transition-transform duration-500 flex flex-col justify-center items-center gap-8 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-brand-mint transition-colors duration-300"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-6 items-center text-center">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-heading font-extrabold text-2xl uppercase tracking-widest transition-colors duration-300 ${
                isActive ? 'text-brand-mint' : 'text-white hover:text-brand-mint'
              }`
            }
          >
            Home
          </NavLink>

          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="font-heading font-extrabold text-2xl uppercase tracking-widest text-white hover:text-brand-mint transition-colors flex items-center gap-2"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isMobileServicesOpen && (
              <div className="flex flex-col gap-3 mt-2">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                    className="text-base text-white/70 hover:text-brand-mint font-medium"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-heading font-extrabold text-2xl uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-brand-mint' : 'text-white hover:text-brand-mint'
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
