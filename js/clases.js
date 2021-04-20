class Coche{


	//constructor
	constructor(marca,motor,color){
		this.marca =marca;
		this.motor= motor;
		this._color=color;
		this._velocidad=0;
	};


	//cambiar valor o muestra atributos con estos metodos

	get velocidad(){
		return this._velocidad;
	}


	set cambiacolor(color){
		this._color=color;
	}

	get dameDatos(){
		return `El coche ${this.marca} es de color ${this._color}`;
	}



	//metodos sin colocar function
	arrancar(){
		console.log("Arrancado");
	}

	parar(){
		console.log("Detenido");
	}


	acelerar(){
		this._velocidad = this.velocidad +10;
		console.log(`Velocidad actual = ${this._velocidad}`);
	}

	frenar(){
		if(this._velocidad>0){
			this._velocidad= this._velocidad - 10;
			console.log(`Velocidad actual = ${this._velocidad}`);
		} else {
			this._velocidad=0;
			console.log(`Velocidad actual = ${this._velocidad}`);
			
			

		}
	}

}

const micoche = new Coche('seat','gasolina','rojo');
console.log(micoche.dameDatos);
micoche.arrancar();
micoche.acelerar();
micoche.acelerar();
console.log(`La velocidad actual es ${micoche.velocidad}`);
micoche.frenar();
console.log(`La velocidad actual es ${micoche.velocidad}`);
micoche.cambiacolor = 'amarillo';
console.log(micoche.dameDatos);
micoche.frenar();
console.log(`La velocidad actual es ${micoche.velocidad}`);
micoche.frenar();
micoche.parar();