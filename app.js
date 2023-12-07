
// POP UP //

window.onload = function () {
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}




const toggleButton = document.querySelector('.toggle-button')
const navLinks = document.querySelector('.nav-links')
const navButton = document.querySelectorAll('.button')

// ca fonctionne
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active')
    navLinks.classList.toggle('active')
    navButton.classList.toggle('active')
})  


let map = L.map('map').setView([51.505, -0.09], 9);

let Stadia_OSMBright = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  );


  Stadia_OSMBright.addTo(map);


// Partie reclamation ( quand on clique sur envoyer le formulaire il y a une alerte qui apparait)


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

// MAP MATHIEU //



const map = L.map('map').setView([51.505, -0.09], 3);

const Stadia_OSMBright = L.tileLayer(

  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
  {
    maxZoom: 20, 
  },
);


Stadia_OSMBright.addTo(map);

const uk = L.marker([51.5, -0.09]).addTo(map);
uk.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();

const france = L.marker([48.866667, 2.333333]).addTo(map);
france.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();

const japon = L.marker([35.432711, 137.346125]).addTo(map);
japon.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();

const chine = L.marker([41.27729, 90.878906]).addTo(map);
chine.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();

const brasil = L.marker([-10.617756, -50.141602]).addTo(map);
brasil.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();

// quand tu clic sur la map elle  te donne la geolocalisation.
const popup = L.popup(onMapClick);

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(`You clicked the map at ${e.latlng.toString()}`)
    .openOn(map);
}

map.on('click', onMapClick);

/// /////////////////// CLIC MAP TO ADD//////////////////////




map.on('click', (e) => {

  new L.Marker([e.latlng.lat, e.latlng.lng])
    .addTo(map)
    .on('click', (e) => e.target.remove());
});

Stadia_OSMBright.addTo(map);




let options = {
  position: "topright",
  keepCurrentZoomLevel: true,
  flyTo: true,
  returnToPrevBounds: true,

}

L.control.locate(options).addTo(map);

// end of map

  // SLIDER COMMENTAIRES AXELLE //

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    fade: 'true',
    grabCursor: 'true',
    centerSlide: 'true',
    pagination: {
      el:".swiper-pagination",
      clickable: "true",
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  })
  

