(function() {
    "use strict";

    window.onload = init;

    function init() {
        createMap();
    }

    function createMap() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                map(position);
            })
        }
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported");
        }
    }

    function map(position) {
        const { coords } = position;
        const { latitude, longitude } = coords;

        var mymap = L.map('mapid').setView([latitude, longitude], 13);
        L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibXA1bWFrZXIiLCJhIjoiY2ppdGhkYW42MXJuMzNrdDkwN3hicjh2ZCJ9.qTCDnLUfn8BuLocopUbx3Q`,
            {
                attribution: 'Photon Enterprise',
                maxZoom: 12,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoibXA1bWFrZXIiLCJhIjoiY2ppdGhkYW42MXJuMzNrdDkwN3hicjh2ZCJ9.qTCDnLUfn8BuLocopUbx3Q'
            }).addTo(mymap);
        L.marker([latitude, longitude], { icon: greenIcon }).addTo(mymap);
    }
})();