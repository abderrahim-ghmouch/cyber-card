let data = [
    {
        name: "test",
        price: 100,
        image: "/img/nanoG.png"
    },
];

let cards = document.getElementById("cards");

data.forEach(e=>{
    let card = `                <div
                    class=" h-[80vh] bg-black shadow-2xl shadow-[#00F8FF]/60 rounded-lg border-2 border-[#0bcfd6] hover:border-[#0bcfd6] cursor-pointer  ">
                    <img class="h-[60vh] rounded-t-lg hover:scale-105 " src=${e.image}
                    <div>
                        <div class="flex justify-around m-y-4 font-[Audiowide] text-xl text-white">
                            <h5>${e.name}
                            </h5>
                            <h5>${e.price}</h5>
                        </div>
                        <div class="flex justify-around mt-10 ">
                            <button
                                class="font-[Audiowide] text-white  text-xs border-[#0D7377] border-2 p-2.5 rounded-md duration-200 hover:shadow-md hover:shadow-[#0D7377] hover:bg-[#14FFEC]  hover:text-black">
                                Add to cart</button>
                            <i
                                class="fa-regular fa-heart text-[#0D7377] text-3xl duration-200  hover:text-white/20"></i>

                        </div>
                    </div>`;
                    cards.append(card)
})
