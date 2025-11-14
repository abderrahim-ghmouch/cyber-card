let cardColumn = JSON.parse(localStorage.getItem("collection"));
let deckcontainer = document.getElementById("card-cols");
let dropzone = document.querySelectorAll(".dropzone");
let arena = document.querySelectorAll(".arenacase");
let mode = document.getElementById("popup");
let attack = document.getElementById("atk");
let deffense = document.getElementById("def");



let dragged = null;

let chooseMode = document.getElementById("cardMode");

cardColumn.forEach((hhh) => {
  let div = document.createElement("div");
  div.setAttribute("draggable", "true");
  div.innerHTML += `

        <img id="draggedelement" class="hover:cursor-grab" 
            src="${hhh.image}">

            `;
  div.querySelector("#draggedelement").setAttribute("draggable", false);
  deckcontainer.appendChild(div);

  div.addEventListener("dragstart", () => {
    div.classList.add("draging");

    dragged = div;
  });

  div.addEventListener("dragend", () => {
    div.classList.remove("draging");
    dragged = null;
  });
});

dropzone.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    if (zone.children.length > 0) {
      return;
    } else {
      zone.appendChild(dragged);
      dragged.classList.add("handCard");
      dragged.classList.add("flex", "h-[100px]");
    }
    if (dragged != null) {
    }
  });
});

arena.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();

    if (zone.children.length > 0) {
      return;
    } else {
      if (dragged.classList.contains("handCard")) {
        zone.appendChild(dragged);

        const draging = document.querySelector(".draging");

        mode.classList.remove("hidden");

        attack.onclick = () => {
          mode.classList.add("hidden");
          
        };

        deffense.onclick = () => {
          mode.classList.add("hidden");

          draging.setAttribute("draggable", false);

          draging.classList.add("rotate-90");
        };
      }
    }
  });
});
// let thisTurn
// endturn.addEventListener('click', () => {
//   click++;
//   if (click > 1) {
//     return;
//   }
//   thisTurn = false;
//   endturn.classList.add('cursor-not-allowed');
//   endturn.classList.remove('active:opacity-50');
//   const emptySlots = Array.from(Cards2).filter(c => c.children.length === 0);
//   console.log(emptySlots);

//   if (emptySlots.length === 0) {
//     console.log("No empty slots left.");
//     return;
//   }

//   const randomContainer = emptySlots[Math.floor(Math.random() * emptySlots.length)];

//   let rand;
//   do {
//     rand = Math.floor(Math.random() * myCards.length);
//   } while (usedIndices.includes(rand) && usedIndices.length < myCards.length);

//   if (usedIndices.length >= myCards.length) {
//     console.log("No more cards available to clone.");
//     return;
//   }

//   usedIndices.push(rand);

//   const randomCard = document.getElementById(cont-${rand});
//   if (!randomCard) {
//     console.warn(Card with id cont-${rand} not found.);
//     return;
//   }

//   const clone = randomCard.cloneNode(true);
//   clone.setAttribute("draggable", "false");

//   randomContainer.appendChild(clone);
//   enemysCard--;
//   if (cardsCount) {
//     const enemy = document.getElementById("enemys-card");
//     enemy.innerHTML = card(${enemysCard}/5)
//   }

// });
// arena.addEventListener("drop");
// let card =document.querySelectorAll('.card')
// card.addEventListener('dragstart',()=>
//      {
// card.classList.add('dragging')
// console.log('dragging')
//      })
// dropzone.forEach(zone=>{

// zone.addEventListener('dragover',()=>{

//     zone.appendChild()
// })

// })

// cardColumn.forEach(cardData => {
//   card.innerHTML += `
//     <div  >
//       <img id="draggedelement"class="hover:cursor-grab w-[auto] h-[150px] draggable="true"
//            src="${cardData.image}"

//       </div>
//     </div>
//   `;

// movedcard.forEach(dragged=>{

// dragged.addEventListener('dragstart',(e)=>{
// e.dataTransfer.setData('text/plain', e.target.id);
//     setTimeout(() => {
//         e.target.classList.add('dragging');
//     }, 0);
// });
// });

//   dropzone.forEach(drop =>{
//     drop.addEventListener('dragover', (e) => e.preventDefault())
//     drop.addEventListener('drop', ()=>{})
//   })
// });
let botcase = document.querySelectorAll(".botcase");

let data = [
  {
    id: 1,
    name: "cyber Wolf",
    price: 500,
    image: "./img/wolf_3.png",
    type: "legend",
  },
  {
    id: 2,
    name: "shiter",
    price: 120,
    image: "./img/shiter.png",
    type: "common",
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
    image: "./img/ninja.png",
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
    name: "Cyber Sprits",
    price: 100,
    image: "./img/ne.png",
    type: "rare",
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
    name: "ninga slayer",
    price: 100,
    image: "./img/ninja.png",
    type: "epic",
  },
  {
    id: 10,
    name: "Nano Sorcerer",
    price: 200,
    image: "./img/nanoG.png",
    type: "common",
  },
];

function autobot(index, cardindex) {
  let chosenCard = data[index];
console.log("dsdddddddddd",botcase[index].children.length);
  let i =  0 ;
  if (botcase[index].children.length > 0) {
    let newindex = Math.floor(Math.random() * botcase.length);
    return autobot(newindex);
  } 
  else {
    console.log("eeeeeeee");
    
    botcase[index].innerHTML += `
    <div id = "${i++}" class="flex flex-col max-h-32 min-h-32 shadow-2xl rounded-xl 
            hover:border-[#14FFEC] cursor-pointer w-full max-w-xs mx-auto">

    <img class="w-full max-h-32 min-h-32 object-contain hover:scale-105 duration-300"
         src="${chosenCard.image}" alt="${chosenCard.name}">
</div>
            `;

  }
}
let turn = document.getElementById("endturn")

turn.onclick = () => {
  autobot(Math.floor(Math.random()*5))

}
