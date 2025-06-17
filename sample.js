function giveAlert(card) {
  const cardBody = card.parentElement;
  const title = cardBody.querySelector(".card-title").textContent;
  const desc = cardBody.querySelector(".card-text").textContent;
  const price = cardBody.querySelector("#money").innerText;
  const img = cardBody.parentElement.querySelector("img").src;

  const item = {
    title: title,
    desc: desc,
    price: price,
    img: img,
  };

  // localStorage manipulation
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}
function add(card) {
  const cardBody = card.parentElement;
  const title = cardBody.querySelector(".card-title").textContent;
  const desc = cardBody.querySelector(".card-text").textContent;
  const price = cardBody.querySelector("#money").innerText;
  const img = cardBody.parentElement.querySelector("img").src;

  const item = {
    title: title,
    desc: desc,
    price: price,
    img: img,
  };

  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}
// obj
const obj = [
  {
    id: 1,
    img: "assets/cat1.jpeg",
    price: [6000, 7000],
    title: "Too much Licking Cat",
    desc: "This cat licks people too much.CAUTION: Might contain rabies.",
  },
  {
    id: 2,
    desc: "Might go bankrupt, steals your money to buy stuff. Drinks too much. Might bite kids for money.",
    img: "assets/cat2.jpeg",
    price: [10000],
    title: "Drunk Cat",
  },
  {
    id: 3,
    desc: "Doesn't bite. Doesn't meow. Works hard for the fam. Pulls all-nighters to learn stuff.",
    img: "assets/cat3.jpg",
    price: [13000],
    title: "Working Cat",
  },
  {
    id: 4,
    desc: "MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW MEOW . ''COUPLE PACK''.",
    img: "assets/cat4.jpg",
    price: [1000],
    title: "Dancing Cat",
  },
  {
    id: 5,
    desc: "Always vanishes when something breaks. Side-eyes like it’s hiding five war crimes. Walks like it’s plotting your downfall. Very, very sus.",
    img: "assets/cat6.jpg",
    price: [6000],
    title: "Sussy Cat",
  },
  {
    id: 6,
    desc: "Says “meow” once, now thinks it’s cleared Air Force training. Crashed 2 toy planes, still asks to be called Captain. No license, full ego.",
    img: "assets/cat7.webp",
    price: [100000],
    title: "Pilot Cat",
  },
  {
    id: 7,
    desc: "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow  ",
    img: "assets/cat8.jpg",
    price: [800],
    title: "Flat Cat",
  },
  {
    id: 8,
    desc: "ZzZzZzZzZzZ................ZzZzZzZzZzZzZzZz................ZzZzZzZzZzZzZzzZzZzZzZzZzZzZzZzZzZzZzZzZzZ................zZzZzZZ.",
    img: "assets/cat9.webp",
    price: [3079],
    title: "Sleepy Cat",
  },
  {
    id: 9,
    desc: "Too energetic. Runs like it's on Red Bull. Randomly causes chaos and vanishes like a ninja. You'll never know what hit your furniture.",
    img: "assets/cat5.jpg",
    price: [39499],
    title: "Bomber Cat",
  },
  {
    id: 10,
    desc: "This cat doesn’t blink. Ever. Just sits and judges you 24/7 like aunties during family functions. Will make you question your life choices.",
    img: "assets/cat10.webp",
    price: [40000],
    title: "Staring Cat",
  },
  {
    id: 11,
    desc: "Always wearing imaginary shades. Too cool to care. Listens to lo-fi, sips iced coffee, ignores your calls. Literally a whole vibe.",
    img: "assets/cat11.webp",
    price: [300],
    title: "Cool Cat",
  },
  {
    id: 12,
    desc: "Crams 12 chapters the night before exams. Sleeps all day. Lives on caffeine, anxiety, and “I’ll start tomorrow.” Top-tier procrastinator.",
    img: "assets/cat12.jpg",
    price: [0],
    title: "Student Cat",
  },
  {
    id: 13,
    desc: "Will sob loudly at 2AM for no reason. Needs love, snacks, and probably therapy. Cuddle it and it’s your emotional support demon.",
    img: "assets/cat13.webp",
    price: [67899],
    title: "Crying Cat",
  },
  {
    id: 14,
    desc: "Demands head pats every 3 minutes. Will melt into a purring puddle. Touch it wrong and it’ll sue. Professional cuddler with attitude.",
    img: "assets/cat14.webp",
    price: [4000],
    title: "Cute Cat",
  },
  {
    id: 15,
    desc: "Winks at strangers, rolls on the floor like it’s a red carpet. Might steal your partner. Definitely steals attention. Total heartbreaker.",
    img: "assets/cat15.webp",
    price: [50000],
    title: "Flirty Cat",
  },
  {
    id: 16,
    desc: "This one’s got beef with the world. Bites first, glares later. Hates everyone equally. Except tuna. Tuna’s safe. You? Maybe not.",
    img: "assets/cat16.webp",
    price: [3000],
    title: "Angry Cat",
  },
];

const container = document.getElementById("card-container");

obj.map((cat) => {
  const card = document.createElement("div");
  card.className = "col-lg-3";
  card.innerHTML = `
    <div class="card my-4 border-0" style="width: 18rem;">
      <img src="${cat.img}" class="card-img-top" alt="..." />
      <div class="card-body position-relative">
        <h5 class="card-title">${cat.title}</h5>
        <p class="card-text">${cat.desc}</p>
        <p id="money">${cat.price}<i class="bi bi-currency-yen"></i></p>
        <br /><br />
        <a
          onclick="giveAlert(this)"
          class="btn btn-dark fs-4 px-3 text-bold position-absolute bottom-0 end-1 ms-0 mx-1 my-3"
          href="cart.html"
          target="_blank"
          style="width: 170px"
        >Buy Now</a>
        <a
          onclick="add(this)"
          class="btn btn-warning fs-4 px-3 text-bold position-absolute bottom-0 end-0 m-3"
        >+</a>
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
    .filter((cat) => cat.title.toLowerCase().includes(search))
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
