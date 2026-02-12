import React from 'react'
import { Tip } from '../types'

function formatTipDate(dateStr: string): string {
  if (!dateStr || typeof dateStr !== 'string') return dateStr || ''
  const parts = dateStr.trim().split('-').map(Number)
  if (parts.length !== 3 || parts.some(isNaN)) return dateStr
  const [d, m, y] = parts
  const date = new Date(y, m - 1, d)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

export default function Home({ tips = [], onAdmin }: { tips?: Tip[]; onAdmin: () => void }) {
  const tipList = Array.isArray(tips) ? tips : []
  const latestTip = tipList.length > 0 ? tipList[0] : null

  return (
    <>
      <section className="hero large">
        <div className="hero-inner">
          <div className="tag pill">Welcome to Daily Wisdom</div>
          <h1>Your Daily Dose of Inspiration</h1>
          <p className="lead">Hand-picked tips and insights to help you grow and succeed every single day.</p>
        </div>
      </section>

      <section className="cards wide">
        <div className="card">
          <div className="icon">🎯</div>
          <div>
            <h3>Curated Content</h3>
            <p>Expert tips from professionals across various fields</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">📅</div>
          <div>
            <h3>Daily Updates</h3>
            <p>Fresh insights delivered every single day</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">💡</div>
          <div>
            <h3>Actionable Advice</h3>
            <p>Practical tips you can apply immediately</p>
          </div>
        </div>
      </section>

      <section className="daily-feature">
        <div className={`daily-feature-inner ${latestTip ? 'todays-tip-card' : ''}`}>
          {latestTip ? (
            <div className="todays-tip-layout">
              <div className="todays-tip-header">
                <div className="todays-tip-badge">✨</div>
                <h2 className="todays-tip-title">Today&apos;s Tip</h2>
              </div>
              <div className="todays-tip-text">
                <p className="todays-tip-date">{formatTipDate(latestTip.date)}</p>
                <p className="todays-tip-content">{latestTip.content}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="badge">✨</div>
              <h2>Daily Tip</h2>
              <p className="sub">No tip available yet. Check back soon!</p>
            </>
          )}
        </div>
      </section>
    </>
  )
}
