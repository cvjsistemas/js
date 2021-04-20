$(document).ready(function(){

var valor = $('a').attr("href");
console.log(`El link es ${valor}`);

setTimeout(function(){
    console.log('Despues de 2 segundos el link cambiará');
    //asignar el valor
    $('a').attr("href","http://www.google.es");
    var valornuevo = $('a').attr("href");
    console.log(`El link actual es ${valornuevo}`);

},2000);

//eliminar atributo
$('a').removeAttr("href");
console.log('atributo eliminado');

var valor2 = $('a').attr("href");
console.log(`El link actual es ${valor2}`);


//obtener contenido con HTML
var contenido = $('p').html();
console.log(contenido);

//obtener solo texto
var solotexto = $('p').text();
console.log(solotexto);

//cambiamos el texto
$('p').text('Texto cambiado desde codigo js');


//APPEND PREPEND AFTER BEFORE
//insertar
$('#contenido').append("Hola");
$('.miparrafo').prepend("Prepend antes del parrafo</br>");

//añadir
$('#parrafo2').before("<h1>Titulo desde script usando before</h1>");
$('#parrafo2').after("<strong>Otro texto desde script usando after</strong></br>");

//nuevo elemento
var texto = $("<p></p>").text("Nuevo parrafo desde script");
$('#parrafo2').after(texto);


});