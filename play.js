let cardColumn = JSON.parse(localStorage.getItem("collection"));
let deckcontainer = document.getElementById("card-cols");
let dropzone = document.querySelectorAll(".dropzone");
let arena = document.querySelectorAll(".arenacase");
// let movecard =document.getElementById('draggedelement')
// card.innerHTML = '';
let dragged = null;

cardColumn.forEach((hhh) => {
  let div = document.createElement("div");

  div.setAttribute("draggable", "true");
  div.innerHTML += `
      <div>
        <img id="draggedelement" class="hover:cursor-grab w-[auto] h-[150px]" 
            src="${hhh.image}">
            </div> 
            `;

  deckcontainer.appendChild(div);
  
  div.addEventListener("dragstart", () => {
   
    dragged = div;
    console.log("star");
  });
  div.addEventListener("dragend", () => {
    // div.classList.add("draging");
    dragged = null;
    console.log("star");
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
      zone.appendChild(dragged);
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
