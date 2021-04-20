window.onload = function(){
    //IMC = peso / estatura al 2
    var estatura= prompt("Ingresa tu estatura en m");
    var peso= prompt("Ingresa tu peso en Kg");

    var imc = peso / estatura ** 2;
    console.log(`Su imc es ${imc}`);
}