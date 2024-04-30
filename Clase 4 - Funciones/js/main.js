

// function saludar(nombre, apellido) {
//     console.log("Hola, " + nombre + " " + apellido);
// }

// let nombreIngresado;
// do {
//     nombreIngresado = prompt("Ingresá tu nombre");
// } while (nombreIngresado === "");

// saludar(nombreIngresado);
// saludar("Fer", "Alarcon");



//! return

//? ejemplo no práctico (sin return)
// let resultado = 0;

// function sumar(num1, num2) {
//     resultado = num1 + num2;
// }

// function mostrarResultado(mensaje) {
//     console.log(mensaje);
// }

// sumar(2, 2);
// mostrarResultado(resultado);

//? ejemplo práctico (con return)
// function sumar(num1, num2) {
//     return num1 + num2;
// }

// let resultado = sumar(1, 2);
// console.log(resultado);

//! scope local

// let nombre = "Carpi";

// function saludar() {
//     let nombre = "Mailen";
//     console.log(nombre);
// }

// saludar();
// console.log(nombre);


//! funciones declaradas
// function saludar(nombre) {
//     console.log("Hola, " + nombre)
// }
// saludar("Carpi");


//! funciones anónimas
// const saludar = function(nombre) {
//     console.log("Hola, " + nombre);
// }
// saludar("Carpi");


//! funciones flecha
// const saludar = (nombre) => {
//     console.log("Hola, " + nombre);
// }
// saludar("Carpi");



//? 

// function suma(a, b) {
//     return a + b;
// }

//? si hay una sola sentencia, se pueden omitir las llaves!
//? si hay un solo parámetro, podemos omitir los paréntesis!

// const mostrarNumero = numero => console.log(numero);

// mostrarNumero(1)

//? si hay una sola sentencia, hay un return implícito
// const suma = (a, b) => a + b;

// console.log(suma(1, 2));


//? Las funciones declaradas pueden ser accedidas antes de su creación
//? Las funciones flecha solamente pueden ser accedidas después de su creación

// saludar();
// function saludar() {
//     console.log("Hola!");
// }

// const saludar = () => {
//     console.log("Hola!");
// }
// saludar();