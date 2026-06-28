'use client';

import { contactInfo } from '@/data/services';
import EmailLink from '@/components/EmailLink';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const contactMethods = [
    {
      id: 'whatsapp',
      title: t('contact.methods.whatsapp.title'),
      description: t('contact.methods.whatsapp.description'),
      value: contactInfo.whatsapp,
      href: `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`,
      external: true,
      buttonText: t('contact.methods.whatsapp.button'),
    },
    {
      id: 'email',
      title: t('contact.methods.email.title'),
      description: t('contact.methods.email.description'),
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      external: false,
      buttonText: t('contact.methods.email.button'),
    },
    {
      id: 'phone',
      title: t('contact.methods.phone.title'),
      description: t('contact.methods.phone.description'),
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      external: false,
      buttonText: t('contact.methods.phone.button'),
    },
  ];

  const faqs = t('contact.faqs');

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">{t('contact.title1')} </span>
            <span className="gradient-text">{t('contact.title2')}</span>
          </h1>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => {
              if (method.id === 'email') {
                return (
                  <EmailLink
                    key={method.id}
                    className="glass-card p-8 text-center group cursor-pointer"
                    id={`contact-${method.id}`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <p className="text-gold font-medium text-sm mb-6">
                      {method.value}
                    </p>
                    <span className="btn-gold !py-2.5 !px-6 !text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      {method.buttonText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={isAr ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"} />
                      </svg>
                    </span>
                  </EmailLink>
                );
              }
              return (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="glass-card p-8 text-center group cursor-pointer"
                  id={`contact-${method.id}`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <p className="text-gold font-medium text-sm mb-6">
                    {method.value}
                  </p>
                  <span className="btn-gold !py-2.5 !px-6 !text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    {method.buttonText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={isAr ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"} />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ / Info Section */}
      <section className="py-16 bg-navy-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t('contact.faqTitle')} <span className="gradient-text">{t('contact.faqHighlight')}</span>
            </h2>
            <p className="text-text-secondary">
              {t('contact.faqSubtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {Array.isArray(faqs) && faqs.map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t('contact.stillHaveQuestions')}
          </h2>
          <p className="text-text-secondary mb-8">
            {t('contact.stillHaveQuestionsDesc')}
          </p>
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-4 inline-flex items-center gap-2"
          >
            {t('contact.startConversation')}
          </a>
        </div>
      </section>
    </>
  );
}
