import React from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
