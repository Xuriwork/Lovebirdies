import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

  const firebaseConfig = {
    apiKey: "Add_Your_Creds",
    authDomain: "Add_Your_Creds",
    databaseURL: "Add_Your_Creds",
    projectId: "Add_Your_Creds",
    storageBucket: "Add_Your_Creds",
    messagingSenderId: "Add_Your_Creds",
    appId: "Add_Your_Creds",
    measurementId: "Add_Your_Creds"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export default firebase;