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

let order = localStorage.order ? JSON.parse(localStorage.order) : {};
const allOrder = localStorage.allOrder ? JSON.parse(localStorage.allOrder) : [];

const addToChart = () => {
  const name = $("#name").innerText;
  const pesanan = $("#count-order").value;
  const totalPrice = $("input#totalPrice").value;
  const price = $("#price").innerText;
  productNow = { name, pesanan, totalPrice, price };
  localStorage.setItem("order", JSON.stringify(productNow));
  order = JSON.parse(localStorage.order);
};

const checkOut = () => {
  if (allOrder.length !== 0) {
    for (let i = 0; i < allOrder.length; i++) {
      if (allOrder[i].name === order.name) {
        allOrder[i] = order;
        localStorage.setItem("allOrder", JSON.stringify(allOrder));
      } else{
        allOrder.push(order);
      }
    }
    console.log(order, allOrder);
  } else {
    allOrder.push(order);
    localStorage.setItem("allOrder", JSON.stringify(allOrder));
    // localStorage.setItem("allOrder", JSON.stringify(allOrder));
  }
};

// const showProduct = () => {
//   let row = document.querySelector("table tbody");
//   let rows = "";
//   for (let i = 0; i < product.length; i++) {
//     const produk = product[i];
//     rows += `<tr>
//         <td>${produk.id}</td>
//         <td>${produk.name}</td>
//         <td>${produk.stock}</td>
//         <td>${produk.stock}</td>
//         <td>${produk.jenis}</td>
//         <td align=left><button onclick="updateDataEmployee(${i})">Edit</button>
//         <button onclick="removeDataEmployee(${i})">Delete</button></td></tr>`;
//   }
//   row.innerHTML = rows;
// };

// showProduct();

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

const show = () => {
  checkCategory();
  if (category === "food") {
    let div = $("#showProd");
    let isian = `<h1 id="name">${foodArray[indeksNow].name}</h1>
              <img src="${foodArray[indeksNow].img}" alt="" srcset="">
              <p id="stock">${foodArray[indeksNow].stock}</p>
              <p id="price">${foodArray[indeksNow].price}</p>
              <p id="desc">${foodArray[indeksNow].desc}</p>`;
    div.innerHTML = isian;
  } else {
    div = $("#showProd");
    let isian = `<h1 id="name">${drinkArray[indeksNow].name}</h1>
              <img src="${drinkArray[indeksNow].img}" alt="" srcset="">
              <p id="stock">${drinkArray[indeksNow].stock}</p>
              <p id="price">${drinkArray[indeksNow].price}</p>
              <p id="desc">${drinkArray[indeksNow].desc}</p>`;
    div.innerHTML = isian;
  }
};

const autoUpdatePrice = () => {
  let order = parseInt($("#count-order").value);
  const price = parseInt($("#price").innerText);
  const total = order * price;
  $("input#totalPrice").value = total;
};
