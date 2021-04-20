window.onload= iniciar;



function iniciar(){


setInterval(() => {
    
    var reloj = document.getElementsByClassName('reloj')[0];
    var tiempoactual = new Date();


    var hora=tiempoactual.getHours();
    if(hora<10){
        hora=`0${hora}`;
    }

    var minutos=tiempoactual.getMinutes();
    if(minutos<10){
        minutos=`0${minutos}`;
    }

    var segundos=tiempoactual.getSeconds();
    if(segundos<10){
        segundos=`0${segundos}`;
    }

    reloj.innerHTML=`${hora}:${minutos}:${segundos}`;


}, 1000);

}