// src/components/Header.tsx
import { Button } from 'flowbite-react';
import type { HeaderProps } from '@/types';

export default function Header({ companyInfo }: HeaderProps) {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-gray-200 px-2 py-0 text-gray-500 sm:px-4">
      <div className="mx-auto flex flex-wrap items-center justify-between w-full container px-4 py-2.5">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <a className="flex items-center gap-3 text-2xl font-semibold text-gray-900" href="/">
            <img
              alt={companyInfo.name}
              className="h-10"
              src="/images/rtb-logo-lg.png"
            />
            <span className="hidden sm:block">{companyInfo.name}</span>
          </a>
        </div>

        {/* Center Navigation - Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-blue-600"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden lg:flex items-center rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-blue-600"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {companyInfo.phone}
          </a>

          <Button
            className="btn-primary text-sm"
            size="sm"
            onClick={() => {
              const element = document.querySelector('#estimate');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Get Quote
          </Button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg">
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                handleNavClick(e, item.href);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${companyInfo.phone}`}
            className="block px-3 py-2 rounded-lg text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-50"
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {companyInfo.phone}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}