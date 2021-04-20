//funcion sin parametro y sin retorno de valor

function mostrar(){
	document.write("Hola desde la funcion<br\>");
}


for (let i = 0; i <10; i++) {
	mostrar();
}



// funcion con parametro
//let nombreusuario = prompt("Ingresa tu nombre");


function imprimir(nombre){
	document.write(`Hola tu nombres es ${nombre}`);

}


//imprimir(nombreusuario);
imprimir("Pepe<br>");



//funcion que devuelve resultado

function mayor(val1,val2){
	let mayor=0;

	if(val1>val2){
		mayor=val1;
	} else if(val1<val2){
		mayor=val2;
	} else{
		return document.write("Los numeros son iguales");
	}	

	return document.write(`El numero mayor es ${mayor}`);
}

mayor(8,2);