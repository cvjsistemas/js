//funcion clasica

function suma(num1,num2){
	return num1+num2;
}

console.log(suma(25,34));

//funcion flecha

let sumaflecha = (num1,num2)=>num1+num2;
console.log(sumaflecha(24,38));

//funcion flecha con 1 parametro
const cuadrado = x => x*x;
console.log(`El cuadrado de 4 es ${cuadrado(4)}`);

//funcion con cuerpo
const tipo = numero =>{
	if (numero>0) {
		return 'Es positivo';
	} else if(numero<0){
		return 'Es negatvo';
	}	else {
		return 'Es cero';
	}
};

console.log(tipo(0));