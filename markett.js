let data = [
  {
    id: 1,
    name: "solo",
    price: 100,
    image: "./img/nanoG.png",
    type: "legend",
  },
  {
    id: 2,
    name: "test",
    price: 100,
    image: "./img/nanoG.png ",
    type: "epic",
  },
  {
    id: 3,
    name: "test",
    price: 100,
    image: "./img/bow2.png",
    type: "common",
  },
  {
    id: 4,
    name: "test",
    price: 100,
    image: "./img/bow2.png",
    type: "common",
  },
  {
    id: 5,
    name: "test",
    price: 100,
    image: "./img/bow2.png",
    type: "common",
  },
  {
    id: 6,
    name: "test",
    price: 100,
    image: "./img/nanoG.png",
    type: "common",
  },
  {
    id: 7,
    name: "test",
    price: 100,
    image: "./img/nanoG.png",
    type: "common",
  },
  {
    id: 8,
    name: "test",
    price: 100,
    image: "./img/nanoG.png",
    type: "common",
  },
  {
    id: 9,
    name: "test",
    price: 100,
    image: "./img/nanoG.png",
    type: "common",
  },
  {
    id: 10,
    name: "test",
    price: 100,
    image: "./img/nanoG.png",
    type: "common",
  },
];

const cardsSection = document.getElementById("cards");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

let page = 1;
let perPage = 3;
let count = data.length;
let filter = "all";
// type = ["all", "epic", "common", "rare", "legend"];

document.querySelectorAll("#types button").forEach((e) => {
  e.addEventListener("click", (e) => {
    page = 1;
    filter = e.target.dataset.type;
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
  if (page == Math.ceil(count / 3)) {
    alert("you are in the end of left pagination");
  } else {
    page++;
    printCards(filter);

    btnFavEvent();
    btnAddEvent();
  }
});

function printCards(filter = "all") {
  console.log(page);
  cardsSection.innerHTML = "";

  let start = (page - 1) * perPage; //3

  for (let i = start; i < start + perPage; i++) {
    let el = data[i];

    if (el.type == filter || filter == "all") {
     cardsSection.innerHTML += `
<div class="flex flex-col bg-black shadow-2xl rounded-xl border-2 border-[#0bcfd6]
            hover:border-[#14FFEC] cursor-pointer w-full max-w-xs mx-auto">

    <img class="w-full h-[300px] object-contain hover:scale-105 duration-300"
         src="${el.image}" alt="${el.name}">

    <div class="p-4">
        <div class="flex justify-between items-center font-[Audiowide] text-white text-sm sm:text-lg">
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
