'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface ScrollLinkProps {
  href: string;
  className?: string;
  ariaLabel?: string;
  tabIndex?: number;
  children: React.ReactNode;
  onAfterClick?: () => void;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ 
  href, 
  className, 
  ariaLabel, 
  tabIndex = 0, 
  children,
  onAfterClick
}) => {
  const router = useRouter();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Extract the section ID from href (e.g., "/#services" -> "services")
    const sectionId = href.split('#')[1];
    
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash in the href, use router to navigate
      router.push(href);
    }

    // Execute callback if provided
    if (onAfterClick) {
      onAfterClick();
    }
  };

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ScrollLink; 