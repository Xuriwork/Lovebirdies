import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SignUp from './components/FormPages/SignUp';
import SignIn from './components/FormPages/SignIn';
import ConfirmPage from './components/FormPages/ConfirmPage';
import YourProfile from './components/ProfilePage/YourProfile';

class App extends Component {

  render() {
    return (
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
    );
  }

}

const Home = () => (
  <div>
    <Hero />
    <Footer />
  </div>
);

export default App;
