window.onload=function(){

var numero =parseInt(prompt("Ingresa un numero"));
alert(`Se mostrara la tabla del ${numero}`);


for (let index = 1; index < 13; index++) {
    var resultado=numero*index;
    
    console.log(`${numero} * ${index} = ${resultado} <br>`);
}



}