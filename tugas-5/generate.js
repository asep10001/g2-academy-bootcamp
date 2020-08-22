const costBike = localStorage.costBike ? JSON.parse(localStorage.costBike) : [];
const costCar = localStorage.costCar ? JSON.parse(localStorage.costCar) : [];

const el = (el) => {
  return document.querySelector(el);
};

const time = () => {
  var d = new Date();
  var hour = "";
  if (d.getHours() < 10) {
    hour = "0" + d.getHours();
  } else {
    hour = d.getHours();
  }
  var minutes = "";
  if (d.getMinutes() < 10) {
    minutes = "0" + d.getMinutes();
  } else {
    minutes = d.getMinutes();
  }
  var seconds = "";
  if (d.getSeconds() < 10) {
    seconds = "0" + d.getSeconds();
  } else {
    seconds = d.getSeconds();
  }
  var time = `${hour} : ${minutes} : ${seconds}`;
  return time;
};

const makeidBike = (length) => {
  let result = "BK";
  let character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
  let characterLength = character.length;

  for (let i = 0; i < length; i++) {
    result += character.charAt(Math.floor(Math.random() * characterLength));
  }
  return result;
  // menyimpan result ke database
};

const nopol = () => {
  let result = "";
  let charAlfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charAngka = "01234567890";
  let charAlfaLength = charAlfa.length;
  let charAngkaLength = charAngka.length;

  result += charAlfa.charAt(Math.floor(Math.random() * charAlfaLength));

  for (let i = 0; i < 4; i++) {
    result += charAngka.charAt(Math.floor(Math.random() * charAngkaLength));
  }
  for (i = 0; i < 3; i++) {
    result += charAlfa.charAt(Math.floor(Math.random() * charAlfaLength));
  }
  return result;
  // menyimpan result ke database
};

const makeidCar = (length) => {
  let result = "CR";
  let character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
  let characterLength = character.length;

  for (let i = 0; i < length; i++) {
    result += character.charAt(Math.floor(Math.random() * characterLength));
  }
  return result;
  // menyimpan result ke database
};

const showDataBike = () => {
  el("#id-bike").innerHTML = makeidBike(5);
  el("#time-bike").innerHTML = time();
  el("#nopol").innerHTML = nopol();
};

const showDataCar = () => {
  el("#id-car").innerHTML = makeidCar(5);
  el("#time-car").innerHTML = time();
  el("#nopol").innerHTML = nopol();
};

const saveCostBike = () => {
  showDataBike();
  const id = el("#id-bike").innerHTML;
  const time = el("#time-bike").innerHTML;
  const nopol = el("#nopol").innerHTML;
  costBike.push({ id, time, nopol });
  localStorage.setItem("costBike", JSON.stringify(costBike));
  setTimeout(() => {
    location.reload();
  }, 5000);
};

const saveCostCar = () => {
  showDataCar();
  const id = el("#id-car").innerHTML;
  const time = el("#time-car").innerHTML;
  const nopol = el("#nopol").innerHTML;
  costCar.push({ id, time, nopol });
  localStorage.setItem("costCar", JSON.stringify(costCar));
};
