// let dataKaryawan = [];

//cek dulu dah ada apa belum
var dataKaryawan = localStorage.dataKaryawan
  ? JSON.parse(localStorage.dataKaryawan)
  : [];

//mempersingkat cara get query
var el = (el) => document.querySelector(el);

const isUsed = () => {
  if (dataKaryawan.length !== 0) {
    for (let i = 0; i < dataKaryawan.length; i++) {
      if (
        dataKaryawan[i].nik ===
          document.querySelector("input[name=nik]").value ||
        dataKaryawan[i].name ===
          document.querySelector("input[name=name]").value ||
        dataKaryawan[i].email ===
          document.querySelector("input[name=email]").value
      ) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

//untuk menyimpan data
const saveData = () => {
  console.log(isUsed());
    if(isUsed()===false){
    const nik=el('input[name="nik"]').value,
    name=el('input[name="name"]').value,
    birthDate= el('input[name="birthDate"]').value,
    gender= el('input[name="gender"]').nextSibling.textContent,
    address=el('input[name="address"]').value,
    religion=el('input[name="religion"]').value,
    citizenship=el('input[name="citizenship"]').value,
    email=el('input[name="email"]').value,
    division=el('select[name="division"]').value;
    //push object baru ke array datakaryawan
    dataKaryawan.push({
      nik,
      name,
      birthDate,
      gender,
      address,
      religion,
      citizenship,
      email,
      division
  })
  //simpan ke lokal storage
  localStorage.setItem("dataKaryawan", JSON.stringify(dataKaryawan))
  document.getElementById("add-karyawan").submit();
  // listKaryawan()

    } else{
      // document.querySelector("#add-karyawan").reset();
      alert("maaf data sudah di gunakan silahkan pakai yang lain!!")
    }
};

const deleteKaryawan = () => {
  dataKaryawan.pop();
  localStorage.setItem("dataKaryawan", JSON.stringify(dataKaryawan));
};

//   const listUser = () => {

//     let rows = ""
//     for (let i = 0; i < dataKaryawan.length; i++) {
//         const user = dataKaryawan[i];
//         rows += `
//             <tr>
//                 <td>${user.nik}</td>
//                 <td>${user.name}</td>
//                 <td>${user.birthDate}</td>
//                 <td>${user.gender}</td>
//                 <td>${user.address}</td>
//                 <td>${user.religion}</td>
//                 <td>${user.citizenship}</td>
//                 <td>${user.email}</td>
//                 <td>${user.division}</td>

//             </tr>
//         `
//     }
//     el("table tbody").innerHTML = rows
// }
// listUser()

//   //looping ada berapa index
// let setData = ()=>{
//         const dataLokalKaryawan = dataKaryawan[0];
//         let key = localStorage.length-1;
//         //stringify datakaryawan pada index[i]
//         let stringDataKaryawan = JSON.stringify(dataLokalKaryawan);
//         localStorage.setItem("karyawan"+[key], stringDataKaryawan);
//         let objectDataKaryawan = JSON.parse(localStorage.getItem("karyawan"+[key]));
// }

//   var nik='',
//   name='',
//   birthDate= '',
//   gender='',
//   address='',
//   religion='',
//   citizenship='',
//   email='',
//   division='';

//   //function data

//   let data =()=>{
//   }

// document.querySelector("#submit").addEventListener("click", function(){
//   alert('clicked');
//   data();
//   pushDataKaryawan();
//   setData();
//   console.log(dataKaryawan);
//   // document.querySelector('input[name="name"]').options[document.querySelector('input[name="name"]').selectedIndex].value;
// })

// //ketika di klik add masukan ke nama variabel baru untuk object yang akan di push
