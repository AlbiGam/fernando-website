import { useState } from 'react'
import './About.css'

export default function About() {
  const baseUrl = import.meta.env.BASE_URL
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={`${baseUrl}about_me.jpeg`} alt="Fernando A. Davila" />
        </div>
        
        <div className="about-content">
          <h2 className="about-title">ABOUT ME</h2>
          <div className={`about-text ${isExpanded ? 'about-text-expanded' : 'about-text-collapsed'}`}>
            <p>
              My name is Fernando Dávila, and my motorsport journey began in September 2024, when I first sat in a kart at just 14 years old. I had never raced before, but from my first experience, I knew I had found my passion. I began practicing every week, and by my second race, I had already finished 2nd overall, quickly establishing myself as a competitive driver with championship potential.
            </p>
            <p>
              During the winter of 2024, I attended my first owner-karting practice. Despite having very little experience, I finished just two seconds off the fastest lap. Although financial limitations prevented me from competing regularly in owner karting, I continued developing my skills through rental karting and practice sessions, determined to make the most of every opportunity.
            </p>
            <p>
              In April 2025, the only karting track in Puerto Rico reopened, and I was among the first drivers to return. Through consistent practice and dedication, I eventually caught the attention of a racing team and earned the opportunity to become one of its official drivers.
            </p>
            <p>
              Since then, my progress has exceeded what I once imagined. In my first year of competition, I became Puerto Rico's National Rental Karting Champion, earning the opportunity to represent my country at the K1 Speed E-World Championship in Winchester, California. I also became part of the winning team at the 12 Hours of Orlando Kart Center, competing against 60 other teams in a 12-hour endurance race.
            </p>
            <p>
              Today, I continue competing in Puerto Rico, Florida, and the Dominican Republic, accumulating victories and gaining experience against international talent. Most recently, I earned another victory in the T4 Kartplex Championship in Florida. My performance has also opened doors to the next stage of my career, with invitations to begin competing in race cars in both Puerto Rico and the United States.
            </p>
            <p>
              My next goal is to compete in the 2027 championship seasons in Puerto Rico and Florida while pursuing opportunities to test and transition into car racing, including Spec Miata, B-Spec, and STL categories.
            </p>
            <p>
              What began as a first-time experience in a rental kart has developed into a serious commitment to motorsport and a growing competitive career. I am determined to keep improving, represent Puerto Rico at the highest possible level, and build a future in professional racing. <em>This is only the beginning.</em>
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
