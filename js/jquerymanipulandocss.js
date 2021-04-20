$(document).ready(function(){

    console.log('Documento listo');
    //añadir clase
    $('h1').addClass('amarillo');
    //eliminar clase
    $('p').removeClass('parrafo');

//intercambio añade o borra
    $('button').click(function(){
        $('p').toggleClass('parrafo');
        console.log($('p').css('font-size'));
        console.log($('p').css('margin'));

        $('div').innerWidth(240);
        $('div').outerHeight(340);
    });

    //obtener valor propiedad
    console.log($('p').css('font-size'));
    console.log($('p').css('margin'));

    //asigna o cambiar valor css.
    //singular
    //$('p').css('background-color','pink');
    //multiple
    $('p').css({'background-color':'pink','font-size':'3em'});

    //cambiar dimensiones
    $('div').width(120);
    $('div').height(140);

    //innerWidth outerWidth innerHeight outerHeight

});