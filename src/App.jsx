import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'typeface-roboto'
import 'typeface-ibm-plex-mono';

import Home from './views/Home'
import './App.css'
import './index.scss'
import { Switcher } from './components/Switcher';

function AppContent() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="absolute top-2 right-4 md:top-4 md:right-6 z-50">
          <Switcher />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

function App() {
  return <AppContent />
}

export default App;
