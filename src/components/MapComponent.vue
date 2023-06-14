<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Taxi from "../assets/ic_new_white_taxi.png";
import Vehicles from '../JSON/vehicleCoordinates.json';

export default {
  mounted() {
    const mapContainer = document.getElementById('map');
    mapContainer.style.height = '100vh';

    const map = L.map(mapContainer).fitWorld();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    map.locate({ setView: true, maxZoom: 16, maxAccuracy: 1, watch: true });

    function onLocationFound(e) {
      const radius = e.accuracy;

      L.marker(e.latlng)
        .addTo(map)
        .bindPopup(`You are within ${radius} meters from this point`)
        .openPopup();

      L.circle(e.latlng, radius).addTo(map);

      // Display vehicles with markers
      for (const vehicle of Vehicles) {
        const marker = L.marker([vehicle.latitude, vehicle.longitude], {
          icon: L.icon({
            iconUrl: Taxi,
            iconSize: [32, 32],
          }),
        }).addTo(map);

        marker.bindPopup(vehicle.heading);
      }
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
      alert(e.message);
    }

    map.on('locationerror', onLocationError);
  }
};
</script>


<style scoped>
#map {
  height: 90vh;
  width: 100%;
}

h1 {
  margin-top: 150px;
  text-align: center;
}
</style>