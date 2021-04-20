window.onload= iniciar;


function iniciar(){
    //console.log("clase 1 json");
    //JSON.parse = convierte un STRING JSON a un OBJETO JS
    let cadena='{ "nombre":"Juan","edad":"31","pais":"Peru" }';
    let objetojs= JSON.parse(cadena);
    //console.log(objetojs);

    //JSON.stringify = convierte un OBJETO JS a un STRING JSON
    let stringjs= JSON.stringify(objetojs);
    //console.log(stringjs);


    //convertir array JS  a string
    let arreglojs = ["lunes","martes","miercoles","jueves","viernes"];
    console.log(arreglojs);
    let stringarregglo = JSON.stringify(arreglojs);
    console.log(stringjs);
}