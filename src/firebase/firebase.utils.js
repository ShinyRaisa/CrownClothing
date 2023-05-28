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

export const createUserProfileDocument = async(userAuth, additionalData )=>{
    if(!userAuth) return;

    console.log('userAuth ', userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log('Firebase util',snapShot);

    if(!snapShot.exists){//creates the snapshot/data
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{//async request to store data
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
