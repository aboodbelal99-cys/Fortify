'use client';

import Link from 'next/link';
import { contactInfo } from '@/data/services';
import EmailLink from '@/components/EmailLink';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const serviceLinks = [
    { label: isAr ? 'نظام إدارة الاشتراكات' : 'Subscription Management', href: '/services/subscription-management' },
    { label: isAr ? 'نظام التقييمات والملاحظات' : 'Review & Feedback', href: '/services/review-feedback' },
    { label: isAr ? 'أتمتة المكالمات إلى واتساب' : 'Call-to-WhatsApp', href: '/services/call-to-whatsapp' },
  ];

  const companyLinks = [
    { label: t('footer.companyLinks.home'), href: '/' },
    { label: t('footer.companyLinks.aboutUs'), href: '/#why-fortify' },
    { label: t('footer.companyLinks.process'), href: '/#process' },
    { label: t('footer.companyLinks.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-navy-dark border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src="/images/logo.png"
                  alt="Fortify Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Fort</span>
                <span className="text-gold">ify</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            {/* Social / Contact Icons */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-secondary hover:text-gold hover:bg-gold/10 border border-border hover:border-border-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <EmailLink
                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-secondary hover:text-gold hover:bg-gold/10 border border-border hover:border-border-gold transition-all duration-300"
                label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </EmailLink>
              <a
                href={`tel:${contactInfo.phone}`}
                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-secondary hover:text-gold hover:bg-gold/10 border border-border hover:border-border-gold transition-all duration-300"
                aria-label="Phone"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">
              {t('footer.companyTitle')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">
              {t('footer.getInTouchTitle')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-white text-sm transition-colors duration-300"
                >
                  <span className="text-gold">WhatsApp</span>
                  <span>{contactInfo.whatsapp}</span>
                </a>
              </li>
              <li>
                <EmailLink
                  className="flex items-center gap-3 text-text-secondary hover:text-white text-sm transition-colors duration-300"
                >
                  <span className="text-gold">{isAr ? 'البريد' : 'Email'}</span>
                  <span>{contactInfo.email}</span>
                </EmailLink>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-white text-sm transition-colors duration-300"
                >
                  <span className="text-gold">{isAr ? 'الهاتف' : 'Phone'}</span>
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} <span className="font-semibold">Fort<span className="text-gold">ify</span></span>. {t('footer.copyright')}
          </p>
          <p className="text-text-muted text-xs">
            {t('footer.slogan')}
          </p>
        </div>
      </div>
    </footer>
  );
}
