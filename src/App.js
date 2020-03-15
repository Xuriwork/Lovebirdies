import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignUp from './components/FormPages/SignUp';
import SignIn from './components/FormPages/SignIn';
import ConfirmPage from './components/FormPages/ConfirmPage';
import YourProfile from './components/ProfilePage/YourProfile';

const App = () => {

    const Home = () => (
        <>
          <Hero />
          <Gallery />
          <Contact />
          <Footer />
        </>
    );

    return (
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Router>
              <Home path="/" default />
              <SignUp path="/signup" />
              <SignIn path="/signin" />
              <ConfirmPage path="/confirm" />
              <YourProfile path="/profile" />
          </Router>
        </div>
      </AuthProvider>
    );
}

export default App;
