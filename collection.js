const cardsCollection = document.getElementById("collection");
let collection = JSON.parse(localStorage.getItem("collection")) || [];

type = ["all", "epic", "common", "rare", "legend"];

document.querySelectorAll("#types button").forEach((e) => {
  e.addEventListener("click", (e) => {
    printCollection(e.target.dataset.type);
  });
});

function printCollection(filter = "all") {
  cardsCollection.innerHTML = "";

  collection.forEach((el) => {
    if (el.type == filter || filter == "all") {
      cardsCollection.innerHTML =
        cardsCollection.innerHTML +
        `
             <div
                      class=" flex flex-col h-[80vh] w-[50vh] bg-black shadow-2xl  rounded-xl border-2 border-[#0bcfd6] hover:border-[#0bcfd6] cursor-pointer  ">
                      <img class="h-[60vh]  hover:scale-103 " src=${el.image}>
                      <div>
                          <div class="flex justify-around my-4 font-[Audiowide] text-xl text-white">
                              <h5>
                              ${el.name}
                              </h5>
                              <h5>${el.price}$</h5>
                          </div>
                      </div>
                  </div>
  `;
    }
  });
}

printCollection();
