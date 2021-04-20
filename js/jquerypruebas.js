//console.log('prueba de jquery');
$(document).ready(function(){
 console.log('documento listo');

 //$('#contenido').html('contenido cambiado con jquery');
 $("h1").hide();
 $(".miparrafo").hide();
 $("#parrafo2").hide();

 console.log("Esperamos unos segundos...");
 let tiempo = setTimeout('temporizador()',3000);

 console.log("Ya ha pasado el tiempo");


});


function temporizador(){
    $('#contenido').show();
    $('h1').show();
    $('h1').html('titulo cambiado desde jquery');
    $('.miparrafo').show();
    $('#parrafo2').show();
}