// Registro de gastos mensuales
let gastosMensuales = [];


let categoriaGastoAgregado;
let montoGastoAgregado;

do {
    categoriaGastoAgregado = prompt("Ingresá la CATEGORÍA que querés registrar. Para salir, escribí \"salir\".");
    
    if (categoriaGastoAgregado.toLowerCase() !== "salir") {

        do {
            montoGastoAgregado = parseInt(prompt("Ingresá el MONTO de este gasto que querés registrar."));
        } while (isNaN(montoGastoAgregado) || montoGastoAgregado === "" || montoGastoAgregado === null)

        let gastoAgregado = {
            categoria: categoriaGastoAgregado,
            monto: montoGastoAgregado
        }
        gastosMensuales.push(gastoAgregado);
    }

} while (categoriaGastoAgregado.toLowerCase() !== "salir");


function calcularTotalGastos() {
    let total = gastosMensuales.reduce((acc, gasto) => acc + gasto.monto, 0);
    return total;
}


function calcularPromedioGastos() {
    let total = calcularTotalGastos();
    let promedio = total / gastosMensuales.length;
    return promedio.toFixed(2);
}

let contenedorGastosMensuales = document.querySelector("#gastos-mensuales");

gastosMensuales.forEach((gasto) => {
    let div = document.createElement("div");
    div.classList.add("gasto");
    div.innerHTML = `
        <p class='gasto-categoria'>${gasto.categoria}</p>
        <p class='gasto-monto'>$${gasto.monto}</p>
    `;
    contenedorGastosMensuales.append(div);
})

let contenedorTotalGastos = document.querySelector("#total-gastos");
let contenedorPromedioGastos = document.querySelector("#promedio-gastos");

contenedorTotalGastos.innerText = "Total de todos los gastos: $" + calcularTotalGastos();
contenedorPromedioGastos.innerText = "Promedio de todos los gastos: $" + calcularPromedioGastos();


console.log("Gastos mensuales", gastosMensuales);
console.log("Total de gastos", calcularTotalGastos());+
console.log("Promedio de gastos", calcularPromedioGastos());