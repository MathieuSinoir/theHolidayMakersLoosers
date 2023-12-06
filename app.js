// NAVBAR YOHAN //
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

// POP UP AXELLE //

window.onload = function () {
  document.getElementById('overlay').style.display = 'block';
};

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

// MAP MATHIEU //

const map = L.map('map').setView([51.505, -0.09], 9);

let Stadia_OSMBright = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
  {
    maxZoom: 20,
    attribution:
      '<a href="https://stadiamaps.com/"></a><a href="https://openmaptiles.org/"></a><a href="http://openstreetmap.org"></a>',
  },
);

Stadia_OSMBright.addTo(map);

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
  