// let nombre = "Carpi";
// let apellido = "Coletta";
// let edad = 28;
// let pais = "Argentina";

//! objeto literal
// let usuario1 = {
//     nombre: "Carpi",
//     edad: 28,
//     pais: "Argentina",
//     lenguajes: {
//         lenguaje1: "HTML",
//         lenguaje2: "JS",
//         lenguaje3: "PHP"
//     }
// };

//! acceder a sus propiedades
// console.log(usuario1.edad);
// console.log(usuario1["nombre"]);

//! ejemplo con prompt
// let datoAVer = prompt("Ingresá qué dato de Carpi querés ver").toLowerCase(); // string

// if (datoAVer === "lenguajes") {
//     datoAVer = prompt("Ingresá qué dato de lenguajes querés ver").toLowerCase();
//     console.log(usuario1.lenguajes[datoAVer])
// } else {
//     console.log(usuario1[datoAVer]);
// }

// console.log(usuario1.lenguajes.lenguaje2);

//! cambio o creación de propiedades

// console.log(usuario1.edad);

// usuario1.edad = 29; // Podemos cambiar sus propiedades
// console.log(usuario1.edad);

// usuario1["edad"]++; // Incluso con la notación de corchete
// console.log(usuario1.edad);

// usuario1.ciudad = "Lugo"; // Podemos agregar nuevas propiedades también
// console.log(usuario1);

//! usuario cambia de valor una propiedad

// let propiedadACambiar = prompt("Ingresá qué propiedad querés cambiar");
// let valorNuevo = prompt("Ingresá qué dato querés cambiar");

// if (!isNaN(valorNuevo)) {
//     valorNuevo = parseInt(valorNuevo);
// }

// usuario1[propiedadACambiar] = valorNuevo;
// console.log(usuario1);

//! CONSTRUCTORES

// function Producto(id, titulo, precio) {
//     this.id = id;
//     this.titulo = titulo;
//     this.precio = precio;

//     this.saludar = function() { console.log("Hola, mi título es " + this.titulo) };
//     this.calcularIva = function() { console.log("Mi precio + IVA es $" + this.precio * 1.21) };
//     this.calcularIva2 = function() { return "Mi precio + IVA es $" + this.precio * 1.21 };
// }

// const producto1 = new Producto("silla-1", "Silla", 3000);
// const producto2 = new Producto("mesa-1", "Mesa", 5000);

// console.log(producto1);

// producto1.saludar();
// producto2.saludar();

// producto1.calcularIva();
// producto2.calcularIva();

// const ivaDeProducto2 = new Producto("mesa-1", "Mesa", 5000).calcularIva2();
// console.log(ivaDeProducto2);

//! OPERADOR IN Y FOR...IN

// let usuario1 = {
//     nombre: "Carpi",
//     edad: 28,
//     pais: "Argentina",
//     lenguajes: {
//         lenguaje1: "HTML",
//         lenguaje2: "JS",
//         lenguaje3: "PHP"
//     }
// };

//? IN

// console.log("nombre" in usuario1);
// console.log("ciudad" in usuario1);

// if ("ciudad" in usuario1) {
//     console.log(usuario1.ciudad);
// }

// if ("lenguajes" in usuario1) {
//     if ("lenguaje1" in usuario1.lenguajes) {
//         console.log(usuario1.lenguajes.lenguaje1);
//     }
// }

//? FOR...IN

// for (const propiedad in usuario1) {
//     console.log(usuario1[propiedad]);
// }

//! CLASES

class Producto {
    constructor(id, titulo, precio) {
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        // this.saludar = function() { console.log(this.titulo) };
    }
    saludar() {
        console.log(this.titulo);
    }
}

const producto1 = new Producto("silla-1", "Silla", 3000);

console.log(producto1);
producto1.saludar();