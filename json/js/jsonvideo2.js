window.onload= iniciar;


function iniciar(){
    //console.log("clase 2 json");
   //STRING
   let cadena ="{'nombre':'Pedro'}";
   console.log(cadena);

   //NUMEROS
   let numeros= {"edad":35};
   console.log(numeros);

   //OBJETOS JS
    let variables = {
        "nombre":"Jorge",
        "apellido":"Perez",

    };
    console.log(variables);

    //ARRAY
    // SIMPLE
    var arrayDias= ["lunes","martes","miercoles","jueves","viernes"];
    //console.log(arrayDias);

    for (let index = 0; index < arrayDias.length; index++) {
        console.log(arrayDias[index]);
        
    }

    //OBJETOS

    const comidas = [
        {id: 1, momento: 'Desayuno'},
        {id: 2, momento: 'Almuerzo'},
        {id: 3, momento: 'Comida'},
        {id: 4, momento: 'Merienda'},
        {id: 5, momento: 'Cena'},
    ];
    console.log(comidas);
     
    const momentoComida = comidas.map(function(comida) {
        return comida.id + "|" +comida.momento;
    });
     
    console.log(momentoComida);

    //OBJETO COMPLEJO
    let objetocompleto = {
        "edad":15,
        "edades":[10,12,13],
        "educacion":{
            "primaria":"Esc belgrano",
            "secundaria":"colegio nacional",
            "universidad":["abogacia","medicina"]
        }

    }

    console.log(objetocompleto.educacion.universidad[1]);


}