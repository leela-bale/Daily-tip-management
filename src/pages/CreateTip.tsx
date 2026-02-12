import React, { useState } from 'react'
import { Tip } from '../types'

export default function CreateTip({ onCancel, onCreate }: { onCancel: () => void; onCreate: (t: Omit<Tip, 'id'>) => void }) {
  const [date, setDate] = useState(() => {
    const d = new Date()
    return d.toISOString().slice(0, 10).split('-').reverse().join('-')
  })
  const [content, setContent] = useState('')

  const max = 500

  return (
    <div className="create-page">
      <div className="admin-header">
        <button className="back" onClick={onCancel}>← Back</button>
        <div className="admin-title"><span className="admin-icon">▦</span> Admin Panel</div>
      </div>

      <div className="create-hero">
        <div className="hero-inner">
          <h2>Create New Tip</h2>
          <div className="subtitle">Add a new daily tip</div>
        </div>
      </div>

      <div className="create-card">
        <div className="form-row">
          <label className="field">
            <div className="label">📅 Date</div>
            <div className="input-with-icon">
              <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="DD-MM-YYYY" />
              <div className="cal">📅</div>
            </div>
          </label>
        </div>

        <div className="form-row">
          <label className="field">
            <div className="label">✍️ Tip Content <a className="preview">Preview</a></div>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter an inspiring tip that will help people grow..." maxLength={max} />
            <div className="count">{content.length}/{max}</div>
          </label>
        </div>

        <div style={{height:18}} />
      </div>

      <div className="create-footer-bar">
        <div className="create-footer-inner">
          <button type="button" className="create-action-btn" onClick={() => onCreate({ date, content })} disabled={!content.trim()}>
            <span className="btn-icon">💾</span>
            <span>Create Tip</span>
          </button>
          <button type="button" className="create-cancel-btn" onClick={onCancel}>
            <span className="btn-icon cancel-icon">✕</span>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  )
}
