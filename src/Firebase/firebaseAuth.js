import React, { useEffect, useState } from 'react';
import firebase from '../Firebase/Firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);

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
                security1: userData.security1[0].value,
                security1_answer: userData.security1[1],
                security2: userData.security1[0].value,
                security2_answer: userData.security2[0].value,
                security3: userData.security3[0].value,
                security3_answer: userData.security3[1],
                photoURL: user.photoURL,
            };

            setUserInfo(userInfo);
        })}
      });
    }, []);

    return (
        <AuthContext.Provider
            value={{currentUser, userInfo}}
        >
        {children}
        </AuthContext.Provider>
    );
};

