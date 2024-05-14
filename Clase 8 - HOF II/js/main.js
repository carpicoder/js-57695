// console.log(Math.PI);
// console.log(Math.E);

// let maximo = Math.max(10, 15, 20, 0, 3, 82);
// console.log(maximo);
// console.log(Math.min(10, 15, 20, 0, 3, 82));

// console.log(Math.max(10, 15, 20, 0, 3, 82, Infinity));
// console.log(Math.min(10, 15, 20, 0, 3, 82, -Infinity));


// const numero1 = 1.4;
// const numero2 = 1.6;

// // Redondea hacia arriba
// console.log(Math.ceil(numero1));
// console.log(Math.ceil(numero2));

// // Redondea hacia abajo
// console.log(Math.floor(numero1));
// console.log(Math.floor(numero2));

// // Redondea hacia el entero más cercano
// console.log(Math.round(numero1));
// console.log(Math.round(numero2));

// console.log(Math.round(1.49999999999999999999));

// console.log(Math.sqrt(16)) //? Raíz cuadrada
// console.log(Math.cbrt(27)) //? Raíz cúbica

// console.log(Math.floor(Math.random() * 11) + 10);

// function obtenerRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const hoy = new Date();
const finalMundial = new Date(2022, 11, 18, 18, 30);
const fechaFutura = new Date(2026, 5, 15);

// getDay 👇
// domingo = 0
// lunes = 1
// martes = 2
// ...
// sábado = 6

// console.log(hoy.getMonth());
// console.log(hoy.getFullYear());
// console.log(hoy.getDay());

// console.log( hoy.toDateString() );
// console.log( hoy.toLocaleString() );
// console.log( hoy.toLocaleDateString() );
// console.log( hoy.toTimeString() );

const msPorDia = 86400000;

const diferenciaFechasPasadas = hoy - finalMundial;
const cuantoFaltaParaMundial = fechaFutura - hoy;

console.log(diferenciaFechasPasadas / msPorDia);
console.log(cuantoFaltaParaMundial / msPorDia);