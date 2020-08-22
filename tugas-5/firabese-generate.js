const firebaseConfig = {
  apiKey: "AIzaSyBxlwlmydHtSsR5L-wMIOxRWGY95JysT_A",
  authDomain: "g2-d5-419b0.firebaseapp.com",
  databaseURL: "https://g2-d5-419b0.firebaseio.com",
  projectId: "g2-d5-419b0",
  storageBucket: "g2-d5-419b0.appspot.com",
  messagingSenderId: "738737702275",
  appId: "1:738737702275:web:4ddb4d1d699de5fceaa2b6",
  measurementId: "G-48KP2M51V5",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const $ = (el) => {
  return document.querySelector(el);
};


