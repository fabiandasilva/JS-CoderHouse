/***************************
 *Simulador Tiempo de demora*
 ***************************/
alert('Simulador Tiempo de demora');
const tiempoDemora = 1.3;
let cantidadPaciente = 0;

cantidadPaciente = prompt(
	'Ingrese la cantidad de paciente, para estimar el tiempo de espera'
);
const calculoTiempoDeEspera = (cantidadPaciente) => {
	return tiempoDemora * cantidadPaciente;
};

cantidadPaciente = calculoTiempoDeEspera(cantidadPaciente);

alert(
	`El tiempo de demora es: ${cantidadPaciente}hrs \nPor favor tome asiento y aguarde a ser atendido`
);

/*************************************
 *Simulador cantidad de cuotas a pagar*
 *************************************/
alert('Simulador cuotas a pagar');

function pagosEnCotas(precio, cuotas) {
	return precio / cuotas;
}

let precio = 0;
let cuotas = 1;
let precioFinal = 0;

precio = Number(prompt('Ingrese el precio del producto.'));
cuotas = Number(prompt('En cuantas cuotas quiere pagar?'));

precioFinal = pagosEnCotas(precio, cuotas);

alert(
	`El precio final es de: $${precio} \nLas cuotas a pagar son de: ${Math.round(
		precioFinal
	)}`
);
