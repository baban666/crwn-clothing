import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users')
    .doc('5gU0PWwJ5FAgV9Zf9YBU')
    .collection('cartItems')
    .doc('ZTuSRYu7mOfA6PislqHR');
