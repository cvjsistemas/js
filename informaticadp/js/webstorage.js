window.onload = iniciar;


function iniciar(){

    btnguardar.addEventListener('click',()=>{
            //console.log('guardar');
            let val = document.getElementById("valorinput").value;
            localStorage.setItem("valorls",val);
            document.getElementById("valorinput").value="";
    });

    btncargar.addEventListener('click',()=>{
        let val = localStorage.getItem("valorls");
        document.getElementById("valordels").innerHTML = val;

    });

    btnborrar.addEventListener('click',()=>{
       // localStorage.clear();// elimina todos los valores del local storage
       document.getElementById("valordels").innerHTML = "";
        localStorage.removeItem("valorls");

    });

}