var mensaje = 'mensaje desde variable';

try{

	document.write(mensaje);
	console.log(mensaje);

}catch(error){
	console.log(error);
	console.log(error.message);
	console.log(error.name);
}

console.log("Esto se vera pase lo que pase");


var num1=34;
var num2=2;

try{

	if(num2 !=0){
		let resultado= num1/num2;
		console.log(resultado);
		document.write(`<br\>El resultado es ${resultado}`);

	} else {

		throw new Error(`No puedo dividir por cero`);

	}



} catch (error){
	 console.log(error);
}