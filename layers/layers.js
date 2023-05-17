ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5016").setExtent([258627.123144, 3605065.285990, 415417.703539, 3670978.091059]);
var wms_layers = [];

var lyr_OrtofotamapadaRAM_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://irig-geoportal.madeira.gov.pt/IRIGWMS_OI_Ortofotomapas2018/Service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI_OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofotamapa da RAM",
                            opacity: 0.988000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotamapadaRAM_0, 0]);
var format_OceanoAtlntico_1 = new ol.format.GeoJSON();
var features_OceanoAtlntico_1 = format_OceanoAtlntico_1.readFeatures(json_OceanoAtlntico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_OceanoAtlntico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OceanoAtlntico_1.addFeatures(features_OceanoAtlntico_1);
var lyr_OceanoAtlntico_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OceanoAtlntico_1, 
                style: style_OceanoAtlntico_1,
                interactive: false,
                title: '<img src="styles/legend/OceanoAtlntico_1.png" /> Oceano Atlântico'
            });
var format_Informao_2 = new ol.format.GeoJSON();
var features_Informao_2 = format_Informao_2.readFeatures(json_Informao_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Informao_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informao_2.addFeatures(features_Informao_2);
var lyr_Informao_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Informao_2, 
                style: style_Informao_2,
                interactive: false,
                title: '<img src="styles/legend/Informao_2.png" /> Informação'
            });
var format_Acidentesgraves_3 = new ol.format.GeoJSON();
var features_Acidentesgraves_3 = format_Acidentesgraves_3.readFeatures(json_Acidentesgraves_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Acidentesgraves_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentesgraves_3.addFeatures(features_Acidentesgraves_3);
var lyr_Acidentesgraves_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acidentesgraves_3, 
                style: style_Acidentesgraves_3,
                interactive: false,
                title: '<img src="styles/legend/Acidentesgraves_3.png" /> Acidentes graves'
            });
var format_Acidentesrodovirios_4 = new ol.format.GeoJSON();
var features_Acidentesrodovirios_4 = format_Acidentesrodovirios_4.readFeatures(json_Acidentesrodovirios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Acidentesrodovirios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentesrodovirios_4.addFeatures(features_Acidentesrodovirios_4);
var lyr_Acidentesrodovirios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acidentesrodovirios_4, 
                style: style_Acidentesrodovirios_4,
                interactive: false,
                title: '<img src="styles/legend/Acidentesrodovirios_4.png" /> Acidentes rodoviários'
            });
var format_Parquesempresariais_5 = new ol.format.GeoJSON();
var features_Parquesempresariais_5 = format_Parquesempresariais_5.readFeatures(json_Parquesempresariais_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Parquesempresariais_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parquesempresariais_5.addFeatures(features_Parquesempresariais_5);
var lyr_Parquesempresariais_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parquesempresariais_5, 
                style: style_Parquesempresariais_5,
                interactive: false,
                title: '<img src="styles/legend/Parquesempresariais_5.png" /> Parques empresariais'
            });
var format_Estabelecimentosindustriais_6 = new ol.format.GeoJSON();
var features_Estabelecimentosindustriais_6 = format_Estabelecimentosindustriais_6.readFeatures(json_Estabelecimentosindustriais_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Estabelecimentosindustriais_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estabelecimentosindustriais_6.addFeatures(features_Estabelecimentosindustriais_6);
var lyr_Estabelecimentosindustriais_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estabelecimentosindustriais_6, 
                style: style_Estabelecimentosindustriais_6,
                interactive: false,
                title: '<img src="styles/legend/Estabelecimentosindustriais_6.png" /> Estabelecimentos industriais'
            });
var format_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7 = new ol.format.GeoJSON();
var features_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7 = format_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7.readFeatures(json_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7.addFeatures(features_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7);
var lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7, 
                style: style_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7,
                interactive: false,
                title: '<img src="styles/legend/Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7.png" /> Suscetibilidade moderada à ocorrência de acidentes em estabelecimentos industriais'
            });
var format_Localizaodospaiis_8 = new ol.format.GeoJSON();
var features_Localizaodospaiis_8 = format_Localizaodospaiis_8.readFeatures(json_Localizaodospaiis_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Localizaodospaiis_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localizaodospaiis_8.addFeatures(features_Localizaodospaiis_8);
var lyr_Localizaodospaiis_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localizaodospaiis_8, 
                style: style_Localizaodospaiis_8,
                interactive: false,
                title: '<img src="styles/legend/Localizaodospaiis_8.png" /> Localização dos paióis'
            });
var format_reasinundveis_9 = new ol.format.GeoJSON();
var features_reasinundveis_9 = format_reasinundveis_9.readFeatures(json_reasinundveis_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_reasinundveis_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasinundveis_9.addFeatures(features_reasinundveis_9);
var lyr_reasinundveis_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasinundveis_9, 
                style: style_reasinundveis_9,
                interactive: false,
                title: '<img src="styles/legend/reasinundveis_9.png" /> Áreas inundáveis'
            });
var format_Barragens_10 = new ol.format.GeoJSON();
var features_Barragens_10 = format_Barragens_10.readFeatures(json_Barragens_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Barragens_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barragens_10.addFeatures(features_Barragens_10);
var lyr_Barragens_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barragens_10, 
                style: style_Barragens_10,
                interactive: false,
                title: '<img src="styles/legend/Barragens_10.png" /> Barragens'
            });
var format_Armazenagemdecombustveis_11 = new ol.format.GeoJSON();
var features_Armazenagemdecombustveis_11 = format_Armazenagemdecombustveis_11.readFeatures(json_Armazenagemdecombustveis_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Armazenagemdecombustveis_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazenagemdecombustveis_11.addFeatures(features_Armazenagemdecombustveis_11);
var lyr_Armazenagemdecombustveis_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Armazenagemdecombustveis_11, 
                style: style_Armazenagemdecombustveis_11,
                interactive: false,
                title: '<img src="styles/legend/Armazenagemdecombustveis_11.png" /> Armazenagem de combustíveis'
            });
var format_GsdePetrleoLiquefeito_12 = new ol.format.GeoJSON();
var features_GsdePetrleoLiquefeito_12 = format_GsdePetrleoLiquefeito_12.readFeatures(json_GsdePetrleoLiquefeito_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_GsdePetrleoLiquefeito_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GsdePetrleoLiquefeito_12.addFeatures(features_GsdePetrleoLiquefeito_12);
var lyr_GsdePetrleoLiquefeito_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GsdePetrleoLiquefeito_12, 
                style: style_GsdePetrleoLiquefeito_12,
                interactive: false,
                title: '<img src="styles/legend/GsdePetrleoLiquefeito_12.png" /> Gás de Petróleo Liquefeito'
            });
var format_Classesdesuscetibilidade_13 = new ol.format.GeoJSON();
var features_Classesdesuscetibilidade_13 = format_Classesdesuscetibilidade_13.readFeatures(json_Classesdesuscetibilidade_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Classesdesuscetibilidade_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Classesdesuscetibilidade_13.addFeatures(features_Classesdesuscetibilidade_13);
var lyr_Classesdesuscetibilidade_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Classesdesuscetibilidade_13, 
                style: style_Classesdesuscetibilidade_13,
                interactive: false,
    title: 'Classes de suscetibilidade<br />\
    <img src="styles/legend/Classesdesuscetibilidade_13_0.png" /> Moderado (Diâmetro de 200m)<br />\
    <img src="styles/legend/Classesdesuscetibilidade_13_1.png" /> Elevado (Diâmetro de 40m)<br />'
        });
var format_UnidadedeRadioterapiadoFunchal_14 = new ol.format.GeoJSON();
var features_UnidadedeRadioterapiadoFunchal_14 = format_UnidadedeRadioterapiadoFunchal_14.readFeatures(json_UnidadedeRadioterapiadoFunchal_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_UnidadedeRadioterapiadoFunchal_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeRadioterapiadoFunchal_14.addFeatures(features_UnidadedeRadioterapiadoFunchal_14);
var lyr_UnidadedeRadioterapiadoFunchal_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnidadedeRadioterapiadoFunchal_14, 
                style: style_UnidadedeRadioterapiadoFunchal_14,
                interactive: false,
                title: '<img src="styles/legend/UnidadedeRadioterapiadoFunchal_14.png" /> Unidade de Radioterapia do Funchal'
            });
var format_PortoMartimodoPortoSanto_15 = new ol.format.GeoJSON();
var features_PortoMartimodoPortoSanto_15 = format_PortoMartimodoPortoSanto_15.readFeatures(json_PortoMartimodoPortoSanto_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_PortoMartimodoPortoSanto_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortoMartimodoPortoSanto_15.addFeatures(features_PortoMartimodoPortoSanto_15);
var lyr_PortoMartimodoPortoSanto_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortoMartimodoPortoSanto_15, 
                style: style_PortoMartimodoPortoSanto_15,
                interactive: false,
                title: '<img src="styles/legend/PortoMartimodoPortoSanto_15.png" /> Porto Marítimo do Porto Santo'
            });
var format_PortoMartimodoFunchal_16 = new ol.format.GeoJSON();
var features_PortoMartimodoFunchal_16 = format_PortoMartimodoFunchal_16.readFeatures(json_PortoMartimodoFunchal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_PortoMartimodoFunchal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortoMartimodoFunchal_16.addFeatures(features_PortoMartimodoFunchal_16);
var lyr_PortoMartimodoFunchal_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortoMartimodoFunchal_16, 
                style: style_PortoMartimodoFunchal_16,
                interactive: false,
                title: '<img src="styles/legend/PortoMartimodoFunchal_16.png" /> Porto Marítimo do Funchal'
            });
var format_PortoMartimodoCanial_17 = new ol.format.GeoJSON();
var features_PortoMartimodoCanial_17 = format_PortoMartimodoCanial_17.readFeatures(json_PortoMartimodoCanial_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_PortoMartimodoCanial_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortoMartimodoCanial_17.addFeatures(features_PortoMartimodoCanial_17);
var lyr_PortoMartimodoCanial_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PortoMartimodoCanial_17, 
                style: style_PortoMartimodoCanial_17,
                interactive: false,
                title: '<img src="styles/legend/PortoMartimodoCanial_17.png" /> Porto Marítimo do Caniçal'
            });
var format_MadeiraMedicalCenter_18 = new ol.format.GeoJSON();
var features_MadeiraMedicalCenter_18 = format_MadeiraMedicalCenter_18.readFeatures(json_MadeiraMedicalCenter_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_MadeiraMedicalCenter_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MadeiraMedicalCenter_18.addFeatures(features_MadeiraMedicalCenter_18);
var lyr_MadeiraMedicalCenter_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MadeiraMedicalCenter_18, 
                style: style_MadeiraMedicalCenter_18,
                interactive: false,
                title: '<img src="styles/legend/MadeiraMedicalCenter_18.png" /> Madeira Medical Center'
            });
var format_HospitalParticulardaMadeira_19 = new ol.format.GeoJSON();
var features_HospitalParticulardaMadeira_19 = format_HospitalParticulardaMadeira_19.readFeatures(json_HospitalParticulardaMadeira_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_HospitalParticulardaMadeira_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalParticulardaMadeira_19.addFeatures(features_HospitalParticulardaMadeira_19);
var lyr_HospitalParticulardaMadeira_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HospitalParticulardaMadeira_19, 
                style: style_HospitalParticulardaMadeira_19,
                interactive: false,
                title: '<img src="styles/legend/HospitalParticulardaMadeira_19.png" /> Hospital Particular da Madeira'
            });
var format_HospitalDrNelioMendona_20 = new ol.format.GeoJSON();
var features_HospitalDrNelioMendona_20 = format_HospitalDrNelioMendona_20.readFeatures(json_HospitalDrNelioMendona_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_HospitalDrNelioMendona_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalDrNelioMendona_20.addFeatures(features_HospitalDrNelioMendona_20);
var lyr_HospitalDrNelioMendona_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HospitalDrNelioMendona_20, 
                style: style_HospitalDrNelioMendona_20,
                interactive: false,
                title: '<img src="styles/legend/HospitalDrNelioMendona_20.png" /> Hospital Dr. Nelio Mendonça'
            });
var format_HospitaldaLuz_21 = new ol.format.GeoJSON();
var features_HospitaldaLuz_21 = format_HospitaldaLuz_21.readFeatures(json_HospitaldaLuz_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_HospitaldaLuz_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitaldaLuz_21.addFeatures(features_HospitaldaLuz_21);
var lyr_HospitaldaLuz_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HospitaldaLuz_21, 
                style: style_HospitaldaLuz_21,
                interactive: false,
                title: '<img src="styles/legend/HospitaldaLuz_21.png" /> Hospital da Luz'
            });
var format_CentroRadiologicodoFunchal_22 = new ol.format.GeoJSON();
var features_CentroRadiologicodoFunchal_22 = format_CentroRadiologicodoFunchal_22.readFeatures(json_CentroRadiologicodoFunchal_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_CentroRadiologicodoFunchal_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentroRadiologicodoFunchal_22.addFeatures(features_CentroRadiologicodoFunchal_22);
var lyr_CentroRadiologicodoFunchal_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentroRadiologicodoFunchal_22, 
                style: style_CentroRadiologicodoFunchal_22,
                interactive: false,
                title: '<img src="styles/legend/CentroRadiologicodoFunchal_22.png" /> Centro Radiologico do Funchal'
            });
var format_AeroportodoPortoSanto_23 = new ol.format.GeoJSON();
var features_AeroportodoPortoSanto_23 = format_AeroportodoPortoSanto_23.readFeatures(json_AeroportodoPortoSanto_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_AeroportodoPortoSanto_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroportodoPortoSanto_23.addFeatures(features_AeroportodoPortoSanto_23);
var lyr_AeroportodoPortoSanto_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AeroportodoPortoSanto_23, 
                style: style_AeroportodoPortoSanto_23,
                interactive: false,
                title: '<img src="styles/legend/AeroportodoPortoSanto_23.png" /> Aeroporto do Porto Santo'
            });
var format_AeroportodaMadeira_24 = new ol.format.GeoJSON();
var features_AeroportodaMadeira_24 = format_AeroportodaMadeira_24.readFeatures(json_AeroportodaMadeira_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_AeroportodaMadeira_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AeroportodaMadeira_24.addFeatures(features_AeroportodaMadeira_24);
var lyr_AeroportodaMadeira_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AeroportodaMadeira_24, 
                style: style_AeroportodaMadeira_24,
                interactive: false,
                title: '<img src="styles/legend/AeroportodaMadeira_24.png" /> Aeroporto da Madeira'
            });
var format_Tneis_25 = new ol.format.GeoJSON();
var features_Tneis_25 = format_Tneis_25.readFeatures(json_Tneis_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Tneis_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tneis_25.addFeatures(features_Tneis_25);
var lyr_Tneis_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tneis_25, 
                style: style_Tneis_25,
                interactive: false,
                title: '<img src="styles/legend/Tneis_25.png" /> Túneis'
            });
var format_Ponteseviadutos_26 = new ol.format.GeoJSON();
var features_Ponteseviadutos_26 = format_Ponteseviadutos_26.readFeatures(json_Ponteseviadutos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Ponteseviadutos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponteseviadutos_26.addFeatures(features_Ponteseviadutos_26);
var lyr_Ponteseviadutos_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ponteseviadutos_26, 
                style: style_Ponteseviadutos_26,
                interactive: false,
                title: '<img src="styles/legend/Ponteseviadutos_26.png" /> Pontes e viadutos'
            });
var format_Outrostrajetos_27 = new ol.format.GeoJSON();
var features_Outrostrajetos_27 = format_Outrostrajetos_27.readFeatures(json_Outrostrajetos_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Outrostrajetos_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outrostrajetos_27.addFeatures(features_Outrostrajetos_27);
var lyr_Outrostrajetos_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Outrostrajetos_27, 
                style: style_Outrostrajetos_27,
                interactive: false,
                title: '<img src="styles/legend/Outrostrajetos_27.png" /> Outros trajetos'
            });
var format_TrajetoZonaFrancaUAG_28 = new ol.format.GeoJSON();
var features_TrajetoZonaFrancaUAG_28 = format_TrajetoZonaFrancaUAG_28.readFeatures(json_TrajetoZonaFrancaUAG_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_TrajetoZonaFrancaUAG_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrajetoZonaFrancaUAG_28.addFeatures(features_TrajetoZonaFrancaUAG_28);
var lyr_TrajetoZonaFrancaUAG_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrajetoZonaFrancaUAG_28, 
                style: style_TrajetoZonaFrancaUAG_28,
                interactive: false,
                title: '<img src="styles/legend/TrajetoZonaFrancaUAG_28.png" /> Trajeto Zona Franca - UAG'
            });
var format_FurnasdoCavalum_29 = new ol.format.GeoJSON();
var features_FurnasdoCavalum_29 = format_FurnasdoCavalum_29.readFeatures(json_FurnasdoCavalum_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_FurnasdoCavalum_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FurnasdoCavalum_29.addFeatures(features_FurnasdoCavalum_29);
var lyr_FurnasdoCavalum_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FurnasdoCavalum_29, 
                style: style_FurnasdoCavalum_29,
                interactive: false,
                title: '<img src="styles/legend/FurnasdoCavalum_29.png" /> Furnas do Cavalum'
            });
var format_GrutasdeSoVicente_30 = new ol.format.GeoJSON();
var features_GrutasdeSoVicente_30 = format_GrutasdeSoVicente_30.readFeatures(json_GrutasdeSoVicente_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_GrutasdeSoVicente_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrutasdeSoVicente_30.addFeatures(features_GrutasdeSoVicente_30);
var lyr_GrutasdeSoVicente_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrutasdeSoVicente_30, 
                style: style_GrutasdeSoVicente_30,
                interactive: false,
                title: '<img src="styles/legend/GrutasdeSoVicente_30.png" /> Grutas de São Vicente'
            });
var format_Suscetibilidadeaoriscodeincndiosflorestais_31 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodeincndiosflorestais_31 = format_Suscetibilidadeaoriscodeincndiosflorestais_31.readFeatures(json_Suscetibilidadeaoriscodeincndiosflorestais_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodeincndiosflorestais_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodeincndiosflorestais_31.addFeatures(features_Suscetibilidadeaoriscodeincndiosflorestais_31);
var lyr_Suscetibilidadeaoriscodeincndiosflorestais_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaoriscodeincndiosflorestais_31, 
                style: style_Suscetibilidadeaoriscodeincndiosflorestais_31,
                interactive: false,
    title: 'Suscetibilidade ao risco de incêndios florestais<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_31_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_31_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_31_2.png" /> Elevada<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeincndiosflorestais_31_3.png" /> Nula ou Não Aplicável<br />'
        });
var format_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32 = new ol.format.GeoJSON();
var features_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32 = format_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32.readFeatures(json_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32.addFeatures(features_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32);
var lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32, 
                style: style_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32,
                interactive: true,
    title: 'Suscetibilidade a Incêndios e colapsos em centros históricos e em edifícios com elevada concentração populacional<br />\
    <img src="styles/legend/SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32_0.png" /> Baixa<br />\
    <img src="styles/legend/SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32_1.png" /> Moderada<br />\
    <img src="styles/legend/SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32_2.png" /> Elevada<br />'
        });
var format_Ocorrnciadeincndiosemtneis_33 = new ol.format.GeoJSON();
var features_Ocorrnciadeincndiosemtneis_33 = format_Ocorrnciadeincndiosemtneis_33.readFeatures(json_Ocorrnciadeincndiosemtneis_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Ocorrnciadeincndiosemtneis_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrnciadeincndiosemtneis_33.addFeatures(features_Ocorrnciadeincndiosemtneis_33);
var lyr_Ocorrnciadeincndiosemtneis_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ocorrnciadeincndiosemtneis_33, 
                style: style_Ocorrnciadeincndiosemtneis_33,
                interactive: true,
                title: '<img src="styles/legend/Ocorrnciadeincndiosemtneis_33.png" /> Ocorrência de incêndios em túneis'
            });
var format_Suscetibilidadeaincndiosemtneis_34 = new ol.format.GeoJSON();
var features_Suscetibilidadeaincndiosemtneis_34 = format_Suscetibilidadeaincndiosemtneis_34.readFeatures(json_Suscetibilidadeaincndiosemtneis_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaincndiosemtneis_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaincndiosemtneis_34.addFeatures(features_Suscetibilidadeaincndiosemtneis_34);
var lyr_Suscetibilidadeaincndiosemtneis_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaincndiosemtneis_34, 
                style: style_Suscetibilidadeaincndiosemtneis_34,
                interactive: false,
    title: 'Suscetibilidade a incêndios em túneis<br />\
    <img src="styles/legend/Suscetibilidadeaincndiosemtneis_34_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeaincndiosemtneis_34_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaincndiosemtneis_34_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35 = new ol.format.GeoJSON();
var features_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35 = format_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35.readFeatures(json_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35.addFeatures(features_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35);
var lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35, 
                style: style_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35,
                interactive: false,
    title: 'Suscetibilidade à ocorrencia de acidentes com substâncias biológicas, químicas e radiológicas<br />\
    <img src="styles/legend/Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35_2.png" /> Elevada<br />'
        });
var format_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36 = new ol.format.GeoJSON();
var features_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36 = format_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36.readFeatures(json_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36.addFeatures(features_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36);
var lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36, 
                style: style_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36,
                interactive: true,
    title: 'Suscetibilidade a acidentes que envolvam substâncias perigosas (Seveso III)<br />\
    <img src="styles/legend/SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36_0.png" /> Reduzida<br />\
    <img src="styles/legend/SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36_1.png" /> Moderada<br />\
    <img src="styles/legend/SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeaerosocosteiranabasedaarriba_37 = new ol.format.GeoJSON();
var features_Suscetibilidadeaerosocosteiranabasedaarriba_37 = format_Suscetibilidadeaerosocosteiranabasedaarriba_37.readFeatures(json_Suscetibilidadeaerosocosteiranabasedaarriba_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaerosocosteiranabasedaarriba_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaerosocosteiranabasedaarriba_37.addFeatures(features_Suscetibilidadeaerosocosteiranabasedaarriba_37);
var lyr_Suscetibilidadeaerosocosteiranabasedaarriba_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaerosocosteiranabasedaarriba_37, 
                style: style_Suscetibilidadeaerosocosteiranabasedaarriba_37,
                interactive: false,
    title: 'Suscetibilidade a erosão costeira na base da arriba<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_37_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_37_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_37_2.png" /> Elevada<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiranabasedaarriba_37_3.png" /> Estrutura<br />'
        });
var format_Suscetibilidadeaerosocosteiraemarribas_38 = new ol.format.GeoJSON();
var features_Suscetibilidadeaerosocosteiraemarribas_38 = format_Suscetibilidadeaerosocosteiraemarribas_38.readFeatures(json_Suscetibilidadeaerosocosteiraemarribas_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaerosocosteiraemarribas_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaerosocosteiraemarribas_38.addFeatures(features_Suscetibilidadeaerosocosteiraemarribas_38);
var lyr_Suscetibilidadeaerosocosteiraemarribas_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaerosocosteiraemarribas_38, 
                style: style_Suscetibilidadeaerosocosteiraemarribas_38,
                interactive: false,
    title: 'Suscetibilidade a erosão costeira em arribas<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiraemarribas_38_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiraemarribas_38_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaerosocosteiraemarribas_38_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeamovimentosdemassaemvertente_39 = new ol.format.GeoJSON();
var features_Suscetibilidadeamovimentosdemassaemvertente_39 = format_Suscetibilidadeamovimentosdemassaemvertente_39.readFeatures(json_Suscetibilidadeamovimentosdemassaemvertente_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeamovimentosdemassaemvertente_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeamovimentosdemassaemvertente_39.addFeatures(features_Suscetibilidadeamovimentosdemassaemvertente_39);
var lyr_Suscetibilidadeamovimentosdemassaemvertente_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeamovimentosdemassaemvertente_39, 
                style: style_Suscetibilidadeamovimentosdemassaemvertente_39,
                interactive: false,
    title: 'Suscetibilidade a movimentos de massa em vertente<br />\
    <img src="styles/legend/Suscetibilidadeamovimentosdemassaemvertente_39_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeamovimentosdemassaemvertente_39_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeamovimentosdemassaemvertente_39_2.png" /> Elevada<br />'
        });
var format_Suscetibilidadeaoriscodenevoeiros_40 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodenevoeiros_40 = format_Suscetibilidadeaoriscodenevoeiros_40.readFeatures(json_Suscetibilidadeaoriscodenevoeiros_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodenevoeiros_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodenevoeiros_40.addFeatures(features_Suscetibilidadeaoriscodenevoeiros_40);
var lyr_Suscetibilidadeaoriscodenevoeiros_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaoriscodenevoeiros_40, 
                style: style_Suscetibilidadeaoriscodenevoeiros_40,
                interactive: false,
    title: 'Suscetibilidade ao risco de nevoeiros<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodenevoeiros_40_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodenevoeiros_40_1.png" /> Elevada<br />'
        });
var format_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41 = new ol.format.GeoJSON();
var features_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41 = format_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41.readFeatures(json_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41.addFeatures(features_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41);
var lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41, 
                style: style_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41,
                interactive: true,
    title: 'Sismos com magnitude superior a 2,0 (escala de Richter) registados desde 2010<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41_0.png" /> 2,1 - 2,5<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41_1.png" /> 2,5 - 3<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41_2.png" /> 3 - 3,5<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41_3.png" /> 3,5 - 4<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41_4.png" /> 4 - 4,5<br />\
    <img src="styles/legend/Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41_5.png" /> 4,5 - 5,2<br />'
        });
var format_Suscetibilidadeocorrnciadesismos_42 = new ol.format.GeoJSON();
var features_Suscetibilidadeocorrnciadesismos_42 = format_Suscetibilidadeocorrnciadesismos_42.readFeatures(json_Suscetibilidadeocorrnciadesismos_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeocorrnciadesismos_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeocorrnciadesismos_42.addFeatures(features_Suscetibilidadeocorrnciadesismos_42);
var lyr_Suscetibilidadeocorrnciadesismos_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeocorrnciadesismos_42, 
                style: style_Suscetibilidadeocorrnciadesismos_42,
                interactive: false,
    title: 'Suscetibilidade à ocorrência de sismos<br />\
    <img src="styles/legend/Suscetibilidadeocorrnciadesismos_42_0.png" /> Baixa<br />'
        });
var format_Suscetibilidadeaatividadevulcnica_43 = new ol.format.GeoJSON();
var features_Suscetibilidadeaatividadevulcnica_43 = format_Suscetibilidadeaatividadevulcnica_43.readFeatures(json_Suscetibilidadeaatividadevulcnica_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaatividadevulcnica_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaatividadevulcnica_43.addFeatures(features_Suscetibilidadeaatividadevulcnica_43);
var lyr_Suscetibilidadeaatividadevulcnica_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaatividadevulcnica_43, 
                style: style_Suscetibilidadeaatividadevulcnica_43,
                interactive: false,
    title: 'Suscetibilidade a atividade vulcânica<br />\
    <img src="styles/legend/Suscetibilidadeaatividadevulcnica_43_0.png" /> Baixa<br />'
        });
var format_OcorrnciasdeemanacesdeCO2_44 = new ol.format.GeoJSON();
var features_OcorrnciasdeemanacesdeCO2_44 = format_OcorrnciasdeemanacesdeCO2_44.readFeatures(json_OcorrnciasdeemanacesdeCO2_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_OcorrnciasdeemanacesdeCO2_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrnciasdeemanacesdeCO2_44.addFeatures(features_OcorrnciasdeemanacesdeCO2_44);
var lyr_OcorrnciasdeemanacesdeCO2_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OcorrnciasdeemanacesdeCO2_44, 
                style: style_OcorrnciasdeemanacesdeCO2_44,
                interactive: false,
                title: '<img src="styles/legend/OcorrnciasdeemanacesdeCO2_44.png" /> Ocorrências de emanacões de CO2'
            });
var format_Suscetibilidadeaoriscodetsunami_45 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodetsunami_45 = format_Suscetibilidadeaoriscodetsunami_45.readFeatures(json_Suscetibilidadeaoriscodetsunami_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodetsunami_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodetsunami_45.addFeatures(features_Suscetibilidadeaoriscodetsunami_45);
var lyr_Suscetibilidadeaoriscodetsunami_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaoriscodetsunami_45, 
                style: style_Suscetibilidadeaoriscodetsunami_45,
                interactive: false,
    title: 'Suscetibilidade ao risco de tsunami<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodetsunami_45_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodetsunami_45_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodetsunami_45_2.png" /> Elevada<br />'
        });
var format_Ocorrnciadegalgamentoscosteiros_46 = new ol.format.GeoJSON();
var features_Ocorrnciadegalgamentoscosteiros_46 = format_Ocorrnciadegalgamentoscosteiros_46.readFeatures(json_Ocorrnciadegalgamentoscosteiros_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Ocorrnciadegalgamentoscosteiros_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrnciadegalgamentoscosteiros_46.addFeatures(features_Ocorrnciadegalgamentoscosteiros_46);
var lyr_Ocorrnciadegalgamentoscosteiros_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ocorrnciadegalgamentoscosteiros_46, 
                style: style_Ocorrnciadegalgamentoscosteiros_46,
                interactive: true,
                title: '<img src="styles/legend/Ocorrnciadegalgamentoscosteiros_46.png" /> Ocorrência de galgamentos costeiros'
            });
var format_Suscetibilidadeagalgamentoscosteiros_47 = new ol.format.GeoJSON();
var features_Suscetibilidadeagalgamentoscosteiros_47 = format_Suscetibilidadeagalgamentoscosteiros_47.readFeatures(json_Suscetibilidadeagalgamentoscosteiros_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeagalgamentoscosteiros_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeagalgamentoscosteiros_47.addFeatures(features_Suscetibilidadeagalgamentoscosteiros_47);
var lyr_Suscetibilidadeagalgamentoscosteiros_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeagalgamentoscosteiros_47, 
                style: style_Suscetibilidadeagalgamentoscosteiros_47,
                interactive: false,
    title: 'Suscetibilidade a galgamentos costeiros<br />\
    <img src="styles/legend/Suscetibilidadeagalgamentoscosteiros_47_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeagalgamentoscosteiros_47_1.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeagalgamentoscosteiros_47_2.png" /> Elevada<br />'
        });
var format_Baciashidrogrficas_48 = new ol.format.GeoJSON();
var features_Baciashidrogrficas_48 = format_Baciashidrogrficas_48.readFeatures(json_Baciashidrogrficas_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Baciashidrogrficas_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baciashidrogrficas_48.addFeatures(features_Baciashidrogrficas_48);
var lyr_Baciashidrogrficas_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Baciashidrogrficas_48, 
                style: style_Baciashidrogrficas_48,
                interactive: true,
                title: '<img src="styles/legend/Baciashidrogrficas_48.png" /> Bacias hidrográficas'
            });
var format_reasinundveis_49 = new ol.format.GeoJSON();
var features_reasinundveis_49 = format_reasinundveis_49.readFeatures(json_reasinundveis_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_reasinundveis_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasinundveis_49.addFeatures(features_reasinundveis_49);
var lyr_reasinundveis_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasinundveis_49, 
                style: style_reasinundveis_49,
                interactive: true,
                title: '<img src="styles/legend/reasinundveis_49.png" /> Áreas inundáveis'
            });
var format_Suscetibilidadeatempestadesdevento_50 = new ol.format.GeoJSON();
var features_Suscetibilidadeatempestadesdevento_50 = format_Suscetibilidadeatempestadesdevento_50.readFeatures(json_Suscetibilidadeatempestadesdevento_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeatempestadesdevento_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeatempestadesdevento_50.addFeatures(features_Suscetibilidadeatempestadesdevento_50);
var lyr_Suscetibilidadeatempestadesdevento_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeatempestadesdevento_50, 
                style: style_Suscetibilidadeatempestadesdevento_50,
                interactive: false,
    title: 'Suscetibilidade a tempestades de vento<br />\
    <img src="styles/legend/Suscetibilidadeatempestadesdevento_50_0.png" /> Moderada<br />\
    <img src="styles/legend/Suscetibilidadeatempestadesdevento_50_1.png" /> Elevada<br />'
        });
var format_Suscetibilidadeaoriscodesecas_51 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodesecas_51 = format_Suscetibilidadeaoriscodesecas_51.readFeatures(json_Suscetibilidadeaoriscodesecas_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodesecas_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodesecas_51.addFeatures(features_Suscetibilidadeaoriscodesecas_51);
var lyr_Suscetibilidadeaoriscodesecas_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaoriscodesecas_51, 
                style: style_Suscetibilidadeaoriscodesecas_51,
                interactive: false,
    title: 'Suscetibilidade ao risco de secas<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodesecas_51_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodesecas_51_1.png" /> Moderada<br />'
        });
var format_Suscetibilidadeaondasdefrio_52 = new ol.format.GeoJSON();
var features_Suscetibilidadeaondasdefrio_52 = format_Suscetibilidadeaondasdefrio_52.readFeatures(json_Suscetibilidadeaondasdefrio_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaondasdefrio_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaondasdefrio_52.addFeatures(features_Suscetibilidadeaondasdefrio_52);
var lyr_Suscetibilidadeaondasdefrio_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaondasdefrio_52, 
                style: style_Suscetibilidadeaondasdefrio_52,
                interactive: false,
    title: 'Suscetibilidade a ondas de frio<br />\
    <img src="styles/legend/Suscetibilidadeaondasdefrio_52_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaondasdefrio_52_1.png" /> Moderada<br />'
        });
var format_Suscetibilidadeaondasdecalor_53 = new ol.format.GeoJSON();
var features_Suscetibilidadeaondasdecalor_53 = format_Suscetibilidadeaondasdecalor_53.readFeatures(json_Suscetibilidadeaondasdecalor_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaondasdecalor_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaondasdecalor_53.addFeatures(features_Suscetibilidadeaondasdecalor_53);
var lyr_Suscetibilidadeaondasdecalor_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaondasdecalor_53, 
                style: style_Suscetibilidadeaondasdecalor_53,
                interactive: false,
    title: 'Suscetibilidade a ondas de calor<br />\
    <img src="styles/legend/Suscetibilidadeaondasdecalor_53_0.png" /> Baixa<br />\
    <img src="styles/legend/Suscetibilidadeaondasdecalor_53_1.png" /> Moderada<br />'
        });
var format_Suscetibilidadeaoriscodeneves_54 = new ol.format.GeoJSON();
var features_Suscetibilidadeaoriscodeneves_54 = format_Suscetibilidadeaoriscodeneves_54.readFeatures(json_Suscetibilidadeaoriscodeneves_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Suscetibilidadeaoriscodeneves_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suscetibilidadeaoriscodeneves_54.addFeatures(features_Suscetibilidadeaoriscodeneves_54);
var lyr_Suscetibilidadeaoriscodeneves_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Suscetibilidadeaoriscodeneves_54, 
                style: style_Suscetibilidadeaoriscodeneves_54,
                interactive: false,
    title: 'Suscetibilidade ao risco de nevões<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeneves_54_0.png" /> Reduzida<br />\
    <img src="styles/legend/Suscetibilidadeaoriscodeneves_54_1.png" /> Moderada<br />'
        });
var format_Freguesias_55 = new ol.format.GeoJSON();
var features_Freguesias_55 = format_Freguesias_55.readFeatures(json_Freguesias_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Freguesias_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freguesias_55.addFeatures(features_Freguesias_55);
var lyr_Freguesias_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Freguesias_55, 
                style: style_Freguesias_55,
                interactive: true,
                title: '<img src="styles/legend/Freguesias_55.png" /> Freguesias'
            });
var format_Concelhos_56 = new ol.format.GeoJSON();
var features_Concelhos_56 = format_Concelhos_56.readFeatures(json_Concelhos_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5016'});
var jsonSource_Concelhos_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concelhos_56.addFeatures(features_Concelhos_56);
var lyr_Concelhos_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concelhos_56, 
                style: style_Concelhos_56,
                interactive: true,
                title: '<img src="styles/legend/Concelhos_56.png" /> Concelhos'
            });
var group_Localizaodascavidadessubterrneasnaturais = new ol.layer.Group({
                                layers: [lyr_FurnasdoCavalum_29,lyr_GrutasdeSoVicente_30,],
                                title: "Localização das cavidades subterrâneas naturais"});
var group_Acidentesnotransportedemercadoriasperigosas = new ol.layer.Group({
                                layers: [lyr_Outrostrajetos_27,lyr_TrajetoZonaFrancaUAG_28,],
                                title: "Acidentes no transporte de mercadorias perigosas"});
var group_Localizaodetneisponteseoutrasinfraestruturas = new ol.layer.Group({
                                layers: [lyr_Tneis_25,lyr_Ponteseviadutos_26,],
                                title: "Localização de túneis, pontes e outras infraestruturas"});
var group_Suscetibilidadeaoriscodeemergnciasradiolgicas = new ol.layer.Group({
                                layers: [lyr_UnidadedeRadioterapiadoFunchal_14,lyr_PortoMartimodoPortoSanto_15,lyr_PortoMartimodoFunchal_16,lyr_PortoMartimodoCanial_17,lyr_MadeiraMedicalCenter_18,lyr_HospitalParticulardaMadeira_19,lyr_HospitalDrNelioMendona_20,lyr_HospitaldaLuz_21,lyr_CentroRadiologicodoFunchal_22,lyr_AeroportodoPortoSanto_23,lyr_AeroportodaMadeira_24,],
                                title: "Suscetibilidade ao risco de emergências radiológicas"});
var group_Acidenteseminstalaesdecombustveisleoselubrificantes = new ol.layer.Group({
                                layers: [lyr_Armazenagemdecombustveis_11,lyr_GsdePetrleoLiquefeito_12,lyr_Classesdesuscetibilidade_13,],
                                title: "Acidentes em instalações de combustíveis, óleos e lubrificantes"});
var group_Suscetibilidadeaoriscodeinundaoporroturadebarragens = new ol.layer.Group({
                                layers: [lyr_reasinundveis_9,lyr_Barragens_10,],
                                title: "Suscetibilidade ao risco de inundação por rotura de barragens"});
var group_Armazenagemdeprodutosexplosivos = new ol.layer.Group({
                                layers: [lyr_Localizaodospaiis_8,],
                                title: "Armazenagem de produtos explosivos"});
var group_Acidentesemreasdeocupaoindustrialeparquesempresariais = new ol.layer.Group({
                                layers: [lyr_Parquesempresariais_5,lyr_Estabelecimentosindustriais_6,lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7,],
                                title: "Acidentes em áreas de ocupação industrial e parques empresariais "});
var group_Acidentesrodovirios = new ol.layer.Group({
                                layers: [lyr_Acidentesgraves_3,lyr_Acidentesrodovirios_4,],
                                title: "Acidentes rodoviários"});
var group_Basecartogrfica = new ol.layer.Group({
                                layers: [lyr_OrtofotamapadaRAM_0,lyr_OceanoAtlntico_1,lyr_Informao_2,],
                                title: "Base cartográfica"});

lyr_OrtofotamapadaRAM_0.setVisible(true);lyr_OceanoAtlntico_1.setVisible(true);lyr_Informao_2.setVisible(true);lyr_Acidentesgraves_3.setVisible(false);lyr_Acidentesrodovirios_4.setVisible(false);lyr_Parquesempresariais_5.setVisible(false);lyr_Estabelecimentosindustriais_6.setVisible(false);lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7.setVisible(false);lyr_Localizaodospaiis_8.setVisible(false);lyr_reasinundveis_9.setVisible(false);lyr_Barragens_10.setVisible(false);lyr_Armazenagemdecombustveis_11.setVisible(false);lyr_GsdePetrleoLiquefeito_12.setVisible(false);lyr_Classesdesuscetibilidade_13.setVisible(false);lyr_UnidadedeRadioterapiadoFunchal_14.setVisible(false);lyr_PortoMartimodoPortoSanto_15.setVisible(false);lyr_PortoMartimodoFunchal_16.setVisible(false);lyr_PortoMartimodoCanial_17.setVisible(false);lyr_MadeiraMedicalCenter_18.setVisible(false);lyr_HospitalParticulardaMadeira_19.setVisible(false);lyr_HospitalDrNelioMendona_20.setVisible(false);lyr_HospitaldaLuz_21.setVisible(false);lyr_CentroRadiologicodoFunchal_22.setVisible(false);lyr_AeroportodoPortoSanto_23.setVisible(false);lyr_AeroportodaMadeira_24.setVisible(false);lyr_Tneis_25.setVisible(false);lyr_Ponteseviadutos_26.setVisible(false);lyr_Outrostrajetos_27.setVisible(false);lyr_TrajetoZonaFrancaUAG_28.setVisible(false);lyr_FurnasdoCavalum_29.setVisible(false);lyr_GrutasdeSoVicente_30.setVisible(false);lyr_Suscetibilidadeaoriscodeincndiosflorestais_31.setVisible(false);lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32.setVisible(false);lyr_Ocorrnciadeincndiosemtneis_33.setVisible(false);lyr_Suscetibilidadeaincndiosemtneis_34.setVisible(false);lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35.setVisible(false);lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36.setVisible(false);lyr_Suscetibilidadeaerosocosteiranabasedaarriba_37.setVisible(false);lyr_Suscetibilidadeaerosocosteiraemarribas_38.setVisible(false);lyr_Suscetibilidadeamovimentosdemassaemvertente_39.setVisible(false);lyr_Suscetibilidadeaoriscodenevoeiros_40.setVisible(false);lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41.setVisible(false);lyr_Suscetibilidadeocorrnciadesismos_42.setVisible(false);lyr_Suscetibilidadeaatividadevulcnica_43.setVisible(false);lyr_OcorrnciasdeemanacesdeCO2_44.setVisible(false);lyr_Suscetibilidadeaoriscodetsunami_45.setVisible(false);lyr_Ocorrnciadegalgamentoscosteiros_46.setVisible(false);lyr_Suscetibilidadeagalgamentoscosteiros_47.setVisible(false);lyr_Baciashidrogrficas_48.setVisible(false);lyr_reasinundveis_49.setVisible(false);lyr_Suscetibilidadeatempestadesdevento_50.setVisible(false);lyr_Suscetibilidadeaoriscodesecas_51.setVisible(false);lyr_Suscetibilidadeaondasdefrio_52.setVisible(false);lyr_Suscetibilidadeaondasdecalor_53.setVisible(false);lyr_Suscetibilidadeaoriscodeneves_54.setVisible(false);lyr_Freguesias_55.setVisible(false);lyr_Concelhos_56.setVisible(true);
var layersList = [group_Basecartogrfica,group_Acidentesrodovirios,group_Acidentesemreasdeocupaoindustrialeparquesempresariais,group_Armazenagemdeprodutosexplosivos,group_Suscetibilidadeaoriscodeinundaoporroturadebarragens,group_Acidenteseminstalaesdecombustveisleoselubrificantes,group_Suscetibilidadeaoriscodeemergnciasradiolgicas,group_Localizaodetneisponteseoutrasinfraestruturas,group_Acidentesnotransportedemercadoriasperigosas,group_Localizaodascavidadessubterrneasnaturais,lyr_Suscetibilidadeaoriscodeincndiosflorestais_31,lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32,lyr_Ocorrnciadeincndiosemtneis_33,lyr_Suscetibilidadeaincndiosemtneis_34,lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35,lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36,lyr_Suscetibilidadeaerosocosteiranabasedaarriba_37,lyr_Suscetibilidadeaerosocosteiraemarribas_38,lyr_Suscetibilidadeamovimentosdemassaemvertente_39,lyr_Suscetibilidadeaoriscodenevoeiros_40,lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41,lyr_Suscetibilidadeocorrnciadesismos_42,lyr_Suscetibilidadeaatividadevulcnica_43,lyr_OcorrnciasdeemanacesdeCO2_44,lyr_Suscetibilidadeaoriscodetsunami_45,lyr_Ocorrnciadegalgamentoscosteiros_46,lyr_Suscetibilidadeagalgamentoscosteiros_47,lyr_Baciashidrogrficas_48,lyr_reasinundveis_49,lyr_Suscetibilidadeatempestadesdevento_50,lyr_Suscetibilidadeaoriscodesecas_51,lyr_Suscetibilidadeaondasdefrio_52,lyr_Suscetibilidadeaondasdecalor_53,lyr_Suscetibilidadeaoriscodeneves_54,lyr_Freguesias_55,lyr_Concelhos_56];
lyr_OceanoAtlntico_1.set('fieldAliases', {'id': 'id', });
lyr_Informao_2.set('fieldAliases', {'id': 'id', 'info': 'info', });
lyr_Acidentesgraves_3.set('fieldAliases', {'Ocorrencia': 'Ocorrencia', 'Local': 'Local', });
lyr_Acidentesrodovirios_4.set('fieldAliases', {'Designacao': 'Designacao', 'Ano': 'Ano', 'Classes': 'Classes', });
lyr_Parquesempresariais_5.set('fieldAliases', {'DESIGNACAO': 'DESIGNACAO', });
lyr_Estabelecimentosindustriais_6.set('fieldAliases', {'Fonte': 'Fonte', 'Legenda': 'Legenda', });
lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7.set('fieldAliases', {'Local': 'Local', 'Act_Princi': 'Act_Princi', 'Classe': 'Classe', 'Legenda': 'Legenda', });
lyr_Localizaodospaiis_8.set('fieldAliases', {'id': 'id', });
lyr_reasinundveis_9.set('fieldAliases', {'Nome': 'Nome', });
lyr_Barragens_10.set('fieldAliases', {'Nome': 'Nome', });
lyr_Armazenagemdecombustveis_11.set('fieldAliases', {'id': 'id', 'LAT_GMS': 'LAT_GMS', 'LON_GMS': 'LON_GMS', });
lyr_GsdePetrleoLiquefeito_12.set('fieldAliases', {'LAT_GMS': 'LAT_GMS', 'LON_GMS': 'LON_GMS', });
lyr_Classesdesuscetibilidade_13.set('fieldAliases', {'mrb_dist': 'mrb_dist', });
lyr_UnidadedeRadioterapiadoFunchal_14.set('fieldAliases', {'id': 'id', });
lyr_PortoMartimodoPortoSanto_15.set('fieldAliases', {'id': 'id', });
lyr_PortoMartimodoFunchal_16.set('fieldAliases', {'id': 'id', });
lyr_PortoMartimodoCanial_17.set('fieldAliases', {'id': 'id', });
lyr_MadeiraMedicalCenter_18.set('fieldAliases', {'id': 'id', });
lyr_HospitalParticulardaMadeira_19.set('fieldAliases', {'id': 'id', });
lyr_HospitalDrNelioMendona_20.set('fieldAliases', {'id': 'id', });
lyr_HospitaldaLuz_21.set('fieldAliases', {'id': 'id', });
lyr_CentroRadiologicodoFunchal_22.set('fieldAliases', {'id': 'id', });
lyr_AeroportodoPortoSanto_23.set('fieldAliases', {'id': 'id', });
lyr_AeroportodaMadeira_24.set('fieldAliases', {'id': 'id', });
lyr_Tneis_25.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', 'osm_id_2': 'osm_id_2', 'susce': 'susce', });
lyr_Ponteseviadutos_26.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', });
lyr_Outrostrajetos_27.set('fieldAliases', {'Trajetos': 'Trajetos', 'Legenda': 'Legenda', 'layer': 'layer', 'path': 'path', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', });
lyr_TrajetoZonaFrancaUAG_28.set('fieldAliases', {'Trajetos': 'Trajetos', 'Legenda': 'Legenda', });
lyr_FurnasdoCavalum_29.set('fieldAliases', {'id': 'id', 'descr': 'descr', 'coord': 'coord', });
lyr_GrutasdeSoVicente_30.set('fieldAliases', {'Id': 'Id', 'Descr': 'Descr', 'coordenada': 'coordenada', });
lyr_Suscetibilidadeaoriscodeincndiosflorestais_31.set('fieldAliases', {'CLASSES': 'CLASSES', });
lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32.set('fieldAliases', {'LUG11DESIG': 'Local', 'Classes': 'Classes', });
lyr_Ocorrnciadeincndiosemtneis_33.set('fieldAliases', {'descricao': 'Local', 'Descriçã': 'Descrição', });
lyr_Suscetibilidadeaincndiosemtneis_34.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', 'osm_id_2': 'osm_id_2', 'susce': 'susce', });
lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35.set('fieldAliases', {'Suscep': 'Suscep', });
lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36.set('fieldAliases', {'Descricao': 'Descrição', 'Classe': 'Suscetibilidade', });
lyr_Suscetibilidadeaerosocosteiranabasedaarriba_37.set('fieldAliases', {'Suscetibil': 'Suscetibil', 'Tipo': 'Tipo', });
lyr_Suscetibilidadeaerosocosteiraemarribas_38.set('fieldAliases', {'Suscetibil': 'Suscetibil', });
lyr_Suscetibilidadeamovimentosdemassaemvertente_39.set('fieldAliases', {'CLASSES': 'CLASSES', });
lyr_Suscetibilidadeaoriscodenevoeiros_40.set('fieldAliases', {'classe': 'classe', });
lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41.set('fieldAliases', {'Magnitude': 'Magnitude', });
lyr_Suscetibilidadeocorrnciadesismos_42.set('fieldAliases', {'Concelho': 'Concelho', 'CLASSES': 'CLASSES', });
lyr_Suscetibilidadeaatividadevulcnica_43.set('fieldAliases', {'CLASSES': 'CLASSES', });
lyr_OcorrnciasdeemanacesdeCO2_44.set('fieldAliases', {'Designacao': 'Designacao', 'Tipo': 'Tipo', });
lyr_Suscetibilidadeaoriscodetsunami_45.set('fieldAliases', {'layer': 'layer', });
lyr_Ocorrnciadegalgamentoscosteiros_46.set('fieldAliases', {'Locais GC': 'Local', });
lyr_Suscetibilidadeagalgamentoscosteiros_47.set('fieldAliases', {'Suscetibil': 'Suscetibil', 'Shape_Leng': 'Shape_Leng', });
lyr_Baciashidrogrficas_48.set('fieldAliases', {'Bacia': 'Bacia hidrográfica', });
lyr_reasinundveis_49.set('fieldAliases', {'Bacia': 'Bacia', });
lyr_Suscetibilidadeatempestadesdevento_50.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaoriscodesecas_51.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaondasdefrio_52.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaondasdecalor_53.set('fieldAliases', {'Classe': 'Classe', });
lyr_Suscetibilidadeaoriscodeneves_54.set('fieldAliases', {'Classe': 'Classe', });
lyr_Freguesias_55.set('fieldAliases', {'Freguesia': 'Freguesia', 'Residentes': 'Residentes', });
lyr_Concelhos_56.set('fieldAliases', {'Concelho': 'Concelho', 'Residentes': 'Residentes', });
lyr_OceanoAtlntico_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Informao_2.set('fieldImages', {'id': 'TextEdit', 'info': 'TextEdit', });
lyr_Acidentesgraves_3.set('fieldImages', {'Ocorrencia': 'TextEdit', 'Local': 'TextEdit', });
lyr_Acidentesrodovirios_4.set('fieldImages', {'Designacao': 'TextEdit', 'Ano': 'TextEdit', 'Classes': 'TextEdit', });
lyr_Parquesempresariais_5.set('fieldImages', {'DESIGNACAO': 'TextEdit', });
lyr_Estabelecimentosindustriais_6.set('fieldImages', {'Fonte': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7.set('fieldImages', {'Local': 'TextEdit', 'Act_Princi': 'TextEdit', 'Classe': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_Localizaodospaiis_8.set('fieldImages', {'id': 'TextEdit', });
lyr_reasinundveis_9.set('fieldImages', {'Nome': 'TextEdit', });
lyr_Barragens_10.set('fieldImages', {'Nome': 'TextEdit', });
lyr_Armazenagemdecombustveis_11.set('fieldImages', {'id': 'TextEdit', 'LAT_GMS': 'TextEdit', 'LON_GMS': 'TextEdit', });
lyr_GsdePetrleoLiquefeito_12.set('fieldImages', {'LAT_GMS': 'TextEdit', 'LON_GMS': 'TextEdit', });
lyr_Classesdesuscetibilidade_13.set('fieldImages', {'mrb_dist': 'TextEdit', });
lyr_UnidadedeRadioterapiadoFunchal_14.set('fieldImages', {'id': 'TextEdit', });
lyr_PortoMartimodoPortoSanto_15.set('fieldImages', {'id': 'TextEdit', });
lyr_PortoMartimodoFunchal_16.set('fieldImages', {'id': 'TextEdit', });
lyr_PortoMartimodoCanial_17.set('fieldImages', {'id': 'TextEdit', });
lyr_MadeiraMedicalCenter_18.set('fieldImages', {'id': 'TextEdit', });
lyr_HospitalParticulardaMadeira_19.set('fieldImages', {'id': 'TextEdit', });
lyr_HospitalDrNelioMendona_20.set('fieldImages', {'id': 'TextEdit', });
lyr_HospitaldaLuz_21.set('fieldImages', {'id': 'TextEdit', });
lyr_CentroRadiologicodoFunchal_22.set('fieldImages', {'id': 'TextEdit', });
lyr_AeroportodoPortoSanto_23.set('fieldImages', {'id': 'TextEdit', });
lyr_AeroportodaMadeira_24.set('fieldImages', {'id': 'TextEdit', });
lyr_Tneis_25.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', 'osm_id_2': 'TextEdit', 'susce': 'TextEdit', });
lyr_Ponteseviadutos_26.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', });
lyr_Outrostrajetos_27.set('fieldImages', {'Trajetos': 'TextEdit', 'Legenda': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', });
lyr_TrajetoZonaFrancaUAG_28.set('fieldImages', {'Trajetos': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_FurnasdoCavalum_29.set('fieldImages', {'id': 'TextEdit', 'descr': 'TextEdit', 'coord': 'TextEdit', });
lyr_GrutasdeSoVicente_30.set('fieldImages', {'Id': 'Range', 'Descr': 'TextEdit', 'coordenada': 'TextEdit', });
lyr_Suscetibilidadeaoriscodeincndiosflorestais_31.set('fieldImages', {'CLASSES': 'TextEdit', });
lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32.set('fieldImages', {'LUG11DESIG': 'TextEdit', 'Classes': 'TextEdit', });
lyr_Ocorrnciadeincndiosemtneis_33.set('fieldImages', {'descricao': 'TextEdit', 'Descriçã': 'TextEdit', });
lyr_Suscetibilidadeaincndiosemtneis_34.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', 'osm_id_2': 'TextEdit', 'susce': 'TextEdit', });
lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35.set('fieldImages', {'Suscep': 'TextEdit', });
lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36.set('fieldImages', {'Descricao': 'TextEdit', 'Classe': 'TextEdit', });
lyr_Suscetibilidadeaerosocosteiranabasedaarriba_37.set('fieldImages', {'Suscetibil': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Suscetibilidadeaerosocosteiraemarribas_38.set('fieldImages', {'Suscetibil': 'TextEdit', });
lyr_Suscetibilidadeamovimentosdemassaemvertente_39.set('fieldImages', {'CLASSES': 'TextEdit', });
lyr_Suscetibilidadeaoriscodenevoeiros_40.set('fieldImages', {'classe': 'TextEdit', });
lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41.set('fieldImages', {'Magnitude': 'TextEdit', });
lyr_Suscetibilidadeocorrnciadesismos_42.set('fieldImages', {'Concelho': 'TextEdit', 'CLASSES': 'TextEdit', });
lyr_Suscetibilidadeaatividadevulcnica_43.set('fieldImages', {'CLASSES': 'TextEdit', });
lyr_OcorrnciasdeemanacesdeCO2_44.set('fieldImages', {'Designacao': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Suscetibilidadeaoriscodetsunami_45.set('fieldImages', {'layer': 'TextEdit', });
lyr_Ocorrnciadegalgamentoscosteiros_46.set('fieldImages', {'Locais GC': 'TextEdit', });
lyr_Suscetibilidadeagalgamentoscosteiros_47.set('fieldImages', {'Suscetibil': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Baciashidrogrficas_48.set('fieldImages', {'Bacia': 'TextEdit', });
lyr_reasinundveis_49.set('fieldImages', {'Bacia': 'TextEdit', });
lyr_Suscetibilidadeatempestadesdevento_50.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaoriscodesecas_51.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaondasdefrio_52.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaondasdecalor_53.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Suscetibilidadeaoriscodeneves_54.set('fieldImages', {'Classe': 'TextEdit', });
lyr_Freguesias_55.set('fieldImages', {'Freguesia': 'TextEdit', 'Residentes': 'TextEdit', });
lyr_Concelhos_56.set('fieldImages', {'Concelho': 'TextEdit', 'Residentes': 'TextEdit', });
lyr_OceanoAtlntico_1.set('fieldLabels', {});
lyr_Informao_2.set('fieldLabels', {});
lyr_Acidentesgraves_3.set('fieldLabels', {});
lyr_Acidentesrodovirios_4.set('fieldLabels', {});
lyr_Parquesempresariais_5.set('fieldLabels', {});
lyr_Estabelecimentosindustriais_6.set('fieldLabels', {});
lyr_Suscetibilidademoderadaocorrnciadeacidentesemestabelecimentosindustriais_7.set('fieldLabels', {});
lyr_Localizaodospaiis_8.set('fieldLabels', {});
lyr_reasinundveis_9.set('fieldLabels', {});
lyr_Barragens_10.set('fieldLabels', {});
lyr_Armazenagemdecombustveis_11.set('fieldLabels', {});
lyr_GsdePetrleoLiquefeito_12.set('fieldLabels', {});
lyr_Classesdesuscetibilidade_13.set('fieldLabels', {});
lyr_UnidadedeRadioterapiadoFunchal_14.set('fieldLabels', {});
lyr_PortoMartimodoPortoSanto_15.set('fieldLabels', {});
lyr_PortoMartimodoFunchal_16.set('fieldLabels', {});
lyr_PortoMartimodoCanial_17.set('fieldLabels', {});
lyr_MadeiraMedicalCenter_18.set('fieldLabels', {});
lyr_HospitalParticulardaMadeira_19.set('fieldLabels', {});
lyr_HospitalDrNelioMendona_20.set('fieldLabels', {});
lyr_HospitaldaLuz_21.set('fieldLabels', {});
lyr_CentroRadiologicodoFunchal_22.set('fieldLabels', {});
lyr_AeroportodoPortoSanto_23.set('fieldLabels', {});
lyr_AeroportodaMadeira_24.set('fieldLabels', {});
lyr_Tneis_25.set('fieldLabels', {});
lyr_Ponteseviadutos_26.set('fieldLabels', {});
lyr_Outrostrajetos_27.set('fieldLabels', {});
lyr_TrajetoZonaFrancaUAG_28.set('fieldLabels', {});
lyr_FurnasdoCavalum_29.set('fieldLabels', {});
lyr_GrutasdeSoVicente_30.set('fieldLabels', {});
lyr_Suscetibilidadeaoriscodeincndiosflorestais_31.set('fieldLabels', {'CLASSES': 'no label', });
lyr_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32.set('fieldLabels', {'LUG11DESIG': 'inline label', 'Classes': 'inline label', });
lyr_Ocorrnciadeincndiosemtneis_33.set('fieldLabels', {'descricao': 'inline label', 'Descriçã': 'inline label', });
lyr_Suscetibilidadeaincndiosemtneis_34.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'compriment': 'no label', 'osm_id_2': 'no label', 'susce': 'no label', });
lyr_Suscetibilidadeocorrenciadeacidentescomsubstnciasbiolgicasqumicaseradiolgicas_35.set('fieldLabels', {'Suscep': 'no label', });
lyr_SuscetibilidadeaacidentesqueenvolvamsubstnciasperigosasSevesoIII_36.set('fieldLabels', {'Descricao': 'inline label', 'Classe': 'inline label', });
lyr_Suscetibilidadeaerosocosteiranabasedaarriba_37.set('fieldLabels', {'Suscetibil': 'no label', 'Tipo': 'no label', });
lyr_Suscetibilidadeaerosocosteiraemarribas_38.set('fieldLabels', {'Suscetibil': 'no label', });
lyr_Suscetibilidadeamovimentosdemassaemvertente_39.set('fieldLabels', {'CLASSES': 'no label', });
lyr_Suscetibilidadeaoriscodenevoeiros_40.set('fieldLabels', {'classe': 'no label', });
lyr_Sismoscommagnitudesuperiora20escaladeRichterregistadosdesde2010_41.set('fieldLabels', {'Magnitude': 'inline label', });
lyr_Suscetibilidadeocorrnciadesismos_42.set('fieldLabels', {'Concelho': 'no label', 'CLASSES': 'no label', });
lyr_Suscetibilidadeaatividadevulcnica_43.set('fieldLabels', {'CLASSES': 'no label', });
lyr_OcorrnciasdeemanacesdeCO2_44.set('fieldLabels', {'Designacao': 'no label', 'Tipo': 'no label', });
lyr_Suscetibilidadeaoriscodetsunami_45.set('fieldLabels', {'layer': 'no label', });
lyr_Ocorrnciadegalgamentoscosteiros_46.set('fieldLabels', {'Locais GC': 'inline label', });
lyr_Suscetibilidadeagalgamentoscosteiros_47.set('fieldLabels', {'Suscetibil': 'no label', 'Shape_Leng': 'no label', });
lyr_Baciashidrogrficas_48.set('fieldLabels', {'Bacia': 'inline label', });
lyr_reasinundveis_49.set('fieldLabels', {'Bacia': 'inline label', });
lyr_Suscetibilidadeatempestadesdevento_50.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaoriscodesecas_51.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaondasdefrio_52.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaondasdecalor_53.set('fieldLabels', {'Classe': 'no label', });
lyr_Suscetibilidadeaoriscodeneves_54.set('fieldLabels', {'Classe': 'no label', });
lyr_Freguesias_55.set('fieldLabels', {'Freguesia': 'inline label', 'Residentes': 'inline label', });
lyr_Concelhos_56.set('fieldLabels', {'Concelho': 'inline label', 'Residentes': 'inline label', });
lyr_Concelhos_56.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});