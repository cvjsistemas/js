window.onload= function() {
	//ventana del navegador
	console.log('Alto ventana ' + window.innerHeight);
	console.log('Ancho ventana  ' + window.innerWidth);

	//pantalla
	console.log('Alto pantalla ' + screen.height);
	console.log('Ancho pantalla ' + screen.width);

	//locacion
	console.log(window.location);

	//rederigir
	function irweb(url){
		window.location.href = url;
	}

	//irweb('https://www.google.com.pe');


	function abrirventana(url){
		window.open(url,"","width=400,height=250");
	}


	abrirventana('https://www.google.com.pe');
}