window.onload = function(){

    var numero1 = parseInt(prompt("Ingresa el 1er numero"));
    var numero2 = parseInt(prompt("Ingresa el 2do numero"));


    while(isNaN(numero1) || isNaN(numero2)){
        alert("Debe ingresar solo numeros");
        var numero1 = parseInt(prompt("Ingresa el 1er numero"));
        var numero2 = parseInt(prompt("Ingresa el 2do numero"));
    }

    if(numero1==numero2){
        alert(`son iguales`);
    } else if(numero1>numero2){
        alert(`${numero1} es mayor que ${numero2}`);
    } else {
        alert(`${numero2} es mayor que ${numero1}`);
    }

}