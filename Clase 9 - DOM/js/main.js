//? getElement/s

// let titulo = document.getElementById("titulo");
// console.log(titulo);

// let parrafos = document.getElementsByClassName("parrafo");
// console.log(parrafos);

// let ps = document.getElementsByTagName("p");
// console.log(ps);

//? querySelector & querySelectorAll

// let titulo = document.querySelector("#titulo");
// let nombre = prompt("Ingresá tu nombre");
// titulo.innerHTML = "<strong>Hola, <br>" + nombre + "</strong>";
// // titulo.className = "rojo";
// titulo.classList.add("rojo");
// titulo.classList.remove("titulotambien");
// console.log(titulo);

//? forEach de NodeList
// let parrafos = document.querySelectorAll(".parrafo");

// parrafos.forEach(parrafo => {
//     console.log(parrafo.innerText);
// });

//? Agregar textos en un contenedor
// let contenedor = document.querySelector("#contenedor");

// let texto;
// do {
//     texto = prompt("Ingrese un texto");
//     if (texto !== "salir") {
//         let item = document.createElement("p");
//         item.classList.add("texto");
//         item.innerText = texto;
//         contenedor.append(item);
//     }
// } while (texto !== "salir");

//? Eliminar elemento del DOM
// let ejemplo = document.querySelector("#ejemplo");
// ejemplo.remove();

//? Acceder a value de un input
// let input = document.querySelector("#input");
// input.value = "Carpi";


//? Trabajar con arrays + template strings
let contenedor = document.querySelector("#contenedor");

const productos = [
    {
        titulo: "Silla",
        precio: 2000
    },
    {
        titulo: "Mesa",
        precio: 3000
    },
    {
        titulo: "Escritorio",
        precio: 4000
    }
]

productos.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <p>${producto.titulo}</p>
        <p>${producto.precio}</p>
    `;
    contenedor.append(div);
})