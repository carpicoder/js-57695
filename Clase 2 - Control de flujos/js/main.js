//*     ==              Es igual
//*     ===             Es estrictamente igual
//*     !=              Es distinto
//*     !==             Es estrictamente distinto
//*     <               Es menor
//*     >               Es mayor 
//*     <=              Es menor o igual
//*     >=              Es mayor o igual

//*     && AND
//*     || OR
//*      ! NOT

// const suma = 2 + 2;
// const comparacion = 2 > 3;

// console.log(comparacion);

//? condicional

// let edad = prompt("Ingresá tu edad");

// if (edad < 14) {
//     console.log("Sos un niño.");
// } else if (edad < 18) {
//     console.log("Sos un adolescente.");
// } else if (edad < 25) {
//     console.log("Sos un adulto joven.");
// } else if (edad < 40) {
//     console.log("Sos un adulto un poquito menos joven.");
// } else {
//     console.log("Tas viejiño.");
// }

// let numero = 10;
// let esMayorQue5 = numero > 5;

// if (esMayorQue5) {
//     console.log("Es mayor")
// }

// let numero1 = 5;
// let numero2 = 5;

// if (numero1 === numero2) {
//     console.log("Verdadero");
// } else {
//     console.log("Falso");
// }


//! OPERADORES AND OR NOT

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// if (nombre !== "" && apellido !== "") {
//     console.log(nombre + " " + apellido);
// } else {
//     console.log("Nombre o apellido inválidos.");
// }

// let nombre = prompt("Ingrese su nombre");

// if (nombre === "ana" || nombre === "ANA" || nombre === "Ana") {
//     console.log("Podés ingresar Anita.");
// } else {
//     console.log("No sos Ana. Fuera.");
// }

// ana ANA AnA Ana aNa anA ANa aNA

// .toLowerCase()
// .toUpperCase()

// console.log("ANA".toLowerCase());
// console.log("ana".toUpperCase());

// let nombre = prompt("Ingrese su nombre").toUpperCase();

// if (nombre === "ANA") {
//     console.log("Podés ingresar Anita.");
// } else {
//     console.log("No sos Ana. Fuera.");
// }

// parseInt => convierte string a número entero
// parseFloat => convierte string a número con decimales (si los tiene)

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad === 18) {
//     console.log("Bienvenido!");
// }

//! métodos de string

let saludo = "Hola, soy Carpi";

//? length => devuelve la cantidad de caracteres
// console.log(saludo.length);

//? indexOf => devuelve el índice de lo que le preguntemos dentro de la string
// console.log(saludo.indexOf("s"));

//? charAt => devuelve el caracter que se encuentre en el índice que le indiquemos
// console.log(saludo.charAt(3));

//? substring => devuelve una string más pequeña de la string principal
// console.log(saludo.substring(3, 6));

//? trim => eliminar espacios al comienzo y al final de la string
// console.log(saludo.trim());