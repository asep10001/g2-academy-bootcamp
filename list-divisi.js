//cek dulu dah ada apa belum
var dataDivisi = localStorage.dataDivisi ? JSON.parse(localStorage.dataDivisi) : [];

//mempersingkat cara get query
var el = (el) => document.querySelector(el);

 const listUser = () => {
    
      let rows = ""
      for (let i = 0; i < dataDivisi.length; i++) {
          const user = dataDivisi[i];
          rows += `
              <tr>
                  <td>${user.name}</td>
                  <td><img src="${user.url}"></td>
                  <td>${user.description}</td>

                  <td><a id="delete" onclick="deleteDivisi(${i})" href="" class="btn btn-sm btn-danger delete" data-id="">Delete</a>'</td>


  
              </tr>
          `
      }
      el("table tbody").innerHTML = rows
  }
listUser()


function deleteDivisi (index){
    dataDivisi.splice(index, 1);
    localStorage.setItem("dataDivisi", JSON.stringify(dataDivisi));
}

// var filterArray = [];

function filter() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table-karyawan");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



