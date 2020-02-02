import React, { Component } from 'react';
import ProfilePlaceHolder from '../../assets/images/icons/user_profile_picture.svg'
import firebase from '../../Firebase';
export class YourProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };
  }

 componentDidMount() {
     
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then(snapshot => {
            const userData = snapshot.data();
            console.log(snapshot);
            console.log(userData);
            
            const userInfo = {
                userID: user.uid,
                name: userData.name,
                email: userData.email,
                phone_number: userData.phone_number,
                home_address: userData.home_address,
                birthdate: userData.birthdate,
                security1: userData.security1,
                security2: userData.security2,
                security3: userData.security3,
            };
            console.log('Email: ' + user.email);

            this.setState({
              userInfo: userInfo
          });
        })
        .catch(error => console.log(error))
          console.log(user.uid);
        } else {
          // User not logged in or has just logged out.
        }
      });
    }

    render() {

        const { userInfo } = this.state;

        return (
            <div className="profile-page">
                <form className="profile-form">
                    <div>
                        <img src={ProfilePlaceHolder} alt="Profile" />
                        <button>Upload</button>
                        <textarea 
                        placeholder="Status"
                        style={{  
                            maxWidth: '350px', 
                            minHeight: '50px', 
                            maxHeight: '50px',
                            marginTop: '30px'
                            }}
                        />
                    </div>
                    <div>
                        <label>Name</label>
                        <input     
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            defaultValue={userInfo.name}
                            
                        />
                        <label>Your Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email Address" 
                            defaultValue={userInfo.email}
                        /> 
                        <label>Phone Number</label>
                        <input 
                            type="number" 
                            name="phone_number" 
                            placeholder="Your Phone Number" 
                            defaultValue={userInfo.phone_number}
                        /> 
                        <label>Home Address</label>
                        <input 
                            type="text" 
                            name="home_address" 
                            placeholder="Your Home Address" 
                            defaultValue={userInfo.home_address}
                        /> 
                        <label>Birthdate</label>
                        <input 
                            type="date" 
                            name="birthdate" 
                            max="2002-01-01" 
                            defaultValue={userInfo.birthdate}
                        /> 
                        <label htmlFor="security1">Security Question #1</label>
                        <input 
                            disabled 
                            defaultValue={userInfo.security1}
                        />  
                        <label htmlFor="security2">Security Question #2</label>
                        <input 
                            disabled 
                            defaultValue={userInfo.security2}
                        />  
                        <label htmlFor="security3">Security Question #3</label>
                        <input 
                            disabled 
                            defaultValue={userInfo.security3}
                        />  
                        <button>Update</button>
                    </div>
                    <div>
                        <label htmlFor="current_password">Current Password</label>
                        <input 
                            type="password" 
                            name="current_password" 
                            placeholder="Current Password"
                        />  
                        <label htmlFor="new_password">New Password</label>
                        <input 
                            type="password" 
                            name="new_password" 
                            placeholder="New Password"
                        />  
                        <label htmlFor="new_password">New Password</label>
                        <input 
                            type="password" 
                            name="new_password_confirm" 
                            placeholder="Confirm New Password"
                        />  
                        <button>Change Password</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default YourProfile
