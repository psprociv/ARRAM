var size = 0;
var placement = 'point';
function categories_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Baixa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,196,39,0.809)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(0,196,39,0.809)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Moderada':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,240,0,0.809)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(248,240,0,0.809)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Elevada':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,1,23,0.809)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(220,1,23,0.809)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Classes");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.3000000000000003;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_SuscetibilidadeaIncndiosecolapsosemcentroshistricoseemedifcioscomelevadaconcentraopopulacional_32(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
