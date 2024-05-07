let num = 1;
let texto = "Hola";
let bool = true;
let obj = {
    nombre: "Carpi",
    edad: 28
}

//                     0        1       2        3
// let productos = ["Sillón", "Silla", "Mesa", "Ropero"];
// let numeros = [1, 2, 3, 4, 8, 10, 5];
// let booleanos = [true, false, false, true, true, true, false];
// let mezcla = ["Silla", 3, false, 5, "Sillón"];

// let usuarios = [
//     {
//         nombre: "Carpi",
//         edad: 28
//     },
//     {
//         nombre: "Fer",
//         edad: 29
//     }
// ]

// console.log(usuarios[1].edad);


//! Recorrer un Array
//                  0        1        2        3
// let productos = ["Sillón", "Silla", "Mesa", "Ropero"];

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }


//! Métodos de arrays
// let productos = ["Sillón", "Silla", "Mesa", "Ropero"];

//! length => devolver la cantidad de elementos que haya en el Array
// console.log(productos.length)

//! push => agregar un elemento al final del Array
// productos.push("Puerta");
// console.log(productos);

//! ejemplo de por qué tiene sentido que existan los métodos de arrays :)
// let usuarios = [];
// let nombreNuevo;

// do {
//     nombreNuevo = prompt("Ingresá un nombre");
//     if (nombreNuevo.toLocaleLowerCase() !== "salir") {
//         usuarios.push(nombreNuevo);
//     }
// } while (nombreNuevo.toLowerCase() !== "salir");

// console.log(usuarios);

//! unshift => agregar un elemento al comienzo del Array
// productos.unshift("Puerta");
// console.log(productos);

//! shift => quitar el primer elemento del Array
// productos.shift();
// console.log(productos);

//! pop => quitar el último elemento del Array
// productos.pop();
// console.log(productos);

//! splice => eliminar uno o más elementos del Array, en cualquier posición
//? primer parámetro: indicamos dónde queremos arrancar
//? segundo parámetro: indicamos la cantidad a eliminar desde ese primer lugar
// productos.splice(2, 1);

//? si no le pasamos segundo parámetro, elimina TODOS desde ahí
// productos.splice(2);

//? también podemos agregar elementos
// productos.splice(1, 0, "Computadora", "Teclado");

//! join => generar un string con todos los elementos del array
//? en el parámetro podemos pasarle el separador de los elementos
// console.log(productos.join(", "))

//! concat => combinar dos Arrays en uno
// const frutas = ["Pera", "Manzana", "Naranja"];
// const verduras = ["Cebolla", "Lechuga", "Zapallo"];
// const ensalada = frutas.concat(verduras);
// console.log(combinado);

//! slice => generar una copia de una parte del array
//? primer parámetro = elemento en el cual quieremos arrancar a recortar
//? segundo paráemtro = último elemento (no incluido) que queremos recortar
// const mueblesMadera = productos.slice(1, 5);
// console.log(mueblesMadera);

// const prueba = productos.slice(1, 3).concat(productos.slice(5, 6))
// console.log(prueba);

//! indexOf => devuelve el índice del elemento del Array que coincida con el parámetro
// console.log(productos.indexOf("Ropero"));

//! includes => devuelve true o false dependiendo de si el elemento que le pasamos como parámetro existe en el Array
// console.log(productos.includes("Ropero"));

//? ejemplo
// let busqueda = prompt("Ingresá qué querés buscar en el array");

// if (productos.includes(busqueda)) {
//     console.log("Sí, existe");
// } else {
//     console.log("No existe " + busqueda + " en el Array.");
// }

//? ejemplo
// let eliminar = prompt("Ingresá qué querés buscar en el array");
// if (productos.includes(eliminar)) {
//     let indiceEliminar = productos.indexOf(eliminar);
//     productos.splice(indiceEliminar, 1);
//     console.log(productos);
// } else {
//     console.log("Ese producto no está en el Array!")
// }

//! reverse => invierte el orden de los elementos de un Array
// productos.reverse()
// console.log(productos);

//! ARRAYS DE OBJETOS

let usuarios = [
    {
        nombre: "Carpi",
        edad: 28
    },
    {
        nombre: "Fer",
        edad: 29
    },
    {
        nombre: "Vladimir",
        edad: 21
    }
]

// let nombreNuevo = prompt("Ingresá un nombre");
// let edadNuevo = ptarseIn(prompt("Ingresá una edad"));
// let usuarioNuevo = {nombre: nombreNuevo, edad: edadNuevo};
// usuarios.push(usuarioNuevo);
// console.log(usuarios);

// let promedio = 0;
// for (let usuario of usuarios) {
//     console.log(usuario.nombre);
//     promedio += usuario.edad;
// }
// promedio = promedio / usuarios.length;
// console.log(promedio);