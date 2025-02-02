import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/header';
import Intro from './Components/intro';
import HowItWorks from './Components/howitworks';
import Features from './Components/features';
import Testimonials from './Components/testimonials';
import Resources from './Components/resources';
import Footer from './Components/footer';
import Chatbot from './Components/Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <HowItWorks />
              <Features />
              <Testimonials />
              <Resources />
            </>
          } />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
