import React, { Component } from 'react';
import firebase from '../../Firebase';
import FileUploader from "react-firebase-file-uploader";
import ProfilePlaceHolder from '../../assets/images/icons/user_profile_picture.svg';
import FormError from '../FormPages/FormError';

export class YourProfile extends Component {
constructor(props) {
    super(props);
    this.state = {
        new_password: '',
        new_password_confirm: '',
        photoURL: null,
        photo: '',
    }
}

    componentDidMount() {
       firebase.auth().onAuthStateChanged((user) => {
        this.setState({ photoURL: user.photoURL })
       })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value }, () => {
            if(this.state.new_password !== this.state.new_password_confirm) {
                this.setState({ errorMessage: 'Passwords do not match' });
            } else {
                this.setState({ errorMessage: null })
            }
        })
    }

    changePassword = e => {
        e.preventDefault();
        const new_password = this.handleChange('new_password').value;

        firebase.auth().currentUser.updatePassword(new_password).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });
    }

  uploadProfilePicture = filename => {
    firebase
      .storage()
      .ref("user_profile_pictures")
      .child(filename)
      .getDownloadURL()
      .then(url => 
        firebase.auth().currentUser.updateProfile({
            photoURL: url
        })
      );
  };

  changeProfilePicture = e => {
      e.preventDefault();
      const fileInput = document.getElementById('imageInput');
      fileInput.click();
  }

  check = (e) => {
      e.preventDefault();
      console.log(this.state.photoURL);
  }

    render() {

        const { userInfo } = this.props;

        return (
            <div className="profile-page">
                <form className="profile-form">
                    <div>
                       
                        {
                            this.state.photoURL == null ? (
                            <img src={ProfilePlaceHolder} alt="Profile" />  
                            ) : <img src={userInfo.photoURL} alt="Profile" />    
                        }
                        <FileUploader
                            accept="image/*"
                            name="photo"
                            randomizeFilename
                            storageRef={firebase.storage().ref("user_profile_pictures")}
                            onUploadSuccess={this.uploadProfilePicture} 
                            id="imageInput" 
                            hidden="hidden"
                            
                        /> 
                        <button onClick={this.changeProfilePicture}>Change Profile Picture</button>
                        <span style={{ marginTop: '10px' }}>Profile Created On :</span>
                        <span 
                            style={{ 
                                textAlign: 'center', 
                                color: '#caa5f1', 
                                marginBottom: '10px'
                            }}>
                            {userInfo.creationTime}
                        </span>
                        <textarea 
                            placeholder="Status" 
                            style={{  
                                maxWidth: '90%', 
                                minHeight: '50px', 
                                maxHeight: '50px',
                                marginTop: '30px',
                                margin: '0',
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
                        <FormError errorMessage={this.state.errorMessage} />
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
                            onChange={this.handleChange('new_password')}
                        />  
                        <label htmlFor="new_password">New Password</label>
                        <input 
                            type="password" 
                            name="new_password_confirm" 
                            placeholder="Confirm New Password" 
                            onChange={this.handleChange('new_password_confirm')}
                        />  
                        <button onClick={this.changePassword}>Change Password</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default YourProfile;
