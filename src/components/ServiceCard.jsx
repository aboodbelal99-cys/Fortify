'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ServiceCard({ service, index }) {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const title = isAr ? service.titleAr : service.title;
  const brief = isAr ? service.briefAr : service.brief;
  const features = isAr ? service.featuresAr : service.features;

  return (
    <Link
      href={`/services/${service.id}`}
      className="glass-card group p-8 flex flex-col h-full"
      id={`service-card-${service.id}`}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
        {brief}
      </p>

      {/* Features Preview */}
      <div className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-sm">
            <span className="text-gold font-bold select-none">&bull;</span>
            <span className="text-text-secondary">{feature}</span>
          </div>
        ))}
      </div>

      {/* Learn More */}
      <div className="flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
        {t('serviceCard.learnMore')} {isAr ? '\u2190' : '\u2192'}
      </div>
    </Link>
  );
}
