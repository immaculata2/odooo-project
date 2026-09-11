import './hero.css';

const Hero = ({ title, subtitle, metadata }) => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {metadata && metadata.length > 0 && (
          <div className="hero-meta">
            {metadata.map((item, index) => (
              <span key={index} className="hero-meta-item">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
