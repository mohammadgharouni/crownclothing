// Firebase App (the core Firebase SDK) is always required and must be listed
// before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
var config = {
    apiKey: "AIzaSyC5Gs71-Xi8E6r7nf5cR-EWSPABJxTdG_U",
    authDomain: "crwn-db-12345.firebaseapp.com",
    databaseURL: "https://crwn-db-12345.firebaseio.com",
    projectId: "crwn-db-12345",
    storageBucket: "crwn-db-12345.appspot.com",
    messagingSenderId: "776757141376",
    appId: "1:776757141376:web:1f6e949d8d3d141cf0eb65"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) 
        return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments =async (collectionKey, ObjectToAdd) => {

    const collectionRef = firestore.collection(collectionKey);
    const batch=firestore.batch();
      ObjectToAdd.forEach(element => {
        
    
      const newDocRef=collectionRef.doc();
      batch.set(newDocRef, element)
    })
    return await batch.commit()
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase
    .auth
    .GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
