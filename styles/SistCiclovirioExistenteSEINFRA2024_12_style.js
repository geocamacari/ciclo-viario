var size = 0;
var placement = 'point';
function categories_SistCiclovirioExistenteSEINFRA2024_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CICLOVIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,5,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CICLOFAIXA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,124,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SistCiclovirioExistenteSEINFRA2024_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CARACTERIZ");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_SistCiclovirioExistenteSEINFRA2024_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
