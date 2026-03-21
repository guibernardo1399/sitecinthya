import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const whatsappNumber = '5591998401830';
  const whatsappMessage = 'Olá! Gostaria de falar com um advogado.';

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Áreas de Atuação', path: '/areas' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="navbar-logo">
            <img 
              src="/images/logo.jpg" 
              alt="Cinthya Nascimento Advocacia" 
              className="h-14 w-14 rounded-full object-cover border-2 border-gray-200"
            />
            <div className="ml-3 text-xl font-bold tracking-tight hidden sm:block">
              <span className="text-[#1A1D23]">Cinthya Nascimento</span>
              <span className="text-[#5B9A8B] ml-1">Advocacia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#5B9A8B] ${
                  isActive(link.path) ? 'text-[#5B9A8B]' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA - Desktop */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="navbar-whatsapp-button"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20BD5A] transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  className={`block text-base font-medium py-2 transition-colors ${
                    isActive(link.path) ? 'text-[#5B9A8B]' : 'text-gray-700 hover:text-[#5B9A8B]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-whatsapp-button"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20BD5A] transition-all w-full mt-4"
              >
                <MessageCircle size={18} />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;