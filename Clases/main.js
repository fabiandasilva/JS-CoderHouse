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

/****************
 *   *Clase 5*
 ***************/

/* const array1 = [];
const numeros = [2, 3, 1, 5, 6, 7, 56, 7];
const nombres = ["andres", "camila", "mariano", "andrea"];
const valores = [true, false, false, true];
const varios = [1, true, "casa"]; */

/* console.log(nombres[3]);
console.log(numeros[3] + numeros[0]); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];

for(let index = 0; index < nombres.length; index++){
  alert(nombres[index]);
} */

/* const nombres = ["andres", "camila"];
nombres.push("mariano"); //agrega elementos al final del arreglo
nombres.unshift("lucas"); //agrega elementos al principio del arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.pop(); //para sacar elementos del final
nombres.shift(); //para sacar elementos del principio
console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.splice(2, 2); // para eleminar elemntos del arreglo (desde donde, cuantos elementos)

console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
console.log(nombres.join("++++++")); une en un unico string los elementos del arreglo separados por lo indicado
 */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
const perritos = ["max", "firu", "zeus"];
const varios = perritos.concat(nombres); //concatena dos arreglos
console.log(varios); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
const copia = nombres.slice(1, 4); //crea una copia de un fragmento del arreglo
console.log(copia); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
let nombre = prompt("Ingrese el nombre a encontrar su posicion");
alert(nombres.indexOf(nombre)); //busca la posicion de un elemento dentro de una arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
let nombre = prompt("Ingrese el nombre a encontrar su posicion");
alert(nombres.includes(nombre)); // valida si un elemento existe o no dentro del arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.reverse();

console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.reverse();
console.log(nombres);
console.log(nombres[2]); */

/* const carrito = [];
carrito.push("televisor");

console.log(carrito); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];

const eliminarPersona = (nombre) => {
  let posicion = nombres.indexOf(nombre);

  if(posicion != -1){
    nombres.splice(posicion, 1);
  }

  console.log(nombres);
}

eliminarPersona("mariano"); */

//ARRAYS DE OBJETOS
/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 700 },
  { id: 3, nombre: "pantalon", precio: 1250 },
  { id: 4, nombre: "zapato", precio: 2000 },
];

for(const item of productos){
  console.log(item.nombre);
  console.log(item.precio);
} */

/* for (let index = 0; index < productos.length; index++) {
  const element = productos[index];
  console.log(element);
} */
/* class Producto{
  constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let producto1 = new Producto(1, "camisa", 1000);
const productos = [
  new Producto(2, "pantalon", 1500),
  new Producto(3, "zapato", 700),
];
productos.push(producto1);
console.log(productos); */

/* class Persona{
  constructor(nombre){
    this.nombre = nombre;
  }

  hablar(){
    console.log("hola soy " + this.nombre);
  }
}

let persona = {
  nombre: "andres",
}
console.log(persona);

let persona1 = new Persona("andres")
console.log(persona1); */

//const productos = [
//	{id: 1, nombre: 'pantalon', precio: 1000},
//	{id: 2, nombre: 'camisa', precio: 700},
//	{id: 3, nombre: 'zapato', precio: 1300},
//	{id: 4, nombre: 'gorra', precio: 2000},
//];
////para recorrer
////let precio = productos.map((item) => item.precio);
////console.log(precio);
//
////let nombre = prompt('Ingrese una palabra a buscar');
////let producto = productos.find((item) => item.nombre === nombre);
//
////let mensaje = `El producto ${nombre} tiene un precio de ${producto.precio}`;
////alert(mensaje);
//
////Foreach es para recorrer un arreglo
//let precio = parseInt(prompt('Ingrese el rango de precio que desea buscar'));
//let resultado = productos.filter((item) => item.precio > precio);
//
//resultado.forEach((item) =>
//	alert(`Producto: ${item.nombre}\nPrecio: $${item.precio}`)
//);
