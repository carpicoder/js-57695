let botonAlerta = document.querySelector("#alerta");
let titulo = document.querySelector("#titulo");

//! FORMAS DE DECLARAR EVENTOS

// botonAlerta.addEventListener("click", mostrarAlerta);

// let contadorDeClicks = 0;
// function mostrarAlerta() {
//     contadorDeClicks++;
//     console.log(contadorDeClicks);
// }

// botonAlerta.addEventListener("click", () => {
//     alert("Hola, mundo!");
// })

// botonAlerta.addEventListener("click", () => {
//     funcion1();
//     funcion2();
// })

// botonAlerta.onclick = () => { 
//     console.log("primer onclick") 
// }

// botonAlerta.onclick = () => { 
//     console.log("segundo onclick") 
// }


//! EVENTOS DEL MOUSE

// botonAlerta.addEventListener("click", () => {
//     alert("Hola, mundo!");
// })

// botonAlerta.addEventListener("mousedown", () => {
//     console.log("mouse down");
// })

// botonAlerta.addEventListener("mouseup", () => {
//     console.log("mouseup");
// })

// botonAlerta.addEventListener("mouseover", () => {
//     console.log("over");
// })

// botonAlerta.addEventListener("mouseout", () => {
//     console.log("out");
// })

// document.body.addEventListener("mousemove", (e) => {
//     console.log(e.pageX, e.pageY)
// })

// let btnColorMode = document.querySelector("#color-mode");

// btnColorMode.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     if (document.body.classList.contains("dark-mode")) {
//         btnColorMode.innerText = "☀️"
//     } else {
//         btnColorMode.innerText = "🌙"
//     }
// })

//! EVENTOS DEL TECLADO

let alertaInput = document.querySelector("#alerta-input");
let alertaSubmit = document.querySelector("#alerta-submit");
let alertaForm = document.querySelector("#alerta-form");
let alertaMostrar = document.querySelector("#alerta-mostrar");

// alertaInput.addEventListener("keydown", (e) => {
//     console.log(e);
// })

// alertaInput.addEventListener("keyup", () => {
//     console.log("tecla soltada");
// })

// alertaInput.addEventListener("change", () => {
//     console.log(alertaInput.value)
// })

// alertaInput.addEventListener("input", (e) => {
//     console.log(e.target.value)
// })

// alertaMostrar.addEventListener("click", () => {
//     if (alertaInput.type === "text") {
//         alertaInput.type = "password";
//     } else {
//         alertaInput.type = "text";
//     }
// })

// alertaForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(alertaInput.value)
// })


// let abajoInput = document.querySelector("#abajo-input");
// let abajoTexto = document.querySelector("#abajo");

// abajoInput.addEventListener("input", (e) => {
//     abajoTexto.innerText = e.target.value;
// })


let agregarLista = document.querySelector("#agregar");
let agregarForm = document.querySelector("#agregar-form");
let agregarInput = document.querySelector("#agregar-input");
let agregarSubmit = document.querySelector("#agregar-submit");

agregarForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${agregarInput.value}</span>
    `;

    let button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", () => {
        li.remove();
    })
    li.append(button);
    agregarLista.append(li);

    agregarForm.reset();
    agregarInput.focus();
})