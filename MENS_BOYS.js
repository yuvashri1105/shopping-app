function buy(desc,price) {
  let buy = JSON.parse(localStorage.getItem("buys")) || [];
  buy.push({ name: desc, price: price });
  localStorage.setItem("buys", JSON.stringify(buy));

  alert(`REDIRECTING TO CHECKOUT FOR ${desc}`);
  window.location.href = "CHECKOUT_BUY.html";
}

 

function add(desc, price, button) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists in cart
  const index = cart.findIndex(item => item.name === desc);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ name: desc, price: price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Change button to quantity control UI
  button.innerHTML = `
    <button onclick="decreaseQty(this, '${desc}', ${price})">-</button>
    <span class="qty">1</span>
    <button onclick="increaseQty(this, '${desc}', ${price})">+</button>
  `;
  button.onclick = null; // remove the onclick to avoid conflict
}

function increaseQty(btn, desc, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === desc);

  if (index !== -1) {
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));

    const span = btn.parentElement.querySelector(".qty");
    span.innerText = cart[index].quantity;
  }
}

function decreaseQty(btn, desc, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === desc);

  if (index !== -1) {
    cart[index].quantity -= 1;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1); // remove item
      // Revert back to Add to Cart button
      const parent = btn.parentElement;
      parent.innerHTML = `ADD TO CART`;
      parent.setAttribute("onclick", `add('${desc}', ${price}, this)`);
    } else {
      const span = btn.parentElement.querySelector(".qty");
      span.innerText = cart[index].quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}


function viewCart() {
  window.location.href = "CHECKOUT_ADD.html";
}
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
const obj = [
  {
    id: 1,
    img: "menimg2.jpg",
    price: [3000],
    title: "PGYN BRAND",
    desc: "WINE COLOR SHIRT,BLACK JEANS.",
  },
  {
    id: 2,
    desc:"PINK COLOR SHIRT.",
    img: "menimg1.jpg",
    price: [1500],
    title: "PGYN BRAND",
  },
  {
    id: 3,
    desc: "BLACK COLOR T-SHIRT.",
    img: "menimg3.jpg",
    price: [800],
    title: "PGYN BRAND",
  },
  {
    id: 4,
    desc: "SANDAL COLOR SHIRT.",
    img: "menimg4.jpg",
    price: [1000],
    title: "PGYN BRAND",
  },
   
];

const container = document.getElementById("card-container");

obj.map((dress) => {
  const card = document.createElement("div");
  card.className = "col-lg-3";
  card.innerHTML = `
    <div class="card m-5" style="width: 17rem;height:40rem;">
      <img src="${dress.img}" class="card-img-top" alt="..."style="width:270px;height:400px;" />
      <div class="card-body position-relative">
        <h5 class="card-title text-primary">${dress.title}</h5>
        <p class="card-text">${dress.desc}</p>
        <p id="money"><i
                  class="bi bi-currency-rupee"
                ></i>${dress.price}</p>
        <br /><br />
        <a
          onclick="buy('${dress.desc}', ${dress.price[0]})"
          class="btn btn-dark text-bold position-absolute bottom-0 end-1 ms-0 mx-1 my-3"
          target="_blank"
        >Buy Now</a>
        <a
          onclick="add('${dress.desc}', ${dress.price[0]},this)" id="addToCartBtn"
          class="btn btn-warning text-bold position-absolute bottom-0 end-0 m-3"
        >ADD TO CART</a>
      </div>
    </div>
  `;
  container.appendChild(card);
});
// searchuu
document.getElementById("searchInput").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const allCards = container.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.parentElement.style.display = "none"; 
  });
  obj
    .filter((dress) => dress.desc.toLowerCase().includes(search))
    .map((match) => {
      const index = obj.indexOf(match);
      allCards[index].parentElement.style.display = "block";
    });
});
// for total price displaying
function otp() {
  const allCards = container.querySelectorAll(".card");
  const totalCards = allCards.length;
  const a = obj.map((cat) => cat.price);
  console.log(a);
  const combine = a.flat(); //flatten a nested array
  const totalPrice = combine.reduce((sum, i) => sum + i, 0);
  console.log(combine);
  document.getElementById(
    "output"
  ).textContent = `Total Cards: ${totalCards} | Total Price: ${totalPrice} /-`;
}
otp();
