import React from 'react'
import { Tip } from '../types'

export default function Admin({ tips, onCreate, onBack }: { tips: Tip[]; onCreate: () => void; onBack: () => void }) {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <button className="back" onClick={onBack}>← Back</button>
        <div className="admin-title"><span className="admin-icon">▦</span> Admin Panel</div>
      </div>

      <div className="admin-summary card-like">
        <div className="summary-left">
          <div className="label">Total Tips</div>
          <div className="big">{tips.length}</div>
        </div>
        <div className="summary-right">
          <div className="label">Active Tip</div>
          <div className="active">{tips.length > 0 ? tips[0].date : 'None'}</div>
        </div>
      </div>

      <div className="create-banner">
        <button className="create-banner-btn" onClick={onCreate}><span className="plus">＋</span> Create New Tip</button>
      </div>

      <div className="admin-list">
        <h3 className="active-tips-heading">Active tips</h3>
        {tips.length === 0 ? (
          <div className="empty">
            <div className="circle" />
            <h3>No Tips Yet</h3>
            <p>Create your first daily tip to get started and inspire your users!</p>
          </div>
        ) : (
          tips.map((t) => (
            <div key={t.id} className="tip-row">
              <span className="tip-row-date">{t.date}</span>
              <span className="tip-row-content">{t.content}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
