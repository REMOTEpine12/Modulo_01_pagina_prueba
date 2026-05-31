export { Viaje };
// Clase Viaje para gestionar los viajes registrados
class Viaje {
    // el constructor actua como la función para registrar un destino
    constructor(destino, fecha, transporte) {
        this.destino = destino;
        this.fecha = fecha;
        this.transporte = transporte;
    }

    // funcion para calcular el costo del viajes
    calcularCosto(destino, transporte) {
        let costoBase = 0; 

        if (destino === "Paris") {
            costoBase += 500;
        } else if (destino === "Londres") {
            costoBase +=  400;
        } else if (destino === "New York") {
            costoBase += 600;
        }

        //Costo adicional por tipo de transporte
        if (transporte === "Avión") {
            costoBase += 200;
        } else if (transporte === "Tren") {
            costoBase += 100;
        }
        console.log("Costo del viaje total: $" + costoBase);
    }

    // Función para mostrar el itinerario de los viajes registrados
    MostrarItinerario(Viaje) {
        for (let i = 0; i < Viaje.length; i++) {
            console.log("Destino: " + Viaje[i].destino);
            console.log("Fecha: " + Viaje[i].fecha);
            console.log("Transporte: " + Viaje[i].transporte);
            console.log("---------------------------");
        }

    }

}
