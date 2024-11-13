require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "60edba1cd0af4afa996e25248eac94ba"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});