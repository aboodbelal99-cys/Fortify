import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: {
    default: 'Fortify | Business Automation Solutions',
    template: '%s | Fortify',
  },
  description:
    'Fortify provides premium business automation solutions including subscription management, automated reviews, HR automation, and call-to-SMS systems. Fortifying your business, coding your future.',
  keywords: [
    'business automation',
    'subscription management',
    'HR automation',
    'review automation',
    'call to SMS',
    'workflow automation',
    'digital transformation',
  ],
  authors: [{ name: 'Fortify' }],
  openGraph: {
    title: 'Fortify | Business Automation Solutions',
    description:
      'Premium business automation solutions to streamline your operations and boost revenue.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Fortify',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <div id="google_translate_element" style={{ display: 'none' }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
        >
          {`
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ar',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
