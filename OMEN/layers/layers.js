ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([386847.780512, 9096624.438961, 499838.488985, 9166889.946317]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sejarah_1 = new ol.format.GeoJSON();
var features_Sejarah_1 = format_Sejarah_1.readFeatures(json_Sejarah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Sejarah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sejarah_1.addFeatures(features_Sejarah_1);
var lyr_Sejarah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sejarah_1, 
                style: style_Sejarah_1,
                interactive: true,
                title: '<img src="styles/legend/Sejarah_1.png" /> Sejarah'
            });
var format_Kuliner_2 = new ol.format.GeoJSON();
var features_Kuliner_2 = format_Kuliner_2.readFeatures(json_Kuliner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Kuliner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuliner_2.addFeatures(features_Kuliner_2);
var lyr_Kuliner_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kuliner_2, 
                style: style_Kuliner_2,
                interactive: true,
                title: '<img src="styles/legend/Kuliner_2.png" /> Kuliner'
            });
var format_Edukasi_3 = new ol.format.GeoJSON();
var features_Edukasi_3 = format_Edukasi_3.readFeatures(json_Edukasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Edukasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edukasi_3.addFeatures(features_Edukasi_3);
var lyr_Edukasi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Edukasi_3, 
                style: style_Edukasi_3,
                interactive: true,
                title: '<img src="styles/legend/Edukasi_3.png" /> Edukasi'
            });
var format_Alam_4 = new ol.format.GeoJSON();
var features_Alam_4 = format_Alam_4.readFeatures(json_Alam_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Alam_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alam_4.addFeatures(features_Alam_4);
var lyr_Alam_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alam_4, 
                style: style_Alam_4,
                interactive: true,
                title: '<img src="styles/legend/Alam_4.png" /> Alam'
            });
var format_DestinasiWisata_5 = new ol.format.GeoJSON();
var features_DestinasiWisata_5 = format_DestinasiWisata_5.readFeatures(json_DestinasiWisata_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DestinasiWisata_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DestinasiWisata_5.addFeatures(features_DestinasiWisata_5);
var lyr_DestinasiWisata_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DestinasiWisata_5, 
                style: style_DestinasiWisata_5,
                interactive: false,
                title: '<img src="styles/legend/DestinasiWisata_5.png" /> Destinasi Wisata'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Sejarah_1.setVisible(true);lyr_Kuliner_2.setVisible(true);lyr_Edukasi_3.setVisible(true);lyr_Alam_4.setVisible(true);lyr_DestinasiWisata_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sejarah_1,lyr_Kuliner_2,lyr_Edukasi_3,lyr_Alam_4,lyr_DestinasiWisata_5];
lyr_Sejarah_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Destinasi': 'Destinasi', 'Jenis': 'Jenis', 'HTM': 'HTM', 'Jam Buka': 'Jam Buka', 'Lokasi': 'Lokasi', });
lyr_Kuliner_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Destinasi': 'Destinasi', 'Jenis': 'Jenis', 'HTM': 'HTM', 'Jam Buka': 'Jam Buka', 'Lokasi': 'Lokasi', });
lyr_Edukasi_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Destinasi': 'Destinasi', 'Jenis': 'Jenis', 'HTM': 'HTM', 'Jam Buka': 'Jam Buka', 'Lokasi': 'Lokasi', });
lyr_Alam_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Destinasi': 'Destinasi', 'Jenis': 'Jenis', 'HTM': 'HTM', 'Jam Buka': 'Jam Buka', 'Lokasi': 'Lokasi', });
lyr_DestinasiWisata_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Destinasi': 'Destinasi', 'Jenis': 'Jenis', 'HTM': 'HTM', 'Jam Buka': 'Jam Buka', 'Lokasi': 'Lokasi', });
lyr_Sejarah_1.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Destinasi': 'TextEdit', 'Jenis': 'TextEdit', 'HTM': 'TextEdit', 'Jam Buka': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_Kuliner_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Destinasi': 'TextEdit', 'Jenis': 'TextEdit', 'HTM': 'TextEdit', 'Jam Buka': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_Edukasi_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Destinasi': 'TextEdit', 'Jenis': 'TextEdit', 'HTM': 'TextEdit', 'Jam Buka': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_Alam_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Destinasi': 'TextEdit', 'Jenis': 'TextEdit', 'HTM': 'TextEdit', 'Jam Buka': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_DestinasiWisata_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Destinasi': 'TextEdit', 'Jenis': 'TextEdit', 'HTM': 'TextEdit', 'Jam Buka': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_Sejarah_1.set('fieldLabels', {'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Destinasi': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', 'HTM': 'inline label - visible with data', 'Jam Buka': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', });
lyr_Kuliner_2.set('fieldLabels', {'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Destinasi': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', 'HTM': 'inline label - visible with data', 'Jam Buka': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', });
lyr_Edukasi_3.set('fieldLabels', {'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Destinasi': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', 'HTM': 'inline label - visible with data', 'Jam Buka': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', });
lyr_Alam_4.set('fieldLabels', {'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Destinasi': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', 'HTM': 'inline label - visible with data', 'Jam Buka': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', });
lyr_DestinasiWisata_5.set('fieldLabels', {'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Destinasi': 'inline label - visible with data', 'Jenis': 'inline label - visible with data', 'HTM': 'inline label - visible with data', 'Jam Buka': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', });
lyr_DestinasiWisata_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});