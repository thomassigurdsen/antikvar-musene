function xhr() {
	xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://www.unimus.no/artefacts/khm/51981/', false);
	xhr.addEventListener('load', function() {
		console.log(xhr.responseText);
		return xhr.responseText;
	});
	xhr.send();
}

function run() {
	xhr();
}
