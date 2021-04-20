const numeros = [2,3,4,2,1,5,6,7,8,2,9,10,34,21,54];


//1ERA FORMA
/*for (let i =0; i< numeros.length; i++) {
	console.log(`${numeros[i]}`);
}*/

//2DA FORMA
/*for(numero of numeros){
	console.log(`${numero}`);
}*/


//3ERA FORMA
numeros.forEach(function(numero){
	console.log(numero*2);
})

//aplicar funcion a cada elemento del array - MAP
const duplica = numeros.map(function(numero){
	return numero*2;
});

console.log(`Usando MAP`);
console.log(duplica);

//extraer elementos que cumplen una condicion - FILTER
const mayores = numeros.filter(function(numero){
	return numero >9;
});

console.log(mayores);

//devolver el indice del valor coincidente(busqueda de valor y devuelve el indice)
const indice = numeros.findIndex(function(valor){
	return valor === 10;
});

console.log(`Coindice el 7 en el indice..`);
console.log(indice);

//devolver el elemento coincidente(busqueda valor y devuelve el valor)
const valor =numeros.find(function(numero){
	return numero ===6;

});

console.log(`Coincide en el valor 6..`);
console.log(valor);
