const alumno = {
	nombre:"Jose",
	nota:6
};

console.log(alumno);
alumno['nota']=5;
console.log(alumno);
//mostrar datos del json 1er forma
console.log(alumno['nombre']);
//2da forma
console.log(alumno.nota);

//estructura mas compleja

const alumnos = [
	{
		nombre:"Jose",
		nota:6

	},

	{
		nombre:"Lucia",
		nota:10

	},

	{
		nombre:"Eva",
		nota:12
	}


];
console.log(alumnos);


for (let i = 0; i <alumnos.length; i++) {
	console.log(`${alumnos[i].nombre}`);
}

let alumnonuevo ={
	nombre:"Mili",
	nota:8
}

alumnos.push(alumnonuevo);
console.log(alumnos);


alumnos.splice(1,1);
console.log(alumnos);


