import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCpNQModidqvDgpHi2Z3jSLPlfqga98gX8",
    authDomain: "crwn-db-a6c75.firebaseapp.com",
    projectId: "crwn-db-a6c75",
    storageBucket: "crwn-db-a6c75.appspot.com",
    messagingSenderId: "641059680277",
    appId: "1:641059680277:web:74ac80931fffc62eeede1c",
    measurementId: "G-2X0PDYWB7Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
