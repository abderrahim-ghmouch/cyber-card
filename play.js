let cardColumn = JSON.parse(localStorage.getItem("collection"));
let card = document.getElementById('card-cols');

card.innerHTML = '';

cardColumn.forEach((cardData) => {
  card.innerHTML += `
    <div  >
      <img class="hover:cursor-grab" dragable="true"
           src="${cardData.image}" 
        
      </div>
    </div>
  `;
}); 