import './Partners.css'

const partners = [
  {
    category: 'TECHNICAL PARTNER',
    name: 'AIMOTOR',
    description:
      'AI-powered motorsport engineering platform that transforms telemetry and video data into actionable coaching insights for karting and sim racing performance.',
    logo: '/aimotor-logo.png',
    website: 'https://aimotor.eu/',
  },
  {
    category: 'SPONSOR',
    name: 'BANCO POPULAR',
    description: 'Biggest financial service provider in Puerto Rico for over 100 years.',
    logo: '/banco-popular-logo.jpg',
    website: 'https://www.popular.com',
  },
  {
    category: 'SPONSOR',
    name: 'AACA',
    description:
      'The biggest antique car club in America that preserves the history and original state of some of the rarest cars in the world.',
    logo: '/aaca-logo.webp',
  },
]

export default function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="partners-container">
        <div className="partners-hero-card">
          <div className="partners-hero-content">
            <p className="partners-kicker">PARTNERS</p>
            <h2 className="partners-title">OFFICIAL SPONSORS AND TECHNICAL PARTNERS</h2>
            <p className="partners-subtitle">
              Proudly supported by trusted organizations helping power Fernando Davila&apos;s racing season.
            </p>
          </div>

          <div className="partners-hero-image-wrap">
            <img
              src="/calendar.jpeg"
              alt="Fernando racing with team support"
              className="partners-hero-image"
            />
          </div>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <article key={partner.name} className="partner-card">
              <div className="partner-logo-wrap">
                <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
              </div>

              <div className="partner-info">
                <p className="partner-category">{partner.category}</p>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
                {partner.website && (
                  <a href={partner.website} target="_blank" rel="noreferrer" className="partner-link">
                    VISIT WEBSITE
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
