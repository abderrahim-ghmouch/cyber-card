let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let carts = JSON.parse(localStorage.getItem("carts")) || [];

const favoritesSection = document.getElementById("favorites");

function printFavorites() {
  favoritesSection.innerHTML = "";

if (favorites.length == 0) {
    favoritesSection.innerHTML =  `   
      <p class="text-[#14FFEC] text-2xl md:text-3xl font-bold flex justify-center text-center drop-shadow-[0_0_10px_#14FFEC] col-span-1 sm:col-span-2 md:col-span-3">
            no cards here for the moment . . .
      </p>
    `;
  }

  favorites.forEach((el) => {
    favoritesSection.innerHTML =
      favoritesSection.innerHTML +
      `
            <div
                    class=" h-[80vh]  w-[270px] rounded-lg  cursor-pointer  ">
                    <img class="h-[60vh] m-5 rounded-t-lg hover:scale-100 duration-200" src=${el.image}>
                    <div>
                          <div class="flex justify-evenly font-[Audiowide] text-xl text-white">
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
                                  
<button
                               data-id="${el.id}"
                                  class="btn-sup font-[Audiowide] text-white  text-xs border-[#0D7377] border-2 p-2.5 rounded-md duration-200 hover:shadow-md hover:shadow-[#0D7377] hover:bg-[#14FFEC]  hover:text-black">
                                  Remove</button>
                          </div>
                      </div>
                  </div>
  `;
  });

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
        let add = favorites.find((e) => {
          return e.id == id;
        });

        add["quantity"] = 1;

        cart.push(add);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });



  document.querySelectorAll(".btn-sup").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;

      favorites = favorites.filter((e) => {
        return e.id != id;
      });

      localStorage.setItem("favorites", JSON.stringify(favorites));
      printFavorites();
    });
  });

}

printFavorites();
