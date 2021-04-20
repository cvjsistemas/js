window.onload = function(){

    let numero01 = parseInt(prompt("Ingresa un numero"));
    console.log(numero01);

    if(isNaN(numero01)==false){

        if (numero01 > 0) {
            console.log(`El ${numero01} es positivo`);
        } else if(numero01<0) {
            console.log(`El ${numero01} es negativo`);
        } else{
            console.log(`El ${numero01} es igual a 0`);
        }

    } else {

        console.log(isNaN(numero01));
        alert("Debe ingresar solo numeros");
        window.location.reload();

    }


      
}