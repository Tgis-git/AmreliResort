var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ToposheetF42R4_41O4_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Toposheet F42R4_41O4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ToposheetF42R4_41O4_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7894753.419758, 2385307.864360, 7935643.031956, 2426377.940582]
        })
    });
var lyr_Orthomosaic_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Orthomosaic<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Orthomosaic_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912186.379903, 2408387.464279, 7914940.374944, 2410295.599510]
        })
    });
var lyr_Landuse_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landuse<br />\
    <img src="styles/legend/Landuse_5_0.png" /> Farm<br />\
    <img src="styles/legend/Landuse_5_1.png" /> Bare Land/ Open Land / Waste Land<br />\
    <img src="styles/legend/Landuse_5_2.png" /> Healthy Tree<br />\
    <img src="styles/legend/Landuse_5_3.png" /> Dry Trees/ Shrub<br />\
    <img src="styles/legend/Landuse_5_4.png" /> Builtup<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landuse_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912237.053888, 2408445.744823, 7914876.853357, 2410271.877538]
        })
    });
var lyr_DigitalTerrainModel_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Terrain Model<br />\
    <img src="styles/legend/DigitalTerrainModel_6_0.png" /> <= 184<br />\
    <img src="styles/legend/DigitalTerrainModel_6_1.png" /> 184 - 200<br />\
    <img src="styles/legend/DigitalTerrainModel_6_2.png" /> 200 - 215<br />\
    <img src="styles/legend/DigitalTerrainModel_6_3.png" /> 215 - 231<br />\
    <img src="styles/legend/DigitalTerrainModel_6_4.png" /> > 231<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalTerrainModel_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.903194, 2408382.863143, 7914953.264441, 2410308.200547]
        })
    });
var lyr_DigitalTerrainModelHillshade_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Terrain Model Hillshade<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalTerrainModelHillshade_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.903194, 2408382.863143, 7914953.264441, 2410308.200547]
        })
    });
var lyr_DigitalSurfaceModel_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Surface Model <br />\
    <img src="styles/legend/DigitalSurfaceModel_8_0.png" /> <= 184<br />\
    <img src="styles/legend/DigitalSurfaceModel_8_1.png" /> 184 - 201<br />\
    <img src="styles/legend/DigitalSurfaceModel_8_2.png" /> 201 - 217<br />\
    <img src="styles/legend/DigitalSurfaceModel_8_3.png" /> 217 - 234<br />\
    <img src="styles/legend/DigitalSurfaceModel_8_4.png" /> > 234<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalSurfaceModel_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.902494, 2408382.810686, 7914953.157292, 2410308.200547]
        })
    });
var lyr_DigitalSurfaceModelHillshade_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Digital Surface Model Hillshade<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DigitalSurfaceModelHillshade_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912181.902494, 2408382.810686, 7914953.157292, 2410308.200547]
        })
    });
var format_10MeterContours_10 = new ol.format.GeoJSON();
var features_10MeterContours_10 = format_10MeterContours_10.readFeatures(json_10MeterContours_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10MeterContours_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10MeterContours_10.addFeatures(features_10MeterContours_10);
var lyr_10MeterContours_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10MeterContours_10, 
                style: style_10MeterContours_10,
                popuplayertitle: '10MeterContours',
                interactive: true,
                title: '<img src="styles/legend/10MeterContours_10.png" /> 10MeterContours'
            });
var format_5MeterContours_11 = new ol.format.GeoJSON();
var features_5MeterContours_11 = format_5MeterContours_11.readFeatures(json_5MeterContours_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5MeterContours_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5MeterContours_11.addFeatures(features_5MeterContours_11);
var lyr_5MeterContours_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5MeterContours_11, 
                style: style_5MeterContours_11,
                popuplayertitle: '5MeterContours',
                interactive: true,
                title: '<img src="styles/legend/5MeterContours_11.png" /> 5MeterContours'
            });
var format_3MeterContours_12 = new ol.format.GeoJSON();
var features_3MeterContours_12 = format_3MeterContours_12.readFeatures(json_3MeterContours_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3MeterContours_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3MeterContours_12.addFeatures(features_3MeterContours_12);
var lyr_3MeterContours_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3MeterContours_12, 
                style: style_3MeterContours_12,
                popuplayertitle: '3MeterContours',
                interactive: true,
                title: '<img src="styles/legend/3MeterContours_12.png" /> 3MeterContours'
            });
var format_1MeterContours_13 = new ol.format.GeoJSON();
var features_1MeterContours_13 = format_1MeterContours_13.readFeatures(json_1MeterContours_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1MeterContours_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1MeterContours_13.addFeatures(features_1MeterContours_13);
var lyr_1MeterContours_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1MeterContours_13, 
                style: style_1MeterContours_13,
                popuplayertitle: '1MeterContours',
                interactive: true,
                title: '<img src="styles/legend/1MeterContours_13.png" /> 1MeterContours'
            });
var format_Geomorphology_14 = new ol.format.GeoJSON();
var features_Geomorphology_14 = format_Geomorphology_14.readFeatures(json_Geomorphology_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorphology_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_14.addFeatures(features_Geomorphology_14);
var lyr_Geomorphology_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorphology_14, 
                style: style_Geomorphology_14,
                popuplayertitle: 'Geomorphology',
                interactive: true,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_14_0.png" /> Alluvial Plain<br />\
    <img src="styles/legend/Geomorphology_14_1.png" /> Highly Dissected Plateau<br />\
    <img src="styles/legend/Geomorphology_14_2.png" /> Low Dissected Plateau<br />\
    <img src="styles/legend/Geomorphology_14_3.png" /> Moderately Dissected Hills and Valleys<br />\
    <img src="styles/legend/Geomorphology_14_4.png" /> Moderately Dissected Plateau<br />\
    <img src="styles/legend/Geomorphology_14_5.png" /> Waterbody - River<br />' });
var format_Geology_15 = new ol.format.GeoJSON();
var features_Geology_15 = format_Geology_15.readFeatures(json_Geology_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_15.addFeatures(features_Geology_15);
var lyr_Geology_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_15, 
                style: style_Geology_15,
                popuplayertitle: 'Geology',
                interactive: true,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_15_0.png" /> COMPOUND BASALT (LOWER)<br />\
    <img src="styles/legend/Geology_15_1.png" /> COMPOUND BASALT (UPPER)<br />' });
var format_Dyke_16 = new ol.format.GeoJSON();
var features_Dyke_16 = format_Dyke_16.readFeatures(json_Dyke_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dyke_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dyke_16.addFeatures(features_Dyke_16);
var lyr_Dyke_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dyke_16, 
                style: style_Dyke_16,
                popuplayertitle: 'Dyke',
                interactive: true,
                title: '<img src="styles/legend/Dyke_16.png" /> Dyke'
            });
var format_Catchment_17 = new ol.format.GeoJSON();
var features_Catchment_17 = format_Catchment_17.readFeatures(json_Catchment_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catchment_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catchment_17.addFeatures(features_Catchment_17);
var lyr_Catchment_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Catchment_17, 
                style: style_Catchment_17,
                popuplayertitle: 'Catchment',
                interactive: true,
    title: 'Catchment<br />\
    <img src="styles/legend/Catchment_17_0.png" /> 0 - 0.52<br />\
    <img src="styles/legend/Catchment_17_1.png" /> 0.52 - 1.52<br />\
    <img src="styles/legend/Catchment_17_2.png" /> 1.52 - 3.33<br />\
    <img src="styles/legend/Catchment_17_3.png" /> 3.33 - 5.83<br />\
    <img src="styles/legend/Catchment_17_4.png" /> 5.83 - 19.92<br />' });
var format_Streams_18 = new ol.format.GeoJSON();
var features_Streams_18 = format_Streams_18.readFeatures(json_Streams_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_18.addFeatures(features_Streams_18);
var lyr_Streams_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_18, 
                style: style_Streams_18,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_18_0.png" /> 1<br />\
    <img src="styles/legend/Streams_18_1.png" /> 2<br />\
    <img src="styles/legend/Streams_18_2.png" /> 3<br />\
    <img src="styles/legend/Streams_18_3.png" /> 4<br />\
    <img src="styles/legend/Streams_18_4.png" /> 5<br />\
    <img src="styles/legend/Streams_18_5.png" /> 6<br />' });
var lyr_DistancetoForest_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Distance to Forest<br />\
    <img src="styles/legend/DistancetoForest_19_0.png" /> <= 50.0000<br />\
    <img src="styles/legend/DistancetoForest_19_1.png" /> 50.0000 - 100.0000<br />\
    <img src="styles/legend/DistancetoForest_19_2.png" /> 100.0000 - 150.0000<br />\
    <img src="styles/legend/DistancetoForest_19_3.png" /> 150.0000 - 500.0000<br />\
    <img src="styles/legend/DistancetoForest_19_4.png" /> > 500.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DistancetoForest_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7906811.541729, 2402986.190101, 7920315.577280, 2415739.814512]
        })
    });
var format_DistancetoForestLine_20 = new ol.format.GeoJSON();
var features_DistancetoForestLine_20 = format_DistancetoForestLine_20.readFeatures(json_DistancetoForestLine_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistancetoForestLine_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoForestLine_20.addFeatures(features_DistancetoForestLine_20);
var lyr_DistancetoForestLine_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoForestLine_20, 
                style: style_DistancetoForestLine_20,
                popuplayertitle: 'DistancetoForestLine',
                interactive: true,
                title: '<img src="styles/legend/DistancetoForestLine_20.png" /> DistancetoForestLine'
            });
var format_Forest_21 = new ol.format.GeoJSON();
var features_Forest_21 = format_Forest_21.readFeatures(json_Forest_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_21.addFeatures(features_Forest_21);
var lyr_Forest_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_21, 
                style: style_Forest_21,
                popuplayertitle: 'Forest',
                interactive: true,
                title: '<img src="styles/legend/Forest_21.png" /> Forest'
            });
var lyr_DistancetoStreams_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Distance to Streams<br />\
    <img src="styles/legend/DistancetoStreams_22_0.png" /> <= 10.0000<br />\
    <img src="styles/legend/DistancetoStreams_22_1.png" /> 10.0000 - 50.0000<br />\
    <img src="styles/legend/DistancetoStreams_22_2.png" /> 50.0000 - 100.0000<br />\
    <img src="styles/legend/DistancetoStreams_22_3.png" /> 100.0000 - 300.0000<br />\
    <img src="styles/legend/DistancetoStreams_22_4.png" /> > 300.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DistancetoStreams_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912215.617412, 2408421.653321, 7914933.370886, 2410302.374352]
        })
    });
var format_100MeterStreams_23 = new ol.format.GeoJSON();
var features_100MeterStreams_23 = format_100MeterStreams_23.readFeatures(json_100MeterStreams_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100MeterStreams_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100MeterStreams_23.addFeatures(features_100MeterStreams_23);
var lyr_100MeterStreams_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100MeterStreams_23, 
                style: style_100MeterStreams_23,
                popuplayertitle: '100MeterStreams',
                interactive: false,
                title: '<img src="styles/legend/100MeterStreams_23.png" /> 100MeterStreams'
            });
var format_10MeterStreams_24 = new ol.format.GeoJSON();
var features_10MeterStreams_24 = format_10MeterStreams_24.readFeatures(json_10MeterStreams_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10MeterStreams_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10MeterStreams_24.addFeatures(features_10MeterStreams_24);
var lyr_10MeterStreams_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10MeterStreams_24, 
                style: style_10MeterStreams_24,
                popuplayertitle: '10MeterStreams',
                interactive: false,
                title: '<img src="styles/legend/10MeterStreams_24.png" /> 10MeterStreams'
            });
var format_Streams_25 = new ol.format.GeoJSON();
var features_Streams_25 = format_Streams_25.readFeatures(json_Streams_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_25.addFeatures(features_Streams_25);
var lyr_Streams_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_25, 
                style: style_Streams_25,
                popuplayertitle: 'Streams',
                interactive: false,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_25_0.png" /> 1<br />\
    <img src="styles/legend/Streams_25_1.png" /> 2<br />\
    <img src="styles/legend/Streams_25_2.png" /> 3<br />\
    <img src="styles/legend/Streams_25_3.png" /> 4<br />\
    <img src="styles/legend/Streams_25_4.png" /> 5<br />\
    <img src="styles/legend/Streams_25_5.png" /> 6<br />' });
var format_Zonations_26 = new ol.format.GeoJSON();
var features_Zonations_26 = format_Zonations_26.readFeatures(json_Zonations_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonations_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonations_26.addFeatures(features_Zonations_26);
var lyr_Zonations_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonations_26, 
                style: style_Zonations_26,
                popuplayertitle: 'Zonations',
                interactive: true,
    title: 'Zonations<br />\
    <img src="styles/legend/Zonations_26_0.png" /> Zone 1: Bare Ground & Open Soil<br />\
    <img src="styles/legend/Zonations_26_1.png" /> Zone 2: Shrubs, Grasses & Dry Scrub<br />\
    <img src="styles/legend/Zonations_26_2.png" /> Zone 3: Healthy Trees & Dense Canopy<br />\
    <img src="styles/legend/Zonations_26_3.png" /> Zone 4: Farmland<br />' });
var format_200x200MGrid_27 = new ol.format.GeoJSON();
var features_200x200MGrid_27 = format_200x200MGrid_27.readFeatures(json_200x200MGrid_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200x200MGrid_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200x200MGrid_27.addFeatures(features_200x200MGrid_27);
var lyr_200x200MGrid_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200x200MGrid_27, 
                style: style_200x200MGrid_27,
                popuplayertitle: '200x200M Grid ',
                interactive: true,
                title: '<img src="styles/legend/200x200MGrid_27.png" /> 200x200M Grid '
            });
var format_100x100MGrid_28 = new ol.format.GeoJSON();
var features_100x100MGrid_28 = format_100x100MGrid_28.readFeatures(json_100x100MGrid_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100x100MGrid_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100x100MGrid_28.addFeatures(features_100x100MGrid_28);
var lyr_100x100MGrid_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100x100MGrid_28, 
                style: style_100x100MGrid_28,
                popuplayertitle: '100x100M Grid',
                interactive: true,
                title: '<img src="styles/legend/100x100MGrid_28.png" /> 100x100M Grid'
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
var lyr_CanopyHeightModel_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Canopy Height Model<br />\
    <img src="styles/legend/CanopyHeightModel_30_0.png" /> 0.0000<br />\
    <img src="styles/legend/CanopyHeightModel_30_1.png" /> 4.5494<br />\
    <img src="styles/legend/CanopyHeightModel_30_2.png" /> 9.0986<br />\
    <img src="styles/legend/CanopyHeightModel_30_3.png" /> 13.6478<br />\
    <img src="styles/legend/CanopyHeightModel_30_4.png" /> 18.1970<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CanopyHeightModel_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912105.449234, 2408319.389796, 7915024.612785, 2410405.891740]
        })
    });
var format_TreeCount_clip_31 = new ol.format.GeoJSON();
var features_TreeCount_clip_31 = format_TreeCount_clip_31.readFeatures(json_TreeCount_clip_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreeCount_clip_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeCount_clip_31.addFeatures(features_TreeCount_clip_31);
var lyr_TreeCount_clip_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreeCount_clip_31, 
                style: style_TreeCount_clip_31,
                popuplayertitle: 'TreeCount_clip',
                interactive: false,
                title: '<img src="styles/legend/TreeCount_clip_31.png" /> TreeCount_clip'
            });
var lyr_Construction_Suitability_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Construction_Suitability<br />\
    <img src="styles/legend/Construction_Suitability_32_0.png" /> Least Suitability<br />\
    <img src="styles/legend/Construction_Suitability_32_1.png" /> Low Sutability<br />\
    <img src="styles/legend/Construction_Suitability_32_2.png" /> Moderate Suiability<br />\
    <img src="styles/legend/Construction_Suitability_32_3.png" /> High Suitability<br />\
    <img src="styles/legend/Construction_Suitability_32_4.png" /> Best Suitability<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Construction_Suitability_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912238.439095, 2408447.223609, 7914874.027470, 2410270.822173]
        })
    });
var lyr_Plantion_Suitability_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Plantion_Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_33_0.png" /> Least Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_33_1.png" /> Low Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_33_2.png" /> Moderate Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_33_3.png" /> High Suitability<br />\
    <img src="styles/legend/Plantion_Suitability_33_4.png" /> Best Suitability<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Plantion_Suitability_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7912238.439095, 2408447.223609, 7914874.027470, 2410270.822173]
        })
    });
var format_5KmBuffer_34 = new ol.format.GeoJSON();
var features_5KmBuffer_34 = format_5KmBuffer_34.readFeatures(json_5KmBuffer_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5KmBuffer_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5KmBuffer_34.addFeatures(features_5KmBuffer_34);
var lyr_5KmBuffer_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5KmBuffer_34, 
                style: style_5KmBuffer_34,
                popuplayertitle: '5KmBuffer',
                interactive: false,
                title: '<img src="styles/legend/5KmBuffer_34.png" /> 5KmBuffer'
            });
var format_PLOTS_35 = new ol.format.GeoJSON();
var features_PLOTS_35 = format_PLOTS_35.readFeatures(json_PLOTS_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLOTS_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLOTS_35.addFeatures(features_PLOTS_35);
var lyr_PLOTS_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLOTS_35, 
                style: style_PLOTS_35,
                popuplayertitle: 'PLOTS',
                interactive: true,
                title: '<img src="styles/legend/PLOTS_35.png" /> PLOTS'
            });
var group_Treatment = new ol.layer.Group({
                                layers: [lyr_Zonations_26,lyr_200x200MGrid_27,lyr_100x100MGrid_28,],
                                fold: 'close',
                                title: 'Treatment'});
var group_DistancetoRiver = new ol.layer.Group({
                                layers: [lyr_DistancetoStreams_22,lyr_100MeterStreams_23,lyr_10MeterStreams_24,lyr_Streams_25,],
                                fold: 'close',
                                title: 'Distance to River'});
var group_DistancetoForest = new ol.layer.Group({
                                layers: [lyr_DistancetoForest_19,lyr_DistancetoForestLine_20,lyr_Forest_21,],
                                fold: 'close',
                                title: 'Distance to Forest'});
var group_Hydrology = new ol.layer.Group({
                                layers: [lyr_Catchment_17,lyr_Streams_18,],
                                fold: 'close',
                                title: 'Hydrology'});
var group_Geo = new ol.layer.Group({
                                layers: [lyr_Geomorphology_14,lyr_Geology_15,lyr_Dyke_16,],
                                fold: 'close',
                                title: 'Geo'});
var group_Contours = new ol.layer.Group({
                                layers: [lyr_10MeterContours_10,lyr_5MeterContours_11,lyr_3MeterContours_12,lyr_1MeterContours_13,],
                                fold: 'close',
                                title: 'Contours'});
var group_DSM = new ol.layer.Group({
                                layers: [lyr_DigitalSurfaceModel_8,lyr_DigitalSurfaceModelHillshade_9,],
                                fold: 'close',
                                title: 'DSM'});
var group_DTM = new ol.layer.Group({
                                layers: [lyr_DigitalTerrainModel_6,lyr_DigitalTerrainModelHillshade_7,],
                                fold: 'close',
                                title: 'DTM'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_ToposheetF42R4_41O4_3.setVisible(false);lyr_Orthomosaic_4.setVisible(true);lyr_Landuse_5.setVisible(false);lyr_DigitalTerrainModel_6.setVisible(false);lyr_DigitalTerrainModelHillshade_7.setVisible(false);lyr_DigitalSurfaceModel_8.setVisible(false);lyr_DigitalSurfaceModelHillshade_9.setVisible(false);lyr_10MeterContours_10.setVisible(false);lyr_5MeterContours_11.setVisible(false);lyr_3MeterContours_12.setVisible(false);lyr_1MeterContours_13.setVisible(false);lyr_Geomorphology_14.setVisible(false);lyr_Geology_15.setVisible(false);lyr_Dyke_16.setVisible(false);lyr_Catchment_17.setVisible(false);lyr_Streams_18.setVisible(false);lyr_DistancetoForest_19.setVisible(false);lyr_DistancetoForestLine_20.setVisible(false);lyr_Forest_21.setVisible(false);lyr_DistancetoStreams_22.setVisible(false);lyr_100MeterStreams_23.setVisible(false);lyr_10MeterStreams_24.setVisible(false);lyr_Streams_25.setVisible(false);lyr_Zonations_26.setVisible(false);lyr_200x200MGrid_27.setVisible(false);lyr_100x100MGrid_28.setVisible(false);lyr_5MeterFloodInundation_29.setVisible(false);lyr_CanopyHeightModel_30.setVisible(false);lyr_TreeCount_clip_31.setVisible(false);lyr_Construction_Suitability_32.setVisible(false);lyr_Plantion_Suitability_33.setVisible(false);lyr_5KmBuffer_34.setVisible(false);lyr_PLOTS_35.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,lyr_ToposheetF42R4_41O4_3,lyr_Orthomosaic_4,lyr_Landuse_5,group_DTM,group_DSM,group_Contours,group_Geo,group_Hydrology,group_DistancetoForest,group_DistancetoRiver,group_Treatment,lyr_5MeterFloodInundation_29,lyr_CanopyHeightModel_30,lyr_TreeCount_clip_31,lyr_Construction_Suitability_32,lyr_Plantion_Suitability_33,lyr_5KmBuffer_34,lyr_PLOTS_35];
lyr_10MeterContours_10.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_5MeterContours_11.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_3MeterContours_12.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_1MeterContours_13.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'length': 'length', });
lyr_Geomorphology_14.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'descriptio': 'descriptio', 'legend_sho': 'legend_sho', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_Geology_15.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'input_cent': 'input_cent', 'toposheet_': 'toposheet_', 'edition_nu': 'edition_nu', 'geometry_i': 'geometry_i', 'age': 'age', 'supergroup': 'supergroup', 'group_name': 'group_name', 'formation': 'formation', 'member': 'member', 'lithologic': 'lithologic', 'sub_group': 'sub_group', 'new_geom_i': 'new_geom_i', 'uid_notati': 'uid_notati', 'intrusive': 'intrusive', 'script': 'script', 'notation': 'notation', 'stratigrap': 'stratigrap', 'area': 'area', 'area1': 'area1', 'notation12': 'notation12', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'stratigr_1': 'stratigr_1', 'sld_name': 'sld_name', 'notation_l': 'notation_l', });
lyr_Dyke_16.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'input_cent': 'input_cent', 'toposheet_': 'toposheet_', 'edition_nu': 'edition_nu', 'geometry_i': 'geometry_i', 'lithology': 'lithology', 'shape_leng': 'shape_leng', 'dyke_type1': 'dyke_type1', });
lyr_Catchment_17.set('fieldAliases', {'PolygonId': 'PolygonId', 'Area': 'Area', 'Subbasin': 'Subbasin', 'strmOrder': 'strmOrder', 'area_1': 'area_1', 'area_2': 'area_2', 'perimeter': 'perimeter', });
lyr_Streams_18.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_DistancetoForestLine_20.set('fieldAliases', {'id': 'id', 'Plot': 'Plot', 'length': 'length', });
lyr_Forest_21.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'Sno': 'Sno', 'Name': 'Name', 'Check': 'Check', 'F_SNO': 'F_SNO', 'F_TYPE': 'F_TYPE', 'SECTION': 'SECTION', 'FG_AREA_Ha': 'FG_AREA_Ha', 'REMARKS': 'REMARKS', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CATEGORY': 'CATEGORY', 'GN_NO': 'GN_NO', 'GN_DATE': 'GN_DATE', 'COMPARTMEN': 'COMPARTMEN', 'SANC_AR_Ha': 'SANC_AR_Ha', });
lyr_100MeterStreams_23.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_10MeterStreams_24.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_Streams_25.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', });
lyr_Zonations_26.set('fieldAliases', {'id': 'id', 'GridNo': 'GridNo', 'Zone': 'Zone', });
lyr_200x200MGrid_27.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'GridNo': 'GridNo', });
lyr_100x100MGrid_28.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'GridNo': 'GridNo', });
lyr_TreeCount_clip_31.set('fieldAliases', {'Tree_ID': 'Tree_ID', });
lyr_5KmBuffer_34.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Plot No': 'Plot No', 'Area Ha': 'Area Ha', 'Remark': 'Remark', 'Land': 'Land', 'final_rema': 'final_rema', 'area': 'area', });
lyr_PLOTS_35.set('fieldAliases', {'id': 'id', 'Plot No': 'Plot No', 'Area Ha': 'Area Ha', 'Remark': 'Remark', 'Land': 'Land', 'final_rema': 'final_rema', });
lyr_10MeterContours_10.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_5MeterContours_11.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_3MeterContours_12.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_1MeterContours_13.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', 'length': 'TextEdit', });
lyr_Geomorphology_14.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'descriptio': 'TextEdit', 'legend_sho': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_Geology_15.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'input_cent': 'TextEdit', 'toposheet_': 'TextEdit', 'edition_nu': 'TextEdit', 'geometry_i': 'TextEdit', 'age': 'TextEdit', 'supergroup': 'TextEdit', 'group_name': 'TextEdit', 'formation': 'TextEdit', 'member': 'TextEdit', 'lithologic': 'TextEdit', 'sub_group': 'TextEdit', 'new_geom_i': 'TextEdit', 'uid_notati': 'TextEdit', 'intrusive': 'TextEdit', 'script': 'TextEdit', 'notation': 'TextEdit', 'stratigrap': 'TextEdit', 'area': 'TextEdit', 'area1': 'TextEdit', 'notation12': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'stratigr_1': 'TextEdit', 'sld_name': 'TextEdit', 'notation_l': 'TextEdit', });
lyr_Dyke_16.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'input_cent': 'TextEdit', 'toposheet_': 'TextEdit', 'edition_nu': 'TextEdit', 'geometry_i': 'TextEdit', 'lithology': 'TextEdit', 'shape_leng': 'TextEdit', 'dyke_type1': 'TextEdit', });
lyr_Catchment_17.set('fieldImages', {'PolygonId': 'TextEdit', 'Area': 'TextEdit', 'Subbasin': 'Range', 'strmOrder': 'Range', 'area_1': 'TextEdit', 'area_2': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Streams_18.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_DistancetoForestLine_20.set('fieldImages', {'id': '', 'Plot': '', 'length': '', });
lyr_Forest_21.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'Sno': 'TextEdit', 'Name': 'TextEdit', 'Check': 'TextEdit', 'F_SNO': 'TextEdit', 'F_TYPE': 'TextEdit', 'SECTION': 'TextEdit', 'FG_AREA_Ha': 'TextEdit', 'REMARKS': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CATEGORY': 'TextEdit', 'GN_NO': 'TextEdit', 'GN_DATE': 'DateTime', 'COMPARTMEN': 'TextEdit', 'SANC_AR_Ha': 'TextEdit', });
lyr_100MeterStreams_23.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_10MeterStreams_24.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_Streams_25.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', });
lyr_Zonations_26.set('fieldImages', {'id': 'TextEdit', 'GridNo': 'TextEdit', 'Zone': 'TextEdit', });
lyr_200x200MGrid_27.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'GridNo': 'TextEdit', });
lyr_100x100MGrid_28.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'GridNo': 'TextEdit', });
lyr_TreeCount_clip_31.set('fieldImages', {'Tree_ID': 'TextEdit', });
lyr_5KmBuffer_34.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'Plot No': 'TextEdit', 'Area Ha': 'TextEdit', 'Remark': 'TextEdit', 'Land': 'TextEdit', 'final_rema': 'TextEdit', 'area': 'TextEdit', });
lyr_PLOTS_35.set('fieldImages', {'id': 'TextEdit', 'Plot No': 'TextEdit', 'Area Ha': 'TextEdit', 'Remark': 'TextEdit', 'Land': 'TextEdit', 'final_rema': 'TextEdit', });
lyr_10MeterContours_10.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', });
lyr_5MeterContours_11.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', });
lyr_3MeterContours_12.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', });
lyr_1MeterContours_13.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - visible with data', 'length': 'hidden field', });
lyr_Geomorphology_14.set('fieldLabels', {'gid': 'hidden field', 'shape_leng': 'hidden field', 'descriptio': 'hidden field', 'legend_sho': 'inline label - visible with data', 'shape_area': 'hidden field', 'shape_len': 'hidden field', });
lyr_Geology_15.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'input_cent': 'hidden field', 'toposheet_': 'hidden field', 'edition_nu': 'hidden field', 'geometry_i': 'hidden field', 'age': 'hidden field', 'supergroup': 'hidden field', 'group_name': 'hidden field', 'formation': 'hidden field', 'member': 'hidden field', 'lithologic': 'inline label - visible with data', 'sub_group': 'hidden field', 'new_geom_i': 'hidden field', 'uid_notati': 'hidden field', 'intrusive': 'hidden field', 'script': 'hidden field', 'notation': 'hidden field', 'stratigrap': 'hidden field', 'area': 'hidden field', 'area1': 'hidden field', 'notation12': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'stratigr_1': 'hidden field', 'sld_name': 'hidden field', 'notation_l': 'hidden field', });
lyr_Dyke_16.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'input_cent': 'hidden field', 'toposheet_': 'hidden field', 'edition_nu': 'hidden field', 'geometry_i': 'hidden field', 'lithology': 'inline label - always visible', 'shape_leng': 'hidden field', 'dyke_type1': 'hidden field', });
lyr_Catchment_17.set('fieldLabels', {'PolygonId': 'hidden field', 'Area': 'hidden field', 'Subbasin': 'hidden field', 'strmOrder': 'inline label - visible with data', 'area_1': 'hidden field', 'area_2': 'inline label - visible with data', 'perimeter': 'hidden field', });
lyr_Streams_18.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_DistancetoForestLine_20.set('fieldLabels', {'id': 'hidden field', 'Plot': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_Forest_21.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'Sno': 'hidden field', 'Name': 'hidden field', 'Check': 'hidden field', 'F_SNO': 'hidden field', 'F_TYPE': 'inline label - visible with data', 'SECTION': 'hidden field', 'FG_AREA_Ha': 'hidden field', 'REMARKS': 'hidden field', 'BEAT': 'inline label - visible with data', 'ROUND': 'inline label - visible with data', 'RANGE': 'inline label - visible with data', 'DIVISION': 'inline label - visible with data', 'CATEGORY': 'hidden field', 'GN_NO': 'hidden field', 'GN_DATE': 'hidden field', 'COMPARTMEN': 'hidden field', 'SANC_AR_Ha': 'hidden field', });
lyr_100MeterStreams_23.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'hidden field', 'Length': 'hidden field', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_10MeterStreams_24.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'hidden field', 'Length': 'hidden field', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_Streams_25.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', });
lyr_Zonations_26.set('fieldLabels', {'id': 'hidden field', 'GridNo': 'inline label - visible with data', 'Zone': 'inline label - visible with data', });
lyr_200x200MGrid_27.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'GridNo': 'inline label - visible with data', });
lyr_100x100MGrid_28.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'GridNo': 'inline label - visible with data', });
lyr_TreeCount_clip_31.set('fieldLabels', {'Tree_ID': 'hidden field', });
lyr_5KmBuffer_34.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id': 'hidden field', 'Plot No': 'hidden field', 'Area Ha': 'hidden field', 'Remark': 'hidden field', 'Land': 'hidden field', 'final_rema': 'hidden field', 'area': 'hidden field', });
lyr_PLOTS_35.set('fieldLabels', {'id': 'hidden field', 'Plot No': 'inline label - visible with data', 'Area Ha': 'inline label - visible with data', 'Remark': 'hidden field', 'Land': 'hidden field', 'final_rema': 'hidden field', });
lyr_PLOTS_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});