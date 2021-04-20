window.onload=cargarjson;



/* ASYNC & AWAIT */
//url='https://jsonplaceholder.typicode.com/todos/1'
async function cargarUrl(url){
    let respuesta =await fetch(url);
    return respuesta.json();

}


/* ASYNC & AWAIT 


async function cargarjson(){
    let respuesta =await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let json=await respuesta.json();
    jsoncargado(json);
}*/


async function cargarjson(){
    //console.log(json);
    let json = await cargarUrl('https://jsonplaceholder.typicode.com/todos/1');
    console.log(json);
    
    let txtnombrepost = document.getElementById("txtnombrepost");
    txtnombrepost.innerText = json.title;

    let txtcompleto = document.getElementById("txtcompleto");
    txtcompleto.innerText = json.completed ? "Completo" : "Incompleto";
 
}