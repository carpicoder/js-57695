function calcular(valor1, valor2, operacionMatematica) {
    switch (operacionMatematica) {
        case "+":
            return valor1 + valor2;
        case "-":
            return valor1 - valor2;
        case "*":
            return valor1 * valor2;
        case "/":
            if (valor2 === 0) {
                return "No se puede dividir por cero"
            } else {
                return (valor1 / valor2).toFixed(2);
            }
        default:
            return "Opción inválida";
    }
}

let num1 = parseInt(prompt("Ingresá el primer número"));
let operacion = prompt("Seleccioná una operación: \n+ Suma\n- Resta\n* Multiplicación\n/ División");
let num2 = parseInt(prompt("Ingresá el segundo número"));

let resultado = calcular(num1, num2, operacion);
alert(num1 + " " + operacion + " " + num2 + " = " + resultado);
