// let dataDivisi = [];

//cek dulu dah ada apa belum
var dataDivisi = localStorage.dataDivisi ? JSON.parse(localStorage.dataDivisi) : [];

//mempersingkat cara get query
var el = (el) => document.querySelector(el);

//untuk menyimpan data 
const saveData = () =>{

  const name=el('input[name="name"]').value,
    url= el('input[name="url"]').value,
    description= el('input[name="description"]');
    //push object baru ke array dataDivisi
    dataDivisi.push({
       name,
      url,
      description
  })
  //simpan ke lokal storage
  localStorage.setItem("dataDivisi", JSON.stringify(dataDivisi))
  // listKaryawan()
  document.getElementById("divisi").submit();
}

// const deleteDivisi = () =>{
//     localStorage.removeItem("dataDivisi[0]");
// }
    


//   const listUser = () => {
    
//     let rows = ""
//     for (let i = 0; i < dataDivisi.length; i++) {
//         const user = dataDivisi[i];
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
//         const dataLokalKaryawan = dataDivisi[0];
//         let key = localStorage.length-1;
//         //stringify dataDivisi pada index[i]
//         let stringdataDivisi = JSON.stringify(dataLokalKaryawan);
//         localStorage.setItem("karyawan"+[key], stringdataDivisi);
//         let objectdataDivisi = JSON.parse(localStorage.getItem("karyawan"+[key]));
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
  //   pushdataDivisi();
  //   setData();
  //   console.log(dataDivisi);
  //   // document.querySelector('input[name="name"]').options[document.querySelector('input[name="name"]').selectedIndex].value;
  // })
  
  // //ketika di klik add masukan ke nama variabel baru untuk object yang akan di push

  
  