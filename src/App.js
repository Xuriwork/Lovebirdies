import React, { Component } from 'react';
import firebase from './Firebase';
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
constructor(props) {
    super(props);
    this.state = {
        step: 1,
        errorMessage: null, 
        userInfo: [],
        userID: null,
        user: null,
        name: '',
        email: '', 
        password: '',
        confirm_password: '',
        phone_number: '',
        home_address: '',
        birthdate: '',
        security1: '',
        security2: '',
        security3: '',
    }
}

componentDidMount() {
     
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.firestore()
          .collection('users')
          .doc(user.email)
          .get()
          .then(snapshot => {
            const userData = snapshot.data();
            const userInfo = {
                userID: user.uid,
                creationTime: user.metadata.creationTime,
                name: userData.name,
                email: userData.email,
                phone_number: userData.phone_number,
                home_address: userData.home_address,
                birthdate: userData.birthdate,
                security1: userData.security1,
                security2: userData.security2,
                security3: userData.security3,
                photoURL: userData.photoURL,
            };

            this.setState({
              userInfo: userInfo,
              user: firebase.auth().currentUser.uid,
              photoURL: user.photoURL,
          });
        })
        .catch((err) => console.log(err))
        } else {
          // User not logged in or has just logged out.
        }
      });
    }


  render() {

    const { user, userInfo } = this.state;
    return (
      <div className="App">
        <Navbar user={user} userInfo={userInfo} />
        <Router>
            <Home path="/" default />
            <SignUp path="/signup" />
            <SignIn path="/signin" />
            <ConfirmPage path="/confirm" userInfo={userInfo} />
            <YourProfile user={user} userInfo={userInfo} path="/profile" />
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
