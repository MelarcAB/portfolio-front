import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'typeface-roboto'

import Home from './views/Home'
import './App.css'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


function AppContent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}



function App() {
  return (
    <AppContent />
  )

}

export default App
