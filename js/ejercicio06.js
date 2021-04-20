window.onload = function(){

    let usuario = prompt("Usuario");
    let password= prompt("Contraseña");

    while (usuario != "admin" & password != "1234") {
        console.log("datos incorrectos");
         usuario = prompt("Usuario");
        password= prompt("Contraseña");
    }

    console.log(`Bienvenido ${usuario}`);
}