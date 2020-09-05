import app from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET

}
class Firebase{
    constructor() {
        app.initializeApp(firebaseConfig)

        this.auth = app.auth()
    }

    registerFirebaseUser = (email, password) =>{
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    loginFirebaseUser = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logoutFirebaseUser = () =>{
        return this.auth.signOut()
    }
}

export default Firebase