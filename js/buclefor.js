let numero = prompt("Ingresa el numero para mostrar la tabla");
numero=parseInt(numero);
document.write(`Empezemos con la tabla del ${numero} <br\><br\>`);

for(i=1;i<=10;i++){
	let resultado = numero*i;
	if(i==3){
		continue; //omite el numero 3 cuando se coloca continue
	}
	document.write(`${numero}*${i} = ${resultado} <br\>`);
}