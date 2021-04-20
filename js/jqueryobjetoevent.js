$(document).ready(function(){

    //console.log("documento listo");
    //pageX pageY type which data target preventDeafult() stopPropagation()

    //evitar que se abra enlace
    $('a').click(function(event){
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(event.which); //which tecla pulsada
        console.log(event.target);
        event.preventDefault(); //evitar que se abra el enlace
    });
    //indicar tecla pulsada
    $('input').keydown(function(event){
        console.log("has pulsado " + event.which);
    });

$('#boton').click(function(){
    alert('Has pulsado el boton!!!');
    return;
});

    //ejecutar evento sin que lo realice el usuario
   // $('#boton').trigger('click');
});
