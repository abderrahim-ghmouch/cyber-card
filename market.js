let data = [
  {
    id: 1,
    name: "test",
    price: 100,
    image: "/img/nanoG.png",
  },
  {
    id: 2,
    name: "test",
    price: 100,
    image: "/img/A-f.png",
  },
  {
    id: 3,
    name: "test",
    price: 100,
    image: "/img/bow2.png",
  },
  {
    id: 4,
    name: "test",
    price: 100,
    image: "/img/bow2.png",
  },
  {
    id: 5,
    name: "test",
    price: 100,
    image: "/img/bow2.png",
  },
  {
    id: 6,
    name: "test",
    price: 100,
    image: "/img/bow2.png",
  },
];


let favorites = [];

const cardsSection = document.getElementById("cards");

function printCards() {
  cardsSection.innerHTML = "";

  data.forEach((el) => {
    cardsSection.innerHTML =
      cardsSection.innerHTML +
      `
             <div
                      class=" h-[80vh] bg-black shadow-2xl shadow-[#00F8FF]/60 rounded-lg border-2 border-[#0bcfd6] hover:border-[#0bcfd6] cursor-pointer  ">
                      <img class="h-[60vh] rounded-t-lg hover:scale-105 " src=${el.image}>
                      <div>
                          <div class="flex justify-around m-y-4 font-[Audiowide] text-xl text-white">
                              <h5>
                              ${el.name}
                              </h5>
                              <h5>${el.price}$</h5>
                          </div>
                          <div class="flex justify-around mt-10 ">
                              <button
                              data-id="${el.id}"
                                  class="btn-add font-[Audiowide] text-white  text-xs border-[#0D7377] border-2 p-2.5 rounded-md duration-200 hover:shadow-md hover:shadow-[#0D7377] hover:bg-[#14FFEC]  hover:text-black">
                                  Add to cart</button>
                              <i
                                  class="fa-regular fa-heart text-[#0D7377] text-3xl duration-200  hover:text-white/20"></i>
                          </div>
                      </div>
                  </div>
  `;
  });

  document.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      let notFound = true;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
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

        cart.push(add);
        localStorage.setItem("cart", JSON.stringify(cart));

      }
    });
  });
}




printCards();