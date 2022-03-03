function initMap() {
    // The location of Uluru
    const hkccWK = { lat: 22.312584, lng: 114.165328 };
    const hkccHHB = { lat: 22.30346025, lng: 114.18473645238535 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: hkccWK,
    });
    //add marker function 
    addMarker(hkccWK);
    addMarker(hkccHHB);
    function addMarker(coords){
        const marker = new google.maps.Marker({
            position: coords,
            map: map,
            });
    }
    
    // The marker, positioned at Uluru

  }
