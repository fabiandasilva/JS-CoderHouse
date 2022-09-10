const productos = [
	{id: 1, nombre: 'pantalon', precio: 1000},
	{id: 2, nombre: 'camisa', precio: 700},
	{id: 3, nombre: 'zapato', precio: 1300},
	{id: 4, nombre: 'gorra', precio: 2000},
];
 
let precio = parseInt(prompt('Ingrese el rango de precio que desea buscar'));
let resultado = productos.filter((item) => item.precio > precio);

resultado.forEach(item=> alert(`Producto: ${item.nombre}\n Precio: $${item.precio}`))