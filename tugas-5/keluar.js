//ambil data dari input

const el = (el) => {
  return document.querySelector(el);
};

let input = el("input");

const timeNow = () => {
  var d = new Date();
  var hour = "";
  if (d.getHours < 10) {
    hour = "0" + d.getHours();
  } else {
    hour = d.getHours();
  }
  var minutes = "";
  if (d.getMinutes < 10) {
    minutes = "0" + d.getMinutes();
  } else {
    minutes = d.getMinutes();
  }
  var seconds = "";
  if (d.getSeconds < 10) {
    seconds = "0" + d.getSeconds();
  } else {
    seconds = d.getSeconds();
  }
  var time = `${hour} : ${minutes} : ${seconds}`;
  return time;
};

//fungsi konversi waktu
const convertTime = (time) => {
  // 1 jam 60 menit convert
  if (time.length === 12) {
    const jam = parseInt(time.charAt(0) + time.charAt(1)) * 60;
    // menit
    const menit = parseInt(time.charAt(5) + time.charAt(6));
    // detik
    const detik = parseInt(time.charAt(10) + time.charAt(11)) / 60;
    //tambahin semua
    const result = jam + menit + detik;
    return result;
  } else if (time.length === 11) {
    const jam = parseInt(time.charAt(0) + time.charAt(1)) * 60;
    // menit
    const menit = parseInt(time.charAt(4) + time.charAt(5));
    // detik
    const detik = parseInt(time.charAt(9) + time.charAt(10)) / 60;
    //tambahin semua
    const result = jam + menit + detik;
    // console.log(result);
    return result;
  }
};

// const id = el("input[name=id]").value;

//cel id mobil atau motor

const checkVehicle = () => {
  const vecSelect = input.value.toUpperCase().slice(0, 2);
  //pengecekan
  if (vecSelect === "BK") {
    el("select").value = "Motor";
    return "MOTOR";
  } else if (vecSelect === "CR") {
    el("select").value = "Mobil";
    return "MOBIL";
  } else {
    return console.log("kode salah");
  }
  // return vecSelect;
};

const showNopol = () => {
  if (checkVehicle() === "MOTOR") {
    const costBike = JSON.parse(localStorage.getItem("costBike"));
    for (let i = 0; i < costBike.length; i++) {
      if (
        costBike[i].id.toUpperCase() ===
        el("input[name=id]").value.toUpperCase()
      ) {
        el("input[name=plat]").value = costBike[i].nopol;
      }
    }
  } else if (checkVehicle() === "MOBIL") {
    const costCar = JSON.parse(localStorage.getItem("costCar"));
    for (let i = 0; i < costCar.length; i++) {
      if (
        costCar[i].id.toUpperCase() === el("input[name=id]").value.toUpperCase()
      ) {
        el("input[name=plat]").value = costCar[i].nopol;
      }
    }
  }
};

const hitungTotal = (vehc) => {
  // motor 2 menit pertama 3000 menit berikutnya 1000
  let biayaParkir = 0;
  if (vehc === "MOTOR") {
    // ambill time

    const costBike = JSON.parse(localStorage.getItem("costBike"));
    for (let i = 0; i < costBike.length; i++) {
      if (costBike[i].id.toUpperCase() === input.value.toUpperCase()) {
        //time
        let time = costBike[i].time;
        console.log(time);
        //konversi waktu ke menit
        //waktu sekarang
        const waktuSekarang = convertTime(timeNow());
        console.log(waktuSekarang);
        //waktu datang parkir
        const parkTime = convertTime(time);
        console.log(parkTime);
        //lama parkir
        const lamaParkir = waktuSekarang - parkTime;
        console.log(lamaParkir);
        //biaya parkir

        if (lamaParkir <= 2) {
          biayaParkir = 3000;
        } else if (lamaParkir > 2) {
          biayaParkir = (lamaParkir - 2) * 1000 + 3000;
          console.log(biayaParkir);
        }
      }
    }
  } else if (vehc === "MOBIL") {
    // ambill time

    const costCar = JSON.parse(localStorage.getItem("costCar"));
    for (let i = 0; i < costCar.length; i++) {
      if (costCar[i].id.toUpperCase() === input.value.toUpperCase()) {
        //time
        let time = costCar[i].time;
        console.log(time);
        //konversi waktu ke menit
        //waktu sekarang
        const waktuSekarang = convertTime(timeNow());
        console.log(waktuSekarang);
        //waktu datang parkir
        const parkTime = convertTime(time);
        console.log(parkTime);
        //lama parkir
        const lamaParkir = waktuSekarang - parkTime;
        console.log(lamaParkir);
        //biaya parkir

        if (lamaParkir <= 2) {
          biayaParkir = 3000;
        } else if (lamaParkir > 2) {
          biayaParkir = (lamaParkir - 2) * 1000 + 3000;
          console.log(biayaParkir);
        }
      }
    }
  }
  return biayaParkir;
};

const tampilData = () => {
  el(
    "h1"
  ).innerHTML = `BIAYA PARKIR ${checkVehicle()} ANDA ADALAH Rp. ${Math.ceil(
    hitungTotal(checkVehicle())
  )},-`;
};

const removeData = (vehc) => {
  if (vehc === "MOTOR") {
    const costBike = JSON.parse(localStorage.getItem("costBike"));
    for (let i = 0; i < costBike.length; i++) {
      if (input.value === costBike[i].id) {
        costBike.splice(i, 1);
      }
    }
    localStorage.setItem("costBike", JSON.stringify(costBike));
  } else {
    const costCar = JSON.parse(localStorage.getItem("costCar"));
    for (let i = 0; i < costCar.length; i++) {
      if (input.value === costCar[i].id) {
        costCar.splice(i, 1);
      }
    }
    localStorage.setItem("costCar", JSON.stringify(costCar));
  }
  window.location.href='./generate.html'
  window.location.href='./keluar.html'
};
