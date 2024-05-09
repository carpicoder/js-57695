// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   total += i;
// }

// console.log(total)

// function sumarRango(num1, num2) {
//   let total = 0;

//   for (let i = num1; i <= num2; i++) {

//     console.log('iniciando iteracion i: ' + i);
//     console.log('iniciando iteracion total: ' + i);

//     total += i;

//     console.log(total)
//   }

//   return total;
// }

// console.log(sumarRango(9, 10))




// function mayorQue(numero){
//   console.log(numero)

//   return (m) => m > numero;
// }

// let mayorQueDiez = mayorQue(18);

// console.log(mayorQueDiez(12))
// console.log(mayorQueDiez(5))


// function asignarOperacion(op) {
//   if (op == 'sumar') {
//     return (a, b) => a + b;
//   } else if (op == 'restar') {
//     return (a, b) => a - b;
//   } else if (op == 'multiplicar') {
//     return (a, b) => a * b;
//   } else {
//     console.log('rey hace las cosas bien y elegi una operacion.')
//   }
// }

// function sumando(a, b) {
//   return a + b
// }

// let sumar = asignarOperacion('sumar');
// let restar = asignarOperacion('restar');
// let multiplicar = asignarOperacion('multiplicar');

// console.log('sumar: ' + sumar(1, 2));
// console.log('restar: ' + restar(1, 2));
// console.log('multiplicar: ' + multiplicar(1, 2));


// const viajes = [
//   { id: 'asda2321-asdas123', nombre: 'Buenos Aires', precio: 1000 },
//   { id: 'asdk2341-asd123s', nombre: 'Machu Picchu', precio: 1500 },
//   { id: 'adsfj3214-23asdv', nombre: 'París', precio: 2000 },
//   { id: 'asdk2332-23hsdf', nombre: 'Nueva York', precio: 1800 },
//   { id: 'weqr2123-2asdsvd', nombre: 'Roma', precio: 2200 },
//   { id: 'iopm2389-23kjdsf', nombre: 'Tokio', precio: 2300 },
//   { id: 'xcvb3290-123hjsd', nombre: 'Sydney', precio: 2100 },
//   { id: 'lkjh3213-23asdv', nombre: 'Londres', precio: 1900 },
//   { id: 'mnvb0987-23njsdf', nombre: 'Cairo', precio: 1000 },
//   { id: 'zxcv5643-23lksdf', nombre: 'Los Ángeles', precio: 1700 }
// ];


//foreach

// viajes.forEach((viaje) => {
//   console.log(viaje.nombre , viaje.precio, viaje.id)
// });


//metodo find

// const busqueda = viajes.find((viaje) => viaje.precio === 1000);

// console.log(busqueda)

//metodo filter 

// const filtrar = viajes.filter(viaje => viaje.precio == 1000);

// console.log(filtrar)

//metodo some

// const existe = viajes.some(viaje => viaje.precio === 1000);

// console.log(existe)


//metodo map

// const newArray = viajes.map((viaje) => {
//   return viaje.precio * 2
// }) 

// console.log(newArray)


//metodo reduce

// const total = viajes.reduce((total, viaje) => total + viaje.precio, 0);

// console.log('Precio total: $', total)


// //metodo sort
// const ordenar_decreciente = viajes.sort((a, b) => b.precio - a.precio);

// console.log('decreciente:', viajes)

// const ordenar_ascendente = viajes.sort((a, b) => a.precio - b.precio);

// console.log('ascendente:', viajes)