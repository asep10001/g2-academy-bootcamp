const product = localStorage.product ? JSON.parse(localStorage.product) : [];
const $ = (el) => {
  return document.querySelector(el);
};

const addProduct = () => {
  const name = $("#name").value;
  const id = $("#id").value;
  const jenis = $("#jenis").value;
  const stock = $("#stock").value;
  product.push({ name, id, jenis, stock });
  localStorage.setItem("product", JSON.stringify(product));
};

const showProduct = () => {
  let row = document.querySelector("table tbody");
  let rows = "";
  for (let i = 0; i < product.length; i++) {
    const produk = product[i];
    rows += `<tr>
        <td>${produk.id}</td>
        <td>${produk.name}</td>
        <td>${produk.stock}</td>
        <td>${produk.stock}</td>
        <td>${produk.jenis}</td>
        <td align=left><button onclick="updateDataEmployee(${i})">Edit</button> 
        <button onclick="removeDataEmployee(${i})">Delete</button></td></tr>`;
  }
  row.innerHTML = rows;
};

showProduct();
