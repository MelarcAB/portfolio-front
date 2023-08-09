import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'typeface-roboto'
import Home from './views/Home'
import './App.css'
import './index.scss'

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
