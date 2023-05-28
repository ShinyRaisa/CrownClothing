import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('3pesY5uqNL2EG4YgyCMD').collection('cartItems').doc('fYvPGjwkmVPH7BfgHsLO');
//or
firestore.doc('/users/3pesY5uqNL2EG4YgyCMD/cartItems/fYvPGjwkmVPH7BfgHsLO');
//or
firestore.collection('/users/3pesY5uqNL2EG4YgyCMD/cartItems')

