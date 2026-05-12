var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Orthomosaic_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Orthomosaic<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Orthomosaic_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912186.379903, 2408387.464279, 7914940.374944, 2410295.599510]
        })
    });
var lyr_Construction_Suitability_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Construction_Suitability<br />\
    <img src="styles/legend/Construction_Suitability_4_0.png" /> Least Suitability<br />\
    <img src="styles/legend/Construction_Suitability_4_1.png" /> Low Sutability<br />\
    <img src="styles/legend/Construction_Suitability_4_2.png" /> Moderate Suiability<br />\
    <img src="styles/legend/Construction_Suitability_4_3.png" /> High Suitability<br />\
    <img src="styles/legend/Construction_Suitability_4_4.png" /> Best Suitability<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Construction_Suitability_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912238.439095, 2408447.223609, 7914874.027470, 2410270.822173]
        })
    });
var lyr_Plantion_Suitability_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Plantion_Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_5_0.png" /> Least Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_5_1.png" /> Low Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_5_2.png" /> Moderate Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_5_3.png" /> High Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_5_4.png" /> Best Suitability<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Plantion_Suitability_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912238.439095, 2408447.223609, 7914874.027470, 2410270.822173]
        })
    });
var format_200x200MGrid_6 = new ol.format.GeoJSON();
var features_200x200MGrid_6 = format_200x200MGrid_6.readFeatures(json_200x200MGrid_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200x200MGrid_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200x200MGrid_6.addFeatures(features_200x200MGrid_6);
var lyr_200x200MGrid_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200x200MGrid_6, 
                style: style_200x200MGrid_6,
                popuplayertitle: '200x200M Grid ',
                interactive: true,
                title: '<img src="styles/legend/200x200MGrid_6.png" /> 200x200M Grid '
            });
var format_100x100MGrid_7 = new ol.format.GeoJSON();
var features_100x100MGrid_7 = format_100x100MGrid_7.readFeatures(json_100x100MGrid_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100x100MGrid_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100x100MGrid_7.addFeatures(features_100x100MGrid_7);
var lyr_100x100MGrid_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100x100MGrid_7, 
                style: style_100x100MGrid_7,
                popuplayertitle: '100x100M Grid',
                interactive: true,
                title: '<img src="styles/legend/100x100MGrid_7.png" /> 100x100M Grid'
            });
var format_Zonations_8 = new ol.format.GeoJSON();
var features_Zonations_8 = format_Zonations_8.readFeatures(json_Zonations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonations_8.addFeatures(features_Zonations_8);
var lyr_Zonations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonations_8, 
                style: style_Zonations_8,
                popuplayertitle: 'Zonations',
                interactive: true,
    title: 'Zonations<br />\
    <img src="styles/legend/Zonations_8_0.png" /> Zone 1: Bare Ground & Open Soil<br />\
    <img src="styles/legend/Zonations_8_1.png" /> Zone 2: Shrubs, Grasses & Dry Scrub<br />\
    <img src="styles/legend/Zonations_8_2.png" /> Zone 3: Healthy Trees & Dense Canopy<br />\
    <img src="styles/legend/Zonations_8_3.png" /> Zone 4: Farmland<br />' });
var lyr_DistancetoStreams_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Distance to Streams<br />\
    <img src="styles/legend/DistancetoStreams_9_0.png" /> <= 10.0000<br />\
    <img src="styles/legend/DistancetoStreams_9_1.png" /> 10.0000 - 50.0000<br />\
    <img src="styles/legend/DistancetoStreams_9_2.png" /> 50.0000 - 100.0000<br />\
    <img src="styles/legend/DistancetoStreams_9_3.png" /> 100.0000 - 300.0000<br />\
    <img src="styles/legend/DistancetoStreams_9_4.png" /> > 300.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DistancetoStreams_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912215.617412, 2408421.653321, 7914933.370886, 2410302.374352]
        })
    });
var format_100MeterStreams_10 = new ol.format.GeoJSON();
var features_100MeterStreams_10 = format_100MeterStreams_10.readFeatures(json_100MeterStreams_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100MeterStreams_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100MeterStreams_10.addFeatures(features_100MeterStreams_10);
var lyr_100MeterStreams_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100MeterStreams_10, 
                style: style_100MeterStreams_10,
                popuplayertitle: '100MeterStreams',
                interactive: false,
                title: '<img src="styles/legend/100MeterStreams_10.png" /> 100MeterStreams'
            });
var format_10MeterStreams_11 = new ol.format.GeoJSON();
var features_10MeterStreams_11 = format_10MeterStreams_11.readFeatures(json_10MeterStreams_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10MeterStreams_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10MeterStreams_11.addFeatures(features_10MeterStreams_11);
var lyr_10MeterStreams_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10MeterStreams_11, 
                style: style_10MeterStreams_11,
                popuplayertitle: '10MeterStreams',
                interactive: false,
                title: '<img src="styles/legend/10MeterStreams_11.png" /> 10MeterStreams'
            });
var format_Streams_12 = new ol.format.GeoJSON();
var features_Streams_12 = format_Streams_12.readFeatures(json_Streams_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_12.addFeatures(features_Streams_12);
var lyr_Streams_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_12, 
                style: style_Streams_12,
                popuplayertitle: 'Streams',
                interactive: false,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_12_0.png" /> 1<br />\
    <img src="styles/legend/Streams_12_1.png" /> 2<br />\
    <img src="styles/legend/Streams_12_2.png" /> 3<br />\
    <img src="styles/legend/Streams_12_3.png" /> 4<br />\
    <img src="styles/legend/Streams_12_4.png" /> 5<br />\
    <img src="styles/legend/Streams_12_5.png" /> 6<br />' });
var lyr_DistancetoForest_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Distance to Forest<br />\
    <img src="styles/legend/DistancetoForest_13_0.png" /> <= 50.0000<br />\
    <img src="styles/legend/DistancetoForest_13_1.png" /> 50.0000 - 100.0000<br />\
    <img src="styles/legend/DistancetoForest_13_2.png" /> 100.0000 - 150.0000<br />\
    <img src="styles/legend/DistancetoForest_13_3.png" /> 150.0000 - 500.0000<br />\
    <img src="styles/legend/DistancetoForest_13_4.png" /> > 500.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DistancetoForest_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7906811.541729, 2402986.190101, 7920315.577280, 2415739.814512]
        })
    });
var format_Forest_14 = new ol.format.GeoJSON();
var features_Forest_14 = format_Forest_14.readFeatures(json_Forest_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_14.addFeatures(features_Forest_14);
var lyr_Forest_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_14, 
                style: style_Forest_14,
                popuplayertitle: 'Forest',
                interactive: true,
                title: '<img src="styles/legend/Forest_14.png" /> Forest'
            });
var format_DistancetoForestLine_15 = new ol.format.GeoJSON();
var features_DistancetoForestLine_15 = format_DistancetoForestLine_15.readFeatures(json_DistancetoForestLine_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistancetoForestLine_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoForestLine_15.addFeatures(features_DistancetoForestLine_15);
var lyr_DistancetoForestLine_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoForestLine_15, 
                style: style_DistancetoForestLine_15,
                popuplayertitle: 'Distance to Forest Line',
                interactive: true,
                title: '<img src="styles/legend/DistancetoForestLine_15.png" /> Distance to Forest Line'
            });
var format_Catchment_16 = new ol.format.GeoJSON();
var features_Catchment_16 = format_Catchment_16.readFeatures(json_Catchment_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catchment_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catchment_16.addFeatures(features_Catchment_16);
var lyr_Catchment_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Catchment_16, 
                style: style_Catchment_16,
                popuplayertitle: 'Catchment',
                interactive: true,
    title: 'Catchment<br />\
    <img src="styles/legend/Catchment_16_0.png" /> 0 - 0.52<br />\
    <img src="styles/legend/Catchment_16_1.png" /> 0.52 - 1.52<br />\
    <img src="styles/legend/Catchment_16_2.png" /> 1.52 - 3.33<br />\
    <img src="styles/legend/Catchment_16_3.png" /> 3.33 - 5.83<br />\
    <img src="styles/legend/Catchment_16_4.png" /> 5.83 - 19.92<br />' });
var format_Streams_17 = new ol.format.GeoJSON();
var features_Streams_17 = format_Streams_17.readFeatures(json_Streams_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_17.addFeatures(features_Streams_17);
var lyr_Streams_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_17, 
                style: style_Streams_17,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_17_0.png" /> 1<br />\
    <img src="styles/legend/Streams_17_1.png" /> 2<br />\
    <img src="styles/legend/Streams_17_2.png" /> 3<br />\
    <img src="styles/legend/Streams_17_3.png" /> 4<br />\
    <img src="styles/legend/Streams_17_4.png" /> 5<br />\
    <img src="styles/legend/Streams_17_5.png" /> 6<br />' });
var lyr_DigitalTerrainModel_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Terrain Model<br />\
    <img src="styles/legend/DigitalTerrainModel_18_0.png" /> <= 184<br />\
    <img src="styles/legend/DigitalTerrainModel_18_1.png" /> 184 - 200<br />\
    <img src="styles/legend/DigitalTerrainModel_18_2.png" /> 200 - 215<br />\
    <img src="styles/legend/DigitalTerrainModel_18_3.png" /> 215 - 231<br />\
    <img src="styles/legend/DigitalTerrainModel_18_4.png" /> > 231<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalTerrainModel_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.903194, 2408382.863143, 7914953.264441, 2410308.200547]
        })
    });
var lyr_DigitalTerrainModelHillshade_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Terrain Model Hillshade<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalTerrainModelHillshade_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.903194, 2408382.863143, 7914953.264441, 2410308.200547]
        })
    });
var lyr_DigitalSurfaceModel_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Surface Model <br />\
    <img src="styles/legend/DigitalSurfaceModel_20_0.png" /> <= 184<br />\
    <img src="styles/legend/DigitalSurfaceModel_20_1.png" /> 184 - 201<br />\
    <img src="styles/legend/DigitalSurfaceModel_20_2.png" /> 201 - 217<br />\
    <img src="styles/legend/DigitalSurfaceModel_20_3.png" /> 217 - 234<br />\
    <img src="styles/legend/DigitalSurfaceModel_20_4.png" /> > 234<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalSurfaceModel_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.902494, 2408382.810686, 7914953.157292, 2410308.200547]
        })
    });
var lyr_DigitalSurfaceModelHillshade_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Surface Model Hillshade<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalSurfaceModelHillshade_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.902494, 2408382.810686, 7914953.157292, 2410308.200547]
        })
    });
var format_Geomorphology_22 = new ol.format.GeoJSON();
var features_Geomorphology_22 = format_Geomorphology_22.readFeatures(json_Geomorphology_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorphology_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_22.addFeatures(features_Geomorphology_22);
var lyr_Geomorphology_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorphology_22, 
                style: style_Geomorphology_22,
                popuplayertitle: 'Geomorphology',
                interactive: true,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_22_0.png" /> Alluvial Plain<br />\
    <img src="styles/legend/Geomorphology_22_1.png" /> Highly Dissected Plateau<br />\
    <img src="styles/legend/Geomorphology_22_2.png" /> Low Dissected Plateau<br />\
    <img src="styles/legend/Geomorphology_22_3.png" /> Moderately Dissected Hills and Valleys<br />\
    <img src="styles/legend/Geomorphology_22_4.png" /> Moderately Dissected Plateau<br />\
    <img src="styles/legend/Geomorphology_22_5.png" /> Waterbody - River<br />' });
var format_Geology_23 = new ol.format.GeoJSON();
var features_Geology_23 = format_Geology_23.readFeatures(json_Geology_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_23.addFeatures(features_Geology_23);
var lyr_Geology_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_23, 
                style: style_Geology_23,
                popuplayertitle: 'Geology',
                interactive: true,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_23_0.png" /> COMPOUND BASALT (LOWER)<br />\
    <img src="styles/legend/Geology_23_1.png" /> COMPOUND BASALT (UPPER)<br />' });
var format_Dyke_24 = new ol.format.GeoJSON();
var features_Dyke_24 = format_Dyke_24.readFeatures(json_Dyke_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dyke_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dyke_24.addFeatures(features_Dyke_24);
var lyr_Dyke_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dyke_24, 
                style: style_Dyke_24,
                popuplayertitle: 'Dyke',
                interactive: true,
                title: '<img src="styles/legend/Dyke_24.png" /> Dyke'
            });
var lyr_CanopyHeightModel_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Canopy Height Model<br />\
    <img src="styles/legend/CanopyHeightModel_25_0.png" /> <= 1.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_1.png" /> 1.00 - 2.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_2.png" /> 2.00 - 4.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_3.png" /> 4.00 - 6.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_4.png" /> 6.00 - 8.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_5.png" /> 8.00 - 10.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_6.png" /> 10.00 - 12.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_7.png" /> 12.00 - 15.00<br />\
    <img src="styles/legend/CanopyHeightModel_25_8.png" /> > 15.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CanopyHeightModel_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912247.418950, 2408456.432272, 7914866.160288, 2410261.489745]
        })
    });
var format_TreeSpeciesPoints_26 = new ol.format.GeoJSON();
var features_TreeSpeciesPoints_26 = format_TreeSpeciesPoints_26.readFeatures(json_TreeSpeciesPoints_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreeSpeciesPoints_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeSpeciesPoints_26.addFeatures(features_TreeSpeciesPoints_26);
var lyr_TreeSpeciesPoints_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreeSpeciesPoints_26, 
                style: style_TreeSpeciesPoints_26,
                popuplayertitle: 'Tree Species Points',
                interactive: true,
    title: 'Tree Species Points<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_0.png" /> Acacia catechu<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_1.png" /> Acacia leucophloea<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_2.png" /> Acacia nilotica<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_3.png" /> Acacia senegal<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_4.png" /> Ailanthus excelsa<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_5.png" /> Alangium salvifolium<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_6.png" /> Albizia lebbeck<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_7.png" /> Azadirachta indica<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_8.png" /> Balanites roxburghii<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_9.png" /> Bamboo sp.<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_10.png" /> Bamboo Sp.<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_11.png" /> Bauhinia racemosa<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_12.png" /> Bombax ceiba<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_13.png" /> Boswellia serrata<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_14.png" /> Bridelia retusa<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_15.png" /> Butea monosperma<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_16.png" /> Capparis grandis<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_17.png" /> Capparis sepiaria<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_18.png" /> Carissa spinarum<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_19.png" /> Cassia fistula<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_20.png" /> Celastrus paniculatus<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_21.png" /> Dalbergia lanceolaria<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_22.png" /> Dalbergia latifolia<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_23.png" /> Dichrostachys cinerea<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_24.png" /> Diospyros melanoxylon<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_25.png" /> Ehretia laevis<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_26.png" /> Ficus amplissima<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_27.png" /> Ficus benghalensis<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_28.png" /> Ficus racemosa<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_29.png" /> Flacourtia indica<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_30.png" /> Garuga pinata<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_31.png" /> Garuga pinnata<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_32.png" /> Garuga Pinnata<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_33.png" /> Gmelina arborea<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_34.png" /> Grewia tiliifolia<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_35.png" /> Gymnosporia emarginata<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_36.png" /> Holarrhena pubescens<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_37.png" /> Holoptelea integrifolia<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_38.png" /> Ixora brachiata<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_39.png" /> Lannea coromandelica<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_40.png" /> Leucaena leucocephala<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_41.png" /> Mangifera indica<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_42.png" /> Manilkara hexandra<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_43.png" /> Morinda tomentosa<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_44.png" /> Moringa concanensis<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_45.png" /> Moringa oleifera<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_46.png" /> Neltuma juliflora<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_47.png" /> Nyctanthes arbor-tristis<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_48.png" /> Phyllanthus emblica<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_49.png" /> Phyllanthus reticulatus<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_50.png" /> Pongamia pinnata<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_51.png" /> Santalum album<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_52.png" /> Soymida febrifuga<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_53.png" /> Syzygium cumini<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_54.png" /> Terminalia anogeissiana<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_55.png" /> Terminalia arjuna<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_56.png" /> Terminalia tomentosa<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_57.png" /> Wrightia tinctoria<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_58.png" /> Ziziphus mauritiana<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_59.png" /> Ziziphus nummularia<br />\
    <img src="styles/legend/TreeSpeciesPoints_26_60.png" /> <br />' });
var format_TreeCount_27 = new ol.format.GeoJSON();
var features_TreeCount_27 = format_TreeCount_27.readFeatures(json_TreeCount_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreeCount_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeCount_27.addFeatures(features_TreeCount_27);
var lyr_TreeCount_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreeCount_27, 
                style: style_TreeCount_27,
                popuplayertitle: 'Tree Count',
                interactive: false,
                title: '<img src="styles/legend/TreeCount_27.png" /> Tree Count'
            });
var lyr_Slope_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope<br />\
    <img src="styles/legend/Slope_28_0.png" /> <= 10<br />\
    <img src="styles/legend/Slope_28_1.png" /> 10 - 20<br />\
    <img src="styles/legend/Slope_28_2.png" /> 20 - 30<br />\
    <img src="styles/legend/Slope_28_3.png" /> 30 - 40<br />\
    <img src="styles/legend/Slope_28_4.png" /> > 40<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Slope_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912105.449235, 2408319.389847, 7915024.612785, 2410405.891790]
        })
    });
var lyr_5MeterFloodInundation_29 = new ol.layer.Image({
        opacity: 1,
        
    title: '5 Meter Flood Inundation<br />\
    <img src="styles/legend/5MeterFloodInundation_29_0.png" /> <= 1.0000<br />\
    <img src="styles/legend/5MeterFloodInundation_29_1.png" /> 1.0000 - 2.0000<br />\
    <img src="styles/legend/5MeterFloodInundation_29_2.png" /> 2.0000 - 3.0000<br />\
    <img src="styles/legend/5MeterFloodInundation_29_3.png" /> 3.0000 - 4.0000<br />\
    <img src="styles/legend/5MeterFloodInundation_29_4.png" /> > 4.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/5MeterFloodInundation_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.913700, 2408383.664260, 7914953.800188, 2410308.200547]
        })
    });
var lyr_ToposheetF42R4_41O4_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Toposheet F42R4_41O4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ToposheetF42R4_41O4_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7894753.419758, 2385307.864360, 7935643.031956, 2426377.940582]
        })
    });
var format_3MeterContours_31 = new ol.format.GeoJSON();
var features_3MeterContours_31 = format_3MeterContours_31.readFeatures(json_3MeterContours_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3MeterContours_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3MeterContours_31.addFeatures(features_3MeterContours_31);
var lyr_3MeterContours_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3MeterContours_31, 
                style: style_3MeterContours_31,
                popuplayertitle: '3 Meter Contours',
                interactive: true,
                title: '<img src="styles/legend/3MeterContours_31.png" /> 3 Meter Contours'
            });
var format_Roads_32 = new ol.format.GeoJSON();
var features_Roads_32 = format_Roads_32.readFeatures(json_Roads_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_32.addFeatures(features_Roads_32);
var lyr_Roads_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_32, 
                style: style_Roads_32,
                popuplayertitle: 'Roads',
                interactive: false,
                title: '<img src="styles/legend/Roads_32.png" /> Roads'
            });
var format_5KmBuffer_33 = new ol.format.GeoJSON();
var features_5KmBuffer_33 = format_5KmBuffer_33.readFeatures(json_5KmBuffer_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5KmBuffer_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5KmBuffer_33.addFeatures(features_5KmBuffer_33);
var lyr_5KmBuffer_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5KmBuffer_33, 
                style: style_5KmBuffer_33,
                popuplayertitle: '5 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/5KmBuffer_33.png" /> 5 Km Buffer'
            });
var format_PlotBoundary_34 = new ol.format.GeoJSON();
var features_PlotBoundary_34 = format_PlotBoundary_34.readFeatures(json_PlotBoundary_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlotBoundary_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlotBoundary_34.addFeatures(features_PlotBoundary_34);
var lyr_PlotBoundary_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlotBoundary_34, 
                style: style_PlotBoundary_34,
                popuplayertitle: 'Plot Boundary',
                interactive: true,
                title: '<img src="styles/legend/PlotBoundary_34.png" /> Plot Boundary'
            });
var group_Tree = new ol.layer.Group({
                                layers: [lyr_CanopyHeightModel_25,lyr_TreeSpeciesPoints_26,lyr_TreeCount_27,],
                                fold: 'close',
                                title: 'Tree'});
var group_Geo = new ol.layer.Group({
                                layers: [lyr_Geomorphology_22,lyr_Geology_23,lyr_Dyke_24,],
                                fold: 'close',
                                title: 'Geo'});
var group_DSM = new ol.layer.Group({
                                layers: [lyr_DigitalSurfaceModel_20,lyr_DigitalSurfaceModelHillshade_21,],
                                fold: 'close',
                                title: 'DSM'});
var group_DTM = new ol.layer.Group({
                                layers: [lyr_DigitalTerrainModel_18,lyr_DigitalTerrainModelHillshade_19,],
                                fold: 'close',
                                title: 'DTM'});
var group_Hydrology = new ol.layer.Group({
                                layers: [lyr_Catchment_16,lyr_Streams_17,],
                                fold: 'close',
                                title: 'Hydrology'});
var group_DistancetoForest = new ol.layer.Group({
                                layers: [lyr_DistancetoForest_13,lyr_Forest_14,lyr_DistancetoForestLine_15,],
                                fold: 'close',
                                title: 'Distance to Forest'});
var group_DistancetoRiver = new ol.layer.Group({
                                layers: [lyr_DistancetoStreams_9,lyr_100MeterStreams_10,lyr_10MeterStreams_11,lyr_Streams_12,],
                                fold: 'close',
                                title: 'Distance to River'});
var group_Treatment = new ol.layer.Group({
                                layers: [lyr_200x200MGrid_6,lyr_100x100MGrid_7,lyr_Zonations_8,],
                                fold: 'close',
                                title: 'Treatment'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Orthomosaic_3.setVisible(true);lyr_Construction_Suitability_4.setVisible(false);lyr_Plantion_Suitability_5.setVisible(false);lyr_200x200MGrid_6.setVisible(false);lyr_100x100MGrid_7.setVisible(false);lyr_Zonations_8.setVisible(false);lyr_DistancetoStreams_9.setVisible(false);lyr_100MeterStreams_10.setVisible(false);lyr_10MeterStreams_11.setVisible(false);lyr_Streams_12.setVisible(false);lyr_DistancetoForest_13.setVisible(false);lyr_Forest_14.setVisible(false);lyr_DistancetoForestLine_15.setVisible(false);lyr_Catchment_16.setVisible(false);lyr_Streams_17.setVisible(false);lyr_DigitalTerrainModel_18.setVisible(false);lyr_DigitalTerrainModelHillshade_19.setVisible(false);lyr_DigitalSurfaceModel_20.setVisible(false);lyr_DigitalSurfaceModelHillshade_21.setVisible(false);lyr_Geomorphology_22.setVisible(false);lyr_Geology_23.setVisible(false);lyr_Dyke_24.setVisible(false);lyr_CanopyHeightModel_25.setVisible(false);lyr_TreeSpeciesPoints_26.setVisible(true);lyr_TreeCount_27.setVisible(false);lyr_Slope_28.setVisible(false);lyr_5MeterFloodInundation_29.setVisible(false);lyr_ToposheetF42R4_41O4_30.setVisible(false);lyr_3MeterContours_31.setVisible(false);lyr_Roads_32.setVisible(false);lyr_5KmBuffer_33.setVisible(false);lyr_PlotBoundary_34.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_GoogleSatellite_2,lyr_Orthomosaic_3,lyr_Construction_Suitability_4,lyr_Plantion_Suitability_5,group_Treatment,group_DistancetoRiver,group_DistancetoForest,group_Hydrology,group_DTM,group_DSM,group_Geo,group_Tree,lyr_Slope_28,lyr_5MeterFloodInundation_29,lyr_ToposheetF42R4_41O4_30,lyr_3MeterContours_31,lyr_Roads_32,lyr_5KmBuffer_33,lyr_PlotBoundary_34];
lyr_200x200MGrid_6.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'GridNo': 'GridNo', });
lyr_100x100MGrid_7.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'GridNo': 'GridNo', });
lyr_Zonations_8.set('fieldAliases', {'id': 'id', 'GridNo': 'GridNo', 'Zone': 'Zone', });
lyr_100MeterStreams_10.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_10MeterStreams_11.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_Streams_12.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_Forest_14.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'Sno': 'Sno', 'Name': 'Name', 'Check': 'Check', 'F_SNO': 'F_SNO', 'F_TYPE': 'F_TYPE', 'SECTION': 'SECTION', 'FG_AREA_Ha': 'FG_AREA_Ha', 'REMARKS': 'REMARKS', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CATEGORY': 'CATEGORY', 'GN_NO': 'GN_NO', 'GN_DATE': 'GN_DATE', 'COMPARTMEN': 'COMPARTMEN', 'SANC_AR_Ha': 'SANC_AR_Ha', });
lyr_DistancetoForestLine_15.set('fieldAliases', {'id': 'id', 'Plot': 'Plot', 'length': 'length', });
lyr_Catchment_16.set('fieldAliases', {'PolygonId': 'PolygonId', 'Area': 'Area', 'Subbasin': 'Subbasin', 'strmOrder': 'strmOrder', 'area_1': 'area_1', 'area_2': 'area_2', 'perimeter': 'perimeter', });
lyr_Streams_17.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_Geomorphology_22.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'descriptio': 'descriptio', 'legend_sho': 'legend_sho', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_Geology_23.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'input_cent': 'input_cent', 'toposheet_': 'toposheet_', 'edition_nu': 'edition_nu', 'geometry_i': 'geometry_i', 'age': 'age', 'supergroup': 'supergroup', 'group_name': 'group_name', 'formation': 'formation', 'member': 'member', 'lithologic': 'lithologic', 'sub_group': 'sub_group', 'new_geom_i': 'new_geom_i', 'uid_notati': 'uid_notati', 'intrusive': 'intrusive', 'script': 'script', 'notation': 'notation', 'stratigrap': 'stratigrap', 'area': 'area', 'area1': 'area1', 'notation12': 'notation12', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'stratigr_1': 'stratigr_1', 'sld_name': 'sld_name', 'notation_l': 'notation_l', });
lyr_Dyke_24.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'input_cent': 'input_cent', 'toposheet_': 'toposheet_', 'edition_nu': 'edition_nu', 'geometry_i': 'geometry_i', 'lithology': 'lithology', 'shape_leng': 'shape_leng', 'dyke_type1': 'dyke_type1', });
lyr_TreeSpeciesPoints_26.set('fieldAliases', {'Tree_ID': 'Tree_ID', 'Tree_ID_2': 'Tree_ID_2', 'lulcmajori': 'lulcmajori', 'Crown_Area': 'Crown_Area', 'Max_Height': 'Max_Height', 'Mean_R': 'Mean_R', 'Mean_G': 'Mean_G', 'Mean_B': 'Mean_B', 'Species': 'Species', 'Species2': 'Species2', });
lyr_TreeCount_27.set('fieldAliases', {'Tree_ID': 'Tree_ID', });
lyr_3MeterContours_31.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Roads_32.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_5KmBuffer_33.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Plot No': 'Plot No', 'Area Ha': 'Area Ha', 'Remark': 'Remark', 'Land': 'Land', 'final_rema': 'final_rema', 'area': 'area', });
lyr_PlotBoundary_34.set('fieldAliases', {'id': 'id', 'Plot No': 'Plot No', 'Area Ha': 'Area Ha', 'Remark': 'Remark', 'Land': 'Land', 'final_rema': 'final_rema', 'area': 'area', 'TreeCount': 'TreeCount', });
lyr_200x200MGrid_6.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'GridNo': 'TextEdit', });
lyr_100x100MGrid_7.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'GridNo': 'TextEdit', });
lyr_Zonations_8.set('fieldImages', {'id': 'TextEdit', 'GridNo': 'TextEdit', 'Zone': 'TextEdit', });
lyr_100MeterStreams_10.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_10MeterStreams_11.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_Streams_12.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_Forest_14.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'Sno': 'TextEdit', 'Name': 'TextEdit', 'Check': 'TextEdit', 'F_SNO': 'TextEdit', 'F_TYPE': 'TextEdit', 'SECTION': 'TextEdit', 'FG_AREA_Ha': 'TextEdit', 'REMARKS': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CATEGORY': 'TextEdit', 'GN_NO': 'TextEdit', 'GN_DATE': 'DateTime', 'COMPARTMEN': 'TextEdit', 'SANC_AR_Ha': 'TextEdit', });
lyr_DistancetoForestLine_15.set('fieldImages', {'id': 'TextEdit', 'Plot': 'TextEdit', 'length': 'TextEdit', });
lyr_Catchment_16.set('fieldImages', {'PolygonId': 'TextEdit', 'Area': 'TextEdit', 'Subbasin': 'Range', 'strmOrder': 'Range', 'area_1': 'TextEdit', 'area_2': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Streams_17.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_Geomorphology_22.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'descriptio': 'TextEdit', 'legend_sho': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_Geology_23.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'input_cent': 'TextEdit', 'toposheet_': 'TextEdit', 'edition_nu': 'TextEdit', 'geometry_i': 'TextEdit', 'age': 'TextEdit', 'supergroup': 'TextEdit', 'group_name': 'TextEdit', 'formation': 'TextEdit', 'member': 'TextEdit', 'lithologic': 'TextEdit', 'sub_group': 'TextEdit', 'new_geom_i': 'TextEdit', 'uid_notati': 'TextEdit', 'intrusive': 'TextEdit', 'script': 'TextEdit', 'notation': 'TextEdit', 'stratigrap': 'TextEdit', 'area': 'TextEdit', 'area1': 'TextEdit', 'notation12': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'stratigr_1': 'TextEdit', 'sld_name': 'TextEdit', 'notation_l': 'TextEdit', });
lyr_Dyke_24.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'input_cent': 'TextEdit', 'toposheet_': 'TextEdit', 'edition_nu': 'TextEdit', 'geometry_i': 'TextEdit', 'lithology': 'TextEdit', 'shape_leng': 'TextEdit', 'dyke_type1': 'TextEdit', });
lyr_TreeSpeciesPoints_26.set('fieldImages', {'Tree_ID': 'TextEdit', 'Tree_ID_2': 'TextEdit', 'lulcmajori': 'TextEdit', 'Crown_Area': 'TextEdit', 'Max_Height': 'TextEdit', 'Mean_R': 'TextEdit', 'Mean_G': 'TextEdit', 'Mean_B': 'TextEdit', 'Species': 'TextEdit', 'Species2': 'TextEdit', });
lyr_TreeCount_27.set('fieldImages', {'Tree_ID': 'TextEdit', });
lyr_3MeterContours_31.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Roads_32.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_5KmBuffer_33.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'Plot No': 'TextEdit', 'Area Ha': 'TextEdit', 'Remark': 'TextEdit', 'Land': 'TextEdit', 'final_rema': 'TextEdit', 'area': 'TextEdit', });
lyr_PlotBoundary_34.set('fieldImages', {'id': 'TextEdit', 'Plot No': 'TextEdit', 'Area Ha': 'TextEdit', 'Remark': 'TextEdit', 'Land': 'TextEdit', 'final_rema': 'TextEdit', 'area': 'TextEdit', 'TreeCount': 'TextEdit', });
lyr_200x200MGrid_6.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'GridNo': 'inline label - visible with data', });
lyr_100x100MGrid_7.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'GridNo': 'inline label - visible with data', });
lyr_Zonations_8.set('fieldLabels', {'id': 'hidden field', 'GridNo': 'inline label - visible with data', 'Zone': 'inline label - visible with data', });
lyr_100MeterStreams_10.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'hidden field', 'Length': 'hidden field', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_10MeterStreams_11.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'hidden field', 'Length': 'hidden field', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_Streams_12.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_Forest_14.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'Sno': 'hidden field', 'Name': 'hidden field', 'Check': 'hidden field', 'F_SNO': 'hidden field', 'F_TYPE': 'inline label - visible with data', 'SECTION': 'hidden field', 'FG_AREA_Ha': 'hidden field', 'REMARKS': 'hidden field', 'BEAT': 'inline label - visible with data', 'ROUND': 'inline label - visible with data', 'RANGE': 'inline label - visible with data', 'DIVISION': 'inline label - visible with data', 'CATEGORY': 'hidden field', 'GN_NO': 'hidden field', 'GN_DATE': 'hidden field', 'COMPARTMEN': 'hidden field', 'SANC_AR_Ha': 'hidden field', });
lyr_DistancetoForestLine_15.set('fieldLabels', {'id': 'hidden field', 'Plot': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_Catchment_16.set('fieldLabels', {'PolygonId': 'hidden field', 'Area': 'hidden field', 'Subbasin': 'hidden field', 'strmOrder': 'inline label - visible with data', 'area_1': 'hidden field', 'area_2': 'inline label - visible with data', 'perimeter': 'hidden field', });
lyr_Streams_17.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_Geomorphology_22.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'descriptio': 'hidden field', 'legend_sho': 'inline label - visible with data', 'shape_area': 'hidden field', 'shape_len': 'hidden field', });
lyr_Geology_23.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'input_cent': 'hidden field', 'toposheet_': 'hidden field', 'edition_nu': 'hidden field', 'geometry_i': 'hidden field', 'age': 'hidden field', 'supergroup': 'hidden field', 'group_name': 'hidden field', 'formation': 'hidden field', 'member': 'hidden field', 'lithologic': 'inline label - visible with data', 'sub_group': 'hidden field', 'new_geom_i': 'hidden field', 'uid_notati': 'hidden field', 'intrusive': 'hidden field', 'script': 'hidden field', 'notation': 'hidden field', 'stratigrap': 'hidden field', 'area': 'hidden field', 'area1': 'hidden field', 'notation12': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'stratigr_1': 'hidden field', 'sld_name': 'hidden field', 'notation_l': 'hidden field', });
lyr_Dyke_24.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'input_cent': 'hidden field', 'toposheet_': 'hidden field', 'edition_nu': 'hidden field', 'geometry_i': 'hidden field', 'lithology': 'inline label - always visible', 'shape_leng': 'hidden field', 'dyke_type1': 'hidden field', });
lyr_TreeSpeciesPoints_26.set('fieldLabels', {'Tree_ID': 'no label', 'Tree_ID_2': 'no label', 'lulcmajori': 'no label', 'Crown_Area': 'no label', 'Max_Height': 'no label', 'Mean_R': 'no label', 'Mean_G': 'no label', 'Mean_B': 'no label', 'Species': 'no label', 'Species2': 'no label', });
lyr_TreeCount_27.set('fieldLabels', {'Tree_ID': 'hidden field', });
lyr_3MeterContours_31.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', });
lyr_Roads_32.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_5KmBuffer_33.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id': 'hidden field', 'Plot No': 'hidden field', 'Area Ha': 'hidden field', 'Remark': 'hidden field', 'Land': 'hidden field', 'final_rema': 'hidden field', 'area': 'hidden field', });
lyr_PlotBoundary_34.set('fieldLabels', {'id': 'hidden field', 'Plot No': 'inline label - visible with data', 'Area Ha': 'inline label - visible with data', 'Remark': 'hidden field', 'Land': 'hidden field', 'final_rema': 'hidden field', 'area': 'no label', 'TreeCount': 'no label', });
lyr_PlotBoundary_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});