import { useState } from 'react'
import './Calendar.css'

const calendarEvents = [
  { date: 'JANUARY 7', event: 'K1 Speed GP Final Race', status: 'finished', result: '1ST' },
  { date: 'JANUARY 14', event: 'K1 Speed GP Caguas Season Opener', status: 'finished', result: '1ST' },
  { date: 'JANUARY 30', event: 'K1 Speed GP Canovanas Season Opener', status: 'finished', result: '4TH' },
  { date: 'FEBRUARY 1', event: 'Salinas CKPR Practice and Race', status: 'finished', result: '1ST' },
  { date: 'FEBRUARY 11', event: 'K1 Speed GP Caguas', status: 'finished', result: '4TH' },
  { date: 'FEBRUARY 27', event: 'K1 Speed GP Canovanas', status: 'finished', result: '3RD' },
  { date: 'MARCH 7-8', event: 'CDCK Season Opener', status: 'finished', result: '6TH' },
  { date: 'MARCH 11', event: 'K1 Speed GP Caguas', status: 'finished', result: '5TH' },
  { date: 'MARCH 27', event: 'K1 Speed GP Canovanas', status: 'finished', result: '5TH' },
  { date: 'APRIL 15', event: 'K1 Speed GP Caguas', status: 'finished', result: '2ND' },
  { date: 'APRIL 24', event: 'K1 Speed GP Canovanas', status: 'finished', result: '4TH' },
  { date: 'APRIL 26', event: 'Salinas Practice and Race', status: 'finished', result: '2ND' },
  { date: 'MAY 2', event: 'K1 Speed E-World Championship', status: 'finished', result: '10TH' },
  { date: 'MAY 14', event: 'K1 Speed GP Caguas', status: 'scheduled' },
  { date: 'MAY 24', event: 'CKPR Salinas Test & Tune', status: 'scheduled' },
  { date: 'MAY 30', event: 'K1 Speed GP Canovana', status: 'scheduled' },
]

export default function Calendar() {
  const baseUrl = import.meta.env.BASE_URL
  const [isExpanded, setIsExpanded] = useState(false)
  const defaultVisibleEvents = 6
  const hasMoreEvents = calendarEvents.length > defaultVisibleEvents
  const visibleEvents = isExpanded ? calendarEvents : calendarEvents.slice(0, defaultVisibleEvents)

  return (
    <section id="calendar" className="calendar">
      <div className="calendar-container">
        <div className="calendar-hero-card">
          <div className="calendar-hero-content">
            <p className="calendar-kicker">CALENDAR</p>
            <h2 className="calendar-title">2026 RACING SEASON CALENDAR</h2>
          </div>
          <div className="calendar-hero-image-wrap">
            <img
              src={`${baseUrl}calendar.jpeg`}
              alt="Fernando racing in kart competition"
              className="calendar-hero-image"
            />
          </div>
        </div>

        <div className="events-list">
          {visibleEvents.map((item, index) => (
            <article key={index} className="event-item">
              <div className="event-date">{item.date}</div>
              <div className="event-location">{item.event}</div>
              <div className="event-meta">
                <span className={`event-status ${item.status}`}>{item.status.toUpperCase()}</span>
                {item.result && <span className="event-result">{item.result}</span>}
              </div>
            </article>
          ))}
        </div>

        {hasMoreEvents && (
          <button
            type="button"
            className="calendar-view-all-btn"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? 'SHOW LESS' : 'VIEW ALL'}
          </button>
        )}
      </div>
    </section>
  )
}
