// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyBxlwlmydHtSsR5L-wMIOxRWGY95JysT_A",
  authDomain: "g2-d5-419b0.firebaseapp.com",
  databaseURL: "https://g2-d5-419b0.firebaseio.com",
  storageBucket: "g2-d5-419b0.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

const makeid = (length) => {
  let result = "";
  let character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
  let characterLength = character.length;

  for (let i = 0; i < length; i++) {
    result += character.charAt(Math.floor(Math.random() * characterLength));
  }
  alert(`your CEPark ID is ${result}`);
  return result;
  // menyimpan result ke database
};
