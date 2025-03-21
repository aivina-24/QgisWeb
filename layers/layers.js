var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_3.setVisible(true);lyr_highway_4.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_building_3,lyr_highway_4];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'address': 'address', });
lyr_highway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'noname': 'noname', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'lanes': 'lanes', 'surface': 'surface', 'source:highway:category': 'source:highway:category', 'ref': 'ref', 'highway:category': 'highway:category', });
lyr_lab1_2.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_building_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'address': '', });
lyr_highway_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'noname': '', 'name:etymology:wikidata': '', 'name': '', 'lanes:forward': '', 'lanes:backward': '', 'lanes': '', 'surface': '', 'source:highway:category': '', 'ref': '', 'highway:category': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'address': 'no label', });
lyr_highway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'noname': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'lanes': 'no label', 'surface': 'no label', 'source:highway:category': 'no label', 'ref': 'no label', 'highway:category': 'no label', });
lyr_highway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});