import { Viaje } from "./viajes.js";
import { agregarCompra, eliminarCompra, mostrarLista } from "./listacompra.js";

const Viaje1 = new Viaje("Paris", "2024-06-15", "Avión");
const Viaje2 = new Viaje("Londres", "2024-07-01", "Tren");

Viaje1.calcularCosto(Viaje1.destino, Viaje1.transporte);
Viaje2.calcularCosto(Viaje2.destino, Viaje2.transporte);

Viaje1.MostrarItinerario();
Viaje2.MostrarItinerario();

agregarCompra("leche");
agregarCompra("pan");
agregarCompra("huevos");
mostrarLista();

eliminarCompra("pan");
mostrarLista();