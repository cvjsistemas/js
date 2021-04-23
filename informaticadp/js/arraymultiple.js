window.onload = function(){


let subgenero =["Terror", "Suspenso","Thriller"];

let genero=[subgenero,"Accion","FX"];

var peli1=["Viernes 13",genero[0][0],1980];
var peli2=["Rambo",genero[1],1982];
var peli3=["Avatar",genero[2],2009];

var listadopeliculas = [peli1,peli2,peli3];

/**1ERA FORMA */
/*for (let index = 0; index < listadopeliculas.length; index++) {
    console.log(listadopeliculas[index]);
    
}*/


/***2DA FORMA***** */
/*listadopeliculas.forEach(elemento=>{
    console.log(elemento);
    
});*/


listadopeliculas.map(function(listadopeliculas){
    console.log(listadopeliculas);
});


}






