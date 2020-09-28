//cek dulu dah ada apa belum
var dataKaryawan = localStorage.dataKaryawan
  ? JSON.parse(localStorage.dataKaryawan)
  : [];

//mempersingkat cara get query
var el = (el) => document.querySelector(el);

const listUser = () => {
  let rows = "";
  for (let i = 0; i < dataKaryawan.length; i++) {
    const user = dataKaryawan[i];
    rows += `
              <tr>
                  <td>${user.nik}</td>
                  <td>${user.name}</td>
                  <td>${user.birthDate}</td>
                  <td>${user.gender}</td>
                  <td>${user.address}</td>
                  <td>${user.religion}</td>
                  <td>${user.citizenship}</td>
                  <td>${user.email}</td>
                  <td>${user.division}</td>

                  <td><a href="./update.html" id="edit" class="btn btn-sm btn-info edit" >Update Data</a>
                  <a id="delete" onclick="deleteKaryawan(${i})" href="" class="btn btn-sm btn-danger delete" data-id="">Delete</a>'</td>
  
              </tr>
          `;
  }
  el("table tbody").innerHTML = rows;
};
listUser();

const deleteKaryawan = (ind) => {
  // let index = dataKaryawan[ind];
  dataKaryawan.splice(ind, 1);
  localStorage.setItem("dataKaryawan", JSON.stringify(dataKaryawan));
};

// var filterArray = [];

function filter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table-karyawan");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[8];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        // console.log(input)
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
