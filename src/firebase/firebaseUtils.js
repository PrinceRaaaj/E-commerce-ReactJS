import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBhpCtKiIit0WEMWcxx0mFY5z268-7rHzA",
    authDomain: "shopping-raaaj.firebaseapp.com",
    databaseURL: "https://shopping-raaaj.firebaseio.com",
    projectId: "shopping-raaaj",
    storageBucket: "shopping-raaaj.appspot.com",
    messagingSenderId: "992139320802",
    appId: "1:992139320802:web:7e337f3a3e88509bde6dbb",
    measurementId: "G-KLS2G5QF7M"
  }  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if( !userAuth ) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const { displayName, email } = userAuth
      const createdAt = new Date()
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(err){
        console.log("Error creating user :", err.message)
      }
    }
    return userRef
  }
 
  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: "select_account" })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase