// NAVBAR YOHAN //
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const navButton = document.querySelectorAll('.button');

// barre de recherche Damien

const onglet = [
  {name:"Tendances"},
  {name:"Commentaires"},
];

const searchinput = document.getElementById('searchInput');
const span = document.getElementById('mySpan');

searchinput.addEventListener('keyup', function (){
  const input = searchinput.value;

  const result = onglet.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

  let suggestion = '';

  if (input !=''){
  result.forEach ( resultItem =>
      suggestion +=`
        <div class="suggestion">${resultItem.name}</div> 
    `
    )
  }

  document.getElementById('suggestions').innerHTML = suggestion;
})

  // ca fonctionne
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navLinks.classList.toggle('active');
  navButton.classList.toggle('active');
});

// a tester
// toggleButton.addEventListener('click', () => {
//     navLinks.classList.toggle("close")
// })

// a tester
// navButton.addEventListener('click', () => {
//     navButton.classList.remove("active")
//     toggleButton.classList.remove("active")
// })

// POP UP AXELLE //

window.onload = function () {
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

// MAP MATHIEU //

let map = L.map('map').setView([51.505, -0.09], 9);

let Stadia_OSMBright = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
  {
    maxZoom: 20,
    attribution:
      '<a href="https://stadiamaps.com/"></a><a href="https://openmaptiles.org/"></a><a href="http://openstreetmap.org"></a>',
  }
);

  Stadia_OSMBright.addTo(map);

  Stadia_OSMBright.addTo(map);
