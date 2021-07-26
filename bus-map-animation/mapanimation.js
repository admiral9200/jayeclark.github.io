const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];
busStops.reverse();

mapboxgl.accessToken = 'pk.eyJ1IjoiamF5Y2xhcmsiLCJhIjoiY2tyMmJtaGpyMHBjMzJ1b2psMnE2N2hmbCJ9.IwmlFKVpPBNKwtPTVOSjhg';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 13,
});

let marker = new mapboxgl.Marker();
marker.setLngLat(busStops[0])
marker.addTo(map);

let counter = 0;

function move() {

  if (counter < busStops.length - 1) {counter++;} else {counter = 0;}
  marker.setLngLat(busStops[counter]);

  setTimeout(function() {
        move();
    }, 1000);

}