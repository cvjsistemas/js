//crear arrays
const numero =[];
console.log(numero);
//con valores
const colores =[`rojo`,`amarillo`,`verde`,`marron`];
//invertir orden de array
colores.reverse();
console.log(colores);
//crear con valores iguales
const seis = new Array(4).fill(6);
//añadiendo valor
seis.push(10);
seis.push(12);
//eliminar el primero
seis.shift();
console.log(seis);
//mostrar valores
for (var i =0 ; i<seis.length; i++) {
	console.log(seis[i]);
}

//muestra parte del array
console.log(seis.slice(1,3));


//recorrer arrays colores
for (color of colores) {
	console.log(color);
}

//otra forma de recorrer arrays
//muestra los indices
for(i in colores){
	document.write(i);
	document.write(": ");
	document.write(colores[i]);
	document.write("<br\>");
}


//const numeros = [2,3,4,2,1,5,6,7,8,2,9,10,34,21,54];


//1ERA FORMA
/*for (let i =0; i< numeros.length; i++) {
	console.log(`${numeros[i]}`);
}*/

//2DA FORMA
/*for(numero of numeros){
	console.log(`${numero}`);
}*/


//3ERA FORMA
/*numeros.forEach(function(numero){
	console.log(numero*2);
})
*/