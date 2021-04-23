window.onload = iniciar;



function iniciar(){

    let url ="https://jsonplaceholder.typicode.com/users"; // 1 origen de datos

    fetch(url) // 2 solicitud a la url
        .then((response)=> response.json()) // 3 resuelve la promesa y la pasa al formato json
        .then((data)=>mostrarData(data)) // 4 lee el objeto data y lo muestra por consola
        .catch((error)=>console.log(error)) //5 atrapa el error y lo muestra por consola



        const mostrarData = (data) =>{
            console.log(data);
            let body ='';

            for (let i = 0; i < data.length; i++) {
               body += `<tr>
                            <td>${data[i].id}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                        </tr>`;
                
            }

            document.getElementById('data').innerHTML = body;
        }
}