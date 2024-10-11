var vg_1 = "PotatoChart.json";
vegaEmbed("#potato", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "CattleMap.json";
vegaEmbed("#cattle", vg_2, {"actions": false}).then(function(result){}).catch(console.error);

var vg_3 = "DairyLine.json";
vegaEmbed("#dairy", vg_3, {"actions": false}).then(function(result){}).catch(console.error);
