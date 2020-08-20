//ambil data dari input

const el = (el) => {
  return document.querySelector(el);
};

const id = el("input[name=id]").value;


// const id = el("input[name=id]").value;

//cel id mobil atau motor

const checkVehicle = () => {
  const vecSelect = id.toUpperCase().slice(0, 2);
  //pengecekan
  if (vecSelect == "BK") {
    alert("motor");
  } else {
    alert("mobil");
  }
  // return vecSelect;
};

const hitungTotal = (vehc) => {
  // motor 2 menit pertama 3000 menit berikutnya 1000
  if (vehc === "MOTOR") {
    // ambill time
    let time = ""
    const costBike = JSON.parse(localStorage.getItem("costBike"));
    for (let i = 0; i < costBike.length; i++) {
      if(costBike[i].id.toUpperCase() === id){
        //time
        time += costBike[i].time;
        //ngitung waktu dan harga

        // 1 jam 60 menit convert
        parseInt(time.charAt(0));
        // menit
        parseInt(time.charAt(4) + time.charAt(5));
        // detik
        parseInt(time.charAt(9) + time.charAt(10))
      } ;
    }
  }
};
