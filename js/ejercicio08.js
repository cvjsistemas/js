window.onload = function(){

var mayor=0;
var numeros=[];
var menor=99999999999999;

    for (let index = 0; index < 6; index++) {
        numeros[index]=parseInt(prompt("Ingrese un numero"));
        
    }

    console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>mayor){
            mayor=numeros[i];
        }

        if (numeros[i]<menor) {
            menor=numeros[i];
        }
        
    }
    console.log(`El numero mayor es ${mayor}`);
    console.log(`El numero menor es ${menor}`);
}