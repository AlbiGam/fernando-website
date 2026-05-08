import { useState } from 'react'
import './About.css'

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/about_me.jpeg" alt="Fernando A. Davila" />
        </div>
        
        <div className="about-content">
          <h2 className="about-title">ABOUT ME</h2>
          <div className={`about-text ${isExpanded ? 'about-text-expanded' : 'about-text-collapsed'}`}>
            <p>
              My name is Fernando Davila, and I first sat in a kart in September 2024, aged 14. I had never raced before — but the moment I felt the adrenaline rush a kart gives you, I knew this was my passion. I started going every week, and in just my second race I finished 2nd overall, making myself known and a candidate to be champion only in my first year.
            </p>
            <p>
              In the winter of 2024, I attended my first owner karting practice — I was completely unexperienced but still managed to be 2 seconds off the best time. I'm confident I had the talent and the passion to win. But at the time, we couldn't afford to race owners every month. So I kept doing practice sessions and making myself known through rental karting.
            </p>
            <p>
              In April 2025, everything changed. The only track in Puerto Rico opened up again and I was the first one to be there. I started practicing there every month and eventually was noticed by a team. I talked with them to buy a kart and ended up being one of the official drivers.
            </p>
            <p>
              Since then I've raced in 1 season of rental karting, becoming the national champion. This gave me the opportunity to represent my country in the K1 Speed E-World Championship in only my first year of racing. I also have other victories like the 12 Hours of Orlando Kart Center and many race wins in my country. I went from a kid with a dream to a full-blown karting driver in just a year. Now I'm aiming even higher, determined to keep climbing and prove that this is only the beginning of my racing story.
            </p>
          </div>

          <button
            type="button"
            className="about-view-all-btn"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? 'SHOW LESS' : 'VIEW ALL'}
          </button>
        </div>
      </div>
    </section>
  )
}
