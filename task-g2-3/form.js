let dataKaryawan = [];

  //looping ada berapa index
let setData = ()=>{
        const dataLokalKaryawan = dataKaryawan[0];
        let key = localStorage.length-1;
        //stringify datakaryawan pada index[i]
        let stringDataKaryawan = JSON.stringify(dataLokalKaryawan);
        localStorage.setItem("karyawan"+[key], stringDataKaryawan);
        let objectDataKaryawan = JSON.parse(localStorage.getItem("karyawan"+[key]));
}

  
  
  
   
  
  var nik='',
  name='',
  birthDate= '',
  gender='',
  address='',
  religion='',
  citizenship='',
  email='',
  division='';

  //function data

  let data =()=>{
    nik=document.querySelector('input[name="nik"]').value;
    name=document.querySelector('input[name="name"]').value;
    birthDate= document.querySelector('input[name="birthDate"]').value;
    gender= document.querySelector('input[name="gender"]').value;
    address=document.querySelector('input[name="address"]').value;
    religion=document.querySelector('input[name="religion"]').value;
    citizenship=document.querySelector('input[name="citizenship"]').value;
    email=document.querySelector('input[name="email"]').value;
    division=document.querySelector('select[name="division"]').value;
  }

    //push object baru ke array datakaryawan
    let pushDataKaryawan = ()=>{
        dataKaryawan.push({
            nik: nik,
            name: name,
            birthDate: birthDate,
            gender: gender,
            address: address,
            religion: religion,
            citizenship: citizenship,
            email: email,
            division: division
        })
      }
    
  
  
  document.querySelector("#submit").addEventListener("click", function(){
    alert('clicked');
    data();
    pushDataKaryawan();
    setData();
    console.log(dataKaryawan);
    // document.querySelector('input[name="name"]').options[document.querySelector('input[name="name"]').selectedIndex].value;
  })
  
  //ketika di klik add masukan ke nama variabel baru untuk object yang akan di push

  
  