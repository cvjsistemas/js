window.onload = function(){

let numero01 = parseInt(prompt("Ingresa el 1er numero"));
let numero02 = parseInt(prompt("Ingresa el 2do numero"));
var suma=0;

for (numero01; numero01 <=numero02; numero01++) {
    suma=suma + numero01;
    
}
console.log(`La sumatoria entre los numeros ${numero01} y ${numero02} = ${suma}`);

}