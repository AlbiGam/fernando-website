import './HeroSection.css'

export default function HeroSection() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image-container">
          <div className="hero-image">
            <img src={`${baseUrl}main_page.jpeg`} alt="Fernando A. Davila" className="hero-img" />
            <h1 className="hero-overlay-text">DAVILA</h1>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">PROFESSIONAL RACING DRIVER</p>
            <h2 className="hero-title">FERNANDO A.<br />DAVILA</h2>
            <p className="hero-description">Racing driver from Puerto Rico</p>
            <button className="learn-more-btn">
              <a href="#about" className="learn-more-link">LEARN MORE</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
