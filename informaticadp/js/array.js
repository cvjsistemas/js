window.onload = iniciar;




function iniciar(){
    let arreglos = [10,20,30,40,50];

    let dias = [
        {"nro":1,"dia":"LUNES"},
        {"nro":2,"dia":"MARTES"},
        {"nro":3,"dia":"MIERCOLES"},
        {"nro":4,"dia":"JUEVES"},
        {"nro":5,"dia":"VIERNES"}

    ];
    //console.log(arreglos);

    /************1ERA FORMA********* */
    /*for (let index = 0; index < arreglos.length; index++) {
        console.log(arreglos[index]);
    }*/

    /*************2DA FORMA************ */
   /* arreglos.forEach(elemento =>{
        console.log(elemento);
    })*/

    arreglos.forEach( function(arreglos,index){
        console.log(`${index} => ${arreglos}`);
    });

        
    /***************3ERA FORMA********** */
    dias.map(function(dias){
        console.log(dias.nro + "=>" + dias.dia);
    });
        
}