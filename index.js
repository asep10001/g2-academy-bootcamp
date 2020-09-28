const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const firebase = require('firebase');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.set('view engine', 'ejs');

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBxlwlmydHtSsR5L-wMIOxRWGY95JysT_A",
        authDomain: "g2-d5-419b0.firebaseapp.com",
        databaseURL: "https://g2-d5-419b0.firebaseio.com",
        projectId: "g2-d5-419b0",
        storageBucket: "g2-d5-419b0.appspot.com",
        messagingSenderId: "738737702275",
        appId: "1:738737702275:web:0312ad675dbed245eaa2b6",
        measurementId: "G-2S7QY26E7P",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

const $ = (el) => {
  return document.querySelector(el);
};

const db = firebase.database();
const rootRef = db.ref("product");
const indRef = db.ref('index');

const static = app.use(express.static(__dirname + '/public'));

var product = [];
rootRef.on("value", (snap) => {
  product = snap.val();
  prodId = snap.key;
});

var indeks = 0;
indRef.on("value", (snap) => {
    indeks = snap.val();
})

const checkUnd = () => {
    for (let i = 0; i < product.length; i++) {
        if (product[i] === undefined) {
          product.splice(i, 1);
        }
      }
      return product;
}


var foodArray = [];
var drinkArray = [];

const checkCategory = () =>{
    product = checkUnd();
    for (let i = 0; i < product.length; i++) {
    const category = product[i].category;
    if(category.toUpperCase() === "FOOD"){
        foodArray.push(product[i]);
    } else{
        drinkArray.push(product[i]);
    }
       
   }
   
}

// function sendViewMiddleware(req, res, next) {
//     res.sendView = function(view) {
//         return res.sendFile(__dirname + "/public/");
//     }
//     next();
// }



app.get('/', (req, res)=>{
  res.sendFile("/view/index.html", {root: "/bootcampG2/g2-academy-bootcamp-2/tugas-6/public"})
})

app.get('/login', (req, res)=>{
  res.sendFile(static + "/view/login.html", {root: "/bootcampG2/g2-academy-bootcamp-2/tugas-6/public"})
})


//get detail produk
app.get("/food/:id", function(req, res) {
  indeks = parseInt(req.params.id);
  res.sendFile("/view/product.html", {root: "/bootcampG2/g2-academy-bootcamp-2/tugas-6/public"})
});
//server listening
app.listen(5000, () => {
  console.log('Server is running at port 5000');
});
