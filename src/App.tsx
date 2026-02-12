import React, { useState } from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'
import CreateTip from './pages/CreateTip'
import { Tip } from './types'

type Route = 'home' | 'admin' | 'create'

export default function App() {
  const [route, setRoute] = useState<Route>('home')
  const [tips, setTips] = useState<Tip[]>([])

  function createTip(t: Omit<Tip, 'id'>) {
    const newTip: Tip = { id: String(Date.now()), ...t }
    setTips((s) => [newTip, ...s])
    setTimeout(() => setRoute('home'), 0)
  }

  return (
    <div className={`app-root ${route}`}>
      {route === 'home' && (
        <header className="topbar">
          <div className="logo">
            <div className="logo-icon">💡</div>
            <div className="logo-text">
              <div className="logo-title">Daily Wisdom</div>
              <div className="logo-sub">Inspire & Grow</div>
            </div>
          </div>
          <div className="top-actions">
            <button className="admin-pill" onClick={() => setRoute('admin')}>🔒 Admin</button>
          </div>
        </header>
      )}

      <main className="container">
        {route === 'home' && <Home tips={tips} onAdmin={() => setRoute('admin')} />}
        {route === 'admin' && (
          <Admin tips={tips} onCreate={() => setRoute('create')} onBack={() => setRoute('home')} />
        )}
        {route === 'create' && <CreateTip onCancel={() => setRoute('admin')} onCreate={createTip} />}
      </main>
    </div>
  )
}
