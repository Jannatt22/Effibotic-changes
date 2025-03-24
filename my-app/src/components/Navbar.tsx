'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDownToggle = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleMenu();
    }
  };

  const handleToggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleKeyDownDropdown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleDropdown(dropdown);
    }
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo-icon.svg" 
            alt="Effibotic Logo" 
            width={48} 
            height={48} 
            className="h-12 w-auto"
          />
          <span className="text-3xl font-bold text-primary-700">Effibotic</span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-16 flex-1 mx-4">
          {/* Product Dropdown */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('product')} onMouseLeave={handleMouseLeave}>
            <div
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-xl cursor-pointer flex items-center gap-1"
              onClick={() => handleToggleDropdown('product')}
              onKeyDown={(e) => handleKeyDownDropdown(e, 'product')}
              aria-label="Products"
              tabIndex={0}
              aria-expanded={activeDropdown === 'product'}
              aria-haspopup="true"
            >
              Products
              <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'product' && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link 
                    href="/product/ai-receptionist"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    AI Receptionist
                  </Link>
                  <Link 
                    href="/product/ai-chatbot"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    AI Chatbot
                  </Link>
                  <Link 
                    href="/product/ai-lead-generator"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    AI Lead Generator
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
            <div
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-xl cursor-pointer flex items-center gap-1"
              onClick={() => handleToggleDropdown('services')}
              onKeyDown={(e) => handleKeyDownDropdown(e, 'services')}
              aria-label="Services"
              tabIndex={0}
              aria-expanded={activeDropdown === 'services'}
              aria-haspopup="true"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'services' && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link 
                    href="/services/ai-consultation"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    AI Consultation
                  </Link>
                  <Link 
                    href="/services/business-intelligence"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    Business Intelligence
                  </Link>
                  <Link 
                    href="/services/it-support"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    IT Support
                  </Link>
                  <Link 
                    href="/services/ai-startup-suite"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    AI Startup Suite
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* Training Dropdown */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('training')} onMouseLeave={handleMouseLeave}>
            <div
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-xl cursor-pointer flex items-center gap-1"
              onClick={() => handleToggleDropdown('training')}
              onKeyDown={(e) => handleKeyDownDropdown(e, 'training')}
              aria-label="Training"
              tabIndex={0}
              aria-expanded={activeDropdown === 'training'}
              aria-haspopup="true"
            >
              Training
              <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'training' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'training' && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link 
                    href="/training/sme"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    Training for SME
                  </Link>
                  <Link 
                    href="/training/startups"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    role="menuitem"
                    tabIndex={0}
                  >
                    Training for Startups
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Book Demo */}
        <div className="hidden md:block">
          <Link 
            href="/book-demo" 
            className="bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 px-8 py-3 rounded-full font-semibold transition-colors text-xl shadow-md hover:shadow-lg"
            aria-label="Book Demo"
            tabIndex={0}
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Button with Book Demo Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Mobile Book Demo Button */}
          <Link 
            href="/book-demo" 
            className="bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 px-4 py-2 rounded-full font-semibold transition-colors text-sm shadow-md"
            aria-label="Book Demo"
            tabIndex={0}
          >
            Demo
          </Link>
          
          <button
            type="button"
            className="text-gray-700 hover:text-primary-600 focus:outline-none"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDownToggle}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            tabIndex={0}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out shadow-lg ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {/* Mobile Product Dropdown */}
          <div>
            <div 
              className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 px-4 text-xl"
              onClick={() => handleToggleDropdown('mobile-product')}
              onKeyDown={(e) => handleKeyDownDropdown(e, 'mobile-product')}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-expanded={activeDropdown === 'mobile-product'}
              aria-haspopup="true"
            >
              <span>Products</span>
              <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-product' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'mobile-product' && (
              <div className="pl-8 py-2 space-y-2">
                <Link 
                  href="/product/ai-receptionist"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  AI Receptionist
                </Link>
                <Link 
                  href="/product/ai-chatbot"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  AI Chatbot
                </Link>
                <Link 
                  href="/product/ai-lead-generator"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  AI Lead Generator
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Services Dropdown */}
          <div>
            <div 
              className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 px-4 text-xl"
              onClick={() => handleToggleDropdown('mobile-services')}
              onKeyDown={(e) => handleKeyDownDropdown(e, 'mobile-services')}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-expanded={activeDropdown === 'mobile-services'}
              aria-haspopup="true"
            >
              <span>Services</span>
              <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'mobile-services' && (
              <div className="pl-8 py-2 space-y-2">
                <Link 
                  href="/services/ai-consultation"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  AI Consultation
                </Link>
                <Link 
                  href="/services/business-intelligence"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  Business Intelligence
                </Link>
                <Link 
                  href="/services/it-support"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  IT Support
                </Link>
                <Link 
                  href="/services/ai-startup-suite"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  AI Startup Suite
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile Training Dropdown */}
          <div>
            <div 
              className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 px-4 text-xl"
              onClick={() => handleToggleDropdown('mobile-training')}
              onKeyDown={(e) => handleKeyDownDropdown(e, 'mobile-training')}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-expanded={activeDropdown === 'mobile-training'}
              aria-haspopup="true"
            >
              <span>Training</span>
              <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-training' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'mobile-training' && (
              <div className="pl-8 py-2 space-y-2">
                <Link 
                  href="/training/sme"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  Training for SME
                </Link>
                <Link 
                  href="/training/startups"
                  className="block text-gray-700 hover:text-primary-600 py-1"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={handleToggleMenu}
                >
                  Training for Startups
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 