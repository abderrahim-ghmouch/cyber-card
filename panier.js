let data = [
  {
    id: 1,
    name: "test",
    price: 100,
    image: "./img/nanoG.png",
  },
  {
    id: 2,
    name: "test",
    price: 100,
    image: "./img/samurai2.png ",
  },
  {
    id: 3,
    name: "test",
    price: 100,
    image: "./img/bow2.png",
  },
  {
    id: 4,
    name: "test",
    price: 100,
    image: "./img/bow2.png",
  },
  {
    id: 5,
    name: "test",
    price: 100,
    image: "./img/bow2.png",
  },
  {
    id: 6,
    name: "test",
    price: 100,
    image: "./img/wolf3.png",
  },
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let collection = JSON.parse(localStorage.getItem("collection")) || [];

const cartSection = document.getElementById("cart");
const acheter = document.getElementById("acheter");
let total = 0;

acheter.addEventListener("click", (e) => {
  cart.forEach((e) => {
    const id = e.id;

    let notFound = true;

    for (const ob of collection) {
      if (ob.id == id) {
        notFound = false;
        break;
      }
    }

    if (notFound) {
      collection.push(e);
    } else {
      collection = collection.map((c) => {
        if (c.id == id)
          return {
            id: c.id,
            name: c.name,
            price: c.price,
            image: c.image,
            quantity: c.quantity + e.quantity,
          };
        else return c;
      });
    }

    localStorage.setItem("collection", JSON.stringify(collection));
    localStorage.setItem("cart", JSON.stringify([]));
    cart = [];
    printCart();
  });
});

function printCart() {
  cartSection.innerHTML = "";

  if (cart.length == 0) {
    cartSection.innerHTML = `<<div class="py-24 flex justify-center items-center justify-center">
      <p class="text-[#14FFEC] text-2xl md:text-3xl font-bold justify-center text-center drop-shadow-[0_0_10px_#14FFEC]">
            Nothing here for the moment 😴
      </p>
    </div>  `;
  }

  cart.forEach((el) => {
    cartSection.innerHTML =
      cartSection.innerHTML +
      `
            <div
                    data-id="${el.id}"
                    class="card h-[80vh] flex  justify-center items-center flex-col bg-black shadow-2xl  rounded-lg  hover:border-[#0bcfd6] cursor-pointer  ">
                    <img class="hw-full h-[300px] object-contain hover:scale-105 duration-300 rounded-t-lg mt-5" src=${el.image}>
                    <div>
                          <div class="flex  justify-around m-y-4 font-[Audiowide] text-xl text-white">
                              <h5>
                              ${el.name}
                              </h5>
                              <h5>${el.price}$</h5>
                          </div>
                          <div class="flex justify-around mt-5 ">

                        <input class="text-white drop-shadow-[0_0_10px_#14FFEC] ml-5 w-[100px] h-[50px] mb-5 rounded-xl text-center bg-black"data-id="${el.id}" value="${el.quantity}" min="1" max="10" type="number">

<button data-id="${el.id}" class="btn-col">
  Add to Collection
</button>

                          <div class="flex gap-4 mr-4 mb-10">
                          <button
                              data-id="${el.id}"
                           
                                  class="btn-sup font-[Audiowide] text-white  text-xs border-[#0D7377] border-2 p-2.5 rounded-md duration-200 hover:shadow-md hover:shadow-[#0D7377] hover:bg-[#14FFEC]  hover:text-black">
                                  Delete From Cart</button>
                                  
<button
                              data-id="${el.id}"
                                  class="btn-fav font-[Audiowide] text-white  text-xs border-[#0D7377] border-2 p-2.5 rounded-md duration-200 hover:shadow-md hover:shadow-[#0D7377] hover:bg-[#14FFEC]  hover:text-black">
                                  Add to fav</button>
                                  
                                  </div>
                          </div>
                      </div>
                  </div>
  `;
  });

  total = cart.reduce((total, val) => {
    return total + +val.price * +val.quantity;
  }, 0);
  document.getElementById("total").innerText = total;
}

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

document.addEventListener("input", (e) => {
  if (e.target.type === "number") {
    let newQuantity = parseInt(e.target.value);
    let id = e.target.dataset.id;

    let item = cart.find((el) => el.id == id);
    let totalEl = document.getElementById("total");
    totalEl.innerText =
      +totalEl.innerText + item.price * (newQuantity - item.quantity);

    item.quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
  console.log("nnnnnnnnnnnnnn1",cart);

// document.querySelectorAll(".btn-sup").forEach((btn) => {
//   console.log("nnnnnnnnnnnnnn",cart);

//   btn.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;

//     cart = cart.filter((e) => {
//       return e.id != id;
//     });

//     localStorage.setItem("cart", JSON.stringify(cart));
//     document.querySelector(`.card[data-id='${id}']`).remove();
//   });

// });


document.addEventListener("click", (e) => {

  if (e.target.classList.contains("btn-sup")) {
    const id = e.target.dataset.id;

    cart = cart.filter((c) => c.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));

    document.querySelector(`.card[data-id='${id}']`).remove();
    printCart();
  }
  
 if (e.target.classList.contains("btn-fav")) {
    const id = e.target.dataset.id;
    let exist = favorites.some((f) => f.id == id);

    if (!exist) {
      let add = data.find((d) => d.id == id);
      favorites.push(add);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

});


printCart();
