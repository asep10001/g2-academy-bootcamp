import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    // app.initializeApp(firebaseConfig);
    this.db = app.database();
    this.auth = app.auth();
    this.data = [];
  }

  readStudent = async () => {
    await this.db
      .ref("/students/")
      .once("value")
      .then((hasil) => {
        alert(JSON.stringify(hasil.val()));
        if (hasil.val() !== null) {
          for (var prop in hasil.val()) {
            this.data.push(hasil.val()[prop]);
          }
        }
      })
      .then(() => {
        return alert("ini data 1" + JSON.stringify(this.data));
      });
  };

  inputStudents(stId, data) {
    return app
      .database()
      .ref("students/" + stId)
      .set(data);
  }

  deleteStudent(stId) {
    alert(stId);
    return app
      .database()
      .ref("students/" + stId)
      .remove();
  }

  updateStudent(id, data) {
    alert(id);
    app.database().ref("students/" + id).update(data);
  }

  registerFirebaseUser = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  loginFirebaseUser = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  logoutFirebaseUser = () => {
    return this.auth.signOut();
  };
}

export default Firebase;
