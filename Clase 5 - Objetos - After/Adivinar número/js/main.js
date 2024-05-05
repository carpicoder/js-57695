function jugarAdivinaNumero() {
    
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    let intentos = 0;
    let adivinado = false;

    while (adivinado === false) {
        const intento = parseInt(prompt("Intentá adivinar el número entre 1 y 100"));
        intentos++;

        if (intento === numeroAleatorio) {
            alert("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
            adivinado = true;
            jugarAdivinaNumero();
        } else if (intento < numeroAleatorio) {
            alert("El número es más alto. Intentá nuevamente.");
        } else {
            alert("El número es más bajo. Intentá nuevamente.");
        }
    }

}

jugarAdivinaNumero();