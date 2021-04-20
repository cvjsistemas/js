/*window.onload = function(){

    var boton = document.getElementById("btncalcular");

    boton.addEventListener("click",function(){

        var altura =document.getElementById("altura").value;
        var peso =document.getElementById("peso").value;
        var imc = peso / altura **2;
        alert(imc);
        //console.log(`Tu IMC es ${imc}`);
    });

}*/


window.onload = iniciar;

function iniciar (){
    var boton = document.getElementById("btncalcular");
    boton.addEventListener("click",calcularimc);
}

function calcularimc(){
    var altura =document.getElementById("altura").value;
    var peso =document.getElementById("peso").value;
    var imc = Math.round(peso / altura **2);
    if(isNaN(imc)){
        console.log('no es un numero');
    } else {
      //console.log(imc);
        alert(imc);
    }
 
   
}
