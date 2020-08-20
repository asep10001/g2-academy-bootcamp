const costBike = localStorage.costBike ? JSON.parse(localStorage.costBike) : [];
const costCar = localStorage.costCar ? JSON.parse(localStorage.costCar) : [];

const el = (el) => {
  return document.querySelector(el);
};

const time = () => {
  var d = new Date();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var time  = `${hour} : ${minutes} : ${seconds}`;
  return time
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

const showDataBike = () =>{
  el("#id-bike").innerHTML = makeidBike(5);
  el("#time-bike").innerHTML = time();

}

const showDataCar = () =>{
  el("#id-car").innerHTML = makeidCar(5);
  el("#time-car").innerHTML = time();

}

const saveCostBike = () => {  
  showDataBike();
  const id  = el("#id-bike").innerHTML;
  const time = el("#time-bike").innerHTML;
  costBike.push({id, time});
  localStorage.setItem("costBike", JSON.stringify(costBike));
};

const saveCostCar = () => {  
  showDataCar();
  const id  = el("#id-car").innerHTML;
  const time = el("#time-car").innerHTML;
  costCar.push({id, time});
  localStorage.setItem("costCar", JSON.stringify(costCar));
};
