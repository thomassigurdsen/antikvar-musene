function xhr() {
	var xhrob = new XMLHttpRequest();
	xhrob.open('GET', "http://www.unimus.no/artefacts/khm/52981/", true);
	xhrob.onreadystatechange = function (event) {
		var xhttpr = event.target;
		if (xhttpr.readyState === 4 && xhttpr.status === 200) {
			document.getElementById("jsonpar").innerHTML = xhttpr.responseText;
		}
	};
	xhrob.send();
}

function run() {
	xhr();
}
