


let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSection = document.getElementById("cart");

function printCart() {
  cartSection.innerHTML = "";

  cart.forEach((el) => {
    cartSection.innerHTML =
      cartSection.innerHTML +
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
                              <i class="fa-regular fa-heart text-[#0D7377] text-3xl duration-200  hover:text-white/20"></i>
                          </div>
                      </div>
                  </div>
  `;
  });
}

printCart();
