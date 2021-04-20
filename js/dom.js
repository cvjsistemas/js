window.onload = function(){

	// por nombre de clase
	var parrafos = document.getElementsByClassName('parrafo');
	console.log(parrafos);
	parrafos[2].style.backgroundColor='yellow';

	// por identificador
	var boton= document.getElementById('boton');

	var titulo= document.getElementById('titulo');


	boton.addEventListener('click',function(){
		console.log('Has pulsado el boton');
		titulo.innerHTML = 'Texto desde script';
	});

	//por etiqueta
	var items = document.getElementsByTagName('li');
	console.log(items);
	items[1].innerHTML = 'Item 2 desde codigo';


	var elementos = Array.from(items);
	console.log(elementos);

	elementos.forEach(function(elemento){
		console.log(elemento);
	})




}