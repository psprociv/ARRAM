var size = 0;
var placement = 'point';

var style_Acidentesrodovirios_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.8 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          stroke: new ol.style.Stroke({color: 'rgba(245,119,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}),
                                          fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.8 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          stroke: new ol.style.Stroke({color: 'rgba(245,119,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}),
                                          fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
