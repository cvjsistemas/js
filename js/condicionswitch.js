console.log("Indica el numero de opcion \n");
console.log("1. Cargar \n");
console.log("2. Imprimir \n");
console.log("3. Salir \n");

let opcion= prompt("Elige una opcion");
opcion= parseInt(opcion);


switch (opcion){

	case 1:
		document.write("Cargando...");
		break;
	case 2:
		document.write("Imprimiendo...");
		break;
	case 3:
		document.write("Saliendo...");
		break;	
	default:
		document.write("\n Opcion no valida, ingresa del 1 al 3");
	break;	


}