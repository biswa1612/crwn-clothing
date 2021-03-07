import firebase from 'firebase/app';
import 'firebase/firestore';         //for database
import 'firebase/auth';        //authentication

const config = {
    apiKey: "AIzaSyDfrlyA-EO2kOu7a3SHdvQxXgMfeU8d6xg",
    authDomain: "crwn-db-2c4e1.firebaseapp.com",
    projectId: "crwn-db-2c4e1",
    storageBucket: "crwn-db-2c4e1.appspot.com",
    messagingSenderId: "84230099959",
    appId: "1:84230099959:web:21f9b03a43df81f15154f2",
    measurementId: "G-W20X1K2R41"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();           //for getting the values

    if(!snapShot.exists) {                                 //checks whether there is any data if not then it will create
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {                                     //creating the data by taking information from userAuth.uid
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        }) 
      }catch(error) {
          console.log('error creating user', error.message);
      }
    }
    return userRef;
  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();    // we can now use this authentication library which is there in firevase anywhere
  export const firestore = firebase.firestore();  //same for database

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });   //whenever we will fire this googleauthprovider method then a prompt will appear where we can select our google account 
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;