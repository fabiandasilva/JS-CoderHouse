/* Clase 1 */
//let numberOne = prompt('Ingrese el primer numero');
//let numberTwo = prompt('Ingrese el segundo numero');
//let suma = parseInt(numberOne) + parseInt(numberTwo);
//alert(suma);

/* Clase 2 */
//let nombre = prompt("ingrese su nombre").toLowerCase();
//
//if(nombre === "andrés"){
//  alert("Hola Felipe");
//}else{
//  alert("quien eres?");
//}
//
//alert("terminamos");
/* NaN = no es un numero */
//parseInt = numero entero
//parseFloat = numero con coma

/* ejercicio en clase 1 */
//let number = prompt('Ingrese un número mayor a 1000');
//
//if (number > 1000) {
//	alert('Ingresaste correctamente');
//} else {
//	alert('Por favor ingresa un número dentro del rango');
//}

/* ejercicio en clase 2 */
//let text = prompt('Adivina la palabra correcta');
//
//if (text === 'Hola' || text === 'HOLA') {
//	alert('Felicitaciones! ingresaste la palabra correcta');
//} else {
//	alert('Segui intentando');
//}
/****************
 *   *Clase 3*
 ***************/
//!Utilizamos retunr para guardar el resultado de una variable
//!Pero siempre una function retorna algo

/* function sakuda() {
	console.log('hola');
	console.log('chau');
	return;
}
sakuda(); */

//const suma = (a, b) => a + b;
//const resta = (a, b) => a - b;
//const iva = (x) => x * 0.21;
//let precioProducto = 500;
//let descuento = 50;
//let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
//console.log(nuevoPrecio);
/****************
 *   *Clase 4*
 ***************/

//!Para poder acceder a un objeto se puede hacer asi => persona.nombre o persona["nombre"]
//!const producto1 = new Producto (...)=> asi se asigna valor a un constructor
//class Product {
//	constructor(data) {
//		this.name = data.name;
//		this.category = data.category;
//		this.size = data.size;
//		this.price = data.price;
//		this.color = data.color;
//		this.quantity = data.quantity;
//	}
//	sold() {
//		this.quantity === 0
//			? console.log('No hay stock')
//			: (this.quantity = this.quantity - 1);
//	}
//}
//
//const productOne = new Product({
//	name: 'Nike Epic React Flyknit 2',
//	category: 'Running',
//	size: '42',
//	price: 40000,
//	color: 'Black',
//	quantity: 0,
//});
//
//productOne.sold();
//console.log(productOne);

//?Para recorrer un objeto => for( const key in productOne){console.log(key)}

 