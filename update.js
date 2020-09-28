//cek dulu dah ada apa belum
var dataKaryawan = localStorage.dataKaryawan
  ? JSON.parse(localStorage.dataKaryawan)
  : [];

//mempersingkat cara get query
var el = (el) => document.querySelector(el);

const fillData = () => {
  for (let i = 0; i < dataKaryawan.length; i++) {
    if (el('input[name="nik"]').value === dataKaryawan[i].nik) {
      // return true
      // el('input[name="nik"]').value = dataKaryawan[i].nik
      el('input[name="name"]').value = dataKaryawan[i].name;
      el('input[name="birthDate"]').value = dataKaryawan[i].birthDate;
      el(`input[value=${dataKaryawan[i].gender}]`).checked = true;
      el('input[name="address"]').value = dataKaryawan[i].address;
      el('input[name="religion"]').value = dataKaryawan[i].religion;
      el('input[name="citizenship"]').value = dataKaryawan[i].citizenship;
      el('input[name="email"]').value = dataKaryawan[i].email;
      el('select[name="division"]').selected = dataKaryawan[i].division;
    } else {
      // el('input[name="nik"]').value = ""
      el('input[name="name"]').value = "";
      el('input[name="birthDate"]').value = "";
      el('input[name="gender"]').selected = "";
      el('input[name="address"]').value = "";
      el('input[name="religion"]').value = "";
      el('input[name="citizenship"]').value = "";
      el('input[name="email"]').value = "";
      el('select[name="division"]').selected = "";

      // alert('silahkan isi no nik yang terdaftar')
    }
  }
};

//untuk menyimpan data
const saveData = () => {
  for (let i = 0; i < dataKaryawan.length; i++) {
    if (el('input[name="nik"]').value === dataKaryawan[i].nik) {
      const nik = el('input[name="nik"]').value,
        name = el('input[name="name"]').value,
        birthDate = el('input[name="birthDate"]').value,
        gender = el('input[name="gender"]').nextSibling.textContent,
        address = el('input[name="address"]').value,
        religion = el('input[name="religion"]').value,
        citizenship = el('input[name="citizenship"]').value,
        email = el('input[name="email"]').value,
        division = el('select[name="division"]').value;
      //push object baru ke array datakaryawan
      dataKaryawan[i] ={
        nik,
        name,
        birthDate,
        gender,
        address,
        religion,
        citizenship,
        email,
        division,
      };
      //simpan ke lokal storage
      localStorage.setItem("dataKaryawan", JSON.stringify(dataKaryawan));
      document.getElementById("update-karyawan").submit();
    }
  }
};
