$(document).ready(function(){


console.log("documento listo");

$('#btnañadir').click(function(){

    //$("input:text:visible:first").focus();
    var valor =$('input').val();

    
    if (valor!=="") {
        //$('#lista').append(`<li>${valor}</li>`);
        //$('input').val("");
        var elemento =$("<li></li>").text(valor);
        $(elemento).append("<button class='borrar'>X</button>");
        $('#lista').append(elemento);
        $('input').val("")
        autofocus();

        $(".borrar").on('click',function(){
            $(this).parent().remove();
            alert("Elemento borrado!!!");
        })
    } else{
        alert("Debe ingresar un valor");
        autofocus();
    }


});

});

function autofocus(){
      
    $("input:text:visible:first").focus();
}