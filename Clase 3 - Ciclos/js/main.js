/* 
 1. Inicializador
 2. Evalúa la condición
 3. Evaluar y ejecutar el código
 4. Evaluar el incrementador
 5. Vuelve a arrancar desde el punto 2
*/

/*
    ? CADA UNO DE ESTOS PARES DE LÍNEAS SON EXACTAMENTE IGUALES

    x = x + 1;
    x++;

    x = x - 1;
    x--;

    x = x + 4;
    x += 4;

    x = x - 4;
    x -= 4;

 */

// let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));
//! for
// for (let x = 1; x <= cantidadAlumnos; x++) {
//     let alumno = prompt("Ingrese el nombre del alumno");

//     if (alumno === "salir") {
//         continue;
//     }

//     console.log(x + ": " + alumno);
// }


//! while
// let x = 1;
// while (x <= cantidadAlumnos) {
//     let alumno = prompt("Ingrese el nombre del alumno");
//     console.log(x + ": " + alumno);
//     x++;
// }


//! while ejemplo
// let dato = prompt("Ingresar un alumno");
// while (dato != "salir") {
//     console.log(dato);
//     dato = prompt("Ingresar un nuevo alumno. Para salir, escribir 'salir'.");
// }

//! do...while

// let alumno;
// do {
//     alumno = prompt("Ingresar un alumno");
//     if (alumno != "salir") {
//         console.log(alumno);
//     }
// } while (alumno != "salir");


//! switch

// let mascota = prompt("Ingrese una mascota");

// switch(mascota) {
//     case "gato":
//         console.log("😺");
//         break;
//     case "rata":
//     case "laucha":
//     case "hamster":
//         console.log("🐀");
//         break;
//     case "elefante":
//         console.log("🐘");
//         break;
//     case "perro":
//         console.log("🐶");
//         break;
//     default:
//         console.log(mascota + " no es una mascota disponible.");
//         break;
// }

// if (mascota === "gato") {
//     console.log("😺");
// } else if (mascota === "rata") {
//     console.log("🐀");
// } else if (mascota === "elefante") {
//     console.log("🐘");
// } else if (mascota === "perro") {
//     console.log("🐶")
// } else {
//     console.log("Mascota no encontrada.");
// }


//! VALIDACIÓN

// let alumno;
// do {
//     alumno = prompt("Ingresar un alumno");
//     if (alumno.toLowerCase() != "salir") {
//         console.log(alumno);
//     }
// } while (alumno.toLowerCase() != "salir");

// let telefono;
// do {
//     telefono = parseInt(prompt("Ingresá un teléfono"));
//     if (isNaN(telefono)) {
//         alert("No ingresaste un número, gil.")
//     }
// } while ( isNaN(telefono) );

// let nombre;
// do {
//     nombre = prompt("Ingrese su nombre");
// } while (nombre.length < 3 || nombre.length > 10);


//! EJEMPLO JESÚS

// const claveGuardada = "123";
// let acceso = false;

// let intento;

// for (let numeroIntentos = 1; acceso === false && numeroIntentos <= 3; numeroIntentos++) {
//     intento = prompt("Ingrese la clave");

//     if (intento === claveGuardada) {
//         acceso = true;
//         alert("Felicitaciones, ingresaste!");
//         break;
//     }

//     if (numeroIntentos === 3) {
//         alert("Intentá de nuevo en 10 minutos.");
//         break;
//     }
// }