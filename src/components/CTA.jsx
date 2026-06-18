import Link from 'next/link';
import { contactInfo } from '@/data/services';
import EmailLink from '@/components/EmailLink';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          <span className="text-white">Transform Your Business </span>
          <span className="gradient-text">Today</span>
        </h2>

        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let&apos;s discuss how our automation solutions can save you time, reduce
          costs, and help your business grow. Get in touch with our team for a
          free consultation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-4 w-full sm:w-auto justify-center"
            id="cta-whatsapp"
          >
            Chat on WhatsApp
          </a>
          <Link
            href="/contact"
            className="btn-outline text-base px-8 py-4 w-full sm:w-auto justify-center"
            id="cta-contact"
          >
            Contact Us &rarr;
          </Link>
        </div>

        {/* Contact Info Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-muted">
          <EmailLink
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            {contactInfo.email}
          </EmailLink>
          <span className="hidden sm:block text-text-muted/30">|</span>
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >

            {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
