import React, { useState, useContext, useRef } from 'react';
import { Redirect } from '@reach/router';
import { useForm } from 'react-hook-form';
import firebase from '../../Firebase/Firebase';
import FileUploader from "react-firebase-file-uploader";
import ProfilePlaceHolder from '../../assets/images/icons/user_profile_picture.svg';
import FormError from '../FormPages/FormError';
import SuccessMessage from '../FormPages/SuccessMessage';
import { AuthContext } from '../../Firebase/firebaseAuth';

const YourProfile = () => {

    const {userInfo, currentUser } = useContext(AuthContext);
    
    const { handleSubmit, register, errors, watch } = useForm();
    const new_password = useRef({});
    new_password.current = watch("new_password", "");

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const uploadProfilePicture = filename => {
        firebase
        .storage()
        .ref("user_profile_pictures")
        .child(filename)
        .getDownloadURL()
        .then(url => 
            firebase.auth().userInfo.updateProfile({
                photoURL: url
            })
        );
    };

    const changeProfilePicture = e => {
        e.preventDefault();
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }
    
    const changePassword = values => {

        firebase
            .auth()
            .currentUser
            .updatePassword(values.new_password)
            .then(() => {
                setSuccessMessage('Password Successful updated!');
                window.scrollTo(0, 0);
                setTimeout(() => {setSuccessMessage(null)}, 4000);
        })
        .catch((error) => {
            console.log(error.message)
            setErrorMessage(error.message);
        });
    }

    const updateUserInfo = values => {

        const new_userInfo = {
            name: values.name,
            email: values.email,
            phone_number: values.phone_number,
            home_address: values.home_address,
            birthdate: values.birthdate,
        }

        firebase.firestore()
            .collection('users')
            .doc(userInfo.email)
            .update(new_userInfo)
            .then(() => {
                setSuccessMessage('Info successfully updated!');
                window.scrollTo(0, 0);
                setTimeout(() => {setSuccessMessage(null)}, 4000);})
            .catch((error) => {
                setErrorMessage(error);
            });
    }

        return (
            <div className="profile-page">
            <SuccessMessage successMessage={successMessage} />
                <div className="profile-form">
                    <form>
                        {
                            currentUser == null ? (
                            <img src={ProfilePlaceHolder} alt="Profile" />  
                            ) : <img src={userInfo.photoURL} alt="Profile" />    
                        }
                        <FileUploader
                            accept="image/*"
                            name="photo"
                            randomizeFilename
                            storageRef={firebase.storage().ref("user_profile_pictures")}
                            onUploadSuccess={uploadProfilePicture} 
                            id="imageInput" 
                            hidden="hidden"
                            
                        /> 
                        <button onClick={changeProfilePicture}>Change Profile Picture</button>
                        <span style={{ marginTop: '10px' }}>Profile Created On :</span>
                        <span 
                            style={{ 
                                textAlign: 'center', 
                                color: '#caa5f1', 
                                marginBottom: '10px'
                            }}>

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
                    </form>
                    <form onSubmit={handleSubmit(updateUserInfo)}>
                        <label>Name</label>
                        <input     
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            defaultValue={userInfo.name} 
                            ref={register}
                        />
                        <label>Your Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email Address" 
                            defaultValue={userInfo.email} 
                            ref={register}
                        /> 
                        <label>Phone Number</label>
                        <input 
                            type="number" 
                            name="phone_number" 
                            placeholder="Your Phone Number" 
                            defaultValue={userInfo.phone_number} 
                            ref={register}
                        /> 
                        <label>Home Address</label>
                        <input 
                            type="text" 
                            name="home_address" 
                            placeholder="Your Home Address" 
                            defaultValue={userInfo.home_address} 
                            ref={register}
                        /> 
                        <label>Birthdate</label>
                        <input 
                            type="date" 
                            name="birthdate" 
                            max="2002-01-01" 
                            defaultValue={userInfo.birthdate} 
                            ref={register}
                        /> 
                        <div className="security-questions-section">
                            <label htmlFor="security1">Security Question #1</label>
                            <input 
                                disabled 
                                defaultValue={userInfo.security1} 
                            />  
                            <input 
                                disabled 
                                defaultValue={userInfo.security1_answer}
                            />  
                            <label htmlFor="security2">Security Question #2</label>
                            <input 
                                disabled 
                                defaultValue={userInfo.security2}
                            /> 
                            <input 
                                disabled 
                                defaultValue={userInfo.security2_answer}
                            />  
                            <label htmlFor="security3">Security Question #3</label>
                            <input 
                                disabled 
                                defaultValue={userInfo.security3}
                            />  
                            <input 
                                disabled 
                                defaultValue={userInfo.security3_answer}
                            />  
                            <button>Update Profile</button>
                        </div>
                    </form>

                    <form className="test" onSubmit={handleSubmit(changePassword)}>
                        <FormError errorMessage={errorMessage} />
                        {errors.new_password_confirm && <p className='error-message'>{errors.new_password_confirm.message}</p>}
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
                            ref={register({ required: true })}
                        />  
                        <label htmlFor="new_password">Confirm New Password</label>
                        <input 
                            type="password" 
                            name="new_password_confirm" 
                            placeholder="Confirm New Password" 
                            ref={register({ 
                                required: true,
                                validate: (value) => 
                                    value === new_password.current || 'Passwords do not match'
                            })}
                        />  
                        <button>Change Password</button>
                    </form>
                </div>
            </div>

        )
    }

export default YourProfile;
