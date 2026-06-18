'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const navLinks = [
  { href: '/', label: 'Home', labelAr: 'الرئيسية' },
  { href: '/#services', label: 'Services', labelAr: 'الخدمات' },
  { href: '/#why-fortify', label: 'Why Fortify', labelAr: 'لماذا فورتيفاي' },
  { href: '/#process', label: 'Process', labelAr: 'آلية العمل' },
  { href: '/contact', label: 'Contact', labelAr: 'تواصل معنا' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Distinct solid bar — always visible, separated from page content */}
      <div className="bg-[#031e2a] border-b border-[#E8B95E]/15 shadow-lg shadow-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Brand name (text only — logo is in the hero) */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 overflow-hidden rounded-md">
                <img
                  src="/images/logo-transparent.png"
                  alt="Fortify Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="fortify-brand text-lg font-bold tracking-tight notranslate">
                <span>
                  <span className="text-white">Fort</span>
                  <span className="text-[#E8B95E]">ify</span>
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-md text-[0.82rem] font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-[#E8B95E] bg-[#E8B95E]/10'
                      : 'text-[#8faab8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`${
                    link.label === 'Home' ? 'nav-home' :
                    link.label === 'Services' ? 'nav-services' :
                    link.label === 'Why Fortify' ? 'nav-why-fortify' :
                    link.label === 'Process' ? 'nav-process' :
                    link.label === 'Contact' ? 'nav-contact' :
                    ''
                  } notranslate`}>
                    <span>{link.label}</span>
                  </span>
                </Link>
              ))}
              <LanguageSwitcher className="ml-2" />
              <Link
                href="/contact"
                className="ml-3 inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-[#E8B95E] to-[#d4a44e] text-[#042430] text-[0.82rem] font-semibold rounded-lg hover:shadow-md hover:shadow-[#E8B95E]/20 transition-all duration-300"
              >
                <span className="nav-get-started notranslate">
                  <span>Get Started</span>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-md hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              <div className="w-5 h-3.5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-[#E8B95E] rounded transition-all duration-300 origin-left ${
                    isOpen ? 'rotate-45 translate-x-px' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#E8B95E] rounded transition-all duration-300 ${
                    isOpen ? 'opacity-0 translate-x-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#E8B95E] rounded transition-all duration-300 origin-left ${
                    isOpen ? '-rotate-45 translate-x-px' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#031e2a]/98 backdrop-blur-xl border-b border-[#E8B95E]/10 px-4 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? 'text-[#E8B95E] bg-[#E8B95E]/10'
                  : 'text-[#8faab8] hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={`${
                link.label === 'Home' ? 'nav-home' :
                link.label === 'Services' ? 'nav-services' :
                link.label === 'Why Fortify' ? 'nav-why-fortify' :
                link.label === 'Process' ? 'nav-process' :
                link.label === 'Contact' ? 'nav-contact' :
                ''
              } notranslate`}>
                <span>{link.label}</span>
              </span>
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <LanguageSwitcher className="w-full flex justify-center" />
            <Link
              href="/contact"
              className="block text-center px-5 py-3 bg-gradient-to-r from-[#E8B95E] to-[#d4a44e] text-[#042430] text-sm font-semibold rounded-lg"
            >
              <span className="nav-get-started notranslate">
                <span>Get Started</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
