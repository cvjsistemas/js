window.onload = function(){

var mayor=0;
var numeros=[];
var menor=99999999999999;
var usuario="";

    /*for (let index = 0; index < 6; index++) {
        numeros[index]=parseInt(prompt("Ingrese un numero"));
        
    }*/


    do {
        usuario =prompt("Ingrese un numero o FIN para terminar");
        
        if(usuario!="fin"){
            usuario= parseInt(usuario);
            numeros.push(usuario);
        }
        
      

        
    } while (usuario!="fin");


    console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>mayor){
            mayor=numeros[i];
        }

        if (numeros[i]<menor) {
            menor=numeros[i];
        }
    }


    if(numeros.length>2){
        console.log("Hemos terminado de comprobar");
        console.log(`El numero mayor es ${mayor}`);
        console.log(`El numero menor es ${menor}`);

    } else{
        console.log("No hay numeros suficientes para comprobar mayor y menor");
    }


 
}