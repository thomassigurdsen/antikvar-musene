function unimusXHR() {
	var xhrob = new XMLHttpRequest();
	xhrob.open('GET', "http://www.unimus.no/artefacts/khm/51981/", true);
	xhrob.onreadystatechange = function (event) {
		var xhttpr = event.target;
		if (xhttpr.readyState === 4 && xhttpr.status === 200) {
			document.getElementById("unimus").innerHTML +=
				xhttpr.responseText;
		}
	};
	xhrob.send();
}

function raXHR(uri) {
	var xhrob = new XMLHttpRequest();
	xhrob.open('GET', uri, true);
	xhrob.onreadystatechange = function (event) {
		var xhttpr = event.target;
		if (xhttpr.readyState === 4 && xhttpr.status === 200) {
			document.getElementById("ra").innerHTML +=
				"<pre><code>" +
				xhttpr.responseText +
				"</code></pre></br>";
		}
	};
	xhrob.send();
}

function run() {
	unimusXHR();
	raXHR("http://husmann.ra.no/arcgis/rest/services/Husmann/MapServer/0/query?where=Lokalitetid+%3D+%2776722%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson");
	raXHR("http://husmann.ra.no/arcgis/rest/services/Husmann/MapServer/1/query?where=Lokalitetid+%3D+%2776722%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returngeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson");
	raXHR("http://husmann.ra.no/arcgis/rest/services/Husmann/MapServer/2/query?where=Lokalitetid+%3D+%2776722%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returngeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson");
}
