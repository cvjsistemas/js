$(document).ready(function(){

  //console.log('Documento listo');

  var elemento = $('p').parent();
  console.log(elemento);
  elemento.css("border","5px solid red");


  var elementos =$(".parrafolista").parents();
  console.log(elementos);
  elementos.css("border","10px solid blue");

//parent parents children siblings next nextAll prevAll eq(indice)
console.log($("div").eq(2));
var div03 = $("div").eq(2);
div03.css("border","5px solid green");
//remover div03
div03.remove();

//eliminar hijos
//1era forma
/*var hijos =$('#contenido01').children();
console.log(hijos);
hijos.remove()*/

//2da forma
$('#contenido01').empty();


});