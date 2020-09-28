// let dataDivisi = [];

//cek dulu dah ada apa belum
var dataDivisi = localStorage.dataDivisi
  ? JSON.parse(localStorage.dataDivisi)
  : [];

//mempersingkat cara get query
var el = (el) => document.querySelector(el);

//untuk menyimpan data
const saveData = () => {
  const name = el('input[name="name"]').value,
    url = el('input[name="url"]').value,
    description = el('input[name="description"]').value;
    console.log('ini description ' + description);
  //push object baru ke array dataDivisi
  dataDivisi.push({
    name,
    url,
    description,
  });
  //simpan ke lokal storage
  localStorage.setItem("dataDivisi", JSON.stringify(dataDivisi));
  // listKaryawan()
  document.getElementById("divisi").submit();
};