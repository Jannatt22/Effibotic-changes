'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollLink from './ScrollLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing dropdown
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveDropdown(null); // Close dropdown after clicking
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
          <div 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter('product')} 
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-xl cursor-pointer flex items-center gap-1"
              onClick={() => scrollToSection('products')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection('products');
                } else {
                  handleKeyDownDropdown(e, 'product');
                }
              }}
              aria-label="Products"
              tabIndex={0}
              aria-expanded={activeDropdown === 'product'}
              aria-haspopup="true"
            >
              <ScrollLink
                href="/#products"
                className="flex items-center gap-1"
                ariaLabel="Products"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </ScrollLink>
            </div>
            {activeDropdown === 'product' && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <ScrollLink 
                    href="/#products"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="AI Receptionist"
                    tabIndex={0}
                  >
                    AI Receptionist
                  </ScrollLink>
                  <ScrollLink 
                    href="/#products"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="AI Chatbot"
                    tabIndex={0}
                  >
                    AI Chatbot
                  </ScrollLink>
                  <ScrollLink 
                    href="/#products"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="AI Lead Generator"
                    tabIndex={0}
                  >
                    AI Lead Generator
                  </ScrollLink>
                </div>
              </div>
            )}
          </div>
          
          {/* Services Dropdown */}
          <div 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter('services')} 
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-xl cursor-pointer flex items-center gap-1"
              onClick={() => scrollToSection('services')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection('services');
                } else {
                  handleKeyDownDropdown(e, 'services');
                }
              }}
              aria-label="Services"
              tabIndex={0}
              aria-expanded={activeDropdown === 'services'}
              aria-haspopup="true"
            >
              <ScrollLink
                href="/#services"
                className="flex items-center gap-1"
                ariaLabel="Services"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </ScrollLink>
            </div>
            {activeDropdown === 'services' && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <ScrollLink 
                    href="/#services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="AI Consultation"
                    tabIndex={0}
                  >
                    AI Consultation
                  </ScrollLink>
                  <ScrollLink 
                    href="/#services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="Business Intelligence"
                    tabIndex={0}
                  >
                    Business Intelligence
                  </ScrollLink>
                  <ScrollLink 
                    href="/#services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="AI Startup Suite"
                    tabIndex={0}
                  >
                    AI Startup Suite
                  </ScrollLink>
                </div>
              </div>
            )}
          </div>
          
          {/* Training Dropdown */}
          <div 
            className="relative group" 
            onMouseEnter={() => handleMouseEnter('training')} 
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-xl cursor-pointer flex items-center gap-1"
              onClick={() => {
                handleToggleDropdown('training');
                scrollToSection('training');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToSection('training');
                } else {
                  handleKeyDownDropdown(e, 'training');
                }
              }}
              aria-label="Training"
              tabIndex={0}
              aria-expanded={activeDropdown === 'training'}
              aria-haspopup="true"
            >
              <ScrollLink
                href="/#training"
                className="flex items-center gap-1"
                ariaLabel="Training"
              >
                Training
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'training' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </ScrollLink>
            </div>
            {activeDropdown === 'training' && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <ScrollLink 
                    href="/#training"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="AI Training for SME / Startup"
                    tabIndex={0}
                  >
                    AI Training for SME / Startup
                  </ScrollLink>
                  <ScrollLink 
                    href="/#training"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="AI Training for Healthcare Professionals"
                    tabIndex={0}
                  >
                    AI Training for Healthcare Professionals
                  </ScrollLink>
                  <ScrollLink 
                    href="/#training"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                    ariaLabel="Advanced AI Automation Training"
                    tabIndex={0}
                  >
                    Advanced AI Automation Training
                  </ScrollLink>
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
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md mt-0 py-4 md:hidden z-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {/* Mobile Products Dropdown */}
                <div>
                  <div
                    className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                    onClick={() => {
                      if (activeDropdown === 'product-mobile') {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown('product-mobile');
                        scrollToSection('products');
                      }
                    }}
                  >
                    <ScrollLink
                      href="/#products"
                      className="font-medium flex-grow"
                      ariaLabel="Products"
                    >
                      Products
                    </ScrollLink>
                    <svg 
                      className={`w-4 h-4 transition-transform ${activeDropdown === 'product-mobile' ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {activeDropdown === 'product-mobile' && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                      <ScrollLink 
                        href="/#products"
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="AI Receptionist"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        AI Receptionist
                      </ScrollLink>
                      <ScrollLink 
                        href="/#products"
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="AI Chatbot"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        AI Chatbot
                      </ScrollLink>
                      <ScrollLink 
                        href="/#products"
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="AI Lead Generator"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        AI Lead Generator
                      </ScrollLink>
                    </div>
                  )}
                </div>
                
                {/* Mobile Services Dropdown */}
                <div>
                  <div
                    className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                    onClick={() => {
                      if (activeDropdown === 'services-mobile') {
                        setActiveDropdown(null);
                      } else {
                        setActiveDropdown('services-mobile');
                        scrollToSection('services');
                      }
                    }}
                  >
                    <ScrollLink
                      href="/#services"
                      className="font-medium flex-grow"
                      ariaLabel="Services"
                    >
                      Services
                    </ScrollLink>
                    <svg 
                      className={`w-4 h-4 transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {activeDropdown === 'services-mobile' && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                      <ScrollLink 
                        href="/#services" 
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="AI Consultation"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        AI Consultation
                      </ScrollLink>
                      <ScrollLink 
                        href="/#services" 
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="Business Intelligence"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        Business Intelligence
                      </ScrollLink>
                      <ScrollLink 
                        href="/#services" 
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="AI Startup Suite"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        AI Startup Suite
                      </ScrollLink>
                    </div>
                  )}
                </div>
                
                {/* Mobile Training Dropdown */}
                <div>
                  <div
                    className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                    onClick={() => {
                      handleToggleDropdown('training-mobile');
                      scrollToSection('training');
                    }}
                  >
                    <ScrollLink
                      href="/#training"
                      className="font-medium flex-grow"
                      ariaLabel="Training"
                      onAfterClick={() => setIsMenuOpen(false)}
                    >
                      Training
                    </ScrollLink>
                    <svg 
                      className={`w-4 h-4 transition-transform ${activeDropdown === 'training-mobile' ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {activeDropdown === 'training-mobile' && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                      <ScrollLink 
                        href="/#training" 
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="AI Training for SME / Startup"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        AI Training for SME / Startup
                      </ScrollLink>
                      <ScrollLink 
                        href="/#training" 
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="AI Training for Healthcare Professionals"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        AI Training for Healthcare Professionals
                      </ScrollLink>
                      <ScrollLink 
                        href="/#training" 
                        className="block text-gray-600 hover:text-primary-600"
                        ariaLabel="Advanced AI Automation Training"
                        tabIndex={0}
                        onAfterClick={() => setIsMenuOpen(false)}
                      >
                        Advanced AI Automation Training
                      </ScrollLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 