function add(name, price, button) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists in cart
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ name:name, price: price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Change button to quantity control UI
  button.innerHTML = `
    <button onclick="decreaseQty(this, '${name}', ${price})">-</button>
    <span class="qty">1</span>
    <button onclick="increaseQty(this, '${name}', ${price})">+</button>
  `;
  button.onclick = null; // remove the onclick to avoid conflict
}

function increaseQty(btn, name,price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === name);

  if (index !== -1) {
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));

    const span = btn.parentElement.querySelector(".qty");
    span.innerText = cart[index].quantity;
  }
}

function decreaseQty(btn, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === name);

  if (index !== -1) {
    cart[index].quantity -= 1;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1); // remove item
      // Revert back to Add to Cart button
      const parent = btn.parentElement;
      parent.innerHTML = `ADD TO CART`;
      parent.setAttribute("onclick", `add('${name}', ${price}, this)`);
    } else {
      const span = btn.parentElement.querySelector(".qty");
      span.innerText = cart[index].quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}


function buy(name) {
  let buy = JSON.parse(localStorage.getItem("buys")) || [];
  buy.push({ name: name, price: price });
  localStorage.setItem("buys", JSON.stringify(buy));

  alert(`REDIRECTING TO CHECKOUT FOR ${name}`);
  window.location.href = "CHECKOUT_BUY.html";
}


function viewCart() {
  window.location.href = "CHECKOUT_ADD.html";
}
 let cart = JSON.parse(localStorage.getItem("cart")) || [];

 //search
 
document.getElementById("searchInput").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const allCards = document.querySelectorAll(".card"); // use document instead of 'container'

  allCards.forEach((card) => {
    const title = card.querySelector(".card-text").textContent.toLowerCase();
    const brand = card.querySelector(".card-title").textContent.toLowerCase();
    
    if (title.includes(search) || brand.includes(search)) {
      card.parentElement.style.display = "block";
    } else {
      card.parentElement.style.display = "none";
    }
  });
});

