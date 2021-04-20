let numero = prompt("Ingresa un numero entero");
numero= parseInt(numero);

if(numero>0){
	document.write(`El numero ${numero} es mayor que 0`);
}else if(numero<0){
	document.write(`El numero ${numero} es menor que 0`);
} else{
	document.write(`El numero ${numero} es igual a 0`);
}
