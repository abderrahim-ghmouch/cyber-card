let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let carts = JSON.parse(localStorage.getItem("carts")) || [];

const favoritesSection = document.getElementById("favorites");

function printFavorites() {
  favoritesSection.innerHTML = "";

if (favorites.length == 0) {
    favoritesSection.innerHTML =  `    <div class="py-24 flex justify-center items-center justify-center">
      <p class="text-[#14FFEC] text-2xl md:text-3xl font-bold justify-center text-center drop-shadow-[0_0_10px_#14FFEC]">
            Nothing here for the moment 😴
      </p>
    </div> `;
  }

  favorites.forEach((el) => {
    favoritesSection.innerHTML =
      favoritesSection.innerHTML +
      `
            <div
                    class=" h-[80vh] bg-black w-[270px] shadow-2xl shadow-[#00F8FF]/60 rounded-lg border-2 border-[#0bcfd6] hover:border-[#0bcfd6] cursor-pointer  ">
                    <img class="h-[60vh] rounded-t-lg " src=${el.image}>
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
                                  
<button
                               data-id="${el.id}"
                                  class="btn-sup font-[Audiowide] text-white  text-xs border-[#0D7377] border-2 p-2.5 rounded-md duration-200 hover:shadow-md hover:shadow-[#0D7377] hover:bg-[#14FFEC]  hover:text-black">
                                  Remove From fav</button>
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
