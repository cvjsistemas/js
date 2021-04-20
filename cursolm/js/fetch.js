window.onload=cargarjson;


    /* PROMESA
    let promesa = new Promise(resolver =>{

    setTimeout(() => {
        let json = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          }

          resolver(json);
    }, 1000);
       

    });

    promesa.then(json=>{
        jsoncargado(json);
    });*/





function cargarjson(){
   
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response =>response.json())
    .then(jsoncargado)

 
}




function jsoncargado(json){
    //console.log(json);
    let txtnombrepost = document.getElementById("txtnombrepost");
    txtnombrepost.innerText = json.title;

    let txtcompleto = document.getElementById("txtcompleto");
    txtcompleto.innerText = json.completed ? "Completo" : "Incompleto";
 
}