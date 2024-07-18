var size = 0;
var placement = 'point';

var style_LogradourosOficializadoseouCepeados_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Impact\', sans-serif";
    var labelFill = "#fff701";
    var bufferColor = "#000000";
    var bufferWidth = 0.6;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("logradour_") !== null) {
        labelText = String(feature.get("logradour_"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.611764705882353)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.787999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
