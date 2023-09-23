// Calculadora de costo de combustible para viaje

function calcularCostoCombustible() {
    const viajes = [];
    let continuar = true;

    do {
        const distanciaViaje = parseInt(prompt("Ingresá la distancia de tu viaje en kilómetros (utilizá solo números)"));
        const precioCombustible = parseFloat(prompt("Ingresá el precio del litro de combustible (sin el signo $, utiliza números decimales con punto)"));
        const rendimientoAuto = parseFloat(prompt("Ingresá el rendimiento de kilómetros tu auto por litro (utilizá números decimales con punto)"));

        if (!isNaN(distanciaViaje) && !isNaN(precioCombustible) && !isNaN(rendimientoAuto) && rendimientoAuto !== 0) {
            const litrosNecesarios = distanciaViaje / rendimientoAuto;
            const costoTotal = litrosNecesarios * precioCombustible;

            viajes.push({
                distancia: distanciaViaje,
                precioLitro: precioCombustible,
                rendimientoAuto: rendimientoAuto,
                costoTotal: costoTotal
            });

            alert(`El costo total del combustible para tu viaje es de $${costoTotal.toFixed(2)}`);

            for (let i = 0; i < viajes.length; i++) {
                const viajeIndividual = viajes[i];
                console.log(`Viaje Nro. ${i + 1}:\nDistancia: ${viajeIndividual.distancia} km\nPrecio del litro: $${viajeIndividual.precioLitro.toFixed(2)}\nRendimiento de tu auto: ${viajeIndividual.rendimientoAuto.toFixed(2)} km/l\nCosto total: $${viajeIndividual.costoTotal.toFixed(2)}`);
            }


        } else {
            alert("Para ver el costo total de tu viaje debes ingresar los valores en números (sin letras, ni signos)");
        }

        continuar = confirm("¿Deseas calcular otro viaje?");
    } while (continuar);


}

calcularCostoCombustible(); 
