const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');
const navButton = document.querySelectorAll('.button');

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

let map = L.map('map').setView([51.505, -0.09], 9);

let stadia_OSMBright = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
  {
    maxZoom: 20,
    attribution:
      '<a href="https://stadiamaps.com/"></a><a href="https://openmaptiles.org/"></a><a href="http://openstreetmap.org"></a>',
  }
);

stadia_OSMBright.addTo(map);

// Java pour articles en slide //
