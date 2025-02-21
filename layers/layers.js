ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5016").setExtent([358049.745016, 3646777.898294, 393714.502430, 3671495.200195]);
var wms_layers = [];

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Informao_2 = new ol.format.GeoJSON();
var features_Informao_2 = format_Informao_2.readFeatures(json_Informao_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Informao_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informao_2.addFeatures(features_Informao_2);
var lyr_Informao_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informao_2, 
                style: style_Informao_2,
                popuplayertitle: "Informação",
                interactive: true,
                title: '<img src="styles/legend/Informao_2.png" /> Informação'
            });
var lyr_OrtofotomapaRAM_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal-irig.madeira.gov.pt/mapproxy/base/service",
    attributions: ' ',
                              params: {
                                "LAYERS": "drote_ortos2018_ortos_2018",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofotomapa RAM",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotomapaRAM_3, 0]);
var format_Acidentesgraves_4 = new ol.format.GeoJSON();
var features_Acidentesgraves_4 = format_Acidentesgraves_4.readFeatures(json_Acidentesgraves_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Acidentesgraves_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentesgraves_4.addFeatures(features_Acidentesgraves_4);
var lyr_Acidentesgraves_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acidentesgraves_4, 
                style: style_Acidentesgraves_4,
                popuplayertitle: "Acidentes graves",
                interactive: true,
                title: '<img src="styles/legend/Acidentesgraves_4.png" /> Acidentes graves'
            });
var format_Acidentesrodovirios_5 = new ol.format.GeoJSON();
var features_Acidentesrodovirios_5 = format_Acidentesrodovirios_5.readFeatures(json_Acidentesrodovirios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Acidentesrodovirios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentesrodovirios_5.addFeatures(features_Acidentesrodovirios_5);
var lyr_Acidentesrodovirios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acidentesrodovirios_5, 
                style: style_Acidentesrodovirios_5,
                popuplayertitle: "Acidentes rodoviários",
                interactive: true,
                title: '<img src="styles/legend/Acidentesrodovirios_5.png" /> Acidentes rodoviários'
            });
var format_Parquesempresariais_6 = new ol.format.GeoJSON();
var features_Parquesempresariais_6 = format_Parquesempresariais_6.readFeatures(json_Parquesempresariais_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Parquesempresariais_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parquesempresariais_6.addFeatures(features_Parquesempresariais_6);
var lyr_Parquesempresariais_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parquesempresariais_6, 
                style: style_Parquesempresariais_6,
                popuplayertitle: "Parques empresariais",
                interactive: true,
                title: '<img src="styles/legend/Parquesempresariais_6.png" /> Parques empresariais'
            });
var format_Estabelecimentosindustriais_7 = new ol.format.GeoJSON();
var features_Estabelecimentosindustriais_7 = format_Estabelecimentosindustriais_7.readFeatures(json_Estabelecimentosindustriais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Estabelecimentosindustriais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estabelecimentosindustriais_7.addFeatures(features_Estabelecimentosindustriais_7);
var lyr_Estabelecimentosindustriais_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estabelecimentosindustriais_7, 
                style: style_Estabelecimentosindustriais_7,
                popuplayertitle: "Estabelecimentos industriais",
                interactive: true,
                title: '<img src="styles/legend/Estabelecimentosindustriais_7.png" /> Estabelecimentos industriais'
            });
var format_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8 = new ol.format.GeoJSON();
var features_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8 = format_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8.readFeatures(json_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8.addFeatures(features_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8);
var lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8, 
                style: style_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8,
                popuplayertitle: "Suscetibilidade moderada à ocorrência de acidentes em estabelecimentos industriais",
                interactive: true,
                title: '<img src="styles/legend/Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8.png" /> Suscetibilidade moderada à ocorrência de acidentes em estabelecimentos industriais'
            });
var format_Localizaodospaiis_9 = new ol.format.GeoJSON();
var features_Localizaodospaiis_9 = format_Localizaodospaiis_9.readFeatures(json_Localizaodospaiis_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Localizaodospaiis_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localizaodospaiis_9.addFeatures(features_Localizaodospaiis_9);
var lyr_Localizaodospaiis_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localizaodospaiis_9, 
                style: style_Localizaodospaiis_9,
                popuplayertitle: "Localização dos paióis",
                interactive: true,
                title: '<img src="styles/legend/Localizaodospaiis_9.png" /> Localização dos paióis'
            });
var format_reasinundveis_10 = new ol.format.GeoJSON();
var features_reasinundveis_10 = format_reasinundveis_10.readFeatures(json_reasinundveis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_reasinundveis_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasinundveis_10.addFeatures(features_reasinundveis_10);
var lyr_reasinundveis_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasinundveis_10, 
                style: style_reasinundveis_10,
                popuplayertitle: "Áreas inundáveis",
                interactive: true,
                title: '<img src="styles/legend/reasinundveis_10.png" /> Áreas inundáveis'
            });
var format_Barragens_11 = new ol.format.GeoJSON();
var features_Barragens_11 = format_Barragens_11.readFeatures(json_Barragens_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Barragens_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barragens_11.addFeatures(features_Barragens_11);
var lyr_Barragens_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barragens_11, 
                style: style_Barragens_11,
                popuplayertitle: "Barragens",
                interactive: true,
                title: '<img src="styles/legend/Barragens_11.png" /> Barragens'
            });
var format_Armazenagemdecombustveis_12 = new ol.format.GeoJSON();
var features_Armazenagemdecombustveis_12 = format_Armazenagemdecombustveis_12.readFeatures(json_Armazenagemdecombustveis_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Armazenagemdecombustveis_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazenagemdecombustveis_12.addFeatures(features_Armazenagemdecombustveis_12);
var lyr_Armazenagemdecombustveis_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Armazenagemdecombustveis_12, 
                style: style_Armazenagemdecombustveis_12,
                popuplayertitle: "Armazenagem de combustíveis",
                interactive: true,
                title: '<img src="styles/legend/Armazenagemdecombustveis_12.png" /> Armazenagem de combustíveis'
            });
var format_GsdePetrleoLiquefeito_13 = new ol.format.GeoJSON();
var features_GsdePetrleoLiquefeito_13 = format_GsdePetrleoLiquefeito_13.readFeatures(json_GsdePetrleoLiquefeito_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_GsdePetrleoLiquefeito_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GsdePetrleoLiquefeito_13.addFeatures(features_GsdePetrleoLiquefeito_13);
var lyr_GsdePetrleoLiquefeito_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GsdePetrleoLiquefeito_13, 
                style: style_GsdePetrleoLiquefeito_13,
                popuplayertitle: "Gás de Petróleo Liquefeito",
                interactive: true,
                title: '<img src="styles/legend/GsdePetrleoLiquefeito_13.png" /> Gás de Petróleo Liquefeito'
            });
var format_Classesdesuscetibilidade_14 = new ol.format.GeoJSON();
var features_Classesdesuscetibilidade_14 = format_Classesdesuscetibilidade_14.readFeatures(json_Classesdesuscetibilidade_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Classesdesuscetibilidade_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Classesdesuscetibilidade_14.addFeatures(features_Classesdesuscetibilidade_14);
var lyr_Classesdesuscetibilidade_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Classesdesuscetibilidade_14, 
                style: style_Classesdesuscetibilidade_14,
                popuplayertitle: "Classes de suscetibilidade",
                interactive: true,
    title: 'Classes de suscetibilidade<br />\
    <img src="styles/legend/Classesdesuscetibilidade_14_0.png" /> Moderado (Diâmetro de 200m)<br />\
    <img src="styles/legend/Classesdesuscetibilidade_14_1.png" /> Elevado (Diâmetro de 40m)<br />'
        });
var format_UnidadedeRadioterapiadoFunchal_15 = new ol.format.GeoJSON();
var features_UnidadedeRadioterapiadoFunchal_15 = format_UnidadedeRadioterapiadoFunchal_15.readFeatures(json_UnidadedeRadioterapiadoFunchal_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_UnidadedeRadioterapiadoFunchal_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeRadioterapiadoFunchal_15.addFeatures(features_UnidadedeRadioterapiadoFunchal_15);
var lyr_UnidadedeRadioterapiadoFunchal_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeRadioterapiadoFunchal_15, 
                style: style_UnidadedeRadioterapiadoFunchal_15,
                popuplayertitle: "Unidade de Radioterapia do Funchal",
                interactive: true,
                title: '<img src="styles/legend/UnidadedeRadioterapiadoFunchal_15.png" /> Unidade de Radioterapia do Funchal'
            });
var format_PortoMartimodoPortoSanto_16 = new ol.format.GeoJSON();
var features_PortoMartimodoPortoSanto_16 = format_PortoMartimodoPortoSanto_16.readFeatures(json_PortoMartimodoPortoSanto_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_PortoMartimodoPortoSanto_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortoMartimodoPortoSanto_16.addFeatures(features_PortoMartimodoPortoSanto_16);
var lyr_PortoMartimodoPortoSanto_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortoMartimodoPortoSanto_16, 
                style: style_PortoMartimodoPortoSanto_16,
                popuplayertitle: "Porto Marítimo do Porto Santo",
                interactive: true,
                title: '<img src="styles/legend/PortoMartimodoPortoSanto_16.png" /> Porto Marítimo do Porto Santo'
            });
var format_PortoMartimodoFunchal_17 = new ol.format.GeoJSON();
var features_PortoMartimodoFunchal_17 = format_PortoMartimodoFunchal_17.readFeatures(json_PortoMartimodoFunchal_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_PortoMartimodoFunchal_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortoMartimodoFunchal_17.addFeatures(features_PortoMartimodoFunchal_17);
var lyr_PortoMartimodoFunchal_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortoMartimodoFunchal_17, 
                style: style_PortoMartimodoFunchal_17,
                popuplayertitle: "Porto Marítimo do Funchal",
                interactive: true,
                title: '<img src="styles/legend/PortoMartimodoFunchal_17.png" /> Porto Marítimo do Funchal'
            });
var format_PortoMartimodoCanial_18 = new ol.format.GeoJSON();
var features_PortoMartimodoCanial_18 = format_PortoMartimodoCanial_18.readFeatures(json_PortoMartimodoCanial_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_PortoMartimodoCanial_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortoMartimodoCanial_18.addFeatures(features_PortoMartimodoCanial_18);
var lyr_PortoMartimodoCanial_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortoMartimodoCanial_18, 
                style: style_PortoMartimodoCanial_18,
                popuplayertitle: "Porto Marítimo do Caniçal",
                interactive: true,
                title: '<img src="styles/legend/PortoMartimodoCanial_18.png" /> Porto Marítimo do Caniçal'
            });
var format_MadeiraMedicalCenter_19 = new ol.format.GeoJSON();
var features_MadeiraMedicalCenter_19 = format_MadeiraMedicalCenter_19.readFeatures(json_MadeiraMedicalCenter_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_MadeiraMedicalCenter_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MadeiraMedicalCenter_19.addFeatures(features_MadeiraMedicalCenter_19);
var lyr_MadeiraMedicalCenter_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MadeiraMedicalCenter_19, 
                style: style_MadeiraMedicalCenter_19,
                popuplayertitle: "Madeira Medical Center",
                interactive: true,
                title: '<img src="styles/legend/MadeiraMedicalCenter_19.png" /> Madeira Medical Center'
            });
var format_HospitalParticulardaMadeira_20 = new ol.format.GeoJSON();
var features_HospitalParticulardaMadeira_20 = format_HospitalParticulardaMadeira_20.readFeatures(json_HospitalParticulardaMadeira_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_HospitalParticulardaMadeira_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalParticulardaMadeira_20.addFeatures(features_HospitalParticulardaMadeira_20);
var lyr_HospitalParticulardaMadeira_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HospitalParticulardaMadeira_20, 
                style: style_HospitalParticulardaMadeira_20,
                popuplayertitle: "Hospital Particular da Madeira",
                interactive: true,
                title: '<img src="styles/legend/HospitalParticulardaMadeira_20.png" /> Hospital Particular da Madeira'
            });
var format_HospitalDrNelioMendona_21 = new ol.format.GeoJSON();
var features_HospitalDrNelioMendona_21 = format_HospitalDrNelioMendona_21.readFeatures(json_HospitalDrNelioMendona_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_HospitalDrNelioMendona_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalDrNelioMendona_21.addFeatures(features_HospitalDrNelioMendona_21);
var lyr_HospitalDrNelioMendona_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HospitalDrNelioMendona_21, 
                style: style_HospitalDrNelioMendona_21,
                popuplayertitle: "Hospital Dr. Nelio Mendonça",
                interactive: true,
                title: '<img src="styles/legend/HospitalDrNelioMendona_21.png" /> Hospital Dr. Nelio Mendonça'
            });
var format_HospitaldaLuz_22 = new ol.format.GeoJSON();
var features_HospitaldaLuz_22 = format_HospitaldaLuz_22.readFeatures(json_HospitaldaLuz_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_HospitaldaLuz_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitaldaLuz_22.addFeatures(features_HospitaldaLuz_22);
var lyr_HospitaldaLuz_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HospitaldaLuz_22, 
                style: style_HospitaldaLuz_22,
                popuplayertitle: "Hospital da Luz",
                interactive: true,
                title: '<img src="styles/legend/HospitaldaLuz_22.png" /> Hospital da Luz'
            });
var format_CentroRadiologicodoFunchal_23 = new ol.format.GeoJSON();
var features_CentroRadiologicodoFunchal_23 = format_CentroRadiologicodoFunchal_23.readFeatures(json_CentroRadiologicodoFunchal_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_CentroRadiologicodoFunchal_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentroRadiologicodoFunchal_23.addFeatures(features_CentroRadiologicodoFunchal_23);
var lyr_CentroRadiologicodoFunchal_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentroRadiologicodoFunchal_23, 
                style: style_CentroRadiologicodoFunchal_23,
                popuplayertitle: "Centro Radiologico do Funchal",
                interactive: true,
                title: '<img src="styles/legend/CentroRadiologicodoFunchal_23.png" /> Centro Radiologico do Funchal'
            });
var format_AeroportodoPortoSanto_24 = new ol.format.GeoJSON();
var features_AeroportodoPortoSanto_24 = format_AeroportodoPortoSanto_24.readFeatures(json_AeroportodoPortoSanto_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_AeroportodoPortoSanto_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroportodoPortoSanto_24.addFeatures(features_AeroportodoPortoSanto_24);
var lyr_AeroportodoPortoSanto_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeroportodoPortoSanto_24, 
                style: style_AeroportodoPortoSanto_24,
                popuplayertitle: "Aeroporto do Porto Santo",
                interactive: true,
                title: '<img src="styles/legend/AeroportodoPortoSanto_24.png" /> Aeroporto do Porto Santo'
            });
var format_AeroportodaMadeira_25 = new ol.format.GeoJSON();
var features_AeroportodaMadeira_25 = format_AeroportodaMadeira_25.readFeatures(json_AeroportodaMadeira_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_AeroportodaMadeira_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroportodaMadeira_25.addFeatures(features_AeroportodaMadeira_25);
var lyr_AeroportodaMadeira_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AeroportodaMadeira_25, 
                style: style_AeroportodaMadeira_25,
                popuplayertitle: "Aeroporto da Madeira",
                interactive: true,
                title: '<img src="styles/legend/AeroportodaMadeira_25.png" /> Aeroporto da Madeira'
            });
var format_Tneis_26 = new ol.format.GeoJSON();
var features_Tneis_26 = format_Tneis_26.readFeatures(json_Tneis_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Tneis_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tneis_26.addFeatures(features_Tneis_26);
var lyr_Tneis_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tneis_26, 
                style: style_Tneis_26,
                popuplayertitle: "Túneis",
                interactive: true,
                title: '<img src="styles/legend/Tneis_26.png" /> Túneis'
            });
var format_Ponteseviadutos_27 = new ol.format.GeoJSON();
var features_Ponteseviadutos_27 = format_Ponteseviadutos_27.readFeatures(json_Ponteseviadutos_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Ponteseviadutos_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponteseviadutos_27.addFeatures(features_Ponteseviadutos_27);
var lyr_Ponteseviadutos_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ponteseviadutos_27, 
                style: style_Ponteseviadutos_27,
                popuplayertitle: "Pontes e viadutos",
                interactive: true,
                title: '<img src="styles/legend/Ponteseviadutos_27.png" /> Pontes e viadutos'
            });
var format_Outrostrajetos_28 = new ol.format.GeoJSON();
var features_Outrostrajetos_28 = format_Outrostrajetos_28.readFeatures(json_Outrostrajetos_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Outrostrajetos_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outrostrajetos_28.addFeatures(features_Outrostrajetos_28);
var lyr_Outrostrajetos_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outrostrajetos_28, 
                style: style_Outrostrajetos_28,
                popuplayertitle: "Outros trajetos",
                interactive: true,
                title: '<img src="styles/legend/Outrostrajetos_28.png" /> Outros trajetos'
            });
var format_TrajetoZonaFrancaUAG_29 = new ol.format.GeoJSON();
var features_TrajetoZonaFrancaUAG_29 = format_TrajetoZonaFrancaUAG_29.readFeatures(json_TrajetoZonaFrancaUAG_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_TrajetoZonaFrancaUAG_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrajetoZonaFrancaUAG_29.addFeatures(features_TrajetoZonaFrancaUAG_29);
var lyr_TrajetoZonaFrancaUAG_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrajetoZonaFrancaUAG_29, 
                style: style_TrajetoZonaFrancaUAG_29,
                popuplayertitle: "Trajeto Zona Franca - UAG",
                interactive: true,
                title: '<img src="styles/legend/TrajetoZonaFrancaUAG_29.png" /> Trajeto Zona Franca - UAG'
            });
var format_FurnasdoCavalum_30 = new ol.format.GeoJSON();
var features_FurnasdoCavalum_30 = format_FurnasdoCavalum_30.readFeatures(json_FurnasdoCavalum_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_FurnasdoCavalum_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FurnasdoCavalum_30.addFeatures(features_FurnasdoCavalum_30);
var lyr_FurnasdoCavalum_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FurnasdoCavalum_30, 
                style: style_FurnasdoCavalum_30,
                popuplayertitle: "Furnas do Cavalum",
                interactive: true,
                title: '<img src="styles/legend/FurnasdoCavalum_30.png" /> Furnas do Cavalum'
            });
var format_GrutasdeSoVicente_31 = new ol.format.GeoJSON();
var features_GrutasdeSoVicente_31 = format_GrutasdeSoVicente_31.readFeatures(json_GrutasdeSoVicente_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_GrutasdeSoVicente_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrutasdeSoVicente_31.addFeatures(features_GrutasdeSoVicente_31);
var lyr_GrutasdeSoVicente_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrutasdeSoVicente_31, 
                style: style_GrutasdeSoVicente_31,
                popuplayertitle: "Grutas de São Vicente",
                interactive: true,
                title: '<img src="styles/legend/GrutasdeSoVicente_31.png" /> Grutas de São Vicente'
            });
var format_Suscetibilidadeaoriscodeincndiosflorestais_32 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodeincndiosflorestais_32 = format_Suscetibilidadeaoriscodeincndiosflorestais_32.readFeatures(json_Suscetibilidadeaoriscodeincndiosflorestais_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodeincndiosflorestais_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodeincndiosflorestais_32.addFeatures(features_Suscetibilidadeaoriscodeincndiosflorestais_32);
var lyr_Suscetibilidadeaoriscodeincndiosflorestais_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaoriscodeincndiosflorestais_32, 
                style: style_Suscetibilidadeaoriscodeincndiosflorestais_32,
                popuplayertitle: "Suscetibilidade ao risco de incêndios florestais",
                interactive: true,
    title: 'Suscetibilidade ao risco de incêndios florestais<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_32_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_32_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_32_2.png" /> Elevada<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_32_3.png" /> Nula ou Não Aplicável<br />'
        });
var format_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33 = new ol.format.GeoJSON();
var features_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33 = format_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33.readFeatures(json_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33.addFeatures(features_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33);
var lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33, 
                style: style_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33,
                popuplayertitle: "Suscetibilidade a Incêndios e colapsos em centros históricos e em edifícios com elevada concentração populacional",
                interactive: true,
    title: 'Suscetibilidade a Incêndios e colapsos em centros históricos e em edifícios com elevada concentração populacional<br />\
    <img src="styles/legend/SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33_0.png" /> Baixa<br />\
    <img src="styles/legend/SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33_1.png" /> Moderada<br />\
    <img src="styles/legend/SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33_2.png" /> Elevada<br />'
        });
var format_Ocorrnciadeincndiosemtneis_34 = new ol.format.GeoJSON();
var features_Ocorrnciadeincndiosemtneis_34 = format_Ocorrnciadeincndiosemtneis_34.readFeatures(json_Ocorrnciadeincndiosemtneis_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Ocorrnciadeincndiosemtneis_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrnciadeincndiosemtneis_34.addFeatures(features_Ocorrnciadeincndiosemtneis_34);
var lyr_Ocorrnciadeincndiosemtneis_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocorrnciadeincndiosemtneis_34, 
                style: style_Ocorrnciadeincndiosemtneis_34,
                popuplayertitle: "Ocorrência de incêndios em túneis",
                interactive: true,
                title: '<img src="styles/legend/Ocorrnciadeincndiosemtneis_34.png" /> Ocorrência de incêndios em túneis'
            });
var format_Suscetibilidadeaincndiosemtneis_35 = new ol.format.GeoJSON();
var features_Suscetibilidadeaincndiosemtneis_35 = format_Suscetibilidadeaincndiosemtneis_35.readFeatures(json_Suscetibilidadeaincndiosemtneis_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaincndiosemtneis_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaincndiosemtneis_35.addFeatures(features_Suscetibilidadeaincndiosemtneis_35);
var lyr_Suscetibilidadeaincndiosemtneis_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaincndiosemtneis_35, 
                style: style_Suscetibilidadeaincndiosemtneis_35,
                popuplayertitle: "Suscetibilidade a incêndios em túneis",
                interactive: true,
    title: 'Suscetibilidade a incêndios em túneis<br />\
    <img src="styles/legend/Suscetibilidadeaincndiosemtneis_35_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeaincndiosemtneis_35_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaincndiosemtneis_35_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36 = new ol.format.GeoJSON();
var features_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36 = format_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36.readFeatures(json_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36.addFeatures(features_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36);
var lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36, 
                style: style_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36,
                popuplayertitle: "Suscetibilidade à ocorrencia de acidentes com substâncias biológicas, químicas e radiológicas",
                interactive: true,
    title: 'Suscetibilidade à ocorrencia de acidentes com substâncias biológicas, químicas e radiológicas<br />\
    <img src="styles/legend/Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36_2.png" /> Elevada<br />'
        });
var format_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37 = new ol.format.GeoJSON();
var features_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37 = format_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37.readFeatures(json_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37.addFeatures(features_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37);
var lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37, 
                style: style_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37,
                popuplayertitle: "Suscetibilidade a acidentes que envolvam substâncias perigosas (Seveso III)",
                interactive: true,
    title: 'Suscetibilidade a acidentes que envolvam substâncias perigosas (Seveso III)<br />\
    <img src="styles/legend/SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37_0.png" /> Reduzida<br />\
    <img src="styles/legend/SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37_1.png" /> Moderada<br />\
    <img src="styles/legend/SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeaerosocosteiranabasedaarriba_38 = new ol.format.GeoJSON();
var features_Suscetibilidadeaerosocosteiranabasedaarriba_38 = format_Suscetibilidadeaerosocosteiranabasedaarriba_38.readFeatures(json_Suscetibilidadeaerosocosteiranabasedaarriba_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaerosocosteiranabasedaarriba_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaerosocosteiranabasedaarriba_38.addFeatures(features_Suscetibilidadeaerosocosteiranabasedaarriba_38);
var lyr_Suscetibilidadeaerosocosteiranabasedaarriba_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaerosocosteiranabasedaarriba_38, 
                style: style_Suscetibilidadeaerosocosteiranabasedaarriba_38,
                popuplayertitle: "Suscetibilidade a erosão costeira na base da arriba",
                interactive: true,
    title: 'Suscetibilidade a erosão costeira na base da arriba<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_38_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_38_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_38_2.png" /> Elevada<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_38_3.png" /> Estrutura<br />'
        });
var format_Suscetibilidadeaerosocosteiraemarribas_39 = new ol.format.GeoJSON();
var features_Suscetibilidadeaerosocosteiraemarribas_39 = format_Suscetibilidadeaerosocosteiraemarribas_39.readFeatures(json_Suscetibilidadeaerosocosteiraemarribas_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaerosocosteiraemarribas_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaerosocosteiraemarribas_39.addFeatures(features_Suscetibilidadeaerosocosteiraemarribas_39);
var lyr_Suscetibilidadeaerosocosteiraemarribas_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaerosocosteiraemarribas_39, 
                style: style_Suscetibilidadeaerosocosteiraemarribas_39,
                popuplayertitle: "Suscetibilidade a erosão costeira em arribas",
                interactive: true,
    title: 'Suscetibilidade a erosão costeira em arribas<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiraemarribas_39_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiraemarribas_39_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiraemarribas_39_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeamovimentosdemassaemvertente_40 = new ol.format.GeoJSON();
var features_Suscetibilidadeamovimentosdemassaemvertente_40 = format_Suscetibilidadeamovimentosdemassaemvertente_40.readFeatures(json_Suscetibilidadeamovimentosdemassaemvertente_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeamovimentosdemassaemvertente_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeamovimentosdemassaemvertente_40.addFeatures(features_Suscetibilidadeamovimentosdemassaemvertente_40);
var lyr_Suscetibilidadeamovimentosdemassaemvertente_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeamovimentosdemassaemvertente_40, 
                style: style_Suscetibilidadeamovimentosdemassaemvertente_40,
                popuplayertitle: "Suscetibilidade a movimentos de massa em vertente",
                interactive: true,
    title: 'Suscetibilidade a movimentos de massa em vertente<br />\
    <img src="styles/legend/Suscetibilidadeamovimentosdemassaemvertente_40_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeamovimentosdemassaemvertente_40_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeamovimentosdemassaemvertente_40_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeaoriscodenevoeiros_41 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodenevoeiros_41 = format_Suscetibilidadeaoriscodenevoeiros_41.readFeatures(json_Suscetibilidadeaoriscodenevoeiros_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodenevoeiros_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodenevoeiros_41.addFeatures(features_Suscetibilidadeaoriscodenevoeiros_41);
var lyr_Suscetibilidadeaoriscodenevoeiros_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaoriscodenevoeiros_41, 
                style: style_Suscetibilidadeaoriscodenevoeiros_41,
                popuplayertitle: "Suscetibilidade ao risco de nevoeiros",
                interactive: true,
    title: 'Suscetibilidade ao risco de nevoeiros<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodenevoeiros_41_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodenevoeiros_41_1.png" /> Elevada<br />'
        });
var format_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42 = new ol.format.GeoJSON();
var features_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42 = format_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42.readFeatures(json_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42.addFeatures(features_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42);
var lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42, 
                style: style_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42,
                popuplayertitle: "Sismos com magnitude superior a 2,0 (escala de Richter) registados desde 2010",
                interactive: true,
    title: 'Sismos com magnitude superior a 2,0 (escala de Richter) registados desde 2010<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42_0.png" /> 2,1 - 2,5<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42_1.png" /> 2,5 - 3<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42_2.png" /> 3 - 3,5<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42_3.png" /> 3,5 - 4<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42_4.png" /> 4 - 4,5<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42_5.png" /> 4,5 - 5,2<br />'
        });
var format_Suscetibilidadeocorrnciadesismos_43 = new ol.format.GeoJSON();
var features_Suscetibilidadeocorrnciadesismos_43 = format_Suscetibilidadeocorrnciadesismos_43.readFeatures(json_Suscetibilidadeocorrnciadesismos_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeocorrnciadesismos_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeocorrnciadesismos_43.addFeatures(features_Suscetibilidadeocorrnciadesismos_43);
var lyr_Suscetibilidadeocorrnciadesismos_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeocorrnciadesismos_43, 
                style: style_Suscetibilidadeocorrnciadesismos_43,
                popuplayertitle: "Suscetibilidade à ocorrência de sismos",
                interactive: true,
    title: 'Suscetibilidade à ocorrência de sismos<br />\
    <img src="styles/legend/Suscetibilidadeocorrnciadesismos_43_0.png" /> Baixa<br />'
        });
var format_Suscetibilidadeaatividadevulcnica_44 = new ol.format.GeoJSON();
var features_Suscetibilidadeaatividadevulcnica_44 = format_Suscetibilidadeaatividadevulcnica_44.readFeatures(json_Suscetibilidadeaatividadevulcnica_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaatividadevulcnica_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaatividadevulcnica_44.addFeatures(features_Suscetibilidadeaatividadevulcnica_44);
var lyr_Suscetibilidadeaatividadevulcnica_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaatividadevulcnica_44, 
                style: style_Suscetibilidadeaatividadevulcnica_44,
                popuplayertitle: "Suscetibilidade a atividade vulcânica",
                interactive: true,
    title: 'Suscetibilidade a atividade vulcânica<br />\
    <img src="styles/legend/Suscetibilidadeaatividadevulcnica_44_0.png" /> Baixa<br />'
        });
var format_OcorrnciasdeemanacesdeCO2_45 = new ol.format.GeoJSON();
var features_OcorrnciasdeemanacesdeCO2_45 = format_OcorrnciasdeemanacesdeCO2_45.readFeatures(json_OcorrnciasdeemanacesdeCO2_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_OcorrnciasdeemanacesdeCO2_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrnciasdeemanacesdeCO2_45.addFeatures(features_OcorrnciasdeemanacesdeCO2_45);
var lyr_OcorrnciasdeemanacesdeCO2_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OcorrnciasdeemanacesdeCO2_45, 
                style: style_OcorrnciasdeemanacesdeCO2_45,
                popuplayertitle: "Ocorrências de emanacões de CO2",
                interactive: true,
                title: '<img src="styles/legend/OcorrnciasdeemanacesdeCO2_45.png" /> Ocorrências de emanacões de CO2'
            });
var format_Suscetibilidadeaoriscodetsunami_46 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodetsunami_46 = format_Suscetibilidadeaoriscodetsunami_46.readFeatures(json_Suscetibilidadeaoriscodetsunami_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodetsunami_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodetsunami_46.addFeatures(features_Suscetibilidadeaoriscodetsunami_46);
var lyr_Suscetibilidadeaoriscodetsunami_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaoriscodetsunami_46, 
                style: style_Suscetibilidadeaoriscodetsunami_46,
                popuplayertitle: "Suscetibilidade ao risco de tsunami",
                interactive: true,
    title: 'Suscetibilidade ao risco de tsunami<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodetsunami_46_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodetsunami_46_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodetsunami_46_2.png" /> Elevada<br />'
        });
var format_Ocorrnciadegalgamentoscosteiros_47 = new ol.format.GeoJSON();
var features_Ocorrnciadegalgamentoscosteiros_47 = format_Ocorrnciadegalgamentoscosteiros_47.readFeatures(json_Ocorrnciadegalgamentoscosteiros_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Ocorrnciadegalgamentoscosteiros_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrnciadegalgamentoscosteiros_47.addFeatures(features_Ocorrnciadegalgamentoscosteiros_47);
var lyr_Ocorrnciadegalgamentoscosteiros_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocorrnciadegalgamentoscosteiros_47, 
                style: style_Ocorrnciadegalgamentoscosteiros_47,
                popuplayertitle: "Ocorrência de galgamentos costeiros",
                interactive: true,
                title: '<img src="styles/legend/Ocorrnciadegalgamentoscosteiros_47.png" /> Ocorrência de galgamentos costeiros'
            });
var format_Suscetibilidadeagalgamentoscosteiros_48 = new ol.format.GeoJSON();
var features_Suscetibilidadeagalgamentoscosteiros_48 = format_Suscetibilidadeagalgamentoscosteiros_48.readFeatures(json_Suscetibilidadeagalgamentoscosteiros_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeagalgamentoscosteiros_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeagalgamentoscosteiros_48.addFeatures(features_Suscetibilidadeagalgamentoscosteiros_48);
var lyr_Suscetibilidadeagalgamentoscosteiros_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeagalgamentoscosteiros_48, 
                style: style_Suscetibilidadeagalgamentoscosteiros_48,
                popuplayertitle: "Suscetibilidade a galgamentos costeiros",
                interactive: true,
    title: 'Suscetibilidade a galgamentos costeiros<br />\
    <img src="styles/legend/Suscetibilidadeagalgamentoscosteiros_48_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeagalgamentoscosteiros_48_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeagalgamentoscosteiros_48_2.png" /> Elevada<br />'
        });
var format_Baciashidrogrficas_49 = new ol.format.GeoJSON();
var features_Baciashidrogrficas_49 = format_Baciashidrogrficas_49.readFeatures(json_Baciashidrogrficas_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Baciashidrogrficas_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baciashidrogrficas_49.addFeatures(features_Baciashidrogrficas_49);
var lyr_Baciashidrogrficas_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baciashidrogrficas_49, 
                style: style_Baciashidrogrficas_49,
                popuplayertitle: "Bacias hidrográficas",
                interactive: true,
                title: '<img src="styles/legend/Baciashidrogrficas_49.png" /> Bacias hidrográficas'
            });
var format_reasinundveis_50 = new ol.format.GeoJSON();
var features_reasinundveis_50 = format_reasinundveis_50.readFeatures(json_reasinundveis_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_reasinundveis_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasinundveis_50.addFeatures(features_reasinundveis_50);
var lyr_reasinundveis_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasinundveis_50, 
                style: style_reasinundveis_50,
                popuplayertitle: "Áreas inundáveis",
                interactive: true,
                title: '<img src="styles/legend/reasinundveis_50.png" /> Áreas inundáveis'
            });
var format_Suscetibilidadeatempestadesdevento_51 = new ol.format.GeoJSON();
var features_Suscetibilidadeatempestadesdevento_51 = format_Suscetibilidadeatempestadesdevento_51.readFeatures(json_Suscetibilidadeatempestadesdevento_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeatempestadesdevento_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeatempestadesdevento_51.addFeatures(features_Suscetibilidadeatempestadesdevento_51);
var lyr_Suscetibilidadeatempestadesdevento_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeatempestadesdevento_51, 
                style: style_Suscetibilidadeatempestadesdevento_51,
                popuplayertitle: "Suscetibilidade a tempestades de vento",
                interactive: true,
    title: 'Suscetibilidade a tempestades de vento<br />\
    <img src="styles/legend/Suscetibilidadeatempestadesdevento_51_0.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeatempestadesdevento_51_1.png" /> Elevada<br />'
        });
var format_Suscetibilidadeaoriscodesecas_52 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodesecas_52 = format_Suscetibilidadeaoriscodesecas_52.readFeatures(json_Suscetibilidadeaoriscodesecas_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodesecas_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodesecas_52.addFeatures(features_Suscetibilidadeaoriscodesecas_52);
var lyr_Suscetibilidadeaoriscodesecas_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaoriscodesecas_52, 
                style: style_Suscetibilidadeaoriscodesecas_52,
                popuplayertitle: "Suscetibilidade ao risco de secas",
                interactive: true,
    title: 'Suscetibilidade ao risco de secas<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodesecas_52_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodesecas_52_1.png" /> Moderada<br />'
        });
var format_Suscetibilidadeaondasdefrio_53 = new ol.format.GeoJSON();
var features_Suscetibilidadeaondasdefrio_53 = format_Suscetibilidadeaondasdefrio_53.readFeatures(json_Suscetibilidadeaondasdefrio_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaondasdefrio_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaondasdefrio_53.addFeatures(features_Suscetibilidadeaondasdefrio_53);
var lyr_Suscetibilidadeaondasdefrio_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaondasdefrio_53, 
                style: style_Suscetibilidadeaondasdefrio_53,
                popuplayertitle: "Suscetibilidade a ondas de frio",
                interactive: true,
    title: 'Suscetibilidade a ondas de frio<br />\
    <img src="styles/legend/Suscetibilidadeaondasdefrio_53_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaondasdefrio_53_1.png" /> Moderada<br />'
        });
var format_Suscetibilidadeaondasdecalor_54 = new ol.format.GeoJSON();
var features_Suscetibilidadeaondasdecalor_54 = format_Suscetibilidadeaondasdecalor_54.readFeatures(json_Suscetibilidadeaondasdecalor_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaondasdecalor_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaondasdecalor_54.addFeatures(features_Suscetibilidadeaondasdecalor_54);
var lyr_Suscetibilidadeaondasdecalor_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaondasdecalor_54, 
                style: style_Suscetibilidadeaondasdecalor_54,
                popuplayertitle: "Suscetibilidade a ondas de calor",
                interactive: true,
    title: 'Suscetibilidade a ondas de calor<br />\
    <img src="styles/legend/Suscetibilidadeaondasdecalor_54_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaondasdecalor_54_1.png" /> Moderada<br />'
        });
var format_Suscetibilidadeaoriscodeneves_55 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodeneves_55 = format_Suscetibilidadeaoriscodeneves_55.readFeatures(json_Suscetibilidadeaoriscodeneves_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodeneves_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodeneves_55.addFeatures(features_Suscetibilidadeaoriscodeneves_55);
var lyr_Suscetibilidadeaoriscodeneves_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suscetibilidadeaoriscodeneves_55, 
                style: style_Suscetibilidadeaoriscodeneves_55,
                popuplayertitle: "Suscetibilidade ao risco de nevões",
                interactive: true,
    title: 'Suscetibilidade ao risco de nevões<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeneves_55_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeneves_55_1.png" /> Moderada<br />'
        });
var format_Freguesias_56 = new ol.format.GeoJSON();
var features_Freguesias_56 = format_Freguesias_56.readFeatures(json_Freguesias_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Freguesias_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freguesias_56.addFeatures(features_Freguesias_56);
var lyr_Freguesias_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freguesias_56, 
                style: style_Freguesias_56,
                popuplayertitle: "Freguesias",
                interactive: true,
                title: '<img src="styles/legend/Freguesias_56.png" /> Freguesias'
            });
var format_Concelhos_57 = new ol.format.GeoJSON();
var features_Concelhos_57 = format_Concelhos_57.readFeatures(json_Concelhos_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Concelhos_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concelhos_57.addFeatures(features_Concelhos_57);
var lyr_Concelhos_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Concelhos_57, 
                style: style_Concelhos_57,
                popuplayertitle: "Concelhos",
                interactive: true,
                title: '<img src="styles/legend/Concelhos_57.png" /> Concelhos'
            });
var group_Localizaodascavidadessubterrneasnaturais = new ol.layer.Group({
                                layers: [lyr_FurnasdoCavalum_30,lyr_GrutasdeSoVicente_31,],
                                fold: "open",
                                title: "Localização das cavidades subterrâneas naturais"});
var group_Acidentesnotransportedemercadoriasperigosas = new ol.layer.Group({
                                layers: [lyr_Outrostrajetos_28,lyr_TrajetoZonaFrancaUAG_29,],
                                fold: "open",
                                title: "Acidentes no transporte de mercadorias perigosas"});
var group_Localizaodetneisponteseoutrasinfraestruturas = new ol.layer.Group({
                                layers: [lyr_Tneis_26,lyr_Ponteseviadutos_27,],
                                fold: "open",
                                title: "Localização de túneis, pontes e outras infraestruturas"});
var group_Suscetibilidadeaoriscodeemergnciasradiolgicas = new ol.layer.Group({
                                layers: [lyr_UnidadedeRadioterapiadoFunchal_15,lyr_PortoMartimodoPortoSanto_16,lyr_PortoMartimodoFunchal_17,lyr_PortoMartimodoCanial_18,lyr_MadeiraMedicalCenter_19,lyr_HospitalParticulardaMadeira_20,lyr_HospitalDrNelioMendona_21,lyr_HospitaldaLuz_22,lyr_CentroRadiologicodoFunchal_23,lyr_AeroportodoPortoSanto_24,lyr_AeroportodaMadeira_25,],
                                fold: "open",
                                title: "Suscetibilidade ao risco de emergências radiológicas"});
var group_Acidenteseminstalaesdecombustveisleoselubrificantes = new ol.layer.Group({
                                layers: [lyr_Armazenagemdecombustveis_12,lyr_GsdePetrleoLiquefeito_13,lyr_Classesdesuscetibilidade_14,],
                                fold: "open",
                                title: "Acidentes em instalações de combustíveis, óleos e lubrificantes"});
var group_Suscetibilidadeaoriscodeinundaoporroturadebarragens = new ol.layer.Group({
                                layers: [lyr_reasinundveis_10,lyr_Barragens_11,],
                                fold: "open",
                                title: "Suscetibilidade ao risco de inundação por rotura de barragens"});
var group_Armazenagemdeprodutosexplosivos = new ol.layer.Group({
                                layers: [lyr_Localizaodospaiis_9,],
                                fold: "open",
                                title: "Armazenagem de produtos explosivos"});
var group_Acidentesemreasdeocupaoindustrialeparquesempresariais = new ol.layer.Group({
                                layers: [lyr_Parquesempresariais_6,lyr_Estabelecimentosindustriais_7,lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8,],
                                fold: "open",
                                title: "Acidentes em áreas de ocupação industrial e parques empresariais "});
var group_Acidentesrodovirios = new ol.layer.Group({
                                layers: [lyr_Acidentesgraves_4,lyr_Acidentesrodovirios_5,],
                                fold: "open",
                                title: "Acidentes rodoviários"});
var group_Basecartogrfica = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_1,lyr_Informao_2,],
                                fold: "open",
                                title: "Base cartográfica"});

lyr_GoogleSatellite_1.setVisible(true);lyr_Informao_2.setVisible(true);lyr_Acidentesgraves_4.setVisible(false);lyr_Acidentesrodovirios_5.setVisible(false);lyr_Parquesempresariais_6.setVisible(false);lyr_Estabelecimentosindustriais_7.setVisible(false);lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8.setVisible(false);lyr_Localizaodospaiis_9.setVisible(false);lyr_reasinundveis_10.setVisible(false);lyr_Barragens_11.setVisible(false);lyr_Armazenagemdecombustveis_12.setVisible(false);lyr_GsdePetrleoLiquefeito_13.setVisible(false);lyr_Classesdesuscetibilidade_14.setVisible(false);lyr_UnidadedeRadioterapiadoFunchal_15.setVisible(false);lyr_PortoMartimodoPortoSanto_16.setVisible(false);lyr_PortoMartimodoFunchal_17.setVisible(false);lyr_PortoMartimodoCanial_18.setVisible(false);lyr_MadeiraMedicalCenter_19.setVisible(false);lyr_HospitalParticulardaMadeira_20.setVisible(false);lyr_HospitalDrNelioMendona_21.setVisible(false);lyr_HospitaldaLuz_22.setVisible(false);lyr_CentroRadiologicodoFunchal_23.setVisible(false);lyr_AeroportodoPortoSanto_24.setVisible(false);lyr_AeroportodaMadeira_25.setVisible(false);lyr_Tneis_26.setVisible(false);lyr_Ponteseviadutos_27.setVisible(false);lyr_Outrostrajetos_28.setVisible(false);lyr_TrajetoZonaFrancaUAG_29.setVisible(false);lyr_FurnasdoCavalum_30.setVisible(false);lyr_GrutasdeSoVicente_31.setVisible(false);lyr_Suscetibilidadeaoriscodeincndiosflorestais_32.setVisible(false);lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33.setVisible(false);lyr_Ocorrnciadeincndiosemtneis_34.setVisible(false);lyr_Suscetibilidadeaincndiosemtneis_35.setVisible(false);lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36.setVisible(false);lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37.setVisible(false);lyr_Suscetibilidadeaerosocosteiranabasedaarriba_38.setVisible(false);lyr_Suscetibilidadeaerosocosteiraemarribas_39.setVisible(false);lyr_Suscetibilidadeamovimentosdemassaemvertente_40.setVisible(false);lyr_Suscetibilidadeaoriscodenevoeiros_41.setVisible(false);lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42.setVisible(false);lyr_Suscetibilidadeocorrnciadesismos_43.setVisible(false);lyr_Suscetibilidadeaatividadevulcnica_44.setVisible(false);lyr_OcorrnciasdeemanacesdeCO2_45.setVisible(false);lyr_Suscetibilidadeaoriscodetsunami_46.setVisible(false);lyr_Ocorrnciadegalgamentoscosteiros_47.setVisible(false);lyr_Suscetibilidadeagalgamentoscosteiros_48.setVisible(false);lyr_Baciashidrogrficas_49.setVisible(false);lyr_reasinundveis_50.setVisible(false);lyr_Suscetibilidadeatempestadesdevento_51.setVisible(false);lyr_Suscetibilidadeaoriscodesecas_52.setVisible(false);lyr_Suscetibilidadeaondasdefrio_53.setVisible(false);lyr_Suscetibilidadeaondasdecalor_54.setVisible(false);lyr_Suscetibilidadeaoriscodeneves_55.setVisible(false);lyr_Freguesias_56.setVisible(false);lyr_Concelhos_57.setVisible(false);
var layersList = [group_Basecartogrfica,group_Acidentesrodovirios,group_Acidentesemreasdeocupaoindustrialeparquesempresariais,group_Armazenagemdeprodutosexplosivos,group_Suscetibilidadeaoriscodeinundaoporroturadebarragens,group_Acidenteseminstalaesdecombustveisleoselubrificantes,group_Suscetibilidadeaoriscodeemergnciasradiolgicas,group_Localizaodetneisponteseoutrasinfraestruturas,group_Acidentesnotransportedemercadoriasperigosas,group_Localizaodascavidadessubterrneasnaturais,lyr_Suscetibilidadeaoriscodeincndiosflorestais_32,lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33,lyr_Ocorrnciadeincndiosemtneis_34,lyr_Suscetibilidadeaincndiosemtneis_35,lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36,lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37,lyr_Suscetibilidadeaerosocosteiranabasedaarriba_38,lyr_Suscetibilidadeaerosocosteiraemarribas_39,lyr_Suscetibilidadeamovimentosdemassaemvertente_40,lyr_Suscetibilidadeaoriscodenevoeiros_41,lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42,lyr_Suscetibilidadeocorrnciadesismos_43,lyr_Suscetibilidadeaatividadevulcnica_44,lyr_OcorrnciasdeemanacesdeCO2_45,lyr_Suscetibilidadeaoriscodetsunami_46,lyr_Ocorrnciadegalgamentoscosteiros_47,lyr_Suscetibilidadeagalgamentoscosteiros_48,lyr_Baciashidrogrficas_49,lyr_reasinundveis_50,lyr_Suscetibilidadeatempestadesdevento_51,lyr_Suscetibilidadeaoriscodesecas_52,lyr_Suscetibilidadeaondasdefrio_53,lyr_Suscetibilidadeaondasdecalor_54,lyr_Suscetibilidadeaoriscodeneves_55,lyr_Freguesias_56,lyr_Concelhos_57];
lyr_Informao_2.set('fieldAliases', {'id': 'id', 'info': 'info', });
lyr_Acidentesgraves_4.set('fieldAliases', {'Ocorrencia': 'Ocorrencia', 'Local': 'Local', });
lyr_Acidentesrodovirios_5.set('fieldAliases', {'Designacao': 'Designacao', 'Ano': 'Ano', 'Classes': 'Classes', });
lyr_Parquesempresariais_6.set('fieldAliases', {'DESIGNACAO': 'DESIGNACAO', });
lyr_Estabelecimentosindustriais_7.set('fieldAliases', {'Fonte': 'Fonte', 'Legenda': 'Legenda', });
lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8.set('fieldAliases', {'Local': 'Local', 'Act_Princi': 'Act_Princi', 'Classe': 'Classe', 'Legenda': 'Legenda', });
lyr_Localizaodospaiis_9.set('fieldAliases', {'id': 'id', });
lyr_reasinundveis_10.set('fieldAliases', {'Nome': 'Nome', });
lyr_Barragens_11.set('fieldAliases', {'Nome': 'Nome', });
lyr_Armazenagemdecombustveis_12.set('fieldAliases', {'id': 'id', 'LAT_GMS': 'LAT_GMS', 'LON_GMS': 'LON_GMS', });
lyr_GsdePetrleoLiquefeito_13.set('fieldAliases', {'LAT_GMS': 'LAT_GMS', 'LON_GMS': 'LON_GMS', });
lyr_Classesdesuscetibilidade_14.set('fieldAliases', {'mrb_dist': 'mrb_dist', });
lyr_UnidadedeRadioterapiadoFunchal_15.set('fieldAliases', {'id': 'id', });
lyr_PortoMartimodoPortoSanto_16.set('fieldAliases', {'id': 'id', });
lyr_PortoMartimodoFunchal_17.set('fieldAliases', {'id': 'id', });
lyr_PortoMartimodoCanial_18.set('fieldAliases', {'id': 'id', });
lyr_MadeiraMedicalCenter_19.set('fieldAliases', {'id': 'id', });
lyr_HospitalParticulardaMadeira_20.set('fieldAliases', {'id': 'id', });
lyr_HospitalDrNelioMendona_21.set('fieldAliases', {'id': 'id', });
lyr_HospitaldaLuz_22.set('fieldAliases', {'id': 'id', });
lyr_CentroRadiologicodoFunchal_23.set('fieldAliases', {'id': 'id', });
lyr_AeroportodoPortoSanto_24.set('fieldAliases', {'id': 'id', });
lyr_AeroportodaMadeira_25.set('fieldAliases', {'id': 'id', });
lyr_Tneis_26.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', 'osm_id_2': 'osm_id_2', 'susce': 'susce', });
lyr_Ponteseviadutos_27.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', });
lyr_Outrostrajetos_28.set('fieldAliases', {'Trajetos': 'Trajetos', 'Legenda': 'Legenda', 'layer': 'layer', 'path': 'path', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', });
lyr_TrajetoZonaFrancaUAG_29.set('fieldAliases', {'Trajetos': 'Trajetos', 'Legenda': 'Legenda', });
lyr_FurnasdoCavalum_30.set('fieldAliases', {'id': 'id', 'descr': 'descr', 'coord': 'coord', });
lyr_GrutasdeSoVicente_31.set('fieldAliases', {'Id': 'Id', 'Descr': 'Descr', 'coordenada': 'coordenada', });
lyr_Suscetibilidadeaoriscodeincndiosflorestais_32.set('fieldAliases', {'CLASSES': 'CLASSES', });
lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33.set('fieldAliases', {'LUG11DESIG': 'Local', 'Classes': 'Classes', });
lyr_Ocorrnciadeincndiosemtneis_34.set('fieldAliases', {'descricao': 'Local', 'Descriçã': 'Descrição', });
lyr_Suscetibilidadeaincndiosemtneis_35.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', 'osm_id_2': 'osm_id_2', 'susce': 'susce', });
lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36.set('fieldAliases', {'Suscep': 'Suscep', });
lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37.set('fieldAliases', {'Descricao': 'Descrição', 'Classe': 'Suscetibilidade', });
lyr_Suscetibilidadeaerosocosteiranabasedaarriba_38.set('fieldAliases', {'Suscetibil': 'Suscetibil', 'Tipo': 'Tipo', });
lyr_Suscetibilidadeaerosocosteiraemarribas_39.set('fieldAliases', {'Suscetibil': 'Suscetibil', });
lyr_Suscetibilidadeamovimentosdemassaemvertente_40.set('fieldAliases', {'CLASSES': 'CLASSES', });
lyr_Suscetibilidadeaoriscodenevoeiros_41.set('fieldAliases', {'classe': 'classe', });
lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42.set('fieldAliases', {'Magnitude': 'Magnitude', });
lyr_Suscetibilidadeocorrnciadesismos_43.set('fieldAliases', {'Concelho': 'Concelho', 'CLASSES': 'CLASSES', });
lyr_Suscetibilidadeaatividadevulcnica_44.set('fieldAliases', {'CLASSES': 'CLASSES', });
lyr_OcorrnciasdeemanacesdeCO2_45.set('fieldAliases', {'Designacao': 'Designacao', 'Tipo': 'Tipo', });
lyr_Suscetibilidadeaoriscodetsunami_46.set('fieldAliases', {'layer': 'layer', });
lyr_Ocorrnciadegalgamentoscosteiros_47.set('fieldAliases', {'Locais GC': 'Local', });
lyr_Suscetibilidadeagalgamentoscosteiros_48.set('fieldAliases', {'Suscetibil': 'Suscetibil', 'Shape_Leng': 'Shape_Leng', });
lyr_Baciashidrogrficas_49.set('fieldAliases', {'Bacia': 'Bacia hidrográfica', });
lyr_reasinundveis_50.set('fieldAliases', {'Bacia': 'Bacia', });
lyr_Suscetibilidadeatempestadesdevento_51.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaoriscodesecas_52.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaondasdefrio_53.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaondasdecalor_54.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaoriscodeneves_55.set('fieldAliases', {'Classe': 'Classe', });
lyr_Freguesias_56.set('fieldAliases', {'Freguesia': 'Freguesia', 'Residentes': 'Residentes', });
lyr_Concelhos_57.set('fieldAliases', {'Concelho': 'Concelho', 'Residentes': 'Residentes', });
lyr_Informao_2.set('fieldImages', {'id': 'TextEdit', 'info': 'TextEdit', });
lyr_Acidentesgraves_4.set('fieldImages', {'Ocorrencia': 'TextEdit', 'Local': 'TextEdit', });
lyr_Acidentesrodovirios_5.set('fieldImages', {'Designacao': 'TextEdit', 'Ano': 'TextEdit', 'Classes': 'TextEdit', });
lyr_Parquesempresariais_6.set('fieldImages', {'DESIGNACAO': 'TextEdit', });
lyr_Estabelecimentosindustriais_7.set('fieldImages', {'Fonte': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8.set('fieldImages', {'Local': 'TextEdit', 'Act_Princi': 'TextEdit', 'Classe': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_Localizaodospaiis_9.set('fieldImages', {'id': 'TextEdit', });
lyr_reasinundveis_10.set('fieldImages', {'Nome': 'TextEdit', });
lyr_Barragens_11.set('fieldImages', {'Nome': 'TextEdit', });
lyr_Armazenagemdecombustveis_12.set('fieldImages', {'id': 'TextEdit', 'LAT_GMS': 'TextEdit', 'LON_GMS': 'TextEdit', });
lyr_GsdePetrleoLiquefeito_13.set('fieldImages', {'LAT_GMS': 'TextEdit', 'LON_GMS': 'TextEdit', });
lyr_Classesdesuscetibilidade_14.set('fieldImages', {'mrb_dist': 'TextEdit', });
lyr_UnidadedeRadioterapiadoFunchal_15.set('fieldImages', {'id': 'TextEdit', });
lyr_PortoMartimodoPortoSanto_16.set('fieldImages', {'id': 'TextEdit', });
lyr_PortoMartimodoFunchal_17.set('fieldImages', {'id': 'TextEdit', });
lyr_PortoMartimodoCanial_18.set('fieldImages', {'id': 'TextEdit', });
lyr_MadeiraMedicalCenter_19.set('fieldImages', {'id': 'TextEdit', });
lyr_HospitalParticulardaMadeira_20.set('fieldImages', {'id': 'TextEdit', });
lyr_HospitalDrNelioMendona_21.set('fieldImages', {'id': 'TextEdit', });
lyr_HospitaldaLuz_22.set('fieldImages', {'id': 'TextEdit', });
lyr_CentroRadiologicodoFunchal_23.set('fieldImages', {'id': 'TextEdit', });
lyr_AeroportodoPortoSanto_24.set('fieldImages', {'id': 'TextEdit', });
lyr_AeroportodaMadeira_25.set('fieldImages', {'id': 'TextEdit', });
lyr_Tneis_26.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', 'osm_id_2': 'TextEdit', 'susce': 'TextEdit', });
lyr_Ponteseviadutos_27.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', });
lyr_Outrostrajetos_28.set('fieldImages', {'Trajetos': 'TextEdit', 'Legenda': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', });
lyr_TrajetoZonaFrancaUAG_29.set('fieldImages', {'Trajetos': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_FurnasdoCavalum_30.set('fieldImages', {'id': 'TextEdit', 'descr': 'TextEdit', 'coord': 'TextEdit', });
lyr_GrutasdeSoVicente_31.set('fieldImages', {'Id': 'Range', 'Descr': 'TextEdit', 'coordenada': 'TextEdit', });
lyr_Suscetibilidadeaoriscodeincndiosflorestais_32.set('fieldImages', {'CLASSES': 'TextEdit', });
lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33.set('fieldImages', {'LUG11DESIG': 'TextEdit', 'Classes': 'TextEdit', });
lyr_Ocorrnciadeincndiosemtneis_34.set('fieldImages', {'descricao': 'TextEdit', 'Descriçã': 'TextEdit', });
lyr_Suscetibilidadeaincndiosemtneis_35.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', 'osm_id_2': 'TextEdit', 'susce': 'TextEdit', });
lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36.set('fieldImages', {'Suscep': 'TextEdit', });
lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37.set('fieldImages', {'Descricao': 'TextEdit', 'Classe': 'TextEdit', });
lyr_Suscetibilidadeaerosocosteiranabasedaarriba_38.set('fieldImages', {'Suscetibil': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Suscetibilidadeaerosocosteiraemarribas_39.set('fieldImages', {'Suscetibil': 'TextEdit', });
lyr_Suscetibilidadeamovimentosdemassaemvertente_40.set('fieldImages', {'CLASSES': 'TextEdit', });
lyr_Suscetibilidadeaoriscodenevoeiros_41.set('fieldImages', {'classe': 'TextEdit', });
lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42.set('fieldImages', {'Magnitude': 'TextEdit', });
lyr_Suscetibilidadeocorrnciadesismos_43.set('fieldImages', {'Concelho': 'TextEdit', 'CLASSES': 'TextEdit', });
lyr_Suscetibilidadeaatividadevulcnica_44.set('fieldImages', {'CLASSES': 'TextEdit', });
lyr_OcorrnciasdeemanacesdeCO2_45.set('fieldImages', {'Designacao': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Suscetibilidadeaoriscodetsunami_46.set('fieldImages', {'layer': 'TextEdit', });
lyr_Ocorrnciadegalgamentoscosteiros_47.set('fieldImages', {'Locais GC': 'TextEdit', });
lyr_Suscetibilidadeagalgamentoscosteiros_48.set('fieldImages', {'Suscetibil': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Baciashidrogrficas_49.set('fieldImages', {'Bacia': 'TextEdit', });
lyr_reasinundveis_50.set('fieldImages', {'Bacia': 'TextEdit', });
lyr_Suscetibilidadeatempestadesdevento_51.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaoriscodesecas_52.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaondasdefrio_53.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaondasdecalor_54.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaoriscodeneves_55.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Freguesias_56.set('fieldImages', {'Freguesia': 'TextEdit', 'Residentes': 'TextEdit', });
lyr_Concelhos_57.set('fieldImages', {'Concelho': 'TextEdit', 'Residentes': 'TextEdit', });
lyr_Informao_2.set('fieldLabels', {'id': 'no label', 'info': 'no label', });
lyr_Acidentesgraves_4.set('fieldLabels', {'Ocorrencia': 'no label', 'Local': 'no label', });
lyr_Acidentesrodovirios_5.set('fieldLabels', {'Designacao': 'no label', 'Ano': 'no label', 'Classes': 'no label', });
lyr_Parquesempresariais_6.set('fieldLabels', {'DESIGNACAO': 'no label', });
lyr_Estabelecimentosindustriais_7.set('fieldLabels', {'Fonte': 'no label', 'Legenda': 'no label', });
lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_8.set('fieldLabels', {'Local': 'no label', 'Act_Princi': 'no label', 'Classe': 'no label', 'Legenda': 'no label', });
lyr_Localizaodospaiis_9.set('fieldLabels', {'id': 'no label', });
lyr_reasinundveis_10.set('fieldLabels', {'Nome': 'no label', });
lyr_Barragens_11.set('fieldLabels', {'Nome': 'no label', });
lyr_Armazenagemdecombustveis_12.set('fieldLabels', {'id': 'no label', 'LAT_GMS': 'no label', 'LON_GMS': 'no label', });
lyr_GsdePetrleoLiquefeito_13.set('fieldLabels', {'LAT_GMS': 'no label', 'LON_GMS': 'no label', });
lyr_Classesdesuscetibilidade_14.set('fieldLabels', {'mrb_dist': 'no label', });
lyr_UnidadedeRadioterapiadoFunchal_15.set('fieldLabels', {'id': 'no label', });
lyr_PortoMartimodoPortoSanto_16.set('fieldLabels', {'id': 'no label', });
lyr_PortoMartimodoFunchal_17.set('fieldLabels', {'id': 'no label', });
lyr_PortoMartimodoCanial_18.set('fieldLabels', {'id': 'no label', });
lyr_MadeiraMedicalCenter_19.set('fieldLabels', {'id': 'no label', });
lyr_HospitalParticulardaMadeira_20.set('fieldLabels', {'id': 'no label', });
lyr_HospitalDrNelioMendona_21.set('fieldLabels', {'id': 'no label', });
lyr_HospitaldaLuz_22.set('fieldLabels', {'id': 'no label', });
lyr_CentroRadiologicodoFunchal_23.set('fieldLabels', {'id': 'no label', });
lyr_AeroportodoPortoSanto_24.set('fieldLabels', {'id': 'no label', });
lyr_AeroportodaMadeira_25.set('fieldLabels', {'id': 'no label', });
lyr_Tneis_26.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'compriment': 'no label', 'osm_id_2': 'no label', 'susce': 'no label', });
lyr_Ponteseviadutos_27.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'compriment': 'no label', });
lyr_Outrostrajetos_28.set('fieldLabels', {'Trajetos': 'no label', 'Legenda': 'no label', 'layer': 'no label', 'path': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'compriment': 'no label', });
lyr_TrajetoZonaFrancaUAG_29.set('fieldLabels', {'Trajetos': 'no label', 'Legenda': 'no label', });
lyr_FurnasdoCavalum_30.set('fieldLabels', {'id': 'no label', 'descr': 'no label', 'coord': 'no label', });
lyr_GrutasdeSoVicente_31.set('fieldLabels', {'Id': 'no label', 'Descr': 'no label', 'coordenada': 'no label', });
lyr_Suscetibilidadeaoriscodeincndiosflorestais_32.set('fieldLabels', {'CLASSES': 'no label', });
lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_33.set('fieldLabels', {'LUG11DESIG': 'no label', 'Classes': 'no label', });
lyr_Ocorrnciadeincndiosemtneis_34.set('fieldLabels', {'descricao': 'no label', 'Descriçã': 'no label', });
lyr_Suscetibilidadeaincndiosemtneis_35.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'compriment': 'no label', 'osm_id_2': 'no label', 'susce': 'no label', });
lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_36.set('fieldLabels', {'Suscep': 'no label', });
lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_37.set('fieldLabels', {'Descricao': 'no label', 'Classe': 'no label', });
lyr_Suscetibilidadeaerosocosteiranabasedaarriba_38.set('fieldLabels', {'Suscetibil': 'no label', 'Tipo': 'no label', });
lyr_Suscetibilidadeaerosocosteiraemarribas_39.set('fieldLabels', {'Suscetibil': 'no label', });
lyr_Suscetibilidadeamovimentosdemassaemvertente_40.set('fieldLabels', {'CLASSES': 'no label', });
lyr_Suscetibilidadeaoriscodenevoeiros_41.set('fieldLabels', {'classe': 'no label', });
lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_42.set('fieldLabels', {'Magnitude': 'no label', });
lyr_Suscetibilidadeocorrnciadesismos_43.set('fieldLabels', {'Concelho': 'no label', 'CLASSES': 'no label', });
lyr_Suscetibilidadeaatividadevulcnica_44.set('fieldLabels', {'CLASSES': 'no label', });
lyr_OcorrnciasdeemanacesdeCO2_45.set('fieldLabels', {'Designacao': 'no label', 'Tipo': 'no label', });
lyr_Suscetibilidadeaoriscodetsunami_46.set('fieldLabels', {'layer': 'no label', });
lyr_Ocorrnciadegalgamentoscosteiros_47.set('fieldLabels', {'Locais GC': 'no label', });
lyr_Suscetibilidadeagalgamentoscosteiros_48.set('fieldLabels', {'Suscetibil': 'no label', 'Shape_Leng': 'no label', });
lyr_Baciashidrogrficas_49.set('fieldLabels', {'Bacia': 'no label', });
lyr_reasinundveis_50.set('fieldLabels', {'Bacia': 'no label', });
lyr_Suscetibilidadeatempestadesdevento_51.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaoriscodesecas_52.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaondasdefrio_53.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaondasdecalor_54.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaoriscodeneves_55.set('fieldLabels', {'Classe': 'no label', });
lyr_Freguesias_56.set('fieldLabels', {'Freguesia': 'no label', 'Residentes': 'no label', });
lyr_Concelhos_57.set('fieldLabels', {'Concelho': 'no label', 'Residentes': 'no label', });