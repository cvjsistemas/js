window.onload = iniciar;

var tareas =[];

 function iniciar(){
     var btnagregar = document.getElementById("btnagregar");
     btnagregar.addEventListener("click",calcular);
 }

 function calcular(){
  
    var tarea = document.getElementById("tarea").value;
    tareas.push(tarea);
    mostrar();
 }

 function mostrar(){
     var listado = document.getElementById("listado");
     var html="";

    for(var tarea of tareas){
        html=html + tarea + "<br>";
    }
     listado.innerHTML=html;
     
 }















    //var nombres =['Jose','Luis','Fernando','Guisela'];
    //console.log(nombres);
    //var elemento=[];
    

//1ERA FORMA
  /*  for (let index = 0; index < nombres.length; index++) {
      // elemento[index]= nombres[index];
      console.log(nombres[index]);
        
    }*/

   //2DA FORMA 
    //for(var nombre of nombres){
      //  console.log(nombre);
   // }
    //console.log(elemento);}
    //}

