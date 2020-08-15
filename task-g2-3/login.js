var el =(el)=> document.querySelector(el);

//cek dulu dah ada apa belum
var dataKaryawan = localStorage.dataKaryawan ? JSON.parse(localStorage.dataKaryawan) : [];

var inputNama = el("input[name=name]").value;
var inputEmail = el("input[name=email]").value;
var inputNik = el("input[name=nik]").value;

function checkValidasi(){

    for (let i = 0; i < dataKaryawan.length; i++) {

        if (dataKaryawan[i].name === el("input[name=name]").value || dataKaryawan[i].email === el("input[name=email]").value || dataKaryawan[i].nik === el("input[name=nik]").value){
            alert('maaf data ini sudah terdaftar')
        }else{
            alert('selamat anda sudah terdaftar')
        }
        
    
    }
}

