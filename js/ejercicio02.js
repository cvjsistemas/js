window.onload = function(){

let numero01 = parseInt(prompt("Ingrese 1er numero"));
let numero02 = parseInt(prompt("Ingrese 2do numero"));
let operacion = parseInt(prompt("Ingresa 1-Suma, 2-Resta, 3-Multiplicacion, 4-Division"));

while(isNaN(numero01)|| isNaN(numero02)){
    alert("Debe ingresar solo numeros");
    let numero01 = parseInt(prompt("Ingrese 1er numero"));
    let numero02 = parseInt(prompt("Ingrese 2do numero"));
    let operacion = parseInt(prompt("Ingresa 1-Suma, 2-Resta, 3-Multiplicacion, 4-Division"));
}


let suma = numero01 + numero02;
let resta= numero02 - numero02;
let multi = numero01*numero02;
let divi= numero01/numero02;


switch (operacion) {
    case 1:
        console.log(`${numero01} + ${numero02} = ${suma}`);
        break;

     case 2:
        console.log(`${numero01} - ${numero02} = ${resta}`);
     break;

     case 3:
        console.log(`${numero01} * ${numero02} = ${multi}`);
     break;

     case 4:
        console.log(`${numero01} / ${numero02} = ${divi}`);
     break;

    default:
        alert("Opcion no valida, debe ingresar 1-4");
        window.location.reload();
        break;
}


}