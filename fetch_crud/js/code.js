window.onload = iniciar;



function iniciar(){
    //console.log('probando');
    const url ='http://localhost:3000/api/articulos/';
    const contenedor = document.querySelector('tbody');
    const modalarticulo = new bootstrap.Modal(document.getElementById('modalarticulo'));
    const formarticulo = document.querySelector('form');

    let descripcion = document.getElementById("descripcion");
    let precio = document.getElementById("precio");
    let stock = document.getElementById("stock");
    let opcion ='';
    let resultados ='';

    let boton = document.getElementById("btncrear");

    boton.addEventListener('click',()=>{
        descripcion.value="";
        precio.value="";
        stock.value="";
        opcion='crear';
        modalarticulo.show();
    });

//funcion mostrar

const mostrar = (articulos)=>{
    
    articulos.forEach(articulo => {
        
        resultados +=`
            
            <tr>
                <td>${articulo.id}</td>
                <td>${articulo.descripcion}</td>
                <td>${articulo.precio}</td>
                <td>${articulo.stock}</td>
                <td class="text-center"><a class="btneditar btn btn-primary">Editar</a><a class="btnborrar btn btn-danger">Borrar</a></td> 
            </tr>            
        
        
        `;
    });
    
   contenedor.innerHTML = resultados;
}



    fetch(url)
        .then(response => response.json())
        //.then(data=>console.log(data))
        .then(data =>mostrar(data))
        .catch(error=>console.log(error))


/**SIMULAMOS EL EVENTO on de JQUERY */
const on = (element, event,selector, handler)=>{
//console.log(element); // trae el DOM
//console.log(event); // trae el evento click
//console.log(selector);
//console.log(handler);

    element.addEventListener(event,e=>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

/****BORRAR */
on(document, 'click','.btnborrar',e=>{
    //console.log('BORRADO');
    const  fila=e.target.parentNode.parentNode;
    const id=fila.firstElementChild.innerHTML;
    //console.log(id);
    alertify.confirm("This is a confirm dialog.",
    function(){
        //alertify.success('Ok');
        fetch(url+id,{
            method :"DELETE"
        })
        .then(response =>response.json())
        .then(()=>location.reload);

    },
    function(){
        alertify.error('Cancel');
    });
})


/*********EDITAR***** */

let idform=0;

on(document, 'click','.btneditar',e=>{
    //console.log('EDITADO');
    const  fila=e.target.parentNode.parentNode;
    idform =fila.children[0].innerHTML;
    //console.log(idform);
    const descripcionform = fila.children[1].innerHTML;
    const precioform = fila.children[2].innerHTML;
    const stockform = fila.children[3].innerHTML;
    descripcion.value = descripcionform;
    precio.value = precioform;
    stock.value = stockform;
    opcion='editar';
    modalarticulo.show();

})


/***EDITAR O CREAR */
formarticulo.addEventListener('submit',e=>{
    e.preventDefault();//para que no recargue la pagina

    if(opcion=='crear'){
        //console.log('CREAR');
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                descripcion:descripcion.value,
                precio:precio.value,
                stock:stock.value
            })
        })
        .then(response=> response.json())
        .then(data=> {
            const nuevoarticulo = [];
            nuevoarticulo.push(data);
           // console.log(nuevoarticulo);
            //mostrar(nuevoarticulo);
            location.reload();
        })
      




    } else {
        //console.log('EDITAR');
        fetch(url+idform,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                descripcion:descripcion.value,
                precio:precio.value,
                stock:stock.value
            })
        })
        .then(response=> response.json())
        .then(response=>location.reload())
        
    }
    modalarticulo.hide();
})














}