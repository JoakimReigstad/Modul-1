const app = document.getElementById('app');
const fruit = ['Pineapple', 'Mango', 'Banana', 'Papaya', 'Strawberry'];

view();

function view() {
    let html = `<h2>Products</h2>`;
    fruit.forEach((product, index) => {
        html += `<div>${product} <button onclick="addToCart(${index})">Add to Cart</button></div>`;
    });
    app.innerHTML = html;
}

let cart = [];

function addToCart(index) {
    const product = fruit[index];
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        cartList.appendChild(listItem);
    });
}
