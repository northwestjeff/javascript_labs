var lon
var lat
var coordinates = []
var features = []

$.ajax({
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
    type: 'GET',
    data: {

    },
    success:
        function (response) {
        parseReturn(response)
    }
});


function parseReturn(data) {
    lon = data.features[1].geometry.coordinates[0]
    lat = data.features[1].geometry.coordinates[1]
    console.log(coordinates)
    for (i = 0; i < data.features.length; i++) {
        var radius = data.features[i].properties.mag * 20000
        var newCoord = ol.proj.fromLonLat([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]);
        var circle = new ol.Feature(new ol.geom.Circle(
            newCoord,
            radius
        ));
        features.push(circle);
    }
    eqSource.addFeatures(features) // outside the loop
}


var map = new ol.Map({
        target: 'map', // #id of the map
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([0, 0]),
          zoom: 2
        })
      });

var eqSource = new ol.source.Vector({features: features});
var eqLayer = new ol.layer.Vector({source: eqSource});
map.addLayer(eqLayer);








//
// var newCoord = new ol.proj.fromLonLat(coordinates);
// var features = [];
// var point = new ol.Feature(new ol.geom.Point(newCoord));
// features.push(point);
//
// var eqSource = new ol.source.Vector({features: features});
// var eqLayer = new ol.layer.Vector({source: eqSource});



// Map({target:[class to target], layers:[tile, vector, image], view:[})