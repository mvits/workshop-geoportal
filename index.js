// //Ejemplo Basico de Leaflet
// let currentLocation = [4.895, -75.3222];

// let viewMap = L.map("mapContainer"); // Inicializa el mapa en el contenedor con id mapContainer y lo guarda en la variable viewMap
// viewMap.setView(currentLocation, 11); // Establece la vista del mapa en las coordenadas [4.895, -75.3222] y un zoom de 13

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: '© OpenStreetMap'}).addTo(
//   viewMap
// ); // Añade un mapa base de OpenStreetMap al mapa

// let volcanoLocation = L.marker([4.895, -75.3222]).addTo(viewMap);

// Ejemplo  listado de capas base  y capas de referencia

let currentLocation = [4.895, -75.3222];

let viewMap = L.map("mapContainer"); // Inicializa el mapa en el contenedor con id mapContainer y lo guarda en la variable viewMap
viewMap.setView(currentLocation, 10); // Establece la vista del mapa en las coordenadas [4.895, -75.3222] y un zoom de 13

let baseMapOtm = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  { attribution: "© OpenStreetMap" }
); // Añade un mapa base de OpenStreetMap al mapa

let baseMapCarto = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  { attribution: "© CartoDB" }
); // Añade un mapa base de OpenStreetMap al mapa

baseMapCarto.addTo(viewMap);

let volcanoLocation = L.marker([4.895, -75.3222]);

volcanoLocation.addTo(viewMap);

let amvCP = L.tileLayer.wms(
  "http://geoserver.mastergis.com:8080/geoserver/ows?",
  {
    layers: "AMENAZA_VOLCANICA:CAIDA_PIROCLASTOS",
    transparent: true,
    format: "image/png",
  }
); // Añade un capa de un servicio WMS al mapa

let amvFO = L.tileLayer.wms(
  "http://geoserver.mastergis.com:8080/geoserver/ows?",
  {
    layers: "AMENAZA_VOLCANICA:FLUJOS_OLEADAS",
    transparent: true,
    format: "image/png",
  }
);
amvFO.addTo(viewMap);

let amvHR = L.tileLayer.wms(
  "http://geoserver.mastergis.com:8080/geoserver/ows?",
  {
    layers: "AMENAZA_VOLCANICA:LAHARES",
    transparent: true,
    format: "image/png",
  }
);

amvHR.addTo(viewMap);

let baseMaps = {
  OpenStreetMap: baseMapOtm,
  CartoDB: baseMapCarto,
};

let overlayMaps = {
  "Ubicación Volcán Nevado de Ruiz": volcanoLocation,
  "Caida Piroclastos": amvCP,
  "Flujos Oleadas": amvFO,
  Lahares: amvHR,
};

L.control.layers(baseMaps, overlayMaps).addTo(viewMap);
