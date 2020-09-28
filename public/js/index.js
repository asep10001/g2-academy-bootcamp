const $ = (el) => {
  return document.querySelector(el);
};

const db = firebase.database();
const rootRef = db.ref("product");
const indRef = db.ref("index");
const categoryRef = db.ref("category");

var product = [];
rootRef.on("value", (snap) => {
  product = snap.val();
  prodId = snap.key;
});

var indeksNow = 0;
indRef.on("value", (snap) => {
  let indeks = snap.val();
  indeksNow = indeks.index;
});

var category = "";
categoryRef.on("value", (snap) => {
  let cat = snap.val();
  category = cat.category;
  
});

const checkUnd = () => {
  for (let i = 0; i < product.length; i++) {
    if (product[i] === undefined) {
      product.splice(i, 1);
    }
  }
  return product;
};

var foodArray = [];
var drinkArray = [];

const checkCategory = () => {
  product = checkUnd();
  for (let i = 0; i < product.length; i++) {
    const category = product[i].category;
    if (category.toUpperCase() === "FOOD") {
      foodArray.push(product[i]);
    } else {
      drinkArray.push(product[i]);
    }
  }
};

const showImage = () => {
  checkCategory();
  var food_ul = $("#food ul");
  var drink_ul = $("#drink ul");
  let new_li_food = "";
  let new_li_drink = "";
  for (let j = 0; j < foodArray.length; j++) {
    new_li_food += `<li>
    <img
          src="${foodArray[j].img}"
          alt=""
          uk-cover
        />

        <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
        <a href="/food/${j}"><h3  onclick="prodDetail(${j}, 'food')" class="uk-margin-remove">${foodArray[j].name}</h3></a>
          <p class="uk-margin-remove">
          ${foodArray[j].desc}
          </p>
          <h4> Rp. ${foodArray[j].price} </h4>
        </div>
      </li>`;
  }
  food_ul.innerHTML += new_li_food;

  for (let k = 0; k < drinkArray.length; k++) {
    new_li_drink += `<li>
          <img
          id="img-content"
          src="${drinkArray[k].img}"
          uk-cover
          />
        <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
        <a href="./product.html"><h3  onclick="prodDetail(${k}, 'drink')" class="uk-margin-remove">${drinkArray[k].name}</h3></a>
        <p class="uk-margin-remove">
        ${drinkArray[k].desc}
        </p>
        <h4> Rp. ${drinkArray[k].price} </h4>
        </div>
      </li>`;
  }
  drink_ul.innerHTML += new_li_drink;
};

// ketika food_ul di klik masukan indeks food ul tersebut
const prodDetail = (indeks, category) => {

  console.log(indeks, category);
  indRef.update({index: indeks});
  categoryRef.update({category: category});
};

// $("#logo").addEventListener('load', setTimeout(showImage(), 3100))
// $(".uk-container").addEventListener('DOMContentLoaded', showImage())
