let marker, map;

function initMap() {
  console.log("Inicializando el Mapa");
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  const miHome = {
    lat: 42.01544,
    lng: -4.5321727,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posicion inicial",
  });

  /*   const miPosition = new google.maps.Marker({
    position: miHome,
    map,
    title: "My home",
  }); */

  /*   marker.setPosition(miHome); */
  geoPosition();

  const suances = new google.maps.Marker({
    position: {
      lat: 43.429522,
      lng: -4.0612986
    },
    map,
    title: "Mi lugar favorito"
  })

  const castroUrdiales = new google.maps.Marker({
    position: {
      lat: 43.3766876,
      lng: -3.2164558
    },
    map,
    title: "Mi lugar favorito"
  })
}

function geoPosition() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(mapCenter, onError, options);
  } else {
    alert("Tu navegador no acepta la localización.");
  }
}

function mapCenter(position) {
  const newPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  marker.setPosition(newPos);
  map.setCenter(newPos);
}

function onError(error) {
  console.error(`Error la buscar la localización: ${error.message}`);
}
