let map = L.map('map').setView([51.505, -0.09], 1);

let Stadia_OSMBright = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  );


  Stadia_OSMBright.addTo(map);

  let london = L.marker([51.5, -0.09]).addTo(map);
  london.bindPopup("<b>Im a test!</b><br>I am the text.").openPopup();

  let paris = L.marker([48.866667,  2.333333]).addTo(map);
  paris.bindPopup("<b>Im a test!</b><br>I am the text.").openPopup();


  // JAPON

  let japon = L.marker([35.432711,  137.346125]).addTo(map);
  japon.bindPopup("<b>Im a test!</b><br>I am the text.").openPopup();

  // let marker2 = L.marker([48.866667,  2.333333]).addTo(map);
  // marker2.bindPopup("<b>Im a test!</b><br>I am the text.").openPopup();

  // let marker2 = L.marker([48.866667,  2.333333]).addTo(map);
  // marker2.bindPopup("<b>Im a test!</b><br>I am the text.").openPopup();
  
  // marker2.bindPopup("<b>Im a test!</b><br>I am the text.").openPopup();
  // let marker2 = L.marker([48.866667,  2.333333]).addTo(map);
  



// quand tu clic sur la map elle  te donne la geolocalisation.
let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
map.off('click', onMapClick)



////////////////////// CLIC MAP TO ADD//////////////////////



// map.on("click", function(e){
//   new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
// })

// ///////////////////////////////////////////////////////////////////////

// //!!!!!!!!!!!!!! calquesa revoir !!!!!!!!!

// let littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
//     denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
//     aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
//     golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

// let cities = L.layerGroup([littleton, denver, aurora, golden]);

// let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

// let osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

// let mapfilter = L.map('map', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [osm, cities]
// });

// let baseMaps = {
//   "OpenStreetMap": osm,
//   "OpenStreetMap.HOT": osmHOT
// };

// let overlayMaps = {
//   "Cities": cities
// };

// let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////