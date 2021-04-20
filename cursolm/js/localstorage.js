window.onload = iniciar;


function iniciar(){
    
    //console.log('click');
    var btnagregar = document.getElementById("btnagregar");
    btnagregar.addEventListener("click",calcular);


    var btnborrar = document.getElementById("btnborrar");
    btnborrar.addEventListener("click",borrar);

    mostrarnotas();
}

function calcular(){
    //console.log('click');
    var txtnota = document.getElementById("txtnota").value;
    
    var notas = [];
    if(localStorage.notas){
        notas =JSON.parse(localStorage.notas);
    }
    notas.push(txtnota);

    localStorage.notas=JSON.stringify(notas);// de array a texto
    //localStorage.nota = txtnota;//se guarda string,numeros, booleanos
    mostrarnotas();
    

}


function mostrarnotas(){
    var divnotas =document.getElementById("divnotas");

    var notas = [];
    if(localStorage.notas){
        notas =JSON.parse(localStorage.notas);//de texto a array
    }

    var html="";
  
    for(var nota of notas){
        html=html + nota + "<br>";
    }


    divnotas.innerHTML= html;
}

function borrar(){
    localStorage.clear();
    mostrarnotas();
    var txtnota = document.getElementById("txtnota");
    txtnota.value="";
}