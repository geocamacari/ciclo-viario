var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WazeWorld_2 = new ol.layer.Tile({
            'title': 'Waze (World)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatlite_3 = new ol.layer.Tile({
            'title': 'Google Satélite',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Ortofoto2022SEFAZPMC_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2022 (SEFAZ/PMC)",
                            opacity: 1.000000,
                            
maxResolution:70.0111653806549,

                            
                          });
              wms_layers.push([lyr_Ortofoto2022SEFAZPMC_4, 0]);
var lyr_Ortofoto2017SEFAZPMC_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geomais.camacari.ba.gov.br/geoserver/gm_camacari/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2017 (SEFAZ/PMC)",
                            opacity: 1.000000,
                            
maxResolution:84.0133984567859,

                            minResolution:0.28004466152261964,

                          });
              wms_layers.push([lyr_Ortofoto2017SEFAZPMC_5, 0]);

        var lyr_GoogleTraffic_6 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.28004466152261964,

            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_7 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:14.00223307613098,

            minResolution:0.28004466152261964,

            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriBoundariesandPlaces_8 = new ol.layer.Tile({
            'title': 'Esri Boundaries and Places',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:140.0223307613098,

            minResolution:0.7001116538065492,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LogradourosOficializadoseouCepeados_9 = new ol.format.GeoJSON();
var features_LogradourosOficializadoseouCepeados_9 = format_LogradourosOficializadoseouCepeados_9.readFeatures(json_LogradourosOficializadoseouCepeados_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LogradourosOficializadoseouCepeados_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LogradourosOficializadoseouCepeados_9.addFeatures(features_LogradourosOficializadoseouCepeados_9);
var lyr_LogradourosOficializadoseouCepeados_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LogradourosOficializadoseouCepeados_9,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_LogradourosOficializadoseouCepeados_9,
                popuplayertitle: "Logradouros Oficializados e/ou Cepeados",
                interactive: true,
                title: '<img src="styles/legend/LogradourosOficializadoseouCepeados_9.png" /> Logradouros Oficializados e/ou Cepeados'
            });
var format_EixosRodEstSEINFRABa2021_10 = new ol.format.GeoJSON();
var features_EixosRodEstSEINFRABa2021_10 = format_EixosRodEstSEINFRABa2021_10.readFeatures(json_EixosRodEstSEINFRABa2021_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixosRodEstSEINFRABa2021_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixosRodEstSEINFRABa2021_10.addFeatures(features_EixosRodEstSEINFRABa2021_10);
var lyr_EixosRodEstSEINFRABa2021_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EixosRodEstSEINFRABa2021_10,
maxResolution:84.0133984567859,
 minResolution:0.28004466152261964,

                style: style_EixosRodEstSEINFRABa2021_10,
                popuplayertitle: "Eixos Rod. Est. (SEINFRA-Ba/2021)",
                interactive: true,
                title: '<img src="styles/legend/EixosRodEstSEINFRABa2021_10.png" /> Eixos Rod. Est. (SEINFRA-Ba/2021)'
            });
var format_SistCiclovirioPropostoSEINFRA2024_11 = new ol.format.GeoJSON();
var features_SistCiclovirioPropostoSEINFRA2024_11 = format_SistCiclovirioPropostoSEINFRA2024_11.readFeatures(json_SistCiclovirioPropostoSEINFRA2024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistCiclovirioPropostoSEINFRA2024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistCiclovirioPropostoSEINFRA2024_11.addFeatures(features_SistCiclovirioPropostoSEINFRA2024_11);
var lyr_SistCiclovirioPropostoSEINFRA2024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistCiclovirioPropostoSEINFRA2024_11,
maxResolution:21.003349614196473,
 minResolution:0.14002233076130982,

                style: style_SistCiclovirioPropostoSEINFRA2024_11,
                popuplayertitle: "Sist. Cicloviário Proposto (SEINFRA/2024)",
                interactive: true,
    title: 'Sist. Cicloviário Proposto (SEINFRA/2024)<br />\
    <img src="styles/legend/SistCiclovirioPropostoSEINFRA2024_11_0.png" /> CICLOVIA<br />\
    <img src="styles/legend/SistCiclovirioPropostoSEINFRA2024_11_1.png" /> CICLOFAIXA<br />\
    <img src="styles/legend/SistCiclovirioPropostoSEINFRA2024_11_2.png" /> VIA COMPARTILHADA (CICLO ROTA) - CARRO E CICLISTA<br />\
    <img src="styles/legend/SistCiclovirioPropostoSEINFRA2024_11_3.png" /> SISTEMA CICLOVIARIO FUTURO<br />'
        });
var format_SistCiclovirioExistenteSEINFRA2024_12 = new ol.format.GeoJSON();
var features_SistCiclovirioExistenteSEINFRA2024_12 = format_SistCiclovirioExistenteSEINFRA2024_12.readFeatures(json_SistCiclovirioExistenteSEINFRA2024_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistCiclovirioExistenteSEINFRA2024_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistCiclovirioExistenteSEINFRA2024_12.addFeatures(features_SistCiclovirioExistenteSEINFRA2024_12);
var lyr_SistCiclovirioExistenteSEINFRA2024_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistCiclovirioExistenteSEINFRA2024_12,
maxResolution:21.003349614196473,
 minResolution:0.14002233076130982,

                style: style_SistCiclovirioExistenteSEINFRA2024_12,
                popuplayertitle: "Sist. Cicloviário Existente (SEINFRA/2024)",
                interactive: true,
    title: 'Sist. Cicloviário Existente (SEINFRA/2024)<br />\
    <img src="styles/legend/SistCiclovirioExistenteSEINFRA2024_12_0.png" /> CICLOVIA<br />\
    <img src="styles/legend/SistCiclovirioExistenteSEINFRA2024_12_1.png" /> CICLOFAIXA<br />'
        });
var format_ParaciclosSTT2024_13 = new ol.format.GeoJSON();
var features_ParaciclosSTT2024_13 = format_ParaciclosSTT2024_13.readFeatures(json_ParaciclosSTT2024_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParaciclosSTT2024_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParaciclosSTT2024_13.addFeatures(features_ParaciclosSTT2024_13);
var lyr_ParaciclosSTT2024_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParaciclosSTT2024_13,
maxResolution:8.401339845678589,
 minResolution:0.14002233076130982,

                style: style_ParaciclosSTT2024_13,
                popuplayertitle: "Paraciclos (STT/2024)",
                interactive: true,
    title: 'Paraciclos (STT/2024)<br />\
    <img src="styles/legend/ParaciclosSTT2024_13_0.png" /> 54 IMPLANTADOS<br />\
    <img src="styles/legend/ParaciclosSTT2024_13_1.png" /> A EXECUTAR<br />\
    <img src="styles/legend/ParaciclosSTT2024_13_2.png" /> A EXECUTAR PLANO<br />'
        });
var format_BICICLETARIO_PLANO_CICLOVIARIO_14 = new ol.format.GeoJSON();
var features_BICICLETARIO_PLANO_CICLOVIARIO_14 = format_BICICLETARIO_PLANO_CICLOVIARIO_14.readFeatures(json_BICICLETARIO_PLANO_CICLOVIARIO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BICICLETARIO_PLANO_CICLOVIARIO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BICICLETARIO_PLANO_CICLOVIARIO_14.addFeatures(features_BICICLETARIO_PLANO_CICLOVIARIO_14);
var lyr_BICICLETARIO_PLANO_CICLOVIARIO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BICICLETARIO_PLANO_CICLOVIARIO_14,
maxResolution:35.00558269032745,
 minResolution:0.14002233076130982,

                style: style_BICICLETARIO_PLANO_CICLOVIARIO_14,
                popuplayertitle: "BICICLETARIO_PLANO_CICLOVIARIO",
                interactive: true,
                title: '<img src="styles/legend/BICICLETARIO_PLANO_CICLOVIARIO_14.png" /> BICICLETARIO_PLANO_CICLOVIARIO'
            });
var format_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15 = new ol.format.GeoJSON();
var features_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15 = format_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15.readFeatures(json_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15.addFeatures(features_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15);
var lyr_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15,
maxResolution:42.00669922839295,
 minResolution:0.14002233076130982,

                style: style_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15,
                popuplayertitle: "ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO",
                interactive: true,
                title: '<img src="styles/legend/ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15.png" /> ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO'
            });
var format_LinhaseItinerrios_nibusSTTJun2023_16 = new ol.format.GeoJSON();
var features_LinhaseItinerrios_nibusSTTJun2023_16 = format_LinhaseItinerrios_nibusSTTJun2023_16.readFeatures(json_LinhaseItinerrios_nibusSTTJun2023_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhaseItinerrios_nibusSTTJun2023_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhaseItinerrios_nibusSTTJun2023_16.addFeatures(features_LinhaseItinerrios_nibusSTTJun2023_16);
var lyr_LinhaseItinerrios_nibusSTTJun2023_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinhaseItinerrios_nibusSTTJun2023_16,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_LinhaseItinerrios_nibusSTTJun2023_16,
                popuplayertitle: "Linhas e Itinerários_Ònibus (STT/Jun.2023)",
                interactive: true,
                title: '<img src="styles/legend/LinhaseItinerrios_nibusSTTJun2023_16.png" /> Linhas e Itinerários_Ònibus (STT/Jun.2023)'
            });
var format_PontosdeParada_ORLASTT2023_17 = new ol.format.GeoJSON();
var features_PontosdeParada_ORLASTT2023_17 = format_PontosdeParada_ORLASTT2023_17.readFeatures(json_PontosdeParada_ORLASTT2023_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeParada_ORLASTT2023_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeParada_ORLASTT2023_17.addFeatures(features_PontosdeParada_ORLASTT2023_17);
var lyr_PontosdeParada_ORLASTT2023_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosdeParada_ORLASTT2023_17,
maxResolution:7.00111653806549,
 minResolution:0.14002233076130982,

                style: style_PontosdeParada_ORLASTT2023_17,
                popuplayertitle: "Pontos de Parada_ORLA (STT/2023)",
                interactive: true,
                title: '<img src="styles/legend/PontosdeParada_ORLASTT2023_17.png" /> Pontos de Parada_ORLA (STT/2023)'
            });
var format_PontosdeParada_SEDESTT2023_18 = new ol.format.GeoJSON();
var features_PontosdeParada_SEDESTT2023_18 = format_PontosdeParada_SEDESTT2023_18.readFeatures(json_PontosdeParada_SEDESTT2023_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeParada_SEDESTT2023_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeParada_SEDESTT2023_18.addFeatures(features_PontosdeParada_SEDESTT2023_18);
var lyr_PontosdeParada_SEDESTT2023_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosdeParada_SEDESTT2023_18,
maxResolution:7.00111653806549,
 minResolution:0.14002233076130982,

                style: style_PontosdeParada_SEDESTT2023_18,
                popuplayertitle: "Pontos de Parada_SEDE (STT/2023)",
                interactive: true,
                title: '<img src="styles/legend/PontosdeParada_SEDESTT2023_18.png" /> Pontos de Parada_SEDE (STT/2023)'
            });
var format_PassarelasemRodovias_19 = new ol.format.GeoJSON();
var features_PassarelasemRodovias_19 = format_PassarelasemRodovias_19.readFeatures(json_PassarelasemRodovias_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PassarelasemRodovias_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PassarelasemRodovias_19.addFeatures(features_PassarelasemRodovias_19);
var lyr_PassarelasemRodovias_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PassarelasemRodovias_19,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_PassarelasemRodovias_19,
                popuplayertitle: "Passarelas em Rodovias",
                interactive: true,
                title: '<img src="styles/legend/PassarelasemRodovias_19.png" /> Passarelas em Rodovias'
            });
var format_Paradasdenibusemrodovias2022_20 = new ol.format.GeoJSON();
var features_Paradasdenibusemrodovias2022_20 = format_Paradasdenibusemrodovias2022_20.readFeatures(json_Paradasdenibusemrodovias2022_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradasdenibusemrodovias2022_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradasdenibusemrodovias2022_20.addFeatures(features_Paradasdenibusemrodovias2022_20);
var lyr_Paradasdenibusemrodovias2022_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradasdenibusemrodovias2022_20,
maxResolution:14.00223307613098,
 minResolution:0.14002233076130982,

                style: style_Paradasdenibusemrodovias2022_20,
                popuplayertitle: "Paradas de ônibus em rodovias (2022)",
                interactive: true,
                title: '<img src="styles/legend/Paradasdenibusemrodovias2022_20.png" /> Paradas de ônibus em rodovias (2022)'
            });
var format_PraasdePedgiorodestaduais_21 = new ol.format.GeoJSON();
var features_PraasdePedgiorodestaduais_21 = format_PraasdePedgiorodestaduais_21.readFeatures(json_PraasdePedgiorodestaduais_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PraasdePedgiorodestaduais_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PraasdePedgiorodestaduais_21.addFeatures(features_PraasdePedgiorodestaduais_21);
var lyr_PraasdePedgiorodestaduais_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PraasdePedgiorodestaduais_21,
maxResolution:56.00893230452392,
 minResolution:0.28004466152261964,

                style: style_PraasdePedgiorodestaduais_21,
                popuplayertitle: "Praças de Pedágio (rod. estaduais)",
                interactive: true,
                title: '<img src="styles/legend/PraasdePedgiorodestaduais_21.png" /> Praças de Pedágio (rod. estaduais)'
            });
var format_Localidadesdiversas2023_22 = new ol.format.GeoJSON();
var features_Localidadesdiversas2023_22 = format_Localidadesdiversas2023_22.readFeatures(json_Localidadesdiversas2023_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidadesdiversas2023_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidadesdiversas2023_22.addFeatures(features_Localidadesdiversas2023_22);
var lyr_Localidadesdiversas2023_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidadesdiversas2023_22,
maxResolution:28.00446615226196,
 minResolution:0.5600893230452393,

                style: style_Localidadesdiversas2023_22,
                popuplayertitle: "Localidades diversas (2023)",
                interactive: true,
                title: '<img src="styles/legend/Localidadesdiversas2023_22.png" /> Localidades diversas (2023)'
            });
var format_Bairros2022vigente_23 = new ol.format.GeoJSON();
var features_Bairros2022vigente_23 = format_Bairros2022vigente_23.readFeatures(json_Bairros2022vigente_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros2022vigente_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros2022vigente_23.addFeatures(features_Bairros2022vigente_23);
var lyr_Bairros2022vigente_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros2022vigente_23,
maxResolution:70.0111653806549,
 minResolution:1.4002233076130983,

                style: style_Bairros2022vigente_23,
                popuplayertitle: "Bairros 2022 (vigente)",
                interactive: true,
                title: '<img src="styles/legend/Bairros2022vigente_23.png" /> Bairros 2022 (vigente)'
            });
var format_DistritosMunicipais2020_24 = new ol.format.GeoJSON();
var features_DistritosMunicipais2020_24 = format_DistritosMunicipais2020_24.readFeatures(json_DistritosMunicipais2020_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosMunicipais2020_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosMunicipais2020_24.addFeatures(features_DistritosMunicipais2020_24);
var lyr_DistritosMunicipais2020_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosMunicipais2020_24,
maxResolution:140.0223307613098,
 minResolution:2.8004466152261966,

                style: style_DistritosMunicipais2020_24,
                popuplayertitle: "Distritos Municipais (2020)",
                interactive: true,
                title: '<img src="styles/legend/DistritosMunicipais2020_24.png" /> Distritos Municipais (2020)'
            });
var format_LimitesMunicpiosRMS2020_25 = new ol.format.GeoJSON();
var features_LimitesMunicpiosRMS2020_25 = format_LimitesMunicpiosRMS2020_25.readFeatures(json_LimitesMunicpiosRMS2020_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesMunicpiosRMS2020_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesMunicpiosRMS2020_25.addFeatures(features_LimitesMunicpiosRMS2020_25);
var lyr_LimitesMunicpiosRMS2020_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesMunicpiosRMS2020_25, 
                style: style_LimitesMunicpiosRMS2020_25,
                popuplayertitle: "Limites Municípios/RMS (2020)",
                interactive: true,
                title: '<img src="styles/legend/LimitesMunicpiosRMS2020_25.png" /> Limites Municípios/RMS (2020)'
            });

lyr_OpenTopoMap_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_WazeWorld_2.setVisible(true);lyr_GoogleSatlite_3.setVisible(true);lyr_Ortofoto2022SEFAZPMC_4.setVisible(false);lyr_Ortofoto2017SEFAZPMC_5.setVisible(false);lyr_GoogleTraffic_6.setVisible(false);lyr_GoogleLabels_7.setVisible(false);lyr_EsriBoundariesandPlaces_8.setVisible(true);lyr_LogradourosOficializadoseouCepeados_9.setVisible(false);lyr_EixosRodEstSEINFRABa2021_10.setVisible(false);lyr_SistCiclovirioPropostoSEINFRA2024_11.setVisible(true);lyr_SistCiclovirioExistenteSEINFRA2024_12.setVisible(true);lyr_ParaciclosSTT2024_13.setVisible(true);lyr_BICICLETARIO_PLANO_CICLOVIARIO_14.setVisible(true);lyr_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15.setVisible(true);lyr_LinhaseItinerrios_nibusSTTJun2023_16.setVisible(false);lyr_PontosdeParada_ORLASTT2023_17.setVisible(true);lyr_PontosdeParada_SEDESTT2023_18.setVisible(true);lyr_PassarelasemRodovias_19.setVisible(true);lyr_Paradasdenibusemrodovias2022_20.setVisible(true);lyr_PraasdePedgiorodestaduais_21.setVisible(true);lyr_Localidadesdiversas2023_22.setVisible(true);lyr_Bairros2022vigente_23.setVisible(false);lyr_DistritosMunicipais2020_24.setVisible(false);lyr_LimitesMunicpiosRMS2020_25.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_OSMStandard_1,lyr_WazeWorld_2,lyr_GoogleSatlite_3,lyr_Ortofoto2022SEFAZPMC_4,lyr_Ortofoto2017SEFAZPMC_5,lyr_GoogleTraffic_6,lyr_GoogleLabels_7,lyr_EsriBoundariesandPlaces_8,lyr_LogradourosOficializadoseouCepeados_9,lyr_EixosRodEstSEINFRABa2021_10,lyr_SistCiclovirioPropostoSEINFRA2024_11,lyr_SistCiclovirioExistenteSEINFRA2024_12,lyr_ParaciclosSTT2024_13,lyr_BICICLETARIO_PLANO_CICLOVIARIO_14,lyr_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15,lyr_LinhaseItinerrios_nibusSTTJun2023_16,lyr_PontosdeParada_ORLASTT2023_17,lyr_PontosdeParada_SEDESTT2023_18,lyr_PassarelasemRodovias_19,lyr_Paradasdenibusemrodovias2022_20,lyr_PraasdePedgiorodestaduais_21,lyr_Localidadesdiversas2023_22,lyr_Bairros2022vigente_23,lyr_DistritosMunicipais2020_24,lyr_LimitesMunicpiosRMS2020_25];
lyr_LogradourosOficializadoseouCepeados_9.set('fieldAliases', {'id': 'id', 'codlog_': 'codlog_', 'logradour_': 'logradour_', 'parcelame_': 'parcelame_', 'bairro_': 'bairro_', 'distrito_': 'distrito_', 'cep_': 'cep_', 'obs_1': 'obs_1', 'obs_2': 'obs_2', 'webmap': 'webmap', 'compriment': 'compriment', 'CORREIOS': 'CORREIOS', });
lyr_EixosRodEstSEINFRABa2021_10.set('fieldAliases', {'Name': 'Name', 'fid': 'fid', 'Codigo SRE': 'Codigo SRE', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Local Iní': 'Local Iní', 'Km Inicial': 'Km Inicial', 'Km Final': 'Km Final', 'Extensão': 'Extensão', 'Situação': 'Situação', 'Descriçã': 'Descriçã', 'Tipo de Re': 'Tipo de Re', 'Descriç_1': 'Descriç_1', 'Coincide_3': 'Coincide_3', 'Identifica': 'Identifica', 'Extensã_1': 'Extensã_1', 'Status': 'Status', });
lyr_SistCiclovirioPropostoSEINFRA2024_11.set('fieldAliases', {'PRIORIDADE': 'PRIORIDADE', 'CARACTERIZ': 'CARACTERIZ', 'OBS': 'OBS', 'Logradouro': 'Logradouro', 'PERIM(M)': 'PERIM(M)', });
lyr_SistCiclovirioExistenteSEINFRA2024_12.set('fieldAliases', {'CARACTERIZ': 'CARACTERIZ', 'LOCALIZACA': 'LOCALIZACA', 'Logradouro': 'Logradouro', 'PERIM(KM)': 'PERIM(KM)', 'OBS': 'OBS', });
lyr_ParaciclosSTT2024_13.set('fieldAliases', {'id': 'id', 'PtBiciclet': 'PtBiciclet', 'Bairro': 'Bairro', 'Rua': 'Rua', 'LOCAL': 'LOCAL', 'QUANT ESTI': 'QUANT ESTI', 'QUANT INST': 'QUANT INST', 'COD PARACI': 'COD PARACI', 'SITUACAO': 'SITUACAO', 'COD SITUAC': 'COD SITUAC', });
lyr_BICICLETARIO_PLANO_CICLOVIARIO_14.set('fieldAliases', {'id': 'id', 'LOCAL': 'LOCAL', });
lyr_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15.set('fieldAliases', {'id': 'id', 'OBS': 'OBS', });
lyr_LinhaseItinerrios_nibusSTTJun2023_16.set('fieldAliases', {'id': 'id', 'LINHA': 'LINHA', 'TRECHO': 'TRECHO', 'KM': 'KM', 'REGIAO': 'REGIAO', });
lyr_PontosdeParada_ORLASTT2023_17.set('fieldAliases', {'id': 'id', 'COD': 'COD', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'PT-_REFEN': 'PT-_REFEN', 'SINALIZACA': 'SINALIZACA', 'IMPL_ABRIG': 'IMPL_ABRIG', 'OBSERVACAO': 'OBSERVACAO', 'CONFE_2023': 'CONFE_2023', });
lyr_PontosdeParada_SEDESTT2023_18.set('fieldAliases', {'id': 'id', 'COD': 'COD', 'BAIRRO': 'BAIRRO', 'RUA': 'RUA', 'PT-_REFEN': 'PT-_REFEN', 'SINALIZACA': 'SINALIZACA', 'IMPL_ABRIG': 'IMPL_ABRIG', 'OBSERVACAO': 'OBSERVACAO', 'CONFE_2023': 'CONFE_2023', });
lyr_PassarelasemRodovias_19.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Numero': 'Numero', 'Rodovia': 'Rodovia', 'Gestao': 'Gestao', 'Bairro': 'Bairro', 'Distrito': 'Distrito', });
lyr_Paradasdenibusemrodovias2022_20.set('fieldAliases', {'id': 'id', 'name': 'name', 'via': 'via', 'bairro_loc': 'bairro_loc', 'distrito': 'distrito', 'bases': 'bases', 'org.': 'org.', });
lyr_PraasdePedgiorodestaduais_21.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Localidadesdiversas2023_22.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'bairro': 'bairro', 'distrito': 'distrito', 'base': 'base', 'fonte': 'fonte', });
lyr_Bairros2022vigente_23.set('fieldAliases', {'id': 'id', 'nm_bairro': 'nm_bairro', 'cod_bairro': 'cod_bairro', 'distrito': 'distrito', 'situação': 'situação', 'bairros': 'bairros', 'rotulos': 'rotulos', 'area_km2': 'area_km2', 'area_ha': 'area_ha', 'perimet_km': 'perimet_km', 'Est_Pop22': 'Est_Pop22', 'Densidade': 'Densidade', });
lyr_DistritosMunicipais2020_24.set('fieldAliases', {'id': 'id', 'cd_mun': 'cd_mun', 'cd_dist': 'cd_dist', 'nm_dist': 'nm_dist', 'Perímetro': 'Perímetro', 'Área': 'Área', 'percentual': 'percentual', 'cg_majorit': 'cg_majorit', 'cb_heigh': 'cb_heigh', });
lyr_LimitesMunicpiosRMS2020_25.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_LogradourosOficializadoseouCepeados_9.set('fieldImages', {'id': 'TextEdit', 'codlog_': 'TextEdit', 'logradour_': 'TextEdit', 'parcelame_': 'TextEdit', 'bairro_': 'TextEdit', 'distrito_': 'TextEdit', 'cep_': 'TextEdit', 'obs_1': 'TextEdit', 'obs_2': 'TextEdit', 'webmap': 'TextEdit', 'compriment': 'TextEdit', 'CORREIOS': 'TextEdit', });
lyr_EixosRodEstSEINFRABa2021_10.set('fieldImages', {'Name': 'TextEdit', 'fid': 'TextEdit', 'Codigo SRE': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Local Iní': 'TextEdit', 'Km Inicial': 'TextEdit', 'Km Final': 'TextEdit', 'Extensão': 'TextEdit', 'Situação': 'TextEdit', 'Descriçã': 'TextEdit', 'Tipo de Re': 'TextEdit', 'Descriç_1': 'TextEdit', 'Coincide_3': 'TextEdit', 'Identifica': 'TextEdit', 'Extensã_1': 'TextEdit', 'Status': 'TextEdit', });
lyr_SistCiclovirioPropostoSEINFRA2024_11.set('fieldImages', {'PRIORIDADE': 'TextEdit', 'CARACTERIZ': 'TextEdit', 'OBS': 'TextEdit', 'Logradouro': 'TextEdit', 'PERIM(M)': 'TextEdit', });
lyr_SistCiclovirioExistenteSEINFRA2024_12.set('fieldImages', {'CARACTERIZ': 'TextEdit', 'LOCALIZACA': 'TextEdit', 'Logradouro': 'TextEdit', 'PERIM(KM)': 'TextEdit', 'OBS': 'TextEdit', });
lyr_ParaciclosSTT2024_13.set('fieldImages', {'id': 'TextEdit', 'PtBiciclet': 'TextEdit', 'Bairro': 'TextEdit', 'Rua': 'TextEdit', 'LOCAL': 'TextEdit', 'QUANT ESTI': 'TextEdit', 'QUANT INST': 'TextEdit', 'COD PARACI': 'TextEdit', 'SITUACAO': 'TextEdit', 'COD SITUAC': 'TextEdit', });
lyr_BICICLETARIO_PLANO_CICLOVIARIO_14.set('fieldImages', {'id': 'TextEdit', 'LOCAL': 'TextEdit', });
lyr_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15.set('fieldImages', {'id': 'TextEdit', 'OBS': 'TextEdit', });
lyr_LinhaseItinerrios_nibusSTTJun2023_16.set('fieldImages', {'id': 'TextEdit', 'LINHA': 'TextEdit', 'TRECHO': 'TextEdit', 'KM': 'TextEdit', 'REGIAO': 'TextEdit', });
lyr_PontosdeParada_ORLASTT2023_17.set('fieldImages', {'id': 'TextEdit', 'COD': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'PT-_REFEN': 'TextEdit', 'SINALIZACA': 'TextEdit', 'IMPL_ABRIG': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'CONFE_2023': 'TextEdit', });
lyr_PontosdeParada_SEDESTT2023_18.set('fieldImages', {'id': 'TextEdit', 'COD': 'TextEdit', 'BAIRRO': 'TextEdit', 'RUA': 'TextEdit', 'PT-_REFEN': 'TextEdit', 'SINALIZACA': 'TextEdit', 'IMPL_ABRIG': 'TextEdit', 'OBSERVACAO': 'TextEdit', 'CONFE_2023': 'TextEdit', });
lyr_PassarelasemRodovias_19.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'Numero': 'Range', 'Rodovia': 'TextEdit', 'Gestao': 'TextEdit', 'Bairro': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_Paradasdenibusemrodovias2022_20.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'via': 'TextEdit', 'bairro_loc': 'TextEdit', 'distrito': 'TextEdit', 'bases': 'TextEdit', 'org.': 'TextEdit', });
lyr_PraasdePedgiorodestaduais_21.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Localidadesdiversas2023_22.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'bairro': 'TextEdit', 'distrito': 'TextEdit', 'base': 'TextEdit', 'fonte': 'TextEdit', });
lyr_Bairros2022vigente_23.set('fieldImages', {'id': 'TextEdit', 'nm_bairro': 'TextEdit', 'cod_bairro': 'TextEdit', 'distrito': 'TextEdit', 'situação': 'TextEdit', 'bairros': 'TextEdit', 'rotulos': 'TextEdit', 'area_km2': 'TextEdit', 'area_ha': 'TextEdit', 'perimet_km': 'TextEdit', 'Est_Pop22': 'TextEdit', 'Densidade': 'TextEdit', });
lyr_DistritosMunicipais2020_24.set('fieldImages', {'id': 'TextEdit', 'cd_mun': 'TextEdit', 'cd_dist': 'TextEdit', 'nm_dist': 'TextEdit', 'Perímetro': 'TextEdit', 'Área': 'TextEdit', 'percentual': 'TextEdit', 'cg_majorit': 'TextEdit', 'cb_heigh': 'TextEdit', });
lyr_LimitesMunicpiosRMS2020_25.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_LogradourosOficializadoseouCepeados_9.set('fieldLabels', {'id': 'hidden field', 'codlog_': 'inline label - always visible', 'logradour_': 'inline label - always visible', 'parcelame_': 'inline label - always visible', 'bairro_': 'inline label - always visible', 'distrito_': 'inline label - always visible', 'cep_': 'inline label - always visible', 'obs_1': 'inline label - always visible', 'obs_2': 'inline label - always visible', 'webmap': 'hidden field', 'compriment': 'inline label - always visible', 'CORREIOS': 'hidden field', });
lyr_EixosRodEstSEINFRABa2021_10.set('fieldLabels', {'Name': 'no label', 'fid': 'no label', 'Codigo SRE': 'no label', 'UF': 'no label', 'Rodovia': 'no label', 'Local Iní': 'no label', 'Km Inicial': 'no label', 'Km Final': 'no label', 'Extensão': 'no label', 'Situação': 'no label', 'Descriçã': 'no label', 'Tipo de Re': 'no label', 'Descriç_1': 'no label', 'Coincide_3': 'no label', 'Identifica': 'no label', 'Extensã_1': 'no label', 'Status': 'no label', });
lyr_SistCiclovirioPropostoSEINFRA2024_11.set('fieldLabels', {'PRIORIDADE': 'inline label - always visible', 'CARACTERIZ': 'inline label - always visible', 'OBS': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'PERIM(M)': 'inline label - always visible', });
lyr_SistCiclovirioExistenteSEINFRA2024_12.set('fieldLabels', {'CARACTERIZ': 'inline label - always visible', 'LOCALIZACA': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'PERIM(KM)': 'inline label - always visible', 'OBS': 'inline label - always visible', });
lyr_ParaciclosSTT2024_13.set('fieldLabels', {'id': 'no label', 'PtBiciclet': 'inline label - always visible', 'Bairro': 'inline label - always visible', 'Rua': 'inline label - always visible', 'LOCAL': 'inline label - always visible', 'QUANT ESTI': 'inline label - always visible', 'QUANT INST': 'inline label - always visible', 'COD PARACI': 'inline label - always visible', 'SITUACAO': 'inline label - always visible', 'COD SITUAC': 'inline label - always visible', });
lyr_BICICLETARIO_PLANO_CICLOVIARIO_14.set('fieldLabels', {'id': 'inline label - always visible', 'LOCAL': 'inline label - always visible', });
lyr_ESTACOES_DE_COMPARTILHAMENTO_PLANO_CICLOVIARIO_15.set('fieldLabels', {'id': 'inline label - always visible', 'OBS': 'inline label - always visible', });
lyr_LinhaseItinerrios_nibusSTTJun2023_16.set('fieldLabels', {'id': 'inline label - always visible', 'LINHA': 'inline label - always visible', 'TRECHO': 'inline label - always visible', 'KM': 'inline label - always visible', 'REGIAO': 'inline label - always visible', });
lyr_PontosdeParada_ORLASTT2023_17.set('fieldLabels', {'id': 'inline label - always visible', 'COD': 'inline label - always visible', 'BAIRRO': 'inline label - always visible', 'RUA': 'inline label - always visible', 'PT-_REFEN': 'inline label - always visible', 'SINALIZACA': 'inline label - always visible', 'IMPL_ABRIG': 'inline label - always visible', 'OBSERVACAO': 'inline label - always visible', 'CONFE_2023': 'inline label - always visible', });
lyr_PontosdeParada_SEDESTT2023_18.set('fieldLabels', {'id': 'inline label - always visible', 'COD': 'inline label - always visible', 'BAIRRO': 'inline label - always visible', 'RUA': 'inline label - always visible', 'PT-_REFEN': 'inline label - always visible', 'SINALIZACA': 'inline label - always visible', 'IMPL_ABRIG': 'inline label - always visible', 'OBSERVACAO': 'inline label - always visible', 'CONFE_2023': 'inline label - always visible', });
lyr_PassarelasemRodovias_19.set('fieldLabels', {'id': 'inline label - always visible', 'Layer': 'inline label - always visible', 'Numero': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Gestao': 'inline label - always visible', 'Bairro': 'inline label - always visible', 'Distrito': 'inline label - always visible', });
lyr_Paradasdenibusemrodovias2022_20.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'via': 'inline label - always visible', 'bairro_loc': 'inline label - always visible', 'distrito': 'inline label - always visible', 'bases': 'inline label - always visible', 'org.': 'inline label - always visible', });
lyr_PraasdePedgiorodestaduais_21.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_Localidadesdiversas2023_22.set('fieldLabels', {'id': 'inline label - always visible', 'nome': 'inline label - always visible', 'tipo': 'inline label - always visible', 'bairro': 'inline label - always visible', 'distrito': 'inline label - always visible', 'base': 'inline label - always visible', 'fonte': 'inline label - always visible', });
lyr_Bairros2022vigente_23.set('fieldLabels', {'id': 'no label', 'nm_bairro': 'inline label - always visible', 'cod_bairro': 'no label', 'distrito': 'inline label - always visible', 'situação': 'no label', 'bairros': 'no label', 'rotulos': 'no label', 'area_km2': 'inline label - always visible', 'area_ha': 'inline label - always visible', 'perimet_km': 'inline label - always visible', 'Est_Pop22': 'inline label - always visible', 'Densidade': 'inline label - always visible', });
lyr_DistritosMunicipais2020_24.set('fieldLabels', {'id': 'inline label - always visible', 'cd_mun': 'inline label - always visible', 'cd_dist': 'inline label - always visible', 'nm_dist': 'inline label - always visible', 'Perímetro': 'inline label - always visible', 'Área': 'inline label - always visible', 'percentual': 'inline label - always visible', 'cg_majorit': 'inline label - always visible', 'cb_heigh': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_25.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_LimitesMunicpiosRMS2020_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});