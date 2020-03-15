import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyDwyXCu1l4_PwPldig0z824Jts6PoxW4Js",
    authDomain: "lovebirds-demo.firebaseapp.com",
    databaseURL: "https://lovebirds-demo.firebaseio.com",
    projectId: "lovebirds-demo",
    storageBucket: "lovebirds-demo.appspot.com",
    messagingSenderId: "177521573095",
    appId: "1:177521573095:web:22dd538dd64ed8fd5c7642",
    measurementId: "G-ZVXT3G12XX"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export default firebase;