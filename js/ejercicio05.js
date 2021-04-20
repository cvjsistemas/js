window.onload = function(){

    //suma de pares e impares entre rango de numeros
    let numero01 = parseInt(prompt("Ingresa el 1er numero"));
    let numero02 = parseInt(prompt("Ingresa el 2do numero"));
    let pares=0;
    let impares=0;
    
    for (numero01; numero01 <=numero02; numero01++) {
        if(numero01 % 2 ==0){
            pares=pares + numero01;
        } else {
            impares = impares +numero01;
        }
        
    }
    console.log(`La sumatoria de los pares es ${pares}`);
    console.log(`La sumatoria de los impares es ${impares}`);
    
    }