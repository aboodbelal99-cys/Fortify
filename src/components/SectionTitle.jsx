export default function SectionTitle({ badge, title, highlight, description, center = true }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16`}>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
        <span className="text-white">{title} </span>
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
