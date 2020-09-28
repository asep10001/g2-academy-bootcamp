const allOrder = localStorage.allOrder ? JSON.parse(localStorage.allOrder) : [];
const $ = (el) => {
    return document.querySelector(el);
  };

const show = () =>{
    for (let i = 0; i < allOrder.length; i++) {
        let name = allOrder[i].name;
        let price = allOrder[i].price;
        let item = allOrder[i].pesanan;
        let totalPrice = allOrder[i].totalPrice;
        let ol = $("#detail_allOrder");
        const list = `
        <li>
        ${name} dengan harga Rp. ${price}/buah sebanyak ${item} item : Rp. ${totalPrice}
        <li>
        `
        ol.innerHTML += list;
        
    }

}
