function GET(ss) {
	var search = window.location.search.substring(1);
	var ssarr = search.split('&');
	for (var scnt in ssarr) {
		var tuple = ssarr[scnt].split('=');
		if (tuple[0] == ss) {
			return tuple;
		}
	}
}

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
			var xhrjson = JSON.parse(xhttpr.responseText);
			for (var arrcnt in xhrjson.features) {
				for (var attribute in xhrjson.features[arrcnt].attributes) {
					var str = attribute + ": " +
						xhrjson.features[arrcnt].attributes[attribute] +
						"</br>";
					//console.log(str);
					document.getElementById("ra").innerHTML += str;
				}
				document.getElementById("ra").innerHTML += "</br>";
			}
		}
	};
	xhrob.send();
}

function raSearch(searchString) {
	var urls = {"husmann-enkeltminner": "http://husmann.ra.no/arcgis/rest/services/Husmann/MapServer/0/query?where=Lokalitetid+%3D+%2776722%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson",
	"husmann-lokaliteter": "http://husmann.ra.no/arcgis/rest/services/Husmann/MapServer/1/query?where=Lokalitetid+%3D+%2776722%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returngeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson",
	"husmann-sikringssone": "http://husmann.ra.no/arcgis/rest/services/Husmann/MapServer/2/query?where=Lokalitetid+%3D+%2776722%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returngeometry=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson"};
	raXHR(urls["husmann-enkeltminner"]);
}

function run() {
	//unimusXHR();
	var ss  = GET("searchstring");
	console.log(ss);
	raSearch(ss);
}
