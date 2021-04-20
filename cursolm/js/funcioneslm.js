window.onload = function(){


function  calcularSuperficie(ancho,alto){
var resultado= ancho*alto;
//console.log(resultado);
return resultado;
}

function calcularTerreno(){
    var ancho=prompt('Ingresa el ancho');
    var alto=prompt('Ingresa el alto');
    
    var superficie = calcularSuperficie(ancho,alto);
    console.log(`La superficie del terreno es ${superficie}`);
    //calcularSuperficie(10,15);
    

}


calcularTerreno();


}