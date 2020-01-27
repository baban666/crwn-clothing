import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCzmlc-iqCyj9ybXapnCpqhnHzy70nLgRg",
    authDomain: "crwn-db-938f7.firebaseapp.com",
    databaseURL: "https://crwn-db-938f7.firebaseio.com",
    projectId: "crwn-db-938f7",
    storageBucket: "crwn-db-938f7.appspot.com",
    messagingSenderId: "89332138823",
    appId: "1:89332138823:web:1d4bd65b7e280e5b05c262"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if(!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);
 const snapShot = await userRef.get();
 if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }catch (error) {
        console.log('error creating user', error.message)
    }
 }
return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const  signInWithGoogle = () =>auth.signInWithPopup(provider)

export default firebase;