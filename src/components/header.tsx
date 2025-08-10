// src/components/Header.tsx
import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import type { HeaderProps } from '@/types';

export default function Header({ companyInfo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Navbar fluid className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <NavbarBrand href="/">
        <img src="/images/rtb-logo-lg.png" alt={companyInfo.name} className="h-10 mr-3" />
        <span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap text-primary-dark">
          {companyInfo.name}
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <a
          href={`tel:${companyInfo.phone}`}
          className="hidden lg:flex items-center mr-4 text-accent hover:text-accent-dark font-medium"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {companyInfo.phone}
        </a>
        <button
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector('#estimate');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Quote
        </button>
        <NavbarToggle onClick={() => setIsOpen(!isOpen)} />
      </div>

      <NavbarCollapse className={isOpen ? 'block' : ''}>
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="block py-2 pl-3 pr-4 text-primary hover:text-accent cursor-pointer"
        >
          Home
        </a>
        <a
          href="#services"
          onClick={(e) => handleNavClick(e, '#services')}
          className="block py-2 pl-3 pr-4 text-primary hover:text-accent cursor-pointer"
        >
          Services
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, '#projects')}
          className="block py-2 pl-3 pr-4 text-primary hover:text-accent cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="block py-2 pl-3 pr-4 text-primary hover:text-accent cursor-pointer"
        >
          About
        </a>
        <a
          href="#reviews"
          onClick={(e) => handleNavClick(e, '#reviews')}
          className="block py-2 pl-3 pr-4 text-primary hover:text-accent cursor-pointer"
        >
          Reviews
        </a>
        <a
          href="#faq"
          onClick={(e) => handleNavClick(e, '#faq')}
          className="block py-2 pl-3 pr-4 text-primary hover:text-accent cursor-pointer"
        >
          FAQ
        </a>
      </NavbarCollapse>
    </Navbar>
  );
}