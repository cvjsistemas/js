window.onload = iniciar;


function iniciar(){

   
    /*setTimeout(() => {
        alert('hola mundo');
    }, 2000);*/
  
    //setTimeout( mensaje, 2000);

    var timer =setInterval(() => { console.log('tiempo cumplido');}, 2000);

    setTimeout(() => {
        clearInterval(timer);
    }, 10 * 1000);

  

}

mensaje =()=>{
    alert('hola mundo');
}

/*
1era FORMA FUNCION
function mensaje(){
    alert('hola mundo');
}

2da FORMA FUNCION
var mensaje = function(){
        alert('hola mundo');
    }



*/