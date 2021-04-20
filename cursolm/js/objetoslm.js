window.onload = iniciar;

var personas =[];
/*var persona ={
    
    "nombre":"Lucas",
    "apellido": "Moyano",
    "telefono":"123456",
    "email":"lucasmoy@gmail.com",
    "direccion":"Avenida siempre viva 123",
    "empleo": {
        "nombre":"Programador",
        "localidad":"España"
    }
}*/

 /*console.log(persona);
 persona.telefono = '876352';
 console.log(persona);
 console.log(persona.empleo.nombre);*/


function iniciar(){
 var btnagregar = document.getElementById("btnagregar");
 btnagregar.addEventListener("click", calcular)
}

function calcular(){
    //alert("click");
  
    var txtnombre = document.getElementById("txtnombre").value;
    var txtapellido = document.getElementById("txtapellido").value;
    var txtfono=document.getElementById("txtfono").value;
    var txtemail=document.getElementById("txtemail").value;
  


var persona ={
    "nombre": txtnombre,
    "apellido":txtapellido,
    "telefono":txtfono,
    "email":txtemail
}

    personas.push(persona);

    console.log(personas);


    mostrar();

}



function mostrar(){

    var listado=document.getElementById("listado");
    
    var html="";
    html+="<ul>";

    for(var persona of personas){
        html+= `<li>Nombre:${persona.nombre}</li>`;
        html+= `<li>Apellido:${persona.apellido}</li>`;
        html+= `<li>Telefono:${persona.telefono}</li>`;
        html+= `<li>Email:${persona.email}</li>`;
    }

    html+="</ul>";

listado.innerHTML = html;
    

}




    //console.log(persona);