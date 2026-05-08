import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <img src="/logo.jpeg" alt="Fernando A. Davila" className="contact-logo" />
          <h2 className="contact-title">GET IN TOUCH</h2>
          <p className="contact-subtitle">Let's work together</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-image">
            <img src="/get_in_touch.jpeg" alt="Get in Touch" className="contact-banner" />
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3 className="contact-label">EMAIL</h3>
              <a href="mailto:berquediop@outlook.com" className="contact-link">
                berquediop@outlook.com
              </a>
            </div>

            <div className="contact-item">
              <h3 className="contact-label">PHONE</h3>
              <a href="tel:+19394156565" className="contact-link">
                +1 (939) 415-6565
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
