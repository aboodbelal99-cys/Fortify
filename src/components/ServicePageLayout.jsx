import Link from 'next/link';
import { contactInfo } from '@/data/services';

export default function ServicePageLayout({ service }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </div>



          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-text">{service.title}</span>
          </h1>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            {service.brief}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-navy-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                The Challenge Your <span className="text-red-400">Business Faces</span>
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {service.problem}
              </p>
            </div>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl" />
              <div className="space-y-4">
                {['Lost revenue from missed follow-ups', 'Manual processes eating your time', 'Inconsistent customer experience', 'No visibility into key metrics'].map((pain, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold select-none mr-1.5">&bull;</span>
                    <span className="text-text-secondary text-sm">{pain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
              <div className="space-y-4">
                {['Automated workflows save hours daily', 'Smart notifications keep customers engaged', 'Real-time dashboards give full visibility', 'Scalable systems grow with your business'].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold font-bold select-none mr-1.5">&bull;</span>
                    <span className="text-text-secondary text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                How <span className="fortify-brand notranslate"><span>Fortify</span></span> <span className="gradient-text">Solves This</span>
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {service.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-navy-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Everything You <span className="gradient-text">Need</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Powerful features designed to transform your operations and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={feature} className="glass-card p-6 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{feature}</h3>
                <div className="h-px bg-gradient-to-r from-gold/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Who This Is <span className="gradient-text">For</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              This solution is perfect for businesses across these industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.targetIndustries.map((industry) => (
              <div
                key={industry}
                className="glass-card p-5 text-center group hover:bg-gold/5"
              >
                <span className="text-white text-sm font-medium group-hover:text-gold transition-colors duration-300">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement <span className="gradient-text">{service.title}</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            Get in touch with our team today for a free consultation and discover how
            this solution can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4 w-full sm:w-auto justify-center"
            >

              Discuss This Solution
            </a>
            <Link
              href="/contact"
              className="btn-outline text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
