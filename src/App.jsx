import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'typeface-roboto'
import Home from './views/Home'
import './App.css'
import './index.scss'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function AppContent() {
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
    // starting from v2 you can add only the features you need reducing the bundle size 
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

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
