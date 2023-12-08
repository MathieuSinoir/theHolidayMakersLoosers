// NAVBAR YOHAN //
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

// ca fonctionne
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navLinks.classList.toggle('active');
});



// NAVBAR DAMIEN //

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
    );
  };


  document.getElementById('suggestions').innerHTML = suggestion;
});


// POP UP AXELLE //

window.onload = function () {
  document.getElementById('overlay').style.display = 'block';
};

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

// MAP MATHIEU //

const map = L.map('map').setView([51.505, -0.09], 3);


const Stadia_OSMBright = L.tileLayer(


  'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=a076f73e-2758-4d9a-8b8a-71086515ad80',
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  },
);




Stadia_OSMBright.addTo(map);


const uk = L.marker([51.5, -0.09]).addTo(map);
uk.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();


const france = L.marker([48.866667, 2.333333]).addTo(map);
france.bindPopup('<b>Plus sale tu meurs !</b><br> J ai adoré le detester.').openPopup();


const japon = L.marker([35.432711, 137.346125]).addTo(map);
japon.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();


const chine = L.marker([41.27729, 90.878906]).addTo(map);
chine.bindPopup('<b>Im a test!</b><br>I am the text.').openPopup();


const brasil = L.marker([-10.617756, -50.141602]).addTo(map);
brasil.bindPopup('<b>Non, pas ici !</b><br> Une horreur.').openPopup();


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

                                          // SLIDER PHOTOS AXELLE //
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


// Ce code sert à l'accroche de la souris à la barre //
  scrollbarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollbarThumb.offsetLeft;


// Ce code est pour que la barre sous les photos suive le mouvement de la souris //
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth; 

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${newThumbPosition}px`;
      imageList.scrollLeft = scrollPosition;
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });


// Ce code sert à accorder les photos avec les boutons slides //
  slideButtons.forEach(button => {
    button.addEventListener("click", () =>{
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons= () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

// Ce code sert à actualiser la position de la scrollbar en fonction du défilement des photos. //
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth)
    scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  
  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
}
window.addEventListener("load", initSlider)

                                          // SLIDER COMMENTAIRES AXELLE //

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  fade: 'true',
  grabCursor: 'true',
  centerSlide: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
  },
});


                                             // COMPTEUR LIKE AXELLE //

document.addEventListener('DOMContentLoaded', function () {
  loadCounters();
});

function incrementCounter(id) {
  var numberElement = document.getElementById('number' + id);
  var currentCount = parseInt(numberElement.innerText);
  var newCount = currentCount + 1;

  // Ce code sert à mettre à jour le texte du compteur
  numberElement.innerText = newCount;

  // Ce code sert à auvegarder la nouvelle valeur du compteur dans le localStorage
  saveCounterValue(id, newCount);
}

function loadCounters() {
  // Ce code sert à charger les valeurs des compteurs depuis le localStorage
  for (var i = 1; i <= 9; i++) {
      var storedValue = localStorage.getItem('counter' + i);

      // Si une valeur est trouvée dans le localStorage, mettre à jour le compteur
      if (storedValue !== null) {
          var numberElement = document.getElementById('number' + i);
          numberElement.innerText = storedValue;
      }
  }
}

function saveCounterValue(id, value) {
  // Ce code sert à auvegarder la valeur du compteur dans le localStorage
  localStorage.setItem('counter' + id, value);
}


