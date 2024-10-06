window.onload = init;

function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: ol.proj.transform([-78.5, -0.25], 'EPSG:4326', 'EPSG:3857'),
            zoom: 10,
            maxZoom: 17,
            minZoom: 10
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: "js-map"
    });

    const ortoigm = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: "https://www.geoportaligm.gob.ec/orto/wms?",
            params: {
                LAYERS: "quito 2019",
                FORMAT: "image/png",
                TRANSPARENT: true
            },
            attributions: '<a href="https://www.geoportaligm.gob.ec/portal/index.php/descarga-de-servicios-wms-del-igm/">Instituto Geográfico Militar</a>',
        })
    });

    map.addLayer(ortoigm);
}
