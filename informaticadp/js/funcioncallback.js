window.onload = function(){

    
/**SIN CALLBACK*********** */

/*function primero(){

    setTimeout(function(){
        console.log("primero");
    },3000);

}

function segundo(){
console.log("segundo");

}

primero();
segundo();*/

/***********CON CALLBACK************* */

function primero(segundo){

    setTimeout(function(){
        console.log("primero");
        segundo();
    },3000);

}

function segundo(){
console.log("segundo");

}

primero(segundo);






};


