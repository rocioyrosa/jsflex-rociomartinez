// Calculadora de costo de combustible para viaje

function calcularCostoCombustible() {
    let nuevoCalculo = true;

    do {
        let distanciaViaje = parseInt(prompt("Ingresá la distancia de tu viaje (en kilómetros, utiliza solo números)"));
        let precioCombustible = parseInt(prompt("Ingresá el precio del litro de combustible (sin el signo $, solo números)"));
        let rendimientoAuto = parseInt(prompt("Ingresá el rendimiento de tu auto por litro (en kilómetros por litro, utiliza solo números)"));

        if (!isNaN(distanciaViaje) && !isNaN(precioCombustible) && !isNaN(rendimientoAuto)) {
            const litrosNecesarios = distanciaViaje / rendimientoAuto;
            const costoTotal = litrosNecesarios * precioCombustible;

            alert(`El costo total del combustible para tu viaje es de $${costoTotal}`);
        } else {
            alert("Para ver el costo total de tu viaje debes ingresar los valores en números (sin letras, ni signos)");
        }

        nuevoCalculo = confirm("¿Deseas calcular otro viaje?");
    } while (nuevoCalculo);
}

calcularCostoCombustible();
