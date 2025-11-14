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
      <div>
        <img id="draggedelement" class="hover:cursor-grab  " 
            src="${hhh.image}">
            </div> 
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
