function initMap() {
    // The location of Uluru
    const hkccwk = { lat: 22.312584, lng: 114.165328 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: hkccwk,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: hkccwk,
      map: map,
    });
  }