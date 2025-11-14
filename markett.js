let data = [
  {
    id: 1,
    name: "cyber Wolf",
    price: 500,
    image: "./img/wolf_3.png",
    type: "legend",
  },
  {
    id:2,
    name:'shiter',
    price:120,
    image:"./img/shiter.png",
    type:"common",
  
  },
  {
    id: 3,
    name: "cyber sage",
    price: 300,
    image: "./img/older.png",
    type: "epic",
  },
  {
    id: 4,
    name: "Neon Samurai",
    price: 300,
    image: "./img/samurai 2.png",
    type: "Rare",
  },
  {
    id: 5,
    name: "Dark Hacker",
    price: 100,
    image: "./img/arabic.png",
    type: "rare",
  },
  {
    id: 6,
    name: "Cyber Queen",
    price: 700,
    image: "./img/queen 1.png",
    type: "legend",
  },
   {
    id: 7,
    name: "Cyber sniper",
    price: 700,
    image: "./img/sniper.png",
    type: "legend",
  },
  {
    id: 8,
    name: "cyber specter",
    price: 100,
    image: "./img/specter-removebg-preview.png",
    type: "common",
  },
  {
    id: 9,
    name: "neo nomad kid",
    price: 100,
    image: "./img/small.png",
    type: "epic",
  },
  {
    id: 10,
    name: "Nano Sorcerer",
    price: 200,
    image: "./img/nanoG.png",
    type: "common",
  },
  {
    id: 11,
    name: "Cyber Sprits",
    price: 100,
    image: "./img/ne.png",
    type: "rare",
  },
];
let filteredData = data;

const cardsSection = document.getElementById("cards");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let page = 1;
let perPage = 6;
let count = filteredData.length;
let filter = "all";



let buttons = document.querySelectorAll("#types button");
buttons.forEach((e) => {
  e.addEventListener("click", (e) => {
    buttons.forEach((b) => b.classList.remove("active-type"));
    e.target.classList.add("active-type");

    page = 1;
    filter = e.target.dataset.type;
    if (filter == "all") {
      filteredData = data;
    } else {
      filteredData = data.filter((e) => e.type == filter);
    }
    printCards(e.target.dataset.type);
  });
});

document.getElementById("left-pagination").addEventListener("click", (e) => {
  if (page == 1) {
    alert("you are in the end of left pagination");
  } else {
    page--;
    printCards(filter);

    printCards();
    btnFavEvent();
    btnAddEvent();
  }
});

document.getElementById("right-pagination").addEventListener("click", (e) => {
  count = filteredData.length;
  if (page == Math.ceil(count / 3)) {
    alert("you are in the end of right pagination");
  } else {
    page++;
    printCards(filter);

    btnFavEvent();
    btnAddEvent();
  }
});

function printCards(filter = "all") {
  cardsSection.innerHTML = "";

  let start = (page - 1) * perPage; //3

  for (let i = start; i < start + perPage; i++) {
    let el = filteredData[i];

    if (el.type == filter || filter == "all") {
      cardsSection.innerHTML += `
<div class="flex flex-col bg-black shadow-2xl rounded-xl 
            hover:border-[#14FFEC] cursor-pointer w-full max-w-xs mx-auto">

    <img class="w-full h-[300px] object-contain hover:scale-105 duration-300"
         src="${el.image}" alt="${el.name}">

    <div class="p-4">
        <div class="flex justify-around items-center font-[Audiowide] text-white text-sm sm:text-lg">
            <h5>${el.name}</h5>
            <h5>${el.price}$</h5>
        </div>

        <div class="flex justify-around mt-6 gap-2">
            <button data-id="${el.id}"
                class="btn-add font-[Audiowide] text-white text-xs border-[#0D7377] border-2 px-3 py-2 rounded duration-200 hover:bg-[#14FFEC] hover:text-black">
                Add to cart
            </button>

            <button data-id="${el.id}"
                class="btn-fav font-[Audiowide] text-white text-xs border-[#0D7377] border-2 px-3 py-2 rounded duration-200 hover:bg-[#14FFEC] hover:text-black">
                Add to fav
            </button>
        </div>
    </div>
</div>`;
    }
  }
}

function btnFavEvent() {
  document.querySelectorAll(".btn-fav").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      let notFound = true;

      for (const ob of favorites) {
        if (ob.id == id) {
          notFound = false;
          break;
        }
      }

      if (notFound) {
        let add = data.find((e) => {
          return e.id == id;
        });

        favorites.push(add);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    });
  });
}

function btnAddEvent() {
  document.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      let notFound = true;

      for (const ob of cart) {
        if (ob.id == id) {
          notFound = false;
          break;
        }
      }

      if (notFound) {
        let add = data.find((e) => {
          return e.id == id;
        });

        add["quantity"] = 1;

        cart.push(add);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });
}

printCards();
btnFavEvent();
btnAddEvent();