function deleteItem (key){
  localStorage.removeItem(key);
}
let table = document.querySelector("#table-karyawan");
//menambahkan row baru di akhir
var rowAkhir = table.rows.length;


//looping untuk mengambil data masing masing cell dari local storage
function looping(){
  for (let i = 0; i < localStorage.length; i++) {
    let dataKaryawan = JSON.parse(localStorage.getItem(localStorage.key(i)));

    var row = table.insertRow(rowAkhir);

    var edit = document.querySelector("#edit");
    var nikCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var birthDateCell = row.insertCell(2);
    var genderCell = row.insertCell(3);
    var addressCell= row.insertCell(4);
    var religionCell = row.insertCell(5);
    var citizenshipCell = row.insertCell(6);
    var division = row.insertCell(7);
    var actions = row.insertCell(8);
  
    nikCell.innerHTML = dataKaryawan.nik;
    nameCell.innerHTML = dataKaryawan.name;
    birthDateCell.innerHTML = dataKaryawan.birthDate;
    genderCell.innerHTML = dataKaryawan.gender;
    addressCell.innerHTML = dataKaryawan.address;
    religionCell.innerHTML = dataKaryawan.religion;
    citizenshipCell.innerHTML = dataKaryawan.citizenship;
    division.innerHTML = dataKaryawan.division;
    actions.innerHTML = '<a href="./update.html" id="edit" class="btn btn-sm btn-info edit" data-id="{{ id }}" data-thumbnail="{{ thumbnail }}" data-name="{{ name }}" data-description="{{ description }}" data-age="{{ age }}" data-division="{{ division }}" data-gender="{{ gender }}">Update Data</a>' + '<a id="info" href="/ninja/{{ id }}"><button>Info</button></a>' + '<a id="delete" href="javascript:void(0);" class="btn btn-sm btn-danger delete" data-id="{{ id}} ">Delete</a>';
    var hapus = document.querySelectorAll("a#delete");
    for (let i = 0; i < hapus.length; i++) {
      hapus[i].addEventListener("click", function(){
        localStorage.removeItem(localStorage.key(i));
      })
    }
    var editing = document.querySelectorAll("a#edit");
    for (let i = 0; i < editing.length; i++) {
      editing[i].addEventListener("click", function(){
        
        document.querySelector('input[name="name"]').value = JSON.parse(localStorage.getItem(localStorage.key(i))).name;
      })
      
    }

  }
}

looping();

var filterArray = [];

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

// filter();

