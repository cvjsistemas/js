$(document).ready(function(){
    //animaciones: hide show
    //desvanecimiento: fadeIn fadeOut fadeToggle
    //deslizamiento: slideUp slideDown slideToggle
    /*$('p').click(function(){
        $('div').hide();
    });*/

    $('button').click(function(){
       // $('div').toggle(2000); //muestra y oculta
       $('p').animate({
           width:'-=50px',
           height:'+=5px'
       },1500);
    });

    //una a una segun orden
    var parrafo=$("p");
    parrafo.animate({opacity:1});

    parrafo.animate({
        height:'+=100px',
        with:'+=50px',
        top:'-=30px'
    },1000);

    parrafo.animate({opacity:0.5,width:'-=50px'});

    parrafo.animate({
        height:'-=100px',
        with:'-=50px',
        top:'+=30px'
    },500);

});