/** @format */

const tableBody = document.querySelector("#products-table");
const ul = document.querySelector("#products-list");
function renderProductsTable(products) {
  tableBody.innerHTML = "";
  products.forEach((products) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${products.name}</td>
        <td>${products.price}</td>
        <td>${products.rating}</td>`;
    tableBody.appendChild(tr);
  });
}
function renderProducts(products) {
  ul.innerHTML = "";
  products.forEach((products) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${products.name}</strong> - $${products.price} - Rating: ${products.rating}`;
    ul.appendChild(li);
  });
}
renderProductsTable(products);
renderProducts(products);
