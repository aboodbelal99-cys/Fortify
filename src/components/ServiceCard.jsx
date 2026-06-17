import Link from 'next/link';

export default function ServiceCard({ service, index }) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="glass-card group p-8 flex flex-col h-full"
      id={`service-card-${service.id}`}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
        {service.brief}
      </p>

      {/* Features Preview */}
      <div className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-sm">
            <span className="text-gold font-bold select-none">&bull;</span>
            <span className="text-text-secondary">{feature}</span>
          </div>
        ))}
      </div>

      {/* Learn More */}
      <div className="flex items-center gap-1.5 text-gold text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
        Learn More &rarr;
      </div>
    </Link>
  );
}
