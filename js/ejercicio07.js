window.onload = function(){

    let usuario = prompt("Usuario");
    let password= prompt("Contraseña");
    let intento=0



    while (usuario != "admin" & password != "1234") {

        intento++;

        if (intento > 3){
            console.log("ya tienes mas de 3 intentos...");
            return;
        } else {

            console.log("datos incorrectos");
            console.log(intento);
            
            usuario = prompt("Usuario");
            password= prompt("Contraseña");

        }
        
    }

    console.log(`Bienvenido ${usuario}`);
}