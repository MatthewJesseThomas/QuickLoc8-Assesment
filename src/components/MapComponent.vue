<template>
    <div>
        <div id="map"></div>
    </div>
</template>
  
<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'; // Import the CSS file
import 'leaflet-defaulticon-compatibility';

export default {
    mounted() {
        // Set the height of the map container explicitly
        const mapContainer = document.getElementById('map');
        mapContainer.style.height = '100vh';

        // Create the map instance
        const map = L.map(mapContainer).fitWorld();

        // Add the tile layer to the map
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap',
        }).addTo(map);

        // Locate the user's position and set the view
        map.locate({ setView: true, maxZoom: 16 });

        // Handle location found event
        function onLocationFound(e) {
            const radius = e.accuracy;

            L.marker(e.latlng)
                .addTo(map)
                .bindPopup(`You are within ${radius} meters from this point`)
                .openPopup();

            L.circle(e.latlng, radius).addTo(map);
        }

        map.on('locationfound', onLocationFound);

        // Handle location error event
        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationerror', onLocationError);
    },
};
</script>
  
<style scoped>
#map {
    height: 100vh;
    width: 100%;
    z-index: 0;
}

h1 {
    margin-top: 150px;
    text-align: center;
}
</style>
  