import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'typeface-roboto'

import Home from './views/Home'
import './App.css'
import './index.scss'
import { Switcher } from './components/Switcher';

import Header from './components/Header';
import Navbar from './components/Navbar';
import { getPortfolio } from './api/api';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Contact from './views/Contact';
import { ToastContainer } from 'react-toastify';
import Experience from './views/Experience';




function AppContent() {
  const location = useLocation();

  const [portfolio, setPortfolio] = useState(null);
  const pageTransitionStyles = {
    enter: "opacity-0",
    enterActive: "opacity-100 transition-opacity duration-300",
    exit: "opacity-100",
    exitActive: "opacity-0 transition-opacity duration-300"
  };

  React.useEffect(() => {
    async function fetchData() {
      const portfolioData = await getPortfolio();
      setPortfolio(portfolioData);
    }
    fetchData();
  }, []);

  return (

    <div className="relative min-h-screen">
      <ToastContainer />

      <div className="absolute top-2 right-4 md:top-4 md:right-6 z-50">
        <Switcher />
      </div>
      <div className="container mx-auto px-4">
        <Header portfolio={portfolio} />
        <Navbar />
        <TransitionGroup>
          <CSSTransition timeout={300} classNames={pageTransitionStyles} key={location.key}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/experiencia" element={<Experience />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}



export default App;

